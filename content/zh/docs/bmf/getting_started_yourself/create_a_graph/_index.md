---
title: '创建 Graph'
linkTitle: ''
weight: 2
menu:
  main:
    weight: 2
    parent: '开始使用'
---


本节介绍 BMF 的基本用法。首先，您需要构建一个 Graph：

```python
import bmf

graph = bmf.graph()
```

Graph 初始化后，解码输入视频：

```python
video = graph.decode({
     "input_path": input_video_path
})
```

将之前解码的 ```video['video']``` 和 ```video['audio']``` 分别进行转码，```run``` 将会开始验证并执行整个 graph。完成后输出视频文件：

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
             "preset": "very fast"
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
