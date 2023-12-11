---
title: 'GPU 硬件过滤'
linkTitle: 'GPU 硬件过滤'
weight: 2
---

# 在 BMF 中使用 NVIDIA GPU 加速图像过滤

除了 GPU 编解码示例外，还有一些示例展示了如何在 `gpu_transcode` 文件夹的 BMF 中组合 FFmpeg CUDA filter，包括
- 使用 scale_cuda filter 进行转码
- 使用 hwupload filter 进行解码
- 使用 scale_npp filter 进行解码
- 使用 yadif filter 进行解码
- 使用 overlay_cuda filter 进行解码

## 使用 FFmpeg CUDA filter 进行解码

FFmpeg 中有许多 CUDA filter，可通过 `ff_filter` 在 BMF 中使用。在使用 GPU 转码时，使用 CUDA filter 可以消除 CPU filter 中存在的复制开销。

使用这些 fliter 非常简单。只需将 filter 名称和参数传递给 `ff_filter`。但要注意保留数据的位置。例如，在 `test_gpu_transcode_with_overlay_cuda()` 中，logo 是png 格式，由 CPU 解码和处理。视频由 GPU 解码，因此帧在 GPU 中。由于我们将使用 CUDA fliter 和 GPU 编码，我们应该将 logo 的结果上传到 GPU。这里我们使用 hwupload_cuda filter。

## BMF GPU 模块
由于 FFmpeg 只提供了少量的 GPU filter，我们实现了一些 FFmpeg 中缺少但有用的常用 GPU filter 模块，即
- resize
- flip
- rotate
- crop
- blur

这些模块位于 `bmf/demo/gpu_module`。用一个简单的示例代码来运行这些模块：

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

该模块可接受 CPU 和 GPU 帧。帧可以是 8 位或 10 位的 rgb 或 yuv 格式，但不支持 422 色度子采样。

请注意，对于 `rotate_gpu` 模块，建议使用 rgb 而不是 yuv 作为输入，因为模块会在旋转后将空白区域填充为 0。yuv 中的 (0, 0, 0) 在 rgb 中实际上是绿色的，这意味着旋转后 yuv 图像的背景可能是绿色的。

如果您需要更多有关这些模块选项的详细信息，请参阅 [API 文档](http://babitmf.github.io/docs/bmf/api/filter_module/)。