---
title: '2024-result'
linkTitle: '2024-result'
weight: 1
---

## 介绍
此页面展示了 [OSPP 2024](../../2024/) 项目的成果。

### Frame Distributed Video Enhancement(刘奇翰)
---

我很高兴向大家介绍 BMF 中一个新的功能：本地分布式能力，允许用户在单节点上轻松并行处理计算任务。

在本次提交中，我实现了支持单节点多线程的必要代码更改。为了启用该功能，用户只需在设置这些节点时添加一个选项参数 "dist_num": <数字>，框架将会自动创建多个分布式节点以实现数据的并行处理。

关键改动包括：

- 更新 enhance_demo.py

- 新增内部模块：split_module 和 assemble_module

- 为 ModuleConfig、StreamConfig、NodeMetaInfo、NodeConfig 添加了拷贝构造函数

- 在 NodeConfig 中新增方法和变量

- 在 Optimizer 中新增 create_split_node、create_assemble_node、process_multi_thread 函数

- 更新 node.cpp

- 在 builder 中的 Decode 和 Encode 方法中添加新参数 scheduler

- 更新 connector.cpp

- 添加新测试用例 distributed_node

https://github.com/BabitMF/bmf/pull/129

### Webassembly ControlNet(邱奇琛)
---

#### 概览
在本次 Pull Request 中，我将 BMF 的精简版本成功移植到了 WebAssembly，并在 Chrome 浏览器中实现了运行。

本次工作包含以下内容：

`依赖处理`：BMF 项目依赖多个外部库，如 FFmpeg、x264 和 x265。为了解决 WASM 环境下的链接问题，我调整了这些库的编译选项。目前这些依赖库的适配版本托管在我的个人仓库中。

`模块支持`：为了支持 BMF 模块的功能，我将 libbuiltin_modules 编译为共享对象文件（.so），并在运行时动态加载。

`构建脚本`：我提供了一些脚本，方便用户和开发者快速进行 wasm 环境的构建和开发。

#### 后续计划（Next steps）
- 支持多线程功能（multithreaded feature）。

- 尝试运行 AI 应用，例如 Stable Diffusion。

https://github.com/BabitMF/bmf/pull/130
