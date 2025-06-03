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

BMF enables C++/Python/go cross-language calls, and you can call modules written in any language by any language. But each programming language has its own requirements. Therefore, if you want to install it in other ways besides docker installation and have the need for cross-language calls, you need to set the corresponding environment variables. Please refer to each part for detailed descriptions.

## Dependencies

### Prerequisites

BMF depends on some libraries, which you can install via apt, yum<!--, vcpkg--> or brew. In general, except for the docker method described below. Here are the systems we tested and how to install them, including regular dependency, python, FFmpeg, CUDA toolkit and so on.

- For regular dependency, you need all packages installed on your system.
- For python, it is only required when you call the python api or call the python module through the pre-built package (the release product on github), and the python version requirement is 3.9 now. If installing BMF using pip, you don't need to change your existing python version.
- For FFmpeg, we currently support 4.x or 5.x versions, and may support version 6.x in the future. For ubuntu, debian, CentOS:8 and macOS listed below, you can use the package manager to install it. For other OS, you may need to compile FFmpeg from source.

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
```

</td>
</tr>
</table>


### Build Python

As mentioned above, if you want to call the python api or python module through the pre-built installation package, and are unable to install python3.9 through the package manager, you need to compile from source:

```Shell
cd /opt
wget https://www.python.org/ftp/python/3.9.13/Python-3.9.13.tgz
tar xvf Python-3.9.13.tgz
cd Python-3.9.13
sudo ./configure --enable-optimizations --enable-shared
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

> You can also use local FFmpeg by setting the environment variable `FFMPEG_ROOT_PATH`. For example, set it to `/usr/local`.
> ```Shell
> export FFMPEG_ROOT_PATH=/usr/local
> ```

## Pip

Python 3.6 to 3.12 is required, but 3.6 is **NOT** recommended because we compile with python 3.6.15 and will fail if your python is lower than this version.

```Shell
pip install BabitMF
```

You can also install the GPU version on a GPU host with x86_64 arch where CUDA 12.2 has been installed:

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
| CPython 3.11 | ✅                   | ✅                   | ✅             | ✅                | ✅                | ✅              | ✅          | ✅                  | ✅               |
| CPython 3.12 | ✅                   | ✅                   | ✅             | ✅                | ✅                | ✅              | ✅          | ✅                  | ✅               |
## Docker

 If you want to use docker to experience and get started with BMF, you can compile the version you need according to your needs. The docker image we provide is based on ubuntu 20.04, which contains the full environment dependencies for running BMF CPU && GPU: **Cuda12.2, Pytorch 2.0, TensorRT 8.6.1, CV-CUDA 0.3**. For the GPU environment, we did not install the driver because we hope to follow and be compatible with the user’s driver version as much as possible.

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

BMF supports compilation and builds on three platforms: Linux, Windows, and Mac. You can choose the method you want to use according to your needs.

**Important Note: CMake Version Requirements**
When building BMF from source:
- Base requirement: CMake 3.5 or higher
- If CUDA support is needed (enabled by default), CMake 3.17 or higher is required
  
You can check your current CMake version by running `cmake --version`. If the version does not meet the requirements, please upgrade CMake.

### Linux

```Shell
git clone https://github.com/BabitMF/bmf bmf
cd bmf
./build.sh
```

And in some special conditions, for example, if the user doesn't want to include the dependency of FFmpeg, the FFmpeg independent and torch dependent BMF can be built from source with an environment variable named `CMAKE_ARGS`:

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

Tips: Regarding FFmpeg compatibility, BMF is currently fully compatible with FFmpeg versions: 4.0 - 5.1. We recommend using version 4.4.

