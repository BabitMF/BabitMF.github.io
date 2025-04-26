---
title: 'Quick Experience'
linkTitle: 'Quick Experience'
weight: 2
---

In this section, we will directly showcase the capabilities of the BMF framework around six dimensions: **Transcode**, **Edit**, **Meeting/Broadcaster**, **GPU acceleration**, **AI Inference**, and **client-side Framework**. For all the demos provided below, corresponding implementations and documentation are available on Google Colab, allowing you to experience them intuitively.

### Transcode
This demo describes step-by-step how to use BMF to develop a transcoding program, including video transcoding, audio transcoding, and image transcoding. In it, you can familiarize yourself with how to use BMF and how to use FFmpeg-compatible options to achieve the capabilities you need.

If you want to have a quick experiment, you can try it on [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/BabitMF/bmf/blob/master/bmf/demo/transcode/bmf_transcode_demo.ipynb)

### Edit
The Edit Demo will show you how to implement a high-complexity audio and video editing pipeline through the BMF framework. We have implemented two Python modules, video_concat and video_overlay, and combined various atomic capabilities to construct a complex BMF Graph.

If you want to have a quick experiment, you can try it on [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/BabitMF/bmf/blob/master/bmf/demo/edit/bmf_edit_python.ipynb)

### Meeting/Broadcaster
This demo uses BMF framework to construct a simple broadcast service. The service provides an API that enables dynamic video source pulling, video layout control, audio mixing, and ultimately streaming the output to an RTMP server. This demo showcases the modularity of BMF, multi-language development, and the ability to dynamically adjust the pipeline.

Below is a screen recording demonstrating the operation of broadcaster:

![broadcaster](https://raw.githubusercontent.com/BabitMF/bmf/master/bmf/demo/broadcaster/broadcaster.gif)


### GPU acceleration

#### GPU Video Frame Extraction
The video frame extraction acceleration demo shows:
1. BMF flexible capability of:

   *   Multi-language programming, we can see multi-language modules work together in the demo
   *   Ability to extend easily, there are new C++, Python modules added simply
   *   FFmpeg ability is fully compatible

2. Hardware acceleration quickly enablement and CPU/GPU pipeline support

   *   Heterogeneous pipeline is supported in BMF, such as process between CPU and GPU
   *   Useful hardware color space conversion in BMF

If you want to have a quick experiment, you can try it on [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/BabitMF/bmf/blob/master/bmf/demo/video_frame_extraction/video_frame_extraction_acceleration.ipynb)

#### GPU Video Transcoding and Filtering

The GPU transcoding and filter module demo shows:
1. Common video/image filters in BMF accelerated by GPU
2. How to write GPU modules in BMF

The demo builds a transcoding pipeline which fully runs on GPU:

decode->scale->flip->rotate->crop->blur->encode

If you want to have a quick experiment, you can try it on [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/BabitMF/bmf/blob/master/bmf/demo/gpu_module/gpu_module_demo_colab.ipynb)


### AI inference

#### LLM preprocessing

The [prototype]() of how to build a video preprocessing for LLM training data in Bytedance, which serves billions of clip processing each day.

The input video will be split according to scene change, and subtitles in the video will be detected and cropped by OCR module, and the video quality will be assessed by BMF provided aesthetic module.
After that, the finalized video clips will be encoded as output.

If you want to have a quick experiment, you can try it on [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/BabitMF/bmf/blob/master/bmf/demo/colorization_python/deoldify_demo_colab.ipynb)

 #### Deoldify

 This demo shows how to integrate the state of art AI algorithms into the BMF video processing pipeline. The famous open source colorization algorithm [DeOldify](https://github.com/jantic/DeOldify) is wrapped as a BMF pyhton module in less than 100 lines of codes. The final effect is illustrated below, with the original video on the left side and the colored video on the right. 

 If you want to have a quick experiment, you can try it on [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/BabitMF/bmf/blob/master/bmf/demo/colorization_python/deoldify_demo_colab.ipynb)

 ![deoldify](https://raw.githubusercontent.com/BabitMF/bmf/master/bmf/demo/colorization_python/deoldify.gif)

#### Supper Resolution
This demo implements the super-resolution inference process of [Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN) as a BMF module, showcasing a BMF pipeline that combines decoding, super-resolution inference and encoding.

If you want to have a quick experiment, you can try it on [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/BabitMF/bmf/blob/master/bmf/demo/video_enhance/bmf-enhance-demo.ipynb)


#### Video Quality Score

This demo shows how to invoke our aesthetic assessment model using bmf. Our deep learning model Aesmode has achieved a binary classification accuracy of 83.8% on AVA dataset, reaching the level of academic SOTA, and can be directly used to evaluate the aesthetic degree of videos by means of frame extraction processing. 

If you want to have a quick experiment, you can try it on [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/BabitMF/bmf/blob/master/bmf/demo/aesthetic_assessment/aesmod_bmfv3_fin.ipynb)

#### Face Detect With TensorRT

This Demo shows a full-link face detect pipeline based on TensorRT acceleration, which internally uses the TensorRT-accelerated Onnx model to process the input video. It uses the NMS algorithm to filter repeated candidate boxes to form an output, which can be used to process a Face Detection Task efficiently.

If you want to have a quick experiment, you can try it on [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/BabitMF/bmf/blob/master/bmf/demo/face_detect/facedetect_demo_colab.ipynb)

### Client-side Framework

#### Edge AI models
This case illustrates the procedures of integrating an external algorithm module into the BMFLite framework and management of its execution.

<img src="https://raw.githubusercontent.com/BabitMF/bmf/master/bmf_lite/iOS/data/sd1.gif" alt="sr" width="250" height="360">

#### Real-time denoise
This example implements the denoise algorithm as a BMF module, showcasing a BMF pipeline that combines video capture, noise reduction and rendering.

<img src="https://raw.githubusercontent.com/BabitMF/bmf/master/bmf_lite/android/app/src/main/res/effect-data/denoise.gif" alt="sr" width="250" height="360" >