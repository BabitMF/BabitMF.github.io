---
title: '快速体验'
linkTitle: '快速体验'
weight: 2
---

本节，我们将围绕五个方面直接展示BMF框架的能力：**转码**，**编辑**，**会议/广播**，**GPU+CPU加速**和**AI**。下面所提供的所有demo都可在Goole Colab上找到相应的实现方法和文档，让您可以直观地体验它们。

### 转码
本demo将逐步介绍如何使用BMF开发转码程序，包括视频转码、音频转码和图像转码。您可以从中熟悉如何使用BMF，以及如何使用与FFmpeg兼容的选项来实现所需的能力。

快速体验：[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/BabitMF/bmf/blob/master/bmf/demo/transcode/bmf_transcode_demo.ipynb)

### 编辑
本demo展示了如何通过BMF框架实现高复杂度的音频和视频编辑pipeline。我们实现了video_concat和video_overlay两个Python模块，并结合各种原子能力构建了一个复杂的BMF Graph。

快速体验：[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/BabitMF/bmf/blob/master/bmf/demo/edit/bmf_edit_python.ipynb)

### 会议/广播
本demo使用BMF框架构建一个简单的广播服务。该服务提供的API可实现动态视频拉取、视频布局控制、音频混合，并最终将输出流式传输到RTMP服务器。本demo展示了BMF的模块化、多语言开发以及动态调整pipeline的能力。

下方是一个广播操作的录频演示：

![](bmf/demo/broadcaster/broadcaster.gif)


### CPU+GPU加速
#### 视频帧提取
视频帧提取加速demo展示了：
1. BMF的灵活能力：

   *   多语言编程，在这个demo中我们可以看见多语言模块协同工作
   *   易于扩展，可以轻松添加新的Python、C++模块
   *   完全兼容FFmpeg

2. 支持快速硬件加速以及CPU/GPU pipeline

   *   BMF支持异构pipeline，例如CPU和GPU之间的进程
   *   BMF具有有用的硬件color space conversion能力
快速体验：[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/BabitMF/bmf/blob/master/bmf/demo/video_frame_extraction/video_frame_extraction_acceleration.ipynb)

#### GPU视频处理
GPU转码和filter模块demo展示了：
1. 由GPU加速的BMF中常见的视频/图像filter
2. 如何写BMF的GPU模块

本demo构建了一个完全在GPU上运行的转码pipeline：

decode->scale->flip->rotate->crop->blur->encode

快速体验：[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/BabitMF/bmf/blob/master/bmf/demo/gpu_module/gpu_module_demo_colab.ipynb)


### AI
#### Deoldify
本demo展示了如何将最先进的AI算法集成到BMF的视频处理pipeline。著名的开源着色算法[DeOldify](https://github.com/jantic/DeOldify)被封装在BMF Python模块，代码不到100行。最终的效果如下图所示，左边是原视频，右边是彩色视频：

快速体验：[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/BabitMF/bmf/blob/master/bmf/demo/colorization_python/deoldify_demo_colab.ipynb)

![](bmf/demo/colorization_python/deoldify.gif)
 
#### 超分辨率
本demo将[Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN)的超分辨率推理过程实现为BMF模块，展示了一个结合解码、超分辨率推理和编码的BMF pipeline。

快速体验：[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/BabitMF/bmf/blob/master/bmf/demo/video_enhance/bmf-enhance-demo.ipynb)


#### 视频质量打分
本demo展示了如何使用BMF调用美学评估模型。深度学习模型Aesmode在AVA数据集上的二元分类准确率达到了83.8%，达到学术届SOTA的水平，并且可以通过帧提取处理直接用于评估视频的美学程度。

快速体验：[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/BabitMF/bmf/blob/master/bmf/demo/aesthetic_assessment/aesmod_bmfv3_fin.ipynb)

#### 使用TensorRT进行人脸检测
本demo展示了一个基于**TensorRT**加速的全链路人脸检测pipeline，其内部使用TensorRT加速的Onnx模型来处理输入视频。它使用NMS算法过滤重复的候选框，形成输出，可用于高效处理人**脸检测**任务。

快速体验：[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/BabitMF/bmf/blob/master/bmf/demo/face_detect/facedetect_demo_colab.ipynb)