---
title: '2024'
linkTitle: '2024'
weight: 1
---


## 项目列表

### Frame Distributed Video Enhancement

`项目名称`: Frame Distributed Video Enhancement

`项目描述`: BabitMF（BMF）是字节开源的一款多媒体处理框架，主要应用于视频处理、AIGC、视频加速等场景。在一些视频加速场合或者更为通用的处理场景，为了降低任务处理的总体耗时，往往需要帧级别的并行处理。当前，BMF具有模块级别的并行处理能力，在此基础上，希望有一种较为通用的、指定模块进行帧级别、本地“分布式”的并行处理机制。
BMF已有基于AI模型的Video Enhancement案例（https://github.com/BabitMF/bmf/tree/master/bmf/demo/video_enhance），通过实现上述视频帧级别并行处理，从而缩短Video Enhancement的整体耗时。
BMF already has a Video Enhancement case based on AI models (https://github.com/BabitMF/bmf/tree/master/bmf/demo/video_enhance), which shortens the overall processing time of Video Enhancement by implementing the above-mentioned video frame-level parallel processing.
`项目难度`: 进阶

`技术领域、编程语言`: C++,Python

`项目成果要求`:
- 设计并实现通用的基于BMF模块的本地“分布式”方案
- 把该功能应用到Video Enhancement案例
- 得出实验的耗时对比数据

`项目技术要求`: 
- C++
- Python
- Map-reduce knowledge
- Video processing knowledge

`项目完成仓库`: https://github.com/BabitMF/bmf

`预估完成时长`: 7 月 1 日 - 9 月 30 日

`导师`: HuHeng

`项目备注`: 
- https://babitmf.github.io/docs/bmf/

### Webassembly ControlNet

`项目名称`: Webassembly ControlNet

`项目描述`:
BabitMF（BMF）作为字节开源的一款多媒体处理框架，已经具备了视频处理、整合AI处理的能力。为了扩展框架的多样性和表现力，希望把框架的能力进行扩展，帮助用户以web的形式基于BMF开发和集成到相关领域的项目当中。
目前BMF已经具备了整体的框架可安装包以及ControlNet Demo（https://github.com/BabitMF/bmf/tree/master/bmf/demo/controlnet）。

该项目涉及到Web开发 + Rust/C++开发 + 视频图片处理 + AIGC知识 + GPU平台调试部署，由于其广度复杂度，导师认为应定级为“进阶”。

`项目难度`: 进阶

`技术领域、编程语言`: JavaScript,Rust,C++

`项目成果要求`: 
- 设计web展示ControlNet Demo的形式，通过网页输入图片和prompt，运行底层的bmf controlnet，输出效果图。
- 根据需要，实现BMF的相关Rust接口
- 开发集成至webassambly，Web部署与展示


`项目技术要求`: 
- JavaScript/Node.js
- Rust、C++
- ControlNet basic knowledge

`项目完成仓库`: https://github.com/BabitMF/bmf

`预估完成时长`:  7 月 1 日 - 9 月 30 日

`导师`: YoloSolo

`项目备注`: 
- https://babitmf.github.io/docs/bmf/
- https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm
- https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html


