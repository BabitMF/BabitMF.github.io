---
title: 'Built-in Filter Module'
linkTitle: 'Built-in Filter Module'
weight: 6
---

这是一个关于 BMF 内置 Filter 模块的功能描述。通过提供 ffmpeg 命令行样式的参数来配置 filtergraph，该模块可用于模块相关的 BMF API，如[bmf.concat()](https://babitmf.github.io/docs/bmf/api/api_in_python/transcode_functions/#concat)：


```
main_video = (
    video['video'].scale(output_width, output_height)
        .overlay(logo_1, repeatlast=0)
        .overlay(logo_2,
                 x='if(gte(t,3.900),960,NAN)',
                 y=0,
                 shortest=1)
)

concat_video = (
 bmf.concat(header['video'].scale(output_width, output_height),
               main_video,
               tail['video'].scale(output_width, output_height),
               n=3)
)

concat_audio = (
 bmf.concat(header['audio'],
               video['audio'],
               tail['audio'],
               n=3, v=0, a=1)
)

```
另一种常见的方式是，用户可以创建 ffmpeg libavfilter 包含的任何 filter 流。 例如：


```
ff_filter('unsharp', '5:5:1')

```
 - module name: c_ffmpeg_filter


### 内置 filter 模块

## GPU Filter 模块
BMF 提供了几种常用的 GPU 加速的 filter 模块：
- scale
- flip
- rotate
- crop
- blur

这些模块模块位于 bmf/example/gpu_module/ 中。`test_gpu_module.py` 这个示例代码展示了如何使用这些模块。你也可以通过 Colab 体验它们 [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/eefengwei/colab_tutorials/blob/main/colab_tutorial_cd.ipynb)。该模块接受 nv12/yuv420p/rgb 格式，每个组件 8 或 10 位。

### Scale

scale 模块可以调整图像的大小。

**Scale 选项**

***size***: 图像的目标尺寸，格式可以是 `WxH`，`W*H` 或 `W,H`

***algo***: （可选的）：插值算法，可以是 `area`、`cubic`、`linear` 和 `nearest` 之一。 如果未指定，则默认使用 `linear`。

### Flip

沿指定方向翻转图像。

**Flip 选项**

***direction***: 翻转的方向。 支持 `h`，`horizontal`，`v`，`vertical` 或 `both`（垂直和水平翻转）。 例如 `.module('flip_gpu', {'direction': 'v'})` 垂直翻转图像

### Rotate

将图像旋转一定角度。角度可以表示为度数或弧度。默认情况下，图像将围绕图像中心旋转。注意，空白区域将填充 0。旋转不会改变图像的宽高比，例如如果将 1920x1080 图像旋转 90 度，输出图像仍然是 1920x1080 而不是 1080x1920。

**Rotate 选项**

***angle_deg***: 旋转的角度。正角度值将顺时针旋转图像，负角度值将逆时针旋转图像。角度可以是浮点值。

***angle***: 旋转半径。例如设置 `{'angle': 'pi/8'}` 将有效地将图像顺时针旋转 45 度。

***center***: 图像旋转的中心点。默认情况下，中心点是图像中心点 `w/2,h/2`，其中 `w` 和 `h` 是图像的宽度和高度。

***scale***: 图像的缩放因子。默认值为 `1`，表示不缩放图像。`{'scale'： 1.5}` 表示将图像放大 1.5 倍。

***algo***: 插值算法。支持 `'cubic'`、`'linear'` 和 `'nearest'`。

### Crop

将输入图像裁剪成指定大小。示例： `module('crop_gpu', {'x': 960, 'y': 540, 'width': 640, 'height': 480})`

**Crop 选项**

***x, y***: 裁剪区域左上角的坐标。

***width, height***: 裁剪区域的宽度和高度。

### Blur

使用支持的算法（高斯、平均和中值）之一对输入图像进行模糊处理。高斯模糊示例：`module('blur_gpu', {'op': 'gblur', 'sigma': [0.7, 0.7], 'size': [5, 5]})`

**Blur 选项**

***op***: 要使用的模糊算法。支持 `'gblur'`（高斯模糊）、`'avgblur'`（平均模糊）和 `'median'`（中值模糊）。

***size***: 模糊内核的宽度和高度。格式应为 `[W,H]`。默认大小为 `[1, 1]` 该选项适用于所有模糊算法。

***planes***: 指定应模糊哪个图像平面。该值应是位掩码，例如，如果要模糊 yuv420p 图像的所有三个平面，应设置 `'planes'： 0x7` 或 `'planes'： 0b111`. 默认值为 `0xf`。此选项适用于所有模糊算法。

***sigma***: 高斯核标准偏差。格式应为 `[X,Y]`，浮点数据类型。该选项仅适用于 `gblur` 操作。

***anchor***: 内核锚点。表示过滤点在内核中的相对位置。格式应为 `[X,Y]`。默认为 `[-1, -1]` 表示内核中心。此选项仅适用于 `avgblur` 操作。

***radius***: ***size*** 选项的别名。半径只适用于 `median` 操作。