---
title: 'Use Module Directly'
linkTitle: ''
weight: 3
menu:
  main:
    weight: 3
    parent: 'Getting started'
---



Some users may have such a request: they do not want to use the complex graph combination and connection of the BMF framework, but want to use the ability of a certain module alone. Sync Mode provides users with a function of directly invoking module capabilities in an atomic form. Users can directly call the functions of the module without building a graph, as shown in the following figure:

This article mainly introduces the implementation of Sync Mode Python. Go and C++ also have corresponding implementation mechanisms:


<img src="/img/docs/use_md_dr1.png" style="zoom:25%;"></img>

The steps listed in this markdown file is used to run the code on your own machine. If you wan't to have a quick experiment, you can try it on：[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/BabitMF/bmf/blob/master/bmf/example/sync_mode/bmf_syncmode_python.ipynb)


## Write and implement a sync mode calling code.
This piece of code first calls the bmf_sync.sync_module interface to create four bmf modules (c_ffmpeg_decoder, c_ffmpeg_filter (Scale), c_ffmpeg_filter (volume), c_ffmpeg_encoder). Afterwards, it continuously reads the video stream from the input video by loop, decodes frame by frame, and first sends it to a Scale Filter Module to scale the video to a resolution of 320x250. Then, the processed video frame is obtained and sent to a volume Filter Module to adjust the volume once. Finally, the video is sent to the Encoder Module for video encoding and saved as a file. Let's complete the demo implementation of sync mode through two sub-steps

### Creating Sync Modules
In this code, we first called the bmf.sync_module interface to create three modules. The definition of this interface follows as below.

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

Using the interface above, we created one Decoder module, two Filter modules, and one Encoder module. For the Decoder module, we set up two output streams (encoded as number 0 and number 1), where number 0 corresponds to the video stream and number 1 corresponds to the audio stream. For the two Filter modules, Scale and Volume, we set up one input stream and one output stream each, with a unified number of 0. Finally, the Encoder module takes in two input streams and has no output stream, as the Encoder module will encode the processed video stream and save it to disk.

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


### Writing and Implementing Pipeline Code

In the process described above, we have built the required 4 syncModules, let's write a pipeline to implement a video processing process as shown in the figure below:

<img src="/img/docs/use_md_dr2.png" style="zoom:100%;"></img>

When we build the pipeline, we mainly call the bmf_sync.process interface, which should be defined as follows:


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
Using this interface, we combined the modules created above and used a dictionary to map the input pkt to the InputStream and OutputStream of the syncModule one by one, then implemented the entire video processing pipeline.


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


 
