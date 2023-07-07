---
title: 'Install'
linkTitle: 'Install'
weight: 1
menu:
  main:
    weight: 1
    parent: 'Getting started'
---

[toc]

You can install BMF with pip, docker, pre-built binary or build from source, choose the one you prefer.

BMF can implement c++/python/go cross-language calls, and you can call modules written in any language through any language. But each programming language has its own requirements, so in addition to the docker installation method, if you want to install it in other ways and have the need for cross-language calls, you need to set the corresponding environment variables. For details, please refer to the detailed description of each part.

## Dependencies

### Prerequisites

These are all dependencies required by BMF. You can install them via apt(ubuntu), yum(centos), brew(Macos) or dpkg(windows):

```Shell
# ubuntu or debian
apt install -y make git pkg-config libssl-dev cmake python3 python3-dev python3-pip binutils-dev libgoogle-glog-dev gcc g++

# centos or rhel
yum -y install epel-release
yum -y install make git pkgconfig openssl-devel  cmake3 python3 python3-devel python3-pip binutils-devel glog-devel gcc gcc-c++
ln -s $(which cmake3) $(dirname $(which cmake3))/cmake # rename cmake3 to cmake

# MacOS
TODO
# windows
TODO
```

### FFmpeg Installation

In general, except for the docker method described below, FFmpeg 4.x or 5.x needs to be installed before using BMF. 

If you plan to install BMF via pip or prebuilt packages, and your system is ubuntu, debian or centos8, you can use the package manager to install FFmpeg:

```Shell
# ubuntu or debian
apt update
apt install ffmpeg

# centos8
dnf install -y epel-release epel-next-release
dnf config-manager --set-enabled powertools
dnf install -y https://download1.rpmfusion.org/free/el/rpmfusion-free-release-8.noarch.rpm
dnf install -y https://download1.rpmfusion.org/nonfree/el/rpmfusion-nonfree-release-8.noarch.rpm
dnf install -y ffmpeg ffmpeg-devel
```

However, FFmpeg installed via apt has no development libraries(centos8 has), so if you use another operating system, or plan to build BMF from  source, you will need to build FFmpeg from the source too. You can use the script we provided(ONLY linux/macos now), or build it yourself:

```Shell
git clone https://github.com/BabitMF/bmf bmf
cd bmf
# The first parameter is cpu or gpu. If it is gpu, cuda toolkit will be installed and Nvidia's codec will be integrated into ffmpeg.
# Other parameters are codecs that need to be integrated, currently nasm/yasm/x264/x265/fdk-aac/mp3lame/opus are supported
./scripts/build_ffmpeg.sh cpu x264 x265
```

### CUDA Toolkit Installation

If you have a GPU device and you install FFmpeg via `./scripts/build_ffmpeg.sh gpu`, CUDA toolkit will be installed automatically. In other cases, please install the CUDA toolkit manually, refer to [NVIDIA official website](https://developer.nvidia.com/cuda-11.0-download-archive)

## Pip

Python 3.6 to 3.10 is required: Additionally, FFmpeg 4.x or 5.x should be installed before installing BMF with pip.

```Shell
pip install -i https://test.pypi.org/simple/ BabitMF==0.0.4
```

You can also install the GPU version on a GPU host with x86_64 arch where CUDA 11 has been installed:

```Shell
pip install -i https://test.pypi.org/simple/ BabitMF-GPU
```

Then set the environments if you are a c++/go developer:

```Shell
package_name=BabitMF # or BabitMF-GPU

# This step will output some shell commands to find the BMF development library.
# Please execute these commands in the terminal, or add to your shell configuration file
bmf_cpp_adapt ${package_name} 

# you also need to run bmf_cpp_restore when uninstall BMF
bmf_cpp_restore ${package_name}
```

## Docker

It is strongly recommended to use docker to experience and get started with BMF, because it supports many dependencies that other installation methods do not support, such as torch, opencv, openmp, etc. You can compile the version you need according to your needs.

```Shell
docker pull ghcr.io/sbravehk/test_pub:latest
```

You also can rebuild BMF via `./build.sh` to get the binaries that GPU is enabled.

## Pre-Built Binary

Download from the [release page](https://github.com/BabitMF/bmf/releases), extract it with tar, and set the environment variable to find BMF:

```Shell
wget https://github.com/sbravehk/test_pub/releases/download/v0.0.3/bmf-bin-linux-x86_64.tar.gz
tar xvf bmf-bin-linux-x86_64.tar.gz
export C_INCLUDE_PATH=${C_INCLUDE_PATH}:$(pwd)/output/bmf/include
export CPLUS_INCLUDE_PATH=${CPLUS_INCLUDE_PATH}:$(pwd)/output/bmf/include
export LIBRARY_PATH=${LIBRARY_PATH}:$(pwd)/output/bmf/lib
export LD_LIBRARY_PATH=${LD_LIBRARY_PATH}:$(pwd)/output/bmf/lib

# only set if you want to use BMF in python
export PYTHONPATH=$(pwd)/output/bmf/lib:$(pwd)/output
```

## Building from Source

### Building

```Shell
git clone https://github.com/BabitMF/bmf bmf
cd bmf
./build.sh
```

### Testing (Optional)

TODO

### Installing

You can remove the output directory to anywhere you want, then set environments to find BMF libraries:

```Shell
cd ${path_to_bmf}
export C_INCLUDE_PATH=${C_INCLUDE_PATH}:$(pwd)/output/bmf/include
export CPLUS_INCLUDE_PATH=${CPLUS_INCLUDE_PATH}:$(pwd)/output/bmf/include
export LIBRARY_PATH=${LIBRARY_PATH}:$(pwd)/output/bmf/lib
export LD_LIBRARY_PATH=${LD_LIBRARY_PATH}:$(pwd)/output/bmf/lib

# only set if you want to use BMF in python
export PYTHONPATH=$(pwd)/output/bmf/lib:$(pwd)/output
```

 