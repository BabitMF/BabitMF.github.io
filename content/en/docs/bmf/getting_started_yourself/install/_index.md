---
title: 'Install'
linkTitle: 'Install'
weight: 1
menu:
  main:
    weight: 1
    parent: 'Getting started'
---

You can install BMF with pip, docker, pre-built binary or build from source, choose the one you prefer.

BMF can implement c++/python/go cross-language calls, and you can call modules written in any language through any language. But each programming language has its own requirements, so in addition to the docker installation method, if you want to install it in other ways and have the need for cross-language calls, you need to set the corresponding environment variables. For details, please refer to the detailed description of each part.

## Dependencies

### Prerequisites

BMF depends on some libraries, which you can install via apt, yum<!--, vcpkg--> or brew. In general, except for the docker method described below. Here are the systems we tested and how to install them，include regular dependency, python, FFmpeg, CUDA toolkit and so on.

- For regular dependency, you need all packages installed on your system.
- For python, it is only required when you call the python api or call the python module through the pre-built package, and the python version requirement is 3.9 now. If installing BMF using pip, you don't need to change your existing python version.
- For FFmpeg, we currently support 4.x or 5.x versions, 6.x versions may be supported in the future. For ubuntu, debian, CentOS:8 and macOS listed below, you can use the package manager to install it. For other OS, you may need to compile FFmpeg from source.

<table>

<tr>
    <th></th>
    <th>ubuntu:20.04</th>
    <th>debian:11</th>
    <th>CentOS:8</th>
    <th>CentOS:7</th>
    <th>macos</th>
</tr>
<tr>
<th>regular dependency</th>
<td>

```bash
apt update
apt install -y make \
    git pkg-config \
    libssl-dev \
    cmake binutils-dev \
    libgoogle-glog-dev \
    gcc g++ yasm nasm
```

</td>
<td>

```bash
apt update
apt install -y make \
    git pkg-config \
    libssl-dev cmake \
    libgoogle-glog-dev \
    binutils-dev gcc \
    g++ wget sudo bzip2 \
    libffi-dev zlib1g-dev
```

</td>
<td>

```bash
# install dependencies
dnf -y upgrade libmodulemd
dnf -y install glibc-langpack-en epel-release epel-next-release
dnf makecache
dnf update -y
dnf config-manager --set-enabled powertools
dnf -y install make git pkgconfig cmake3 openssl-devel binutils-devel gcc gcc-c++ glog-devel
```

</td>
<td>

```bash
yum -y install epel-release
yum -y install make git pkgconfig openssl-devel \
    cmake3 binutils-devel glog-devel gcc gcc-c++ \
    which wget
# rename cmake3 to cmake
ln -s $(which cmake3) $(dirname $(which cmake3))/cmake
```

</td>
<td>

```bash
brew install make git pkg-config openssl cmake glog
```

</td>
<tr>
<th>python</th>
<td>

```bash
apt install -y python3.9 \
    python3-dev \
    python3-pip
```

</td>
<td>

```bash
apt install -y python3.9 \
    python3-dev \
    python3-pip
```

</td>
<td>

```bash
dnf -y install python39 python39-devel python39-pip 
```

</td>
<td>

yum repo of CentOS:7 has no python3.9 libraries now, and needs to be built from source.

</td>
<td>

```bash
brew install python@3.9
```

</td>
</tr>
<tr>
<th>FFmpeg</th>
<td>

```bash
apt install -y \
    ffmpeg \
    libavcodec-dev \
    libavdevice-dev \
    libavfilter-dev \
    libavformat-dev \
    libavresample-dev \
    libavutil-dev \
    libpostproc-dev \
    libswresample-dev \
    libswscale-dev
```

</td>
<td>

```bash
apt install -y \
    ffmpeg \
    libavcodec-dev \
    libavdevice-dev \
    libavfilter-dev \
    libavformat-dev \
    libavresample-dev \
    libavutil-dev \
    libpostproc-dev \
    libswresample-dev \
    libswscale-dev
```

</td>
<td>

```bash
dnf install -y https://download1.rpmfusion.org/free/el/rpmfusion-free-release-8.noarch.rpm
dnf install -y https://download1.rpmfusion.org/nonfree/el/rpmfusion-nonfree-release-8.noarch.rpm
dnf install -y ffmpeg ffmpeg-devel
```

</td>
<td>

yum repo of CentOS:7 has no ffmpeg libraries now, please follow the below steps to build from source.

</td>
<td>

```bash
brew install ffmpeg@4
export DYLD_LIBRARY_PATH="/usr/local/opt/ffmpeg@4/lib:$DYLD_LIBRARY_PATH"
```

</td>
</tr>
</table>


### Build Python

As mentioned above, if you want to call the python api or python module through the pre-built installation package, and you can not install python3.9 through the package manager, you need to compile from source:

```Shell
cd /opt
wget https://www.python.org/ftp/python/3.9.13/Python-3.9.13.tgz
tar xvf Python-3.9.13.tgz
cd Python-3.9.13
sudo ./configure --enable-optimizations
sudo make altinstall
```

### Build FFmpeg

Also, as mentioned above too, compiling FFmpeg from source is an optional step and is only required if you can't install it from the package manager. You can build it yourself, or use the script we provided(only linux and macos now):

```Shell
git clone https://github.com/BabitMF/bmf bmf
cd bmf
./scripts/build_ffmpeg.sh x264 x265
```

