---
title: 'GPU Hardware Transcoding'
linkTitle: 'GPU Hardware Transcoding'
weight: 5
---

# How to use NVIDIA GPU to accelerate video transcoding

NVIDIA GPUs have one or more hardware-based decoder and encoders which provides fully-accelerated hardware-based video decoding and encoding for several popular codecs.

Nowadays, many video processings rely on deep learning methods. The deep learning models usually run on the NVIDIA GPUs and libraries developed by NVIDIA. So, transferring the decoding and encoding from CPU to GPU can obtain benifit in such cases. One obvious benefit is that we can reduce the copy overhead between CPU and GPU.

In the `gpu_transcode` folder, we provide various examples to show how to use GPU decoding and encoding as well as how to combine the FFmpeg CUDA filters in the BMF.

The examples are listed below, we will explain them in detail.

- Decode videos
- Decode videos using multiple threads
- Encode videos
- Encode videos using multiple threads
- Transcode
- Transcode 1 to n
- Transcode using multiple threads

## Decode

In the BMF, enabling GPU decoding is really simple. What you need to do is to add `"hwaccel": "cuda"` in the `"video_params"`.

You should note that if you use GPU to decode videos, the decoded frames are in the GPU memory. So if you want to manipulate them at the cpu side, don't forget to copy these frames into cpu memory. In the BMF, you can set GPU decoding followed by a `cpu_gpu_trans_module` or followed by a `hwdownload` filter.

See more details in the `test_gpu_decode()`.

## Encode

In the BMF, you can add `"codec": "h264_nvenc"` or `"codec": "hevc_nvenc"` in the encode module's `video_params` to enable GPU encoding. If the inputs of the encoder are in the GPU memory, you should add `"pix_fmt": "cuda"` to the `video_params`.

See more details in the `test_gpu_encode()` and `test_gpu_transcode()`.

## Transcode

For GPU transcoding, you should combine the GPU encoding and GPU encoding metioned before. Since all the intermediate data are in the GPU memory, we don't need to consider extra copying any more.

See more details in the `test_gpu_transcode()`.

`test_gpu_transcode_1_to_n()` shows that BMF can transcode one video to several videos in the same time. Just add more encode modules with different parameters after the same decode module.

## Multiple threads and multiple processes

Some GPUs may have more than one hardware-based decoders and encoders. In order to fully utilize these hardwares, we have to start as many instances as possible. BMF can launch these instances through python multi-threading and multi-processing. You can see the examples in the `test_gpu_decode_multi_thread_perf`, `test_gpu_encode_multi_thread_perf` and `test_gpu_transcode_multi_thread_perf`.

For multi-processing, there's one special thing we should notice so that we use a seperate script `test_gpu_decode_multi_processes.py` to show how to do it in the BMF. 

We should `import bmf` in the task function rather than at the beginning of the script file. 