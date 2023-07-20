---
title: 'Built-in Decode Module'
linkTitle: 'Built-in Decode Module'
weight: 4
---


This is a module capability discrption about BMF build-in decoder. The module can be used by BMF API such as  [bmf.decode()](https://babitmf.github.io/docs/bmf/api/api_in_python/transcode_functions/#decode)  by providing json style "option" to config such as the 3rd parameter below:


```
bmf.decode(
    {'input_path': input_video_path}
)

```
Details:

 - module name: c_ffmpeg_decoder

 - loglevel: to set the loglevel of ffmpeg library it can be "quiet","panic","fatal","error","warning","info","verbose","debug","trace"

 - map_v: video stream index for decoder, exp. 0, which mean choose No.0 stream as video stream to be decode.

 - map_a: audio stream index for decoder, exp. 1, which mean choose No.1 stream as audio stream to be decode.

 - start_time: decode start time in seconds, exp. 1, which mean just decode the frame after 1 second, similar as -ss in ffmpeg command.

 - end_time: decode end time, exp. 1, which mean just decode the frame before 1 second, just as -to in ffmpeg command.

 - durations: decode multiple group of duration frames/samples, such as [1.1, 4, 6.5, 9, 12.3, 15].

 - fps: decode the frame as the fps set .

 - video_time_base: video stream time base, exp. 1/1000, set the video stream timebase as 1/1000.

 - skip_frame: skip frame, exp. 32, make decoder discard processing depending on the option value, just as -skip_frame in ffmpeg commnad. AVDISCARD_NONE = -16, ///< discard nothing AVDISCARD_DEFAULT = 0, ///< discard useless packets like 0 size packets in avi AVDISCARD_NONREF = 8, ///< discard all non reference AVDISCARD_BIDIR = 16, ///< discard all bidirectional frames AVDISCARD_NONINTRA= 24, ///< discard all non intra frames AVDISCARD_NONKEY = 32, ///< discard all frames except keyframes AVDISCARD_ALL = 48, ///< discard all

 - video_codec: video codec name, exp. libx264, set the specific codec for video stream. it will be stream copy when it set to be "copy"

 - overlap_time, which is used in decode live stream, if the live stream cut off, if the next packet pts is overlap smaller than overlap time, we will remove the overlap packet. default value is 10

 - cut_off_time, which is used in decode live stream ,if the live stream cut off, when the next packet pts is larger than last pts + cut_off_time, we will adjust pts to avoid large cut off. else we use the packet pts.

 - cut_off_interval.which is used in decode live stream ,if the live stream cut off, when the next packet pts is larger than last pts + cut_off_time, we will adjust pts to avoid large cut off. else we use the packet pts.

 - vframes: set the number of video frames to output

 - aframes: set the number of audio frames to output

 - copyts: copy timestamps

 - max_width_height: set the max width or height limitation of input frame. Once it's enabled, frame will be dropped by default or it will throw exp according to "limit_hits"

 - max_limit_hits: set the max number of limit hits, once exceeded the exp will be threw

 - hwaccel: hardware accelete exp. cuda.
 - extract_frames: support extract frames with given fps and device.

 - audio_codec: audio codec name, exp. aac, set the specific codec for audio stream.

 - dec_params: set the decode codec parameters, such as "threads": 1

 - autorotate: to enable/disable autorotate for the input video if needed, it's enabled by default

 - s: video size, exp. "1280:720".

 - pix_fmt: pixel format, exp. "rgba".

 - input_path: decode input file,exp. "1.mp4".

 - push_raw_stream: enable raw stream push mode, exp. 1

 - channels: audio channels (required for audio push mode)

 - sample_rate: audio sample rate (required for audio push mode)

 - sample_fmt: audio sample format (used for audio push mode - optional)

 - orig_pts_time: keep the original pts time of inputstream in the frame


### Build-in Decode Module