### Windows
BMF uses the MSVC toolchain as the compilation tool on the Windows platform. Before compiling BMF, you need to complete the following preparatory work:
1. First, you need to install Visual Studio. Our supported versions include 2013, 2015, 2017, 2019 and 2022, and install the Windows SDK when installing VS.
2. Install and configure the ```msys2 mingw64``` environment https://www.msys2.org/
3. When completing the above two items, please open x64 Native Tools Command Prompt for VS 20xx in administrator mode, enter the msys2 installation directory, and execute``` msys2_shell.cmd -mingw64 -use-full-path```. You will enter the msys2 shell command window.
4. You need to install [vcpkg](https://github.com/microsoft/vcpkg) and execute the following command to install some dependent libraries:
```
pacman -Sy yasm automake autoconf git vim openssl-devel zlib-devel
./vcpkg.exe install bzip2:x64-windows zlib:x64-windows liblzma:x64-windows dlfcn-win32:x64-windows
```
5. Install 32-bit or 64-bit Python environment (we support 3.7 - 3.12) according to the product you want to compile, and configure the environment variables.

After completing the above steps, the preparatory work for BMF compilation is completed. Now you can start compilation. The compilation command is as follows:

```
Build Options:
--msvc msvc compiled version options=[2013, 2015, 2017, 2019, 2022]
bmf_ffmpeg integrates FFmpeg during compilation and compiles built-in Modules
--preset compile preset type options=[x86-Debug, x86-Release, x64-Debug, x64-Release]
```

Assuming that your local environment is a 64-bit Release version, the VS version you are using is 2022, and you need to use FFmpeg when compiling. The compilation command is as follows:
```
./build_win_lite.sh --msvc=2022 bmf_ffmpeg --preset=x64-Release
```

After execution, the build_win_lite folder will generate the BMF.sln project file, which can be built by opening it through Visual Studio.


### macOS

When compiling on the macOS side, you need to pay attention to the following points:
1. Install FFmpeg and configure environment variables
2. If the CPU chip of your Mac computer is an ARM architecture such as M1 or M2, the compatible version of Python is (3.9 - 3.12). The reason is that the Python arm version below 3.8 on the Mac is an experimental function and does not have much dependency support.
3. Two pre-dependencies need to be installed: binutils and libncurses. Under ARM architecture, the former can be installed directly through brew install binutils, while the latter may require you to compile libncursew.
To compile libncurses on macOS, you can follow these steps:

     a. Open the Terminal application and make sure you have the Xcode command line tools installed. If it is not installed yet, run the following command in the terminal to install it:
```xcode-select --install```

     b. Download the source code of ncurses. You can download the latest version of the source code from the ncurses official website: https://invisible-island.net/ncurses/

     c. Unzip the downloaded source code file and enter the unzipped directory:

     ```
     tar -xzvf ncurses-x.x.tar.gz # Replace with the downloaded source code file name
     cd ncurses-x.x/ # Enter the decompressed directory
     ./configure --prefix=/usr/local/opt/ncurses
     make
     sudo make install
     ```

     d. BMF depends on libbfd, so you need to install binutils
     ```
     wget https://ftp.gnu.org/gnu/binutils/binutils-2.43.1.tar.bz2
     tar xvf binutils-2.43.1.tar.bz2
     cd binutils-2.43.1
     ./configure --prefix=/usr/local/opt/binutils --enable-install-libiberty
     make -j8
     sudo make install
     ```
     > Notes:
     >
     > When installing binutils on macOS, you may encounter an error such as `clang: error: unsupported option '-print-multi-os-directory'`. This error is because clang does not support this option. However, on the macOS platform, this error will not affect the installation of BMF's dependent libraries, so please ignore this error.
Before compiling, you need to check whether the local python and ffmpeg are linked to the correct version. If not, you may need to make adjustments with the following commands:
```
brew unlink ffmpeg
brew link ffmpeg@4
brew link --force python@3.9 
export BMF_PYTHON_VERSION="3.9"
export LIBRARY_PATH=/usr/local/opt/binutils/lib:$LIBRARY_PATH
export CMAKE_PREFIX_PATH=/usr/local/opt/binutils:$CMAKE_PREFIX_PATH

```
The above command will configure the installation path to ```/usr/local/opt/ncurses```. You can also change the path as needed. After compilation and installation are complete, you should be able to find the libncurses library file in the specified installation path. With the above steps, you can successfully compile and install libncurses on macOS. Please note that the process may change due to version updates.

After completing preparatory works above, you can compile BMF under macOS and use the command, in some higher version compilers, you may encounter compilation errors of the benchmark library, and we have also dealt with them. You could make the compilation by using commands followed:
```
git submodule update --init --recursive
sed -i '' '/sigma_gn /s/^/\/\//g' bmf/hml/third_party/benchmark/src/complexity.cc
./build_osx.sh
```




## Installing

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
