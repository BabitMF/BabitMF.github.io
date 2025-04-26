---
title: 'Overview'
linkTitle: 'Overview'
weight: 1
---


# BMF - Cross-platform, multi-language, customizable video processing framework with strong GPU acceleration

**BMF (Babit Multimedia Framework)** is a cross-platform, multi-language, customizable multimedia processing framework developed by [**ByteDance**](https://www.bytedance.com/en).
With over 4 years of testing and improvements, BMF has been tailored to adeptly tackle challenges in our real-world production environments. It is currently widely used in ByteDance's video streaming, live transcoding, cloud editing and mobile pre/post processing scenarios. More than 2 billion videos are processed by the framework every day.

Here are some key features of BMF:

- **Cross-Platform Support:** Native compatibility with Linux, Windows, and macOS, as well as optimization for both x86 and ARM CPUs.

- **Easy to use:** BMF provides Python, Go, and C++ APIs, allowing developers the flexibility to code in their favourite languages.

- **Customizability:** Developers can enhance the framework's features by adding their own modules independently because of BMF decoupled architecture.

- **High performance:** BMF has a powerful scheduler and strong support for heterogeneous acceleration hardware. Moreover, [**NVIDIA**](https://www.nvidia.com/) has been cooperating with us to develop a highly optimized GPU pipeline for video transcoding and AI inference.

- **Efficient data conversion:** BMF offers seamless data format conversions across popular frameworks (FFmpeg/Numpy/PyTorch/OpenCV/TensorRT), conversion between hardware devices (CPU/GPU), and color space and pixel format conversion.


[**BMFLite**](./bmf_lite/README.md) is a client-side cross-platform, lightweight, more efficient client-side multimedia processing framework.
So far, the BMFLite client-side algorithm is used in apps such as Douyin/Xigua, serving more than one billion users in live streaming/video playing/pictures/cloud games and other scenarios, and processing videos and pictures trillions of times every day.

Dive deeper into BMF's capabilities on our [website](https://babitmf.github.io/) for more details.