---
title: '数据转 Backend'
linkTitle: '数据转 Backend'
weight: 3
---

## BMF 数据转 Backend

### 背景
当视频处理 pipeline 涉及多个维度因素（例如 CPU/GPU 设备、YUV420/NV12 或 RGB24/RGB48、AVFrame 或 Torch 结构）时，需要一个一体化的解决方案。
作为一个框架，每个模块只关注自己的目标和数据要求。但是当多个模块协同工作时，情况会变得复杂，如下图所示的超分 pipeline：
<img src="/img/docs/backend.png" style="zoom:50%;" />

如图所示，不同的模块有它们各自的数据要求。解码模块以 YUV420 像素格式输出 FFmpeg AVFrame，位于 CPU 内存中。Trt SR 模块要求输入数据是硬件加速后的 RGB24 torch 结构，位于 GPU 内存中。通过 Trt 模块实现 SR 时，输出数据需要由 GPU 进行编码，因此 HW 编码模块可以获取位于 GPU 内存中的 NV12 像素格式的 AVFrame 并由 GPU 进行编码。

它往往包含以下视频数据转换能力：
- 像素格式和色彩空间
- CPU 和 GPU 之间的设备
- 不同的媒体类型，例如 avframe、cvmat 和 torch

目前，后端接口正在测试和 demo 集成当中。完全统一且易用的 Python 和 C++ 接口和示例将很快发布。

### C++接口

```c++
/** @addtogroup bmf_backend_convert
 * @{
 * @arg src_vf: src VideoFrame
 * @arg src_dp: src MediaDesc that describe src_vf's attributes
 * @arg dst_dp: The desired MediaDesc of the converted VideoFrame.
 * @} */
BMF_API VideoFrame bmf_convert(VideoFrame& src_vf, const MediaDesc &src_dp, const MediaDesc &dst_dp);
```

该接口允许将源 VideoFrame 转换为目标 V​​ideoFrame。如果源 MediaDesc 中的 media_type 与目标 MediaDesc 中的 media_type 不同，则表示该转换将涉及 VideoFrame 与第三方数据结构之间的转换。访问第三方数据结构需要使用 VideoFrame 的 private_attach 和 private_get 方法。

#### VideoFrame scale 和 olorspace conversion

使用 `bmf_convert` 进行 scale 和 CSC。

```c++
    MediaDesc dp;
    dp.width(1920).pixel_format(hmp::PF_YUV420P);
    auto rgbformat = hmp::PixelInfo(hmp::PF_RGB24);
    auto src_vf = VideoFrame::make(640, 320, rgbformat);
    auto dst_vf = bmf_convert(src_vf, MediaDesc{},  dp);
    EXPECT_EQ(dst_vf.width(), 1920);
    EXPECT_EQ(dst_vf.height(), 960);
    EXPECT_EQ(dst_vf.frame().format(), hmp::PF_YUV420P);

```

#### 设备内存传输
以下示例展示了如何将输入视频帧内存传输到 GPU 内存：
```c++
    MediaDesc dp;
    dp.device(hmp::Device("gpu")); // or hmp::Device("cpu")
    auto dst_vf = bmf_convert(src_vf, MediaDesc{},  dp);
```

#### VideoFrame 和第三方数据结构之间的转换

BMF 支持以下第三方数据结构与 VideoFrame 的转换：

1. FFmpeg AVFrame
2. Opencv cv::Mat
3. libtorch at::Tensor

以 FFmpeg AVFrame 为例来说明转换过程。其他类型的转换可以参考 `test_convert_backend.cpp`。

##### VideoFrame 转 ffmpeg AVFrame

1. include <bmf/sdk/av_convertor.h>，这将为 AVFrame 注册 AVConvertor
2. dst_dp 设置 media_type 值为 MediaType::kAVFrame
3. 执行 `bmf_convert`，检查返回的 VideoFrame 是否是有效的 VideoFrame
4. 使用 private_get<AVFrame> 从返回的 VideoFrame 获取 AVFrame 指针

需要注意的是，从 private_get 获取的指针指向的结构体的生命周期由其所属的 VideoFrame 管理。

一些示例代码片段：
```c++
    #include <bmf/sdk/av_convertor.h>

    MediaDesc dp;
    dp.width(1920).height(1080).pixel_format(hmp::PF_RGB24).media_type(MediaType::kAVFrame);
    auto yuvformat = hmp::PixelInfo(hmp::PF_YUV420P);
    auto src_vf = VideoFrame::make(640, 320, yuvformat);

    auto dst_vf = bmf_convert(src_vf, MediaDesc{}, dp);
    EXPECT_TRUE(static_cast<bool>(dst_vf));

    const AVFrame* frame = dst_vf.private_get<AVFrame>();
    EXPECT_EQ(frame->width, 1920);
    EXPECT_EQ(frame->height, 1080);
    EXPECT_EQ(frame->format, AV_PIX_FMT_RGB24);

```

