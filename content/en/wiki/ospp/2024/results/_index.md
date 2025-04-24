---
title: 'Results'
linkTitle: 'Results'
weight: 1
---

## Introduction
This page shows the results from the student projects that were part of [OSPP 2024](../../2024/).

### Frame Distributed Video Enhancement(刘奇翰)
---

I'm excited to introduce a new feature that enables local distribution capability for BMF, allowing users to easily
parallelize computations on a single node.

In this commit, I've implemented the necessary code changes to support multi-threading for single node. To enable this
feature, users can simply add an option parameter "thread":<number> when setting up these nodes, and the framework will create multiple distributed nodes to process data in parallel.

Key Changes:

- update enhance_demo.py
- add internal module: split_module and assemble_module
- add copy constructors in ModuleConfig, StreamConfig, NodeMetaInfo, NodeConfig
- add methods and variables in NodeConfig
- add create_split_node, create_assemble_node, process_multi_thread functions in Optimizer
- update node.cpp
- add new parameter scheduler in the Decode and Encode method in builder
- update connector.cpp
- add new test cases distributed_node

https://github.com/BabitMF/bmf/pull/129

### Webassembly ControlNet(邱奇琛)
---

#### Overview
In this pull request, I ported a limited bmf to web assembly, and successfully started it in the Chrome browser.

I finished this work

`Dependency handling`: The BMF project relies on several external libraries, such as FFmpeg, x264, and x265. To resolve linking issues in the WASM environment, I adjusted the compilation options for these libraries, which are currently maintained in my personal repository.

`Support modules`: To support the features of the BMF module, I compiled libbuiltin_modules as a shared object (.so) and loaded it dynamically at runtime.

`Building scrip`t: I provide some scripts to help users and developers to easily use and develop in wasm.

#### Next steps
- Support multithreaded feature.
- Try to run an AI application, for example,stable diffusion.

https://github.com/BabitMF/bmf/pull/130