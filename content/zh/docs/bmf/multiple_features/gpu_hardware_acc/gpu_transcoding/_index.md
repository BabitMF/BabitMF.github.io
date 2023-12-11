---
title: 'GPU 硬件转码'
linkTitle: 'GPU 硬件转码'
weight: 1
---

# 如何使用 NVIDIA GPU 加速视频转码

NVIDIA GPU 具有一个或多个基于硬件的解码器和编码器，可以为多种流行的编解码器提供全加速的基于硬件的视频解码和编码。

如今，许多视频处理都依赖于深度学习方法。深度学习模型通常运行在 NVIDIA GPU 和 NVIDIA 开发的库上。因此，在这种情况下，将解码和编码从 CPU 转移到 GPU 可以获得一些性能收益。一个明显的收益点是可以减少 CPU 和 GPU 之间的复制开销。

在 `gpu_transcode` 文件夹，我们提供了多种示例来展示如何使用 GPU 解码和编码以及如何在 BMF 中结合 FFmpeg CUDA filter。

下方列出了示例。我们将详细解释它们。

- Decode videos
- Decode videos using multiple threads
- Encode videos
- Encode videos using multiple threads
- Transcode
- Transcode 1 to n
- Transcode using multiple threads

## 解码

在 BMF 中启用 GPU 解码非常简单。您只需要将 `"hwaccel": "cuda"` 添加到 `"video_params"` 。

注意，如果您使用 GPU 解码视频，则解码后的帧位于 GPU 内存中。所以如果您想在 CPU 端操作它们，不要忘记将这些帧复制到 CPU 内存中。在 BMF 中，您可以设置 GPU 解码，后跟 `cpu_gpu_trans_module` 或后跟 `hwdownload` filter。

更多详细信息请参阅 `test_gpu_decode()`。

## 编码

在 BMF 中，您可以在编码模块的 `video_params` 中添加 `"codec": "h264_nvenc"` 或 `"codec": "hevc_nvenc"` 以启用 GPU 编码。如果编码器的输入位于 GPU 内存中，您应该在 `video_params` 添加 `"pix_fmt": "cuda"`。

更多详细信息请参阅 `test_gpu_encode()` 和 `test_gpu_transcode()`。

## 转码

对于 GPU 转码，应该将前面提到的 GPU 编码和 GPU 编码结合起来。所有中间数据都在显存中，因此不需要再考虑额外的复制。

更多详细信息请参阅 `test_gpu_transcode()`。

`test_gpu_transcode_1_to_n()` 展示了 BMF 可以将一个视频同时转码为多个视频。只需要在同一个解码模块之后添加更多具有不同参数的编码模块即可。

## 多线程和多进程

某些 GPU 可能具有多个基于硬件的解码器和编码器。为了充分利用这些硬件，我们尽可能多的展示示例。BMF 可以通过 Python 多线程和多进程来启动这些示例。您可以在 `test_gpu_decode_multi_thread_perf`，`test_gpu_encode_multi_thread_perf` 和 `test_gpu_transcode_multi_thread_perf` 中查看示例。

对于多进程，有一件特殊的事情需要您注意。因此我们使用单独的脚本 `test_gpu_decode_multi_processes.py` 来展示如何在 BMF 中执行此操作。

应该在任务函数而不是在脚本文件的开头 `import bmf`。