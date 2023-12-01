---
title: '数据转Backend'
linkTitle: '数据转Backend'
weight: 3
---

## BMF数据转Backend

### 背景
当视频处理pipeline涉及多个维度因素（例如CPU/GPU设备、YUV420/NV12或RGB24/RGB48、AVFrame或Torch结构）时，需要一个一体化的解决方案。
作为一个框架，每个模块只关注自己的目标和数据要求。但是当多个模块协同工作时，情况会变得复杂，如下图所示的超分pipeline：
<img src="/img/docs/backend.png" style="zoom:50%;" />

如图所示，不同的模块有它们各自的数据要求。解码模块以YUV420像素格式输出FFmpeg AVFrame，位于CPU内存中。Trt SR模块要求输入数据是硬件加速后的RGB24火炬，位于GPU内存中。通过Trt模块实现SR时，输出数据需要由GPU进行编码，因此HW编码模块可以获取位于GPU内存中的NV12像素格式的AVFrame并由GPU进行编码。

它往往包含以下视频数据转换能力：
- 像素格式和色彩空间
- CPU和GPU之间的设备
- 不同的媒体类型，例如avframe、cvmat和torch

目前，后端接口正在测试和demo集成当中。完全统一且易用的Python和C++接口和示例将很快发布。

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

该接口允许将源VideoFrame转换为目标V​​ideoFrame。如果源MediaDesc中的media_type与目标MediaDesc中的media_type不同，则表示该转换将涉及VideoFrame与第三方数据结构之间的转换。访问第三方数据结构需要使用VideoFrame的private_attach和private_get方法。

#### VideoFrame scale和colorspace conversion

使用`bmf_convert`进行scale和CSC。

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
以下示例展示了如何将输入视频帧内存传输到GPU内存：
```c++
    MediaDesc dp;
    dp.device(hmp::Device("gpu")); // or hmp::Device("cpu")
    auto dst_vf = bmf_convert(src_vf, MediaDesc{},  dp);
```

#### VideoFrame和第三方数据结构之间的转换

BMF支持以下第三方数据结构与VideoFrame的转换：

1. FFmpeg AVFrame
2. Opencv cv::Mat
3. libtorch at::Tensor

以FFmpeg AVFrame为例来说明转换过程。其他类型的转换可以参考`test_convert_backend.cpp`。

##### VideoFrame转ffmpeg AVFrame

1. include <bmf/sdk/av_convertor.h>，这将为AVFrame注册AVConvertor
2. dst_dp设置media_type值为MediaType::kAVFrame
3. 执行`bmf_convert`，检查返回的VideoFrame是否是有效的VideoFrame
4. 使用private_get<AVFrame>从返回的VideoFrame获取AVFrame指针

需要注意的是，从private_get获取的指针指向的结构体的生命周期由其所属的VideoFrame管理。

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

##### AVFrame转VideoFrame

1. 使用`private_attach`将AVFrame设置为VideoFrame的private_data
2. src_dp设置media_type值为MeidaType::kAVFrame
3. 使用`bmf_convert`进行转换
4. 获取返回的VideoFrame

一些示例代码片段：

```c++
    VideoFrame src_with_avf;
    src_with_avf.private_attach<AVFrame>(frame);
    MediaDesc src_dp;
    src_dp.pixel_format(hmp::PF_RGB24).media_type(MediaType::kAVFrame);
    VideoFrame vf = bmf_convert(src_with_avf, src_dp, MediaDesc{});

```


### Python接口
与C++相统一的`bmf_convert`将在以后设计和实现。

#### Scale和colorspace conversion

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

`VideoFrame.cuda()`：将内存数据移动到CUDA内存上

`VideoFrame.cpu()`：将内存数据移动到CPU内存上

示例代码：
```python
    from bmf import *
    import bmf.hml.hmp as mp
    vf = pkt.get(VideoFrame)
    if (vf.frame().device() == mp.Device('cpu')):
        vf = vf.cuda()
    #...
```
#### VideoFrame和第三方数据结构之间的转换
Python API支持以下类型的第三方数据结构：
- VideoFrame，BMF中视频帧的通用类。`VideoFrame`包含`Frame`作为成员
- numpy
- torch

`bmf.hml.hmp.Frame.numpy`将BMF Frame转换为numpy，并且Frame可以包含在VideoFrame中。

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

对于以下接口，编译时需要使用支持Torch的BMF，请参阅“安装部署”部分。

`bmf.hml.hmp.from_torch`：将torch转换为bmf Frame

`bmf.hml.hmp.torch`：将bmf Frame转换为torch

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