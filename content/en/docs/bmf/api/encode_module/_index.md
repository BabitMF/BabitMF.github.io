---
title: '内置编码模块'
linkTitle: '内置编码模块'
weight: 5
---

这是一个关于 BMF 内置编码器的模块功能说明。通过向配置（如下面的第 3 个参数）提供 json 样式的"选项"，BMF API，如[bmf.encode()](https://babitmf.github.io/docs/bmf/api/api_in_python/transcode_functions/#encode)可以使用该模块：


```
bmf.encode(
    video['video'],
    audio_stream,
    {
 "output_path": output_path,
 "video_params": {
 "codec": "h264",
 "width": 320,
 "height": 240,
 "crf": 23,
 "preset": "veryfast"
        },
 "audio_params": {
 "codec": "aac",
 "bit_rate": 128000,
 "sample_rate": 44100,
 "channels": 2
        }
    }
)

```
详情：

 - module name: c_ffmpeg_encoder

 - null_output: 在某些情况下使编码器作为 null sink，"null_output": 1。
 - output_path: 输出文件路径，例如 out.mp4，可表明文件的输出格式，类似于 ffmpeg。

 - adjust_pts: 启用后，将从 0 开始调整 pts

 - format: 类似于 ffmpeg 命令行中的 “-f”，用于指定解复用/复用格式。
```
{
 "format": "flv",
 "output_path": rtmp://docker.for.mac.host.internal/rtmplive
}

```


 - output_prefix: 指定输出目录路径

 - push_output: 决定是否复用结果以及将结果输出到哪里，可用值为 0/1/2。 0：将复用结果写入磁盘，1：将复用结果写入输出队列，2：将未复用结果写入输出队列。
```
"push_output": 1

```


 - avio_buffer_size: 设置 avio 缓冲区大小，当格式为 image2pipe 时，此参数有用，例如：
```
"avio_buffer_size": 16384

```


 - mux_params: 指定额外输出复用参数，例如：
```
"format": "hls",
"mux_params": {
 "hls_list_size": "0",
 "hls_time": "10",
 "hls_segment_filename": "./file%03d.ts"
}

```


 - video_params: 视频编解码相关的参数，类似于 FFmpeg，例如：
```
"video_params": {
 "codec": "h264",
 "width": 320,
 "height": 240,
 "crf": 23,
 "preset": "veryfast"
},

```

 
 - metadata: 在输出文件文件中添加用户 metadata

 - vframes: 设置输出视频帧的数量

 - aframes: 设置输出音频帧的数量

 - min_frames: 设置输出视频帧的最小数量

 - codec: video_params 或 audio_params 中的参数，用于指定 libavcodec 包含的编解码器名称。例如："h264"、"bytevc1"、"jpg"、"png"、"aac"（音频）

 - width: video_params 中的参数，用于指定视频宽度

 - height: video_params 中的参数，用于指定视频高度

 - pix_fmt: video_params 中的参数，用于指定原始视频的输入格式

 - audio_params: 与 ffmpeg 类似的音频编解码器相关参数。例如：
```
"audio_params": {
 "codec": "aac",
 "bit_rate": 128000,
 "sample_rate": 44100,
 "channels": 2
}

```


 - loglevel: 不使用 builder API 的 logbuffer，设置 ffmpeg av 日志级别：“quiet”，“panic”，“fatal”，“error”，“warning”，“info”，“verbose”，“debug”，“trace ”

 - threads: 指定编码器的线程数，默认为 "auto"，其它示例："线程"："2"

 - psnr: 设置编码器，提供 PSNR 信息

 - in_time_base: 手动设置 time base

 - vsync: 设置帧率的视频同步方法，默认为“自动”。 它可以是 “cfr”，“vfr”，“passthrough”，“drop”，类似于 ffmpeg

 - max_fr: 设置帧率，类似于 FFmpeg

 - qscal: 设置编码器 global_quality 的 qscale

 - vtag: 设置输出流的 vtag

 - bit_rate or b: 设置视频编码的比特率

 - channels: 设置输入音频的通道

 - bit_rate or b: 设置音频编码的 bit_rate

 - sample_rate: 设置音频编码的 sample_rate

 - atag: 设置输出流的 atag


### 内置编码模块

