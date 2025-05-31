---
title: '安装部署'
linkTitle: '安装部署'
weight: 1
menu:
  main:
    weight: 1
    parent: '开始使用'
---

您可以通过 pip，docker，预编译二进制文件，从源代码构建等方式安装 BMF，选择您喜欢的一种即可。

BMF 支持 Python/C++/Go 跨语言调用，您可以通过任何语言调用用任何语言编写的模块。但是每种编程语言都有自己的要求。因此，如果您想通过 docker 安装之外的其它方法安装BMF并且有跨语言调用的需求，就需要设置相应的环境变量。详细说明请参阅以下各部分。

## 依赖

### 前置依赖

BMF 依赖一些库，您可以通过 apt、yum<!--、vcpkg--> 或 brew 安装它们。一般来说，除了下面介绍的 docker 安装方法，其他方法均需要安装这些库。以下是我们测试过的系统以及安装方法，包括常规依赖、Python、FFmpeg、CUDA 工具包等。

- 对于常规依赖，您需要在系统中安装所有 package。
- 对于 Python，只有调用 Python API 或通过预编译安装包（在github的release产物）调用 Python 模块时才需要安装，目前的 Python 版本要求：Mac ARM 3.9 以上，Linux 和 Windows 3.7 以上。如果使用 pip 安装，则无需更改现有的的 Python 版本。
- 对于 FFmpeg，我们目前支持 4.2 - 5.1 版本，将来可能会支持 6.x 版本。对于下面列出的 ubuntu、debian、CentOS:8 和 macOS，您可以使用 package 管理器安装。对于其他操作系统，您可能需要从源代码编译 FFmpeg。

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


### 编译 Python

如上所述，如果您想通过预编译安装包调用 Python API 或 Python模块，又无法通过 package 管理器安装 Python3.9，则需要从源代码编译。

```Shell
cd /opt
wget https://www.python.org/ftp/python/3.9.13/Python-3.9.13.tgz
tar xvf Python-3.9.13.tgz
cd Python-3.9.13
sudo ./configure --enable-optimizations --enable-shared
sudo make altinstall
```

### 编译 FFmpeg

另外，如上所述，从源代码编译 FFmpeg 是一个可选步骤，只有无法从 package 管理器安装时才需要。您可以自己编译，也可以使用我们提供的脚本（目前仅限 linux 和 macos）：

```Shell
git clone https://github.com/BabitMF/bmf bmf
cd bmf
./scripts/build_ffmpeg.sh x264 x265
```

### GPU 依赖（仅限 Linux）

#### FFmpeg

如果您打算在 GPU 上使用 BMF，则需要安装支持 GPU 的 FFmpeg。根据上述 apt 或 dnf 安装的 FFmpeg 有 nvdec 或 nvenc，您可以使用 `ffmpeg -encoders | grep nvenc` 来检查。如果没有，则需要先编译 GPU 版本的 FFmpeg：

```Shell
git clone https://github.com/BabitMF/bmf bmf
cd bmf
./scripts/build_ffmpeg.sh --device gpu
```

#### CUDA 工具包