### GPU dependencies(Linux only)

#### FFmpeg

If you plan to use BMF on the GPU, FFmpeg with GPU support needs to be installed. According to the above apt or dnf installed ffmpeg has nvdec or nvenc, you can use `ffmpeg -encoders | grep nvenc` to check it. If not, you need to compile the GPU version of FFmpeg first:

```Shell
git clone https://github.com/BabitMF/bmf bmf
cd bmf
./scripts/build_ffmpeg.sh --device gpu
```

#### CUDA Toolkit

If you have a GPU device and you install FFmpeg via `./scripts/build_ffmpeg.sh --device gpu`, CUDA toolkit will be installed automatically. In other cases, please install the CUDA toolkit manually, refer to [NVIDIA official website](https://developer.nvidia.com/cuda-11-8-0-download-archive)

## Pip

Python 3.6 to 3.11 is required, but 3.6 is **NOT** recommended because we compile with python 3.6.15 and will fail if your python is lower than this version.

```Shell
pip install BabitMF
```

You can also install the GPU version on a GPU host with x86_64 arch where CUDA 11.8 has been installed:

```Shell
pip install BabitMF-GPU
```

For c++ or go developers, you may need to set environment variables so that the compiler can find BMF-related libraries. You can execute `bmf_env` to get the path and execute it in the shell.

> C++ Compatibility Note: Different compilers define the std::string type differently. You may need to pass `-D_GLIBCXX_USE_CXX11_ABI=0` to the compiler when compiling your own module. Whether you need it depends on your compiler usage.

### supported OS

|              | manylinux x86_64 cpu | manylinux x86_64 gpu | manylinux i686 | manylinux aarch64 | manylinux ppc64le | manylinux s390x | macOS Intel | macOS Apple Silicon | macOS Universal2 |
| ------------ | -------------------- | -------------------- | -------------- | ----------------- | ----------------- | --------------- | ----------- | ------------------- | ---------------- |
| CPython 3.6  | ✅                   | ✅                   | ✅             | ✅                | ✅                | ✅              | ✅          | N/A                 | N/A              |
| CPython 3.7  | ✅                   | ✅                   | ✅             | ✅                | ✅                | ✅              | ✅          | N/A                 | N/A              |
| CPython 3.8  | ✅                   | ✅                   | ✅             | ✅                | ✅                | ✅              | ✅          | N/A                 | N/A              |
| CPython 3.9  | ✅                   | ✅                   | ✅             | ✅                | ✅                | ✅              | ✅          | ✅                  | ✅               |
| CPython 3.10 | ✅                   | ✅                   | ✅             | ✅                | ✅                | ✅              | ✅          | ✅                  | ✅               |

## Docker

 If you want to use docker to experience and get started with BMF, you can compile the version you need according to your needs. The docker image we provide is based on ubuntu 20.04, which contains the full environment dependencies for running BMF CPU && GPU: **Cuda11.8, Pytorch 2.0, TensorRT 8.6.1, CV-CUDA 0.3**, for the GPU environment, we did not install the driver because We hope to follow as much as possible and be compatible with the user's driver version.

Before running, please make sure that NVIDIA GPU Driver is included in your machine environment, and you can correctly obtain gpu hardware information through **nvidia-smi**.
```Shell
docker pull babitmf/bmf_runtime:latest
docker run --gpus all -e NVIDIA_DRIVER_CAPABILITIES=all -it babitmf/bmf_runtime:latest bash
```

We provide a compiled version of BMF CPU by default. If you want to compile the BMF version of GPU, we control it through the environment variable CMAKE_ARGS

```Shell
export CMAKE_ARGS="-DBMF_ENABLE_CUDA=ON"
./build.sh
```

<!--
You also can rebuild BMF to get the binaries that GPU is enabled:

```Shell
TODO
```
-->

## Pre-Built Binary

Download from the [release page](https://github.com/BabitMF/bmf/releases), extract it with `tar`, and set the environment variable to find BMF, for example:

```Shell
wget https://github.com/sbravehk/test_pub/releases/download/v0.1.1/bmf-bin-linux-x86_64.tar.gz
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

And in some special condition, for example, if the user doesn't want to include the dependency of FFmpeg, the FFmpeg independent and torch dependent BMF can be built from source with environment variable named `CMAKE_ARGS`:

```Shell
export CMAKE_ARGS="-DBMF_ENABLE_FFMPEG=OFF -DBMF_ENABLE_TORCH=ON"
./build.sh
```

There are also some options to be configured, and the default values are:

```CMake
option(BMF_ENABLE_BREAKPAD "Enable build with breakpad support" OFF)
option(BMF_ENABLE_CUDA "Enable CUDA support" ON)
option(BMF_ENABLE_TORCH "Enable CUDA support" OFF)
option(BMF_ENABLE_PYTHON "Enable build with python support" ON)
option(BMF_ENABLE_GLOG "Enable build with glog support" OFF)
option(BMF_ENABLE_JNI "Enable build with JNI support" OFF)
option(BMF_ENABLE_FFMPEG "Enable build with ffmpeg support" ON)
option(BMF_ENABLE_MOBILE "Enable build for mobile platform" OFF)
option(BMF_ENABLE_TEST "compile examples and tests" ON)
```

<!--
### Testing (Optional)

TODO
-->

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
