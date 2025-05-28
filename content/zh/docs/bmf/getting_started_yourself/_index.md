---
title: '开始使用'
linkTitle: '开始使用'
weight: 3
---


如果您需要示例文件，可以从这里下载：<https://github.com/BabitMF/bmf/releases/download/files/files.tar.gz>

## 简介

BabitMF（简称 BMF）是一套通用视频处理框架。

BMF 能够提供简单易用的接口，灵活的调度和可扩展性，以及以模块化的方式动态扩展、管理和复用视频处理的原子能力。

通过 BMF，用户可以达到以下目标：

<img src="/img/docs/goals.png" style="zoom:100%;" />





下图中的 BMF Graph 展示了一个简单的音视频转码处理，其中包括三个 Module，之间通过 Stream 相关联，将数据流以 Packet 为载体传递，每个 Module 可以指定独立的 Thread 被 BMF 引擎调度运行。

<img src="/img/docs/simple_graph.png" style="zoom:30%;" />

下图展示了一个较为复杂的音视频拼接与 overly 的 Graph。

<img src="/img/docs/complex_graph.png" style="zoom:60%;" />



BMF 中的一些基本概念如下:

- Graph：用户可以通过接口层开发、通过 BMF 构建的 DAG，往往是可以运行的 pipeline、应用。

- Module/Node: 用户可以使用 BMF 内置的或者通过模块 SDK 开发的模块。BMF 把每个视频处理步骤都看作是一个原子能力，而它的载体就是模块，模块支持多语言动态扩展、管理和复用。Node 是实例化的 Module。

- Stream: 使用 BMF 接口层构建 Graph，大多时候都是使用 Stream 的对象去连接。Stream 流可以看作是数据在 BMF 框架中传递的通路，可以是任意数据形式的输入输出通路。

- Packet: 数据在 BMF 中的载体。任意的数据类型包括 VideoFrame，AudioFrame 会被封装成为 BMF 中的 Packet 在模块之间传递。

- Task: Task 是 BMF 引擎的调度单元，引擎层针对不同的 Node 生成 Task 调度到需要处理的模块中，模块的 process() 入口获取到 Task 进行处理。



更多BMF的复杂特性以及使用场景，详见[更多功能](http://babitmf.github.io/docs/bmf/multiple_features)



## 首个项目
### 运行环境
本示例直接下载 BMF 发布的镜像作为运行和开发环境，其他安装部署方法详见：[安装部署](http://babitmf.github.io/docs/bmf/getting_started_yourself/install)


### 程序

下面的 hello_word.py 程序通过 BMF 应用层接口：graph(), decode() , encode() , run()，创建运行一个视频转码的 pipeline：demux + decode -> encode + mux

```python
def hello_world():
     input_video_path = "/opt/tiger/bmf/bmf/files/img.mp4"
     output_path = "./simple.mp4"

     # Create BMF Graph
     graph = bmf.graph()

     # Build the decoding stream
     streams = graph.decode({
         "input_path": input_video_path
     })

     ( # Decompose the previous streams into video and audio as the input of the encode interface, as well as the encoding parameters, create the encoding stream and run it directly
         bmf.encode(
             streams['video'],
             streams['audio'],
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
     )

if __name__ == '__main__':
     hello_world()
```
### 运行

`python3 hello_world.py`
