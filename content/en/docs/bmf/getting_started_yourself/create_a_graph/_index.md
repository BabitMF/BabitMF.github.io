---
title: 'Create a Graph'
linkTitle: ''
weight: 2
menu:
  main:
    weight: 2
    parent: 'Getting started'
---


This page describes the basic usage of BMF. To start, you need to build a graph:

```python
import bmf

graph = bmf.graph()
```

After the Graph is initialized, decode the input video:

```python
video = graph.decode({
     "input_path": input_video_path
})
```

Separate the previously decoded ```video['video']``` and ```video['audio']``` for transcoding, and ```run``` will start to validate and execute the entire graph Build and execute. Output a video file after completion:

```python
bmf.encode(
     video['video'],
     video['audio'],
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
     .run()
```
