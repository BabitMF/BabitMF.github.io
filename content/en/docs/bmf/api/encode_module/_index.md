---
title: 'Built-in Encode Module'
linkTitle: 'Built-in Encode Module'
weight: 4
---

This is a module capability discrption about BMF build-in encoder. The module can be used by BMF API such as  [bmf.encode()](https://babitmf.github.io/docs/bmf/api/api_in_python/transcode_functions/#encode)  by providing json style "option" to config such as the 3rd parameter below:


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
Details:

 - module name: c_ffmpeg_encoder

 - null_output: to make encoder as a null sink in some cases. "null_output": 1

 - output_path: output file path, exp. out.mp4, which can indicate the output format of the file similiar as ffmpeg.

 - adjust_pts: will adjust the pts start from 0 when it's enabled

 - format: similiar as the "-f" in ffmpeg command line to specify the demux/mux format. exp.
```
{
 "format": "flv",
 "output_path": rtmp://docker.for.mac.host.internal/rtmplive
}

```


 - output_prefix: specify the output directory path

 - push_output: decide whether to mux the result and where to output the results, available value is 0/1/2. 0: write muxed result to disk, 1: write muxed result to the output queue, 2: write unmuxed result to the output queue.
```
"push_output": 1

```


 - avio_buffer_size: set avio buffer size, when oformat is image2pipe, this paramter is useful, exp.
```
"avio_buffer_size": 16384

```


 - mux_params: specify the extra output mux parameters, exp.
```
"format": "hls",
"mux_params": {
 "hls_list_size": "0",
 "hls_time": "10",
 "hls_segment_filename": "./file%03d.ts"
}

```


 - video_params: video codec related parameters which similiar as ffmpeg. exp.
```
"video_params": {
 "codec": "h264",
 "width": 320,
 "height": 240,
 "crf": 23,
 "preset": "veryfast"
},

```


 - metadata: to add user metadata in the outfile

 - vframes: set the number of video frames to output

 - aframes: set the number of audio frames to output

 - min_frames: set the min number of output video frames

 - codec: param in video_params or audio_params to specify the name of the codec which libavcodec included. exp. "h264", "bytevc1", "jpg", "png", "aac"(audio)

 - width: param in video_params to specify the video width
 - height: param in video_params to specify the video height
 - pix_fmt: param in video_params to specify the input format of raw video

 - audio_params: audio codec related parameters which similiar as ffmpeg. exp.
```
"audio_params": {
 "codec": "aac",
 "bit_rate": 128000,
 "sample_rate": 44100,
 "channels": 2
}

```


 - loglevel: without using the logbuffer of builder API, to set the ffmpeg av log level: "quiet","panic","fatal","error","warning","info","verbose","debug","trace"

 - threads: specify the number of threads for encoder, "auto" by default, and other for example: "threads": "2"

 - psnr: to set encoder provide psnr information

 - in_time_base: to set time base manually

 - vsync: to set the video sync method on frame rate, "auto" by default. and it can be "cfr", "vfr", "passthrough", "drop" similar as ffmpeg

 - max_fr: to set the frame rate

 - max_fr: to set the frame rate, similar as ffmpeg

 - qscal: to set the qscale for the encoder global_quality

 - vtag: to set the vtag for output stream

 - bit_rate or b: to set the bitrate for video encode

 - channels: to set the channels for input audio

 - bit_rate or b: to set the bit_rate for audio encode

 - sample_rate: to set the sample_rate for audio encode

 - atag: to set the atag for output stream


### Build-in Encode Module

