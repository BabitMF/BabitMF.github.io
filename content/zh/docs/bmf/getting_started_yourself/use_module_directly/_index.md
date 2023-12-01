---
title: '直接使用模块'
linkTitle: ''
weight: 3
menu:
  main:
    weight: 3
    parent: '入门'
---



一些用户可能并不需要使用BMF框架的复杂的Graph组合和连接，而是想单独使用某个模块的能力。Sync Mode为用户提供了以原子形式直接调用模块能力的函数。用户可以直接调用这些模块的函数而无需构建Graph，如下图所示：

我们主要介绍了Python Sync Mode的实现。C++和go也有相应的实现机制。


<img src="/img/docs/use_md_dr1.png" style="zoom:25%;"></img>

此Markdown文件列出了您在自己的计算机上运行代码的步骤。快速体验：[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/BabitMF/bmf/blob/master/bmf/test/sync_mode/bmf_syncmode_python.ipynb)


## 编写并实现一个sync mode调用代码
这段代码首先调用bmf_sync.sync_module接口创建四个BMF模块（c_ffmpeg_decoder、c_ffmpeg_filter(Scale)、c_ffmpeg_filter(volume)、c_ffmpeg_encoder）。然后，它不断地从输入视频中读取视频流，逐帧解码。解码后，首先将其发送到Scale Filter Module，将视频缩放到320x250的分辨率。然后将获取的处理后的视频帧，发送至volume Filter Module进行一次音量调节。最后，将视频发送到Encoder Module进行视频编码并保存为文件。我们通过两个子步骤完成Sync Mode的演示实现。

### 创建Sync Module
在这段代码中，我们首先调用了bmf.sync_module接口来创建三个模块。该接口的定义如下:

```
def bmf.builder.bmf_sync.sync_module (
   name, 
   option, 
   input_streams, 
   output_streams 
)

Create SyncModule by name, option, input_stream_id_list and output_stream_id_list.

Parameters

name the name for the module
option the option for the module
input_streams the input stream id list for the module
output_streams the output stream id list for the module

Returns
bmf_sync.SyncModule

```

使用上述接口，我们创建了一个Decoder module，两个Filter module以及一个Encoder module。对于Decoder module，我们设置了两个输出流（编码为数字0和数字1），数字0对应视频流，数字1对应音频流。对于Scale和Volume这两个Filter module，我们分别设置了1个输入流和1个输出流，统一编码为0。

```
import bmf
from bmf import bmf_sync, Packet
input_video_path = "./big_bunny_10s_30fps.mp4"
output_path = "./video.mp4"

# create sync modules
decoder = bmf_sync.sync_module("c_ffmpeg_decoder", {"input_path": input_video_path}, [], [0, 1])
scale = bmf_sync.sync_module("c_ffmpeg_filter", {
    "name": "scale",
    "para": "320, 250"
}, [0], [0])
volume = bmf_sync.sync_module("c_ffmpeg_filter", {
    "name": "volume",
    "para": "volume=3"
}, [0], [0])
encoder = bmf_sync.sync_module("c_ffmpeg_encoder", {
    "output_path": output_path
}, [0, 1], [])
```


## 编写并实现pipeline代码

在上述process中，我们构建了所需的4个syncModule。下图展示了一个pipeline和一个视频处理process：

<img src="/img/docs/use_md_dr2.png" style="zoom:100%;"></img>

构建这个pipeline时，我们主要调用了bmf_sync.process接口，其定义如下：


```
def bmf.builder.bmf_sync.process (
  module, 
  pkts_dict 
)   

Directly do module processing.

Parameters

module corresponding syncModule object
pkts_dict a dict which contains all input data packet

Returns
result_dict, task.timestamp
```
使用这个接口，我们将上面创建的模块组合起来，并使用一个dictionary将输入pkt一一映射到syncModule的输入流和输出流中，然后实现了整个视频处理pipeline。


```
# process video/audio by sync mode
while True:
    frames, _ = bmf_sync.process(decoder, None)
    has_next = False
    for key in frames:
        if len(frames[key]) > 0:
            has_next = True
            break
    if not has_next:
        bmf_sync.send_eof(encoder)
        break
    if 0 in frames.keys() and len(frames[0]) > 0:
        frames, _ = bmf_sync.process(scale, {0: frames[0]})
        bmf_sync.process(encoder, {0: frames[0]})
    if 1 in frames.keys() and len(frames[1]) > 0:
        frames, _ = bmf_sync.process(volume, {0: frames[1]})
        bmf_sync.process(encoder, {1: frames[0]})
```


 
