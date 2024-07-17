---
title: 'Data Convert Backend'
linkTitle: 'Data Convert Backend'
weight: 3
---

## BMF Data Convert Backend

### Background
An all-in-one solution is needed when multiple dimension factors are involved in video process pipeline such as CPU/GPU devices, YUV420/NV12 or RGB24/RGB48, and AVFrame or Torch structure.
As a framework, each module just focuses on its own target and data requirement, but it becomes complex when multiple modules work together as below supper resolution pipeline:
<img src="/img/docs/backend.png" style="zoom:50%;" />

We can see that different modules have their own data requirements. The decode module outputs FFmpeg AVFrame in YUV420 pixel format, which is located on the CPU memory. The Trt SR module requires that the input data is an RGB24 torch after hardware acceleration and is located on the GPU memory. For SR through the Trt module, the output data needs to be encoded by the GPU, so the HW encode module can get AVFrame with NV12 pixel format located on the GPU memory and encode it by the GPU.

It tends to include the capabilities of video data conversion below:
- pixel format and color space
- devices between CPU and GPU
- different media types such as avframe, cvmat and torch

Currently, the backend interface is under testing and demo integration. The fully unified and easy to use interface and examples for both C++ and Python will be released soon.

### C++ Interface

```c++
/** @addtogroup bmf_backend_convert
 * @{
 * @arg src_vf: src VideoFrame
 * @arg src_dp: src MediaDesc that describe src_vf's attributes
 * @arg dst_dp: The desired MediaDesc of the converted VideoFrame.
 * @} */
BMF_API VideoFrame bmf_convert(VideoFrame& src_vf, const MediaDesc &src_dp, const MediaDesc &dst_dp);
```

This interface allows the conversion of a source VideoFrame to a destination VideoFrame. If the media_type in the source MediaDesc is different from the media_type in the destination MediaDesc, it indicates that the conversion will involve the transformation between VideoFrame and a third-party data structure. Accessing the third-party data structure requires the use of the private_attach and private_get methods of the VideoFrame. 

#### VideoFrame scale and colorspace conversion

use `bmf_convert` do scale and csc

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

#### Device memory transfer
Samples show how to transfer the input video frame memory on GPU memory.
```c++
    MediaDesc dp;
    dp.device(hmp::Device("gpu")); // or hmp::Device("cpu")
    auto dst_vf = bmf_convert(src_vf, MediaDesc{},  dp);
```

#### Conversion between VideoFrame and third-party data structure

BMF support the following types of third-party structure conversion with VideoFrame

1. FFmpeg AVFrame
2. Opencv cv::Mat
3. libtorch at::Tensor

Here, FFmpeg AVFrame is used as an example to illustrate the conversion. Other types of conversions can be referred to in the `test_convert_backend.cpp`.

##### VideoFrame to ffmpeg AVFrame

1. include <bmf/sdk/av_convertor.h>, this will register AVConvertor for AVFrame
2. dst_dp set media_type with value MediaType::kAVFrame
3. do `bmf_convert`, check if the return VideoFrame is a valid VideoFrame
4. use `private_get<AVFrame>` to get the AVFrame pointer from the return VideoFrame.

It is important to note that the lifecycle of the structure pointed to by the pointer obtained from private_get is managed by the VideoFrame to which it belongs.

some example code snippet：

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

##### AVFrame to VideoFrame

1. use `private_attach` set AVFrame as private_data of VideoFrame
2. src_dp set media_type with value MeidaType::kAVFrame
3. use `bmf_convert` to convert
4. get the return VideoFrame

some example code snippet：

```c++
    VideoFrame src_with_avf;
    src_with_avf.private_attach<AVFrame>(frame);
    MediaDesc src_dp;
    src_dp.pixel_format(hmp::PF_RGB24).media_type(MediaType::kAVFrame);
    VideoFrame vf = bmf_convert(src_with_avf, src_dp, MediaDesc{});

```

### Python Interface

```python

## python backend api
## arg src_vf: source videoframe
## arg src_md: source videoframe mediadescription
## arg dst_md: dst videoframe mediadescription
## return  vf: convert result videoframe

vf = bmf_convert(src_vf, src_md, dst_md)
```
The `bmf_convert` interface in Python is bound to the corresponding interface in C++ using `pybind11`. The `MediaDesc` class follows the same pattern, corresponding to the `MediaDesc` class in C++. The usage of the interface is also similar.


#### VideoFrame scale, colorspace conversion, device memory transfer

use `bmf_convert` do scale, csc, and device memory transfer

```python
    H420 = mp.PixelInfo(mp.kPF_YUV420P, mp.kCS_BT709)
    vf = VideoFrame(640, 360, pix_info=H420)
    md = MediaDesc()
    md.width(1920).height(1080).pixel_format(mp.kPF_RGB24).device(
        mp.Device("cuda:0"))
    dst_vf = bmf_convert(vf, MediaDesc(), md)
    assert (dst_vf.width == 1920)
    assert (dst_vf.height == 1080)
    assert (dst_vf.frame().format() == mp.kPF_RGB24)
    assert (dst_vf.frame().device().type() == mp.kCUDA)
    assert (dst_vf.frame().device().index() == 0)

```


