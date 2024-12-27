---
title: '内置解码模块'
linkTitle: '内置解码模块'
weight: 4
---


这是一个关于 BMF 内置解码器的模块功能说明。通过向配置（如下面的第 3 个参数）提供 json 样式的"选项"，BMF API，如 [bmf.decode()](https://babitmf.github.io/docs/bmf/api/api_in_python/transcode_functions/#decode) 可以使用该模块：


```py
bmf.decode(
    {
        "input_path": input_path,
        "map_v": 0,
        "map_a": 2,
        "start_time": 2,
        "end_time": 3,
    }
)

```
详情：

 - module name: c_ffmpeg_decoder

 - loglevel: 设置 ffmpeg 库的日志级别，可以是“quiet”、“panic”、“fatal”、“error”、“warning”、“info”、“verbose”、“debug”、“trace”

 - map_v: 解码器的视频流索引，例如 0 表示选择 0 号流作为即将解码的视频流。

 - map_a: 解码器的音频流索引，例如 1 表示选择 1 号流作为即将解码的音频流。

 - start_time: 解码开始时间（以秒为单位），例如 1 表示 1 秒后解码帧，类似于 ffmpeg 命令中的 -ss。

 - end_time: 解码结束时间，例如 1 表示只解码 1 秒之前的帧，类似于 ffmpeg 命令中的 -to。

 - durations: 解码多组持续时间帧/样本，例如[1.1,4,6.5,9,12.3,15]。

 - fps: 将帧解码为 fps set。

 - video_time_base: 视频流时基，例如 1/1000 表示设置视频流时基为1/1000。

 - skip_frame:  跳帧，例如 32 表示根据选项值进行解码器丢弃处理，就像 ffmpeg commnad 中的 -skip_frame 一样。 AVDISCARD_NONE = -16, ///< 不丢弃任何内容 AVDISCARD_DEFAULT = 0, ///< 丢弃无用的数据包，例如 avi 中 0 大小的数据包 AVDISCARD_NONREF = 8, ///< 丢弃所有非引用 AVDISCARD_BIDIR = 16, ///< 丢弃所有 双向帧 AVDISCARD_NONINTRA= 24, ///< 丢弃所有非帧内帧 AVDISCARD_NONKEY = 32, ///< 丢弃除关键帧之外的所有帧 AVDISCARD_ALL = 48, ///< 丢弃所有

 - video_codec: 视频编解码器名称，例如 libx264，设置视频流的特定编解码器。 设置为 “copy” 时为流复制

 - overlap_time: 用于解码直播流，如果直播流中断，如果下一个数据包的 pts 重叠小于重叠时间，我们将删除重叠数据包。默认值为 10

 - cut_off_time: 用于解码直播流，如果直播流中断，当下一个 packet pts 大于最后一个 pts + cut_off_time 时，我们将调整 pts 以避免大的中断。 否则我们使用 packet pts

 - cut_off_interval: 用于解码直播流，如果直播流中断，当下一个 packet pts 大于最后一个 pts + cut_off_time 时，我们将调整 pts 以避免大的中断。 否则我们使用 packet pts

 - vframes: 设置要输出的视频帧数

 - aframes: 设置要输出的音频帧数

 - copyts: 复制 timestamps

 - max_width_height: 设置输入框的最大宽度或高度限制。启用后，默认情况下会丢弃帧，或者根据 “limit_hits” 抛出

 - max_limit_hits: 设置最大命中次数限制，一旦超过就会抛出

 - video_params: video codec parameters which similar as ffmpeg. exp.
```py
"video_params": {
    "hwaccel": "cuda",
    "extract_frames": {
        "fps": 25,
        "device": "0",
    }
},
```
> - hwaccel: 硬件加速，例如 cuda
>
> - extract_frames: 支持使用给定的 fps 和设备提取帧

 - audio_codec: 音频编解码器名称，例如 aac 表示设置音频流的特定编解码器

 - dec_params: 设置解码编解码参数，如 “threads”：1
```py
"dec_params": {
    "threads": 1,
},
 ```

 - autorotate: 如果需要，可以启用或禁用输入视频的自动旋转，默认情况下启用

 - s: 视频尺寸，例如 "1280:720"

 - pix_fmt: 像素格式，例如 "rgba"

 - input_path: 解码输入文件，例如 "1.mp4"

 - push_raw_stream: 启用原始流推送模式，例如 1

 - channels: 音频通道（音频推送模式所需）

 - sample_rate: 音频采样率（音频推送模式所需）

 - sample_fmt: 音频样本格式（用于音频推送模式 - 可选）

 - orig_pts_time: 在帧中保留输入流的原始 pts 时间


### 内置解码模块

