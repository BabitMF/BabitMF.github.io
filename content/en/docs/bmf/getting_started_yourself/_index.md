---
title: 'Getting started'
linkTitle: 'Getting started'
weight: 3
---


If you need example files, you can find them in <https://github.com/BabitMF/bmf/releases/download/files/files.tar.gz>

## Brief Introduction

BabitMF (referred to as BMF) is a general video processing framework.

BMF can provide simple and easy-to-use interfaces, flexible scheduling and scalability, and dynamically expand, manage and multiplex the atomic capabilities of video processing in a modular manner.

Through BMF, users can achieve the following goals:

<img src="/img/docs/goals.png" style="zoom:100%;" />





The BMF Graph in the first picture below shows a simple audio and video transcoding process, including three modules. These three Modules are linked through Stream. The data stream is transmitted using Packet as the carrier. Each Module can specify an independent Thread for transmission. It is run by the BMF engine.

<img src="/img/docs/simple_graph.png" style="zoom:30%;" />

The second picture shows a more complex audio and video splicing and overlay Graph.

<img src="/img/docs/complex_graph.png" style="zoom:60%;" />



Some basic concepts in BMF are as follows:

- Graph: DAG developed by users through the interface layer and built through BMF is often a pipeline and application that can run.

- Module/Node: Users can use modules built into BMF or developed through the module SDK. BMF regards each video processing step as an atomic capability, and its carrier is a module, which supports multi-language dynamic expansion, management and multiplexing. Node is an instantiated Module.

- Stream: Use the BMF interface layer to build a Graph, and most of the time use the Stream object to connect. The path of data transmission in the BMF framework can be regarded as a Stream flow, which can be an input and output path of any data form.

- Packet: The carrier of data in BMF. Any data type, including VideoFrame and AudioFrame, will be encapsulated into a Packet in BMF and passed between modules.

- Task: Task is the scheduling unit of the BMF engine. The engine layer generates Tasks for different Nodes and dispatches them to the modules that need to be processed. The process() entry of the modules gets the Tasks for processing.



For more complex features and usage scenarios of BMF, see [Multiple Features](#tbytodo-2)



## The First Program

### Operating environment

This example directly downloads the image released by BMF as the running and development environment. For other installation and deployment methods, see: [Install](#tbytodo-2)


### program

The following hello_word.py program creates and runs a video transcoding pipeline through the BMF application layer interface: graph(), decode(), encode(), run(): demux + decode -> encode + mux

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
### run

`python3 hello_world.py`