##### AVFrame 转 VideoFrame

1. 使用 `private_attach` 将 AVFrame 设置为 VideoFrame 的 private_data
2. src_dp 设置 media_type 值为 MeidaType::kAVFrame
3. 使用 `bmf_convert` 进行转换
4. 获取返回的 VideoFrame

一些示例代码片段：

```c++
    VideoFrame src_with_avf;
    src_with_avf.private_attach<AVFrame>(frame);
    MediaDesc src_dp;
    src_dp.pixel_format(hmp::PF_RGB24).media_type(MediaType::kAVFrame);
    VideoFrame vf = bmf_convert(src_with_avf, src_dp, MediaDesc{});

```


### Python 接口
与 C++ 相统一的 `bmf_convert` 将在以后设计和实现。

#### Scale 和 colorspace conversion

`bmf.hml.hmp.img.rgb_to_yuv`

`bmf.hml.hmp.img.yuv_to_rgb`

`bmf.hml.hmp.img.yuv_to_yuv`

`bmf.hml.hmp.img.resize`

`bmf.hml.hmp.img.rotate`

示例代码：


```python
    from bmf import *
    import bmf.hml.hmp as mp

    NV12 = mp.PixelInfo(mp.PixelFormat.kPF_NV12, mp.ColorSpace.kCS_BT470BG, mp.ColorRange.kCR_MPEG)
    RGB = mp.PixelInfo(mp.PixelFormat.kPF_RGB24, mp.ColorSpace.kCS_BT709, mp.ColorRange.kCR_MPEG)
    src_vf = pkt.get(VideoFrame)
    out_frame = mp.Frame(src_vf.frame().width(), src_vf.frame().height(), NV12, device='cuda')
    mp.img.rgb_to_yuv(out_vf.frame().data(), src_vf.frame().plane(0), NV12, mp.kNHWC)
```

#### 设备内存传输
接口使用：

`VideoFrame.frame().device()`：获取设备属性

`VideoFrame.cuda()`：将内存数据移动到 CUDA 内存上

`VideoFrame.cpu()`：将内存数据移动到 CPU 内存上

示例代码：
```python
    from bmf import *
    import bmf.hml.hmp as mp
    vf = pkt.get(VideoFrame)
    if (vf.frame().device() == mp.Device('cpu')):
        vf = vf.cuda()
    #...
```
#### VideoFrame 和第三方数据结构之间的转换
Python API 支持以下类型的第三方数据结构：
- VideoFrame，BMF 中视频帧的通用类。`VideoFrame` 包含 `Frame` 作为成员
- numpy
- torch

`bmf.hml.hmp.Frame.numpy`将 BMF Frame 转换为 numpy，并且 Frame 可以包含在 VideoFrame 中。

`bmf.hml.hmp.Frame.from_numpy`

示例代码：
```python
    from bmf import *
    import numpy as np
    np1 = np.array(obj)
    rgb = mp.PixelInfo(mp.kPF_RGB24)
    frame = mp.Frame(mp.from_numpy(npa, rgb)
    vf = VideoFrame(frame)
    #...video frame process
    np0 = vf.frame().plane(0).numpy()
    np1 = vf.frame().plane(1).numpy()
    np2 = vf.frame().plane(2).numpy()
```

对于以下接口，编译时需要使用支持 Torch 的 BMF，请参阅“安装部署”部分。

`bmf.hml.hmp.from_torch`：将 torch 转换为 bmf Frame

`bmf.hml.hmp.torch`：将 bmf Frame 转换为 torch

示例代码：
```python
    from bmf import *
    import torch
    vf = pkt.get(VideoFrame)
    torch_data = vf.frame().data().torch()
    #...torch process

```

```python
    from bmf import *
    import bmf.hml.hmp as mp
    import torch
    vf = pkt.get(VideoFrame)
    rgb = mp.PixelInfo(mp.kPF_RGB24)
    torch_vf = torch.from_dlpack(vf.reformat(rgb).frame().plane(0))
    #... process of torch
    RGB = mp.PixelInfo(mp.PixelFormat.kPF_RGB24, mp.ColorSpace.kCS_BT709, mp.ColorRange.kCR_MPEG)
    frame = mp.Frame(mp.from_torch(torch_vf.contiguous()), RGB)
    bmf_vframe = VideoFrame(frame)
    #...
```