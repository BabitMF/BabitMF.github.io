---
title: 'Overview'
linkTitle: 'Overview'
weight: 1
---


As a general multimedia processing framework, BabitMF (Babit Multimedia Framework, BMF) can provide a simple and easy-to-use cross-language interface, flexible scheduling and scalability, and dynamically expand, manage and reuse the atomic capabilities of video processing in a modular manner , build a high-performance multimedia processing link in the form of graph/pipeline or realize project integration by direct invocation of individual processing capabilities, helping multimedia users to conveniently and efficiently implement projects in the production environment. The usage scenarios of BMF cover video transcoding, video frame extraction, video enhancement, video analysis, video frame insertion, video editing, video conferencing, VR, etc. At present, hundreds of millions of videos are processed by BMF every day. In the process, the functional diversity, ease of use, compatibility, stability and performance of the BMF framework have been fully polished.

<img src="/img/docs/bmf-framework.png" style="zoom:100%;" />

The picture above is a general architecture diagram of BMF, which includes a complete set of ecosystem, which mainly consists of three parts:
- Application layer: The top layer provides users with multi-language APIs including Python, Go, and C++, which is convenient for users to develop and integrate according to different project requirements.
- Framework layer: The middle layer includes the framework's scheduling of graph/pipeline, cross-data type and cross-device data transfer Backend, and commonly used cross-device reformat, color space conversion, tensor operator and other SDKs.
- Module layer: It includes modules with various atomic capabilities, and provides module development mechanisms in multiple languages. Users can implement algorithms/processing in any of Python, Go, and C++ languages according to their own needs.

From architecture design to implementation, BMF covers a variety of features to solve many challenges in the new era:
## Multi-language interface

BMF provides a multi-language interface, which is convenient for users to integrate development in different languages according to project needs, and maximizes the ability to be compatible and reuse the entire framework.

## Loosely coupled multilingual modules
The module provides atomic capabilities for video processing, and users can choose Python, C++, and Go to focus on developing modules; modules and frameworks, modules and modules are loosely coupled, so that algorithms and projects are decoupled, and processing developed in different languages The decoupling of the development language used by modules and upper-layer applications greatly enhances the scalability and diversified collaboration capabilities.

## Powerful scheduling engine

BMF provides a configurable parallel scheduler, multiple usage modes, and advanced features of dynamically adjusting Graph to realize a high-performance scheduling mechanism responsible for the operation of DAG/Graph/Pipeline, and through various solutions to help users realize it with a small development cost Functional and performance requirements in complex scenarios.

## Fully compatible with FFmpeg features and standards

BMF is fully compatible with FFmpeg's processing capabilities and indicators, such as demuxing, decoding, filter, encoding, and muxing capabilities. The configuration of these processing capabilities and the results consistent with FFmpeg's pts, duration, bitrate, fps and other indicators can be obtained. Very good It satisfies the need to quickly integrate FFmpeg capabilities into projects.

## Ability to convert data between multiple frameworks and heterogeneous devices

Supports zero-copy interconversion between multiple mainstream data formats, and is greatly compatible with data connection between different modules. For example, it is necessary to use ffmpeg's codec and filter capabilities, as well as OpenCV's transformation processing, and it also needs to use Pytorch to do intelligent analysis in more complex situations; at the same time, it supports heterogeneous cross-device data transmission and conversion capabilities, and asynchronous scheduling capabilities, so that Help users quickly solve the acceleration optimization problems of the production environment.

In the form of open source, BMF fully integrates into the community, continuously expands the ecology and displays various solutions, and expects to provide better help for developers and enterprises in the industry in the hyper video era.