---
title: '2025'
linkTitle: '2025'
weight: 1
---

# Introduction

BMF (Babit Multimedia Framework) is a cross-platform, multi-language, customizable multimedia processing framework developed by ByteDance. With over 4 years of testing and improvements, BMF has been tailored to adeptly tackle challenges in our real-world production environments. It is currently widely used in ByteDance's video streaming, live transcoding, cloud editing and mobile pre/post processing scenarios. More than 2 billion videos are processed by the framework every day.

This is our ideas page for [`​Open Source Software Supply ChainPromotion Plan 2025`](https://summer-ospp.ac.cn). See the ​OSPP Timeline for important dates.

# Information for Students

## Getting Started
1. `Get to know BMF.` If you are a student interested in contributing to BMF, it is recommended to start by join in our [Feishu group](https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=4cev1bee-4d94-42c8-972b-4ae4a12c9da1). Feel free to contact us if you have any questions. Also do not hesitate to answer questions from other students on our group if you know the answer to something.
2. `Find a project.` Listed on this page are mentored projects. Mentored projects are well-defined and mentor(s) have already volunteered. If a project description is unclear or you have any questions, please get in touch with its mentor and/or join our Feishu group.
3. `Contact us.` If you decide on a project, get in touch with the community and let us know. If you want to work on a good first issue, let the respective mentor know so we can avoid duplicated efforts.
4. `Apply.` Students should apply definitely before deadline on June 9th. The "work" period begins on July 1st and ends in September. Take a look at ​OSPP timeline for additional information.

## Project Ideas

### Dynamical stream interface implemented by C++ in a multimedia framework
---

`Project Description`: In BMF, the builder layers of Python and CPP are built on the connector layer. Python uses the binding technology. Currently, BMF supports calling the dynamic series interface through Python, and supports dynamic changes of nodes when the BMF graph is running, such as adding, deleting, and resetting. The implementation of this project can refer to the existing Python builder implementation to make up for the missing dynamic series interface of CPP.

`Project Difficulty`: Basic

`Technical Domain, Programming Language`: mutlimedia processing, C++

`Project Output Requirements`: Use C++ to implement dynamic_remove, dynamic_add, dynamic_reset, and update interfaces, and complete the test cases.

`Project Technical Requirements`: 
1. Good C++ code capability
2. Basic understanding of multimedia processing

`Project Completion Repository`: https://github.com/BabitMF/bmf

`Estimated Work Hours`: 45   Hours

`Mentor:` Jack Lau (jacklau1222@qq.com)

### BMF DiffusionFlow
---

`Project Description`: BabitMF (BMF) is ByteDance's open-source multimedia processing framework, which already supports the modularization scheduling of audio & video and AI algorithms. This project will encapsulate the end-to-end generation process of Stable Diffusion (SD) as a series of modules that can be invoked in a node-based manner in the BMF Graph, further enriching the framework's expressiveness in the AIGC scenario.

`Project Difficulty`: Advanced

`Technical Domain, Programming Language`: AI, C++ Python

`Project Output Requirements`: 
1. Complete the design, development, and unit testing of the SD whole-link basic BMF Module, such as the Text Encoder, Diffusion Scheduler, VAE Decoder, etc.
2. Provide complete examples of both Text-to-Image and Image-to-Image scenarios
3. PyTorch, understand the SD architecture

`Project Technical Requirements`: 
1. Python、C++
2. PyTorch, understand the SD architecture

`Project Completion Repository`: https://github.com/BabitMF/bmf

`Estimated Work Hours`: 80   Hours

`Mentor:` Li Hu (huli.bruce@bytedance.com)

### Performance trace optimization in the multimedia framework
---

`Project Description`: BabitMF(https://github.com/BabitMF/bmf) is a multimedia framework which is widely used in media processing and AI related scenarios, there is a previous trace machenism for performance measurement already exists, but it will impact the latency (~10% more time cost occured) of whole pipeline once BMF_TRACE is enabled. This is a problem that needs to be solved urgently.

`Project Difficulty`: Advanced

`Technical Domain, Programming Language`: Perf, C++

`Project Output Requirements`: 
1. To root cause of the latency impacted by TRACE
2. To optimize the trace machenism to be lightweight, make the time cost bring by trace under 3%

`Project Technical Requirements`: 
1. Understanding of multimedia framework
2. Performance trace design and analytic capability

`Project Completion Repository`: https://github.com/BabitMF/bmf

`Estimated Work Hours`: 60   Hours

`Mentor:` Jonah (jonah.vanpraag@bytedance.com)

### Template Project
---

`Project Name`: The project name should clearly and directly reflect the project's technology and target tasks.

`Project Description`: Provide the project's relevant background, existing work, current deficiencies, improvements needed, and final objectives to be achieved.

`Project Difficulty`: Set based on project requirements, scale, technical difficulty, estimated development workload, and resource limitations.

`Technical Domain, Programming Language`: Specify the technical field and programming languages involved.

`Project Output Requirements`: Clearly define what students need to accomplish and the expected outcomes.

`Project Technical Requirements`: Present requirements from perspectives such as programming language, technology stack, and development experience.

`Project Completion Repository`: Use the existing project repository of the community, not a new empty repository.

`Estimated Work Hours`: Provide an estimated reference for development hours based on project difficulty, output requirements, and student skill level.

`Mentor:` someone @ somehwere.net