#### Conversion between VideoFrame and third-party data structure in python

BMF support the following types of third-party python structure conversion with VideoFrame

1. numpy.ndarray
2. torch.Tensor

Here, numpy.ndarray is used as an example to illustrate the conversion. Other types of conversions can be referred to in the `test_module_sdk.py`.

##### VideoFrame to numpy.ndarray

1. dst_dp set media_type with value MediaType::kTensor
2. do `bmf_convert`, check if the return VideoFrame is a valid VideoFrame
3. use `private_get(numpy.ndarray)` to get the numpy.ndarray from the return VideoFrame

Some detailed explanations:

We use a `MediaType` type called `MediaType.kTensor` as the destination type, which corresponds to the `hmp::Tensor` structure in C++. When we call the Python interface `bmf_convert`, the actual conversion happens in the core C++ layer of `bmf`. Similar to the C++ interface, this interface converts a `VideoFrame` into an `hmp::Tensor` and stores it in the private data of the `VideoFrame`. Then, we use the Python interface `private_get` to retrieve a `numpy.ndarray`. `private_get` is also a binding to the C++ interface, which converts the `hmp::Tensor` to a `numpy.ndarray` using `pybind11`.

some example code snippet：

```python
    H420 = mp.PixelInfo(mp.kPF_YUV420P, mp.kCS_BT709)
    vf = VideoFrame(640, 360, pix_info=H420)

    md = MediaDesc()
    md.width(1920).height(1080).pixel_format(mp.kPF_RGB24).media_type(
        MediaType.kTensor)

    dst_vf = bmf_convert(vf, MediaDesc(), md)
    assert (dst_vf.width == 1920)
    assert (dst_vf.height == 1080)
    assert (dst_vf.frame().format() == mp.kPF_RGB24)
    assert (bool(dst_vf) == True)

    np_array = dst_vf.private_get(np.ndarray)
    print(np_array.shape)
    assert (np_array.shape[0] == 1080)
    assert (np_array.shape[1] == 1920)
    assert (np_array.shape[2] == 3)

    src_vf = VideoFrame()
    src_vf.private_attach(np_array)

    src_md = MediaDesc()
    src_md.pixel_format(mp.kPF_RGB24).media_type(MediaType.kTensor)

    dst_md = MediaDesc()
    dst_md.pixel_format(mp.kPF_YUV420P).color_space(
        mp.kCS_BT709).width(320).height(180)

    new_vf = bmf_convert(src_vf, src_md, dst_md)

    assert new_vf.width == 320
    assert new_vf.height == 180
    assert new_vf.frame().format() == mp.kPF_YUV420P
```

## BMF Data Convert(old style)
### Scale and colorspace conversion

`bmf.hml.hmp.img.rgb_to_yuv`

`bmf.hml.hmp.img.yuv_to_rgb`

`bmf.hml.hmp.img.yuv_to_yuv`

`bmf.hml.hmp.img.resize`

`bmf.hml.hmp.img.rotate`

Sample code:


```python
    from bmf import *
    import bmf.hml.hmp as mp

    NV12 = mp.PixelInfo(mp.PixelFormat.kPF_NV12, mp.ColorSpace.kCS_BT470BG, mp.ColorRange.kCR_MPEG)
    RGB = mp.PixelInfo(mp.PixelFormat.kPF_RGB24, mp.ColorSpace.kCS_BT709, mp.ColorRange.kCR_MPEG)
    src_vf = pkt.get(VideoFrame)
    out_frame = mp.Frame(src_vf.frame().width(), src_vf.frame().height(), NV12, device='cuda')
    mp.img.rgb_to_yuv(out_vf.frame().data(), src_vf.frame().plane(0), NV12, mp.kNHWC)
```

### Device memory transfer
Interface used:

`VideoFrame.frame().device()` gets the Device property

`VideoFrame.cuda()` moves the memory data on cuda memory

`VideoFrame.cpu()` moves the memory data on cpu memory

Sample code:
```python
    from bmf import *
    import bmf.hml.hmp as mp
    vf = pkt.get(VideoFrame)
    if (vf.frame().device() == mp.Device('cpu')):
        vf = vf.cuda()
    #...
```
### Conversion between VideoFrame and third-party data structure
In python API, those types of third-party data type are supported:
- VideoFrame, which is the general class of video frame in BMF. And `VideoFrame` includes `Frame` as member
- numpy
- torch

`bmf.hml.hmp.Frame.numpy` converts a BMF Frame to numpy, and Frame can be included in VideoFrame

`bmf.hml.hmp.Frame.from_numpy`

Sample code
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

For bellow interface, Torch Enabled BMF is needed by compile, please reference "Install" section.

`bmf.hml.hmp.from_torch` convert a torch into bmf Frame

`bmf.hml.hmp.torch` convert bmf Frame to torch

Sample code:
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
