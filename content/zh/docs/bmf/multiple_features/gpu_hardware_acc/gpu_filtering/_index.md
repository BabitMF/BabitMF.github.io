---
title: 'GPU硬件过滤'
linkTitle: 'GPU硬件过滤'
weight: 2
---

# 在BMF中使用NVIDIA GPU加速图像过滤

除了GPU编解码示例外，还有一些示例展示了如何在`gpu_transcode`文件夹的BMF中组合FFmpeg CUDA filter，包括
- 使用scale_cuda filter进行转码
- 使用hwupload filter进行解码
- 使用scale_npp filter进行解码
- 使用yadif filter进行解码
- 使用overlay_cuda filter进行解码

## 使用FFmpeg CUDA filter进行解码

FFmpeg中有许多CUDA filter，可通过`ff_filter`在BMF中使用。在使用GPU转码时，使用CUDA filter可以消除CPU filter中存在的复制开销。

使用这些fliter非常简单。只需将filter名称和参数传递给`ff_filter`。但要注意保留数据的位置。例如，在`test_gpu_transcode_with_overlay_cuda()`中，logo是png格式，由CPU解码和处理。视频由GPU解码，因此帧在GPU中。由于我们将使用CUDA fliter和GPU编码，我们应该将logo的结果上传到GPU。这里我们使用hwupload_cuda filter。

## BMF GPU模块
由于FFmpeg只提供了少量的GPU filter，我们实现了一些FFmpeg中缺少但有用的常用GPU filter模块，即
- resize
- flip
- rotate
- crop
- blur

这些模块位于`bmf/demo/gpu_module`。用一个简单的示例代码来运行这些模块：

```Python
import bmf

def test():
    input_video_path = "./input.mp4"
    output_path = "./output.mp4"

    graph = bmf.graph()
    video = graph.decode({
        "input_path": input_video_path,
        "video_params": {
            "hwaccel": "cuda",
            # "pix_fmt": "yuv420p",
        }
    })
    (
        video['video']
            .module('scale_gpu', {"size": '1920x1080', 'algo': 'cubic'})
            .module('crop_gpu', {'x': 960, 'y': 540, 'width': 640, 'height': 480})
            .module('flip_gpu', {'direction': 'h'})
            .module('rotate_gpu', {'angle': 'pi/8'})
            .module('blur_gpu', {'op': 'gblur', 'sigma': [0.7, 0.7], 'size': [5, 5]})
            .encode(None, {
                "output_path": output_path,
                "video_params": {
                    "codec": "hevc_nvenc",
                    "pix_fmt": "cuda",
                }
            })
            .run()
    )


if __name__ == '__main__':
    test()
```

该模块可接受CPU和GPU帧。帧可以是8位或10位的rgb或yuv格式，但不支持422色度子采样。

请注意，对于`rotate_gpu`模块，建议使用rgb而不是yuv作为输入，因为模块会在旋转后将空白区域填充为0。yuv中的(0, 0, 0)在rgb中实际上是绿色的，这意味着旋转后yuv图像的背景可能是绿色的。

如果您需要更多有关这些模块选项的详细信息，请参阅[API文档](http://babitmf.github.io/docs/bmf/api/filter_module/)。