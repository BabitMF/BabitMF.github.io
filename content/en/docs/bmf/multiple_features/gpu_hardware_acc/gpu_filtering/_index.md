---
title: 'GPU Hardware Filtering'
linkTitle: 'GPU Hardware Filtering'
weight: 2
---

# Use NVIDIA GPU to accelerate image filtering in BMF

Besides the GPU decoding and encoding examples, there are also examples showing how to combine the FFmpeg CUDA filters in the BMF in the `gpu_transcode` folder, including
- Transcode with scale_cuda filter
- Transcode with hwupload filter
- Transcode with scale_npp filter
- Transcode with yadif filter
- Transcode with overlay_cuda filter

## Transcode with FFmpeg CUDA filters

There're many CUDA filters in the FFmepg that can be used in the BMF through `ff_filter`. Using CUDA filters eliminates the copy overhead exits in the CPU filters when we are using GPU transcoding.

Using these filters is really simple. Just pass filter'name and paramters to the `ff_filter`. But you should be careful about where the data reserves. For example, in the `test_gpu_transcode_with_overlay_cuda()`, the logo is png and is decoded and processed in the CPU. The video is decoded by the GPU so the frames are in the GPU. Because we will use CUDA filters and GPU encoding, we should upload the result of logo to the GPU. Here we use hwupload_cuda filter.

## BMF GPU modules
As FFmpeg only provides few GPU filters, we implemented some common GPU filter modules which are missing in FFmpeg but should be useful, namely
- resize
- flip
- rotate
- crop
- blur

These modules are located in `bmf/demo/gpu_module`. A simple sample code to run these modules:

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

The module accepts both CPU and GPU frames. The frames can be of rgb or yuv formats in 8 or 10 bits, except that 422 chroma subsampling is not supported.

Note that for the `rotate_gpu` module, it is recommended to use rgb as inputs rather than yuv, as the module will fill the blank area with 0 after rotation. (0, 0, 0) in yuv is actually green in rgb, meaning yuv images may have a green background after the rotation.

If you need more details on the options of these modules, please refer to the [API documents](../../../api/filter_module/_index.md).