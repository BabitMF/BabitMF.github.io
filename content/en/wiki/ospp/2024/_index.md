---
title: '2024'
linkTitle: '2024'
weight: 1
---


## Project Ideas

### Frame Distributed Video Enhancement

`Project Name`: Frame Distributed Video Enhancement

`Project Description`: BabitMF (BMF) is a multimedia processing framework open sourced by ByteDance, mainly applied in scenarios such as video processing, AIGC, and video acceleration. In some video acceleration scenarios or more general processing scenarios, in order to reduce the overall processing time of the task, frame-level parallel processing is often required. Currently, BMF has the ability of module-level parallel processing. On this basis, it is hoped to have a more general parallel processing mechanism that performs frame-level and local "distributed" parallel processing on specified modules.

BMF already has a Video Enhancement case based on AI models (https://github.com/BabitMF/bmf/tree/master/bmf/demo/video_enhance), which shortens the overall processing time of Video Enhancement by implementing the above-mentioned video frame-level parallel processing.
`Project Difficulty`: Advanced

`Technical Domain, Programming Language`: C++,Python

`Project Output Requirements`: 
- Design and implement a universal local "distributed" solution based on BMF modules.
- Apply this function to the Video Enhancement case.
- Obtain the time-consuming comparison data of the experiment.

`Project Technical Requirements`: 
- C++
- Python
- Map-reduce knowledge
- Video processing knowledge

`Project Completion Repository`: https://github.com/BabitMF/bmf

`Estimated Work Hours`: July 1 - September 30

`Mentor`: HuHeng

`Project Notes`: 
- https://babitmf.github.io/docs/bmf/

### Webassembly ControlNet

`Project Name`: Webassembly ControlNet

`Project Description`: BabitMF (BMF: https://babitmf.github.io/), as a multimedia processing framework open sourced by ByteDance, has the capabilities of video processing and integrating AI processing. In order to expand the diversity and expressiveness of the framework, it is hoped to expand the capabilities of the framework to help users develop and integrate related projects in the field based on BMF in the form of web. Currently, BMF already has a complete framework installable package and ControlNet Demo (bmf/bmf/demo/controlnet at master · BabitMF/bmf).

`Project Difficulty`: Advanced

`Technical Domain, Programming Language`: JavaScript,Rust,C++

`Project Output Requirements`: 
- Design the form of web display of the ControlNet Demo, basically by inputting images and prompts through the web page, running the controlnet, and outputting the renderings.
- Implement the relevant Rust interfaces of BMF as needed.
- Develop and integrate into webassambly, web deployment and demo show.


`Project Technical Requirements`: 
- JavaScript/Node.js
- Rust、C++
- ControlNet basic knowledge

`Project Completion Repository`: https://github.com/BabitMF/bmf

`Estimated Work Hours`: July 1 - September 30

`Mentor`: YoloSolo

`Project Notes`: 
- https://babitmf.github.io/docs/bmf/
- https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm
- https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html