如果您有 GPU 设备并且通过 `./scripts/build_ffmpeg.sh --device gpu` 安装 FFmpeg, CUDA 工具包将会自动安装。在其他情况下，请手动安装 CUDA 工具包，请参阅 [NVIDIA 官方网站](https://developer.nvidia.com/cuda-11-8-0-download-archive)

> 您还可以通过设置环境变量 `FFMPEG_ROOT_PATH` 来使用本地 FFmpeg。例如，将其设置为 `/usr/local`
> ```Shell
> export FFMPEG_ROOT_PATH=/usr/local
> ```

## Pip

需要 Python 3.6 到 3.12，但**不推荐**使用 3.6。如果您的 Python 低于 3.6.15，将会编译失败。

```Shell
pip install BabitMF
```

您还可以在已安装 CUDA 12.2 的 x86_64 arch 的 GPU 主机上安装 GPU 版本：

```Shell
pip install BabitMF-GPU
```

对于 C++ 或 Go 开发人员，您需要设置环境变量，以便编译器找到与 BMF 相关的库。您可以执行 `bmf_env` 来获取路径并在 shell 中执行。

> C++ 兼容性注意：不同的编译器对 std::string 类型的定义不同。编译自己的模块时，您可能需要向编译器传递 `-D_GLIBCXX_USE_CXX11_ABI=0`。是否需要取决于您的编译器使用情况。

### 支持的操作系统

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

 如果您希望使用 docker 来体验和开始使用 BMF，您可以根据自己的需求编译出所需的版本。我们提供的 docker 镜像基于 ubuntu 20.04，其中包含运行 BMF CPU 和 GPU 的完整环境依赖：**Cuda12.2、Pytorch 2.0、TensorRT 8.6.1、CV-CUDA 0.3**。 对于 GPU 环境，我们没有安装驱动，因为我们希望尽可能遵循并兼容用户的驱动版本。

在运行之前，请确保您的机器环境中包括 NVIDIA GPU 驱动，并且可以通过 **nvidia-smi** 正确获取 GPU 硬件信息。
```Shell
docker pull babitmf/bmf_runtime:latest
docker run --gpus all -e NVIDIA_DRIVER_CAPABILITIES=all -it babitmf/bmf_runtime:latest bash
```

我们默认提供 BMF CPU 的编译版本。如果您想要 BMF GPU 的编译版本，我们通过环境变量 CMAKE_ARGS 来控制。

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

## 预编译二进制文件

从[发布页面](https://github.com/BabitMF/bmf/releases)下载，使用 `tar` 解压，并设置环境变量以查找 BMF。例如：

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

## 从源代码构建

BMF 支持在以下三个平台编译和构建：Linux、Windows 和 Mac。您可以根据自己的需要选择您想要使用的方法。

**重要提示：CMake 版本要求**
从源代码构建 BMF 时：
- 基础版本要求：CMake 3.5 或更高版本
- 如果需要 CUDA 支持（默认开启），则要求 CMake 3.17 或更高版本

您可以通过运行 `cmake --version` 来检查当前的 CMake 版本。如果版本不满足要求，请先升级 CMake。

### Linux

```Shell
git clone https://github.com/BabitMF/bmf bmf
cd bmf
./build.sh
```

在某些特殊情况下，例如，如果用户不想包含 FFmpeg 的依赖项，则可以使用名为 `CMAKE_ARGS` 的环境变量从源代码构建独立于 FFmpeg 但依赖于 torch 的 BMF：

```Shell
export CMAKE_ARGS="-DBMF_ENABLE_FFMPEG=OFF -DBMF_ENABLE_TORCH=ON"
./build.sh
```

还有一些选项需要配置，默认值如下：

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

建议：关于 FFmpeg 兼容性，BMF 目前与 FFmpeg 4.0 - 5.1 版本完全兼容。我们建议使用 4.4 版本。

### Windows
BMF 使用 MSVC 工具链作为 Windows 平台上的编译工具。在编译 BMF 之前，您需要完成以下准备工作：
1. 首先，您需要安装 Visual Studio。我们支持的版本包括 2013、2015、2017、2019 和 2022，并在安装 VS 时安装 Windows SDK。
2. 安装并配置 ```msys2 mingw64``` 环境 https://www.msys2.org/
3. 完成以上两项后，请以管理员模式打开 x64 Native Tools Command Prompt for VS 20xx，进入 msys2 安装目录，执行 ``` msys2_shell.cmd -mingw64 -use-full-path```。您将进入 msys2 shell 命令窗口。
4. 您需要安装 [vcpkg](#https://github.com/microsoft/vcpkg) 并执行以下命令来安装一些依赖库：
```
pacman -Sy yasm automake autoconf git vim openssl-devel zlib-devel
./vcpkg.exe install bzip2:x64-windows zlib:x64-windows liblzma:x64-windows dlfcn-win32:x64-windows
```
5. 根据您要编译的产品安装 32 位或 64 位 Python 环境（我们支持 3.7 - 3.12），并配置环境变量。

完成以上步骤后，BMF 编译的准备工作已完成。现在您可以开始编译。编译命令如下：

```
Build Options:
--msvc msvc compiled version options=[2013, 2015, 2017, 2019, 2022]
bmf_ffmpeg integrates FFmpeg during compilation and compiles built-in Modules
--preset compile preset type options=[x86-Debug, x86-Release, x64-Debug, x64-Release]
```

假设您的本地环境是 64 位发布版本，您使用的 VS 版本是 2022，编译时需要使用 FFmpeg。编译命令如下：
```
./build_lite.sh --msvc=2022 bmf_ffmpeg --preset=x64-Release
```

执行后，build_win_lite 文件夹会生成 BMF.sln 项目文件，通过 Visual Studio 打开即可构建。


### macOS

macOS 端编译时需要注意以下几点：
1. 安装 FFmpeg 并配置环境变量
2. 如果您的 Mac 电脑的 CPU 芯片是 M1 或 M2 等 ARM 架构，则兼容的 Python 版本为（3.9 - 3.12）。因为 Mac 上 3.8 以下的 Python 版本是实验性功能，没有太多依赖支持。
3. 需要安装两个预依赖项：binutils 和 libncurses。在 ARM 架构下，前者可以直接通过 brew install binutils 安装，而后者可能需要您编译 libncursew。
为了在 macOS 上编译 ibncurses，您可以按照以下步骤操作：

     a. 打开终端应用程序并确保已安装 Xcode 命令行工具。如果尚未安装，请在终端中运行以下命令进行安装：
```xcode-select --install```

     b. 下载 ncurses 的源代码。 可以从 ncurses 官网下载最新版本的源码：https://invisible-island.net/ncurses/

     c. 将下载的源码文件解压，进入解压目录：

     ```
     tar -xzvf ncurses-x.x.tar.gz # Replace with the downloaded source code file name
     cd ncurses-x.x/ # Enter the decompressed directory
     ./configure --prefix=/usr/local/opt/ncurses
     make
     sudo make install
     ```

     d. BMF 依赖 libbfd 库，因此您需要安装 binutils
    
     ```
     wget https://ftp.gnu.org/gnu/binutils/binutils-2.43.1.tar.bz2
     tar xvf binutils-2.43.1.tar.bz2
     cd binutils-2.43.1
     ./configure --prefix=/usr/local/opt/binutils --enable-install-libiberty
     make -j8
     sudo make install
     ```
     > 注意事项：
     >
     > 在macOS上安装binutils，您可能遇到`clang: error: unsupported option '-print-multi-os-directory'`这样的报错，这个报错是由于clang不支持此选项，但在macOS平台上，此报错不会影响BMF所依赖库的安装，所以请忽略此报错

在进行编译操作之前，您需要检查本地 的 python、ffmpeg 是否链接到正确的版本，如果不是，您可能需要以下命令做出调整
```
brew unlink ffmpeg
brew link ffmpeg@4
brew link --force python@3.9 
export BMF_PYTHON_VERSION="3.9"
export LIBRARY_PATH=/usr/local/opt/binutils/lib:$LIBRARY_PATH
export CMAKE_PREFIX_PATH=/usr/local/opt/binutils:$CMAKE_PREFIX_PATH
```     

上面的命令将把安装路径配置为 ```/usr/local/opt/ncurses```。您也可以根据需要更改路径。编译安装完成后，可以在指定的安装路径中找到 libncurses 库文件。通过以上步骤，就可以在 macOS 上成功编译并安装 libncurses。请注意，该流程可能会因版本更新而发生变化。


完成以上准备工作后，您可以在 macOS 下编译 BMF，在一些高版本的编译器中，您可能会遇到 benchmark 库的编译错误，我们对此也进行了处理，您可以使用以下命令完成编译:
```
git submodule update --init --recursive
sed -i '' '/sigma_gn /s/^/\/\//g' bmf/hml/third_party/benchmark/src/complexity.cc
./build_osx.sh
```




## 安装

您可以将输出目录移至任意位置，然后设置环境变量以查找 BMF 库：

```Shell
cd ${path_to_bmf}
export C_INCLUDE_PATH=${C_INCLUDE_PATH}:$(pwd)/output/bmf/include
export CPLUS_INCLUDE_PATH=${CPLUS_INCLUDE_PATH}:$(pwd)/output/bmf/include
export LIBRARY_PATH=${LIBRARY_PATH}:$(pwd)/output/bmf/lib
export LD_LIBRARY_PATH=${LD_LIBRARY_PATH}:$(pwd)/output/bmf/lib

# only set if you want to use BMF in python
export PYTHONPATH=$(pwd)/output/bmf/lib:$(pwd)/output
```
