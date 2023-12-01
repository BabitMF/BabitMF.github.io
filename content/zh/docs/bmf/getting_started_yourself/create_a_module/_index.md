---
title: '创建模块'
linkTitle: ''
weight: 4
menu:
  main:
    weight: 4
    parent: '开始使用'
---

## 内置模块

BMF的内置模块包括常用的视频处理模块，开发者可以直接使用这些模块来实现视频应用，包括基于FFmpeg的解码器、filter和编码器模块，以及更多GPU处理模块。有关内置模块的详细说明，请参阅[ffmpeg_fully_compatible](https://babitmf.github.io/docs/bmf/multiple_features/ffmpeg_fully_compatible/)<!-- and [gpu_modules_introduction]()-->.

## 定制模块开发

 如果您想开发自己的模块，请遵循以下说明。

目前支持Python、C++、go模块。您可以使用任意语言编写模块，也可以使用任意语言调用模块。对于每种语言，我们都在这里提供了一个最小化示例。快速体验：[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/BabitMF/bmf/blob/master/bmf/test/customize_module/bmf_customize_demo_latest.ipynb)

### python模块

创建一个`my_python_module`目录并在`my_python_module/my_module.py`中编写以下Python代码：

```Python
from bmf import Module, Log, LogLevel, InputType, ProcessResult, Packet, Timestamp, scale_av_pts, av_time_base, \
    BmfCallBackType, VideoFrame, AudioFrame

class my_module(Module):
    def __init__(self, node, option=None):
        self.node_ = node
        self.option_ = option
        pass

    def process(self, task):
        for (input_id, input_packets) in task.get_inputs().items():

            # output queue
            output_packets = task.get_outputs()[input_id]

            while not input_packets.empty():
                pkt = input_packets.get()

                # process EOS
                if pkt.timestamp == Timestamp.EOF:
                    Log.log_node(LogLevel.DEBUG, task.get_node(), "Receive EOF")
                    output_packets.put(Packet.generate_eof_packet())
                    task.timestamp = Timestamp.DONE
                    return ProcessResult.OK

                # copy input packet to output
                if pkt.defined() and pkt.timestamp != Timestamp.UNSET:
                    output_packets.put(pkt)
                    # Log.log_node(LogLevel.DEBUG, self.node_,
                    #              "process input", input_id, 'packet',
                    #              output_packets.queue[0].get_timestamp())

        return ProcessResult.OK
```

### C++模块

实现您自己的C++类，继承自[the Module base class](/docs/bmf/api/api_in_cpp/module/)。在最简单的情况下，您只需要实现process方法。创建一个`my_cpp_module`目录，并在`cpp_copy_module/copy_module.h`中编写以下C++代码：

```C++
#ifndef BMF_COPY_MODULE_H
#define BMF_COPY_MODULE_H

#include <bmf/sdk/bmf.h>
#include <bmf/sdk/packet.h>

USE_BMF_SDK_NS

class CopyModule : public Module
{
public:
    CopyModule(int node_id,JsonParam option) : Module(node_id,option) { }

    ~CopyModule() { }

    virtual int process(Task &task);
};

#endif
```

and `cpp_copy_module/copy_module.cpp`:

```C++
#include "copy_module.h"

int CopyModule::process(Task &task) {
    PacketQueueMap &input_queue_map = task.get_inputs();
    PacketQueueMap::iterator it;

    // process all input queues
    for (it = input_queue_map.begin(); it != input_queue_map.end(); it++) {
        // input stream label
        int label = it->first;

        // input packet queue
        Packet pkt;
        // process all packets in one input queue
        while (task.pop_packet_from_input_queue(label, pkt)) {
            // Get a input packet

            // if packet is eof, set module done
            if (pkt.timestamp() == BMF_EOF) {
                task.set_timestamp(DONE);
                task.fill_output_packet(label, Packet::generate_eof_packet());
                return 0;
            }

            // Get packet data
            // Here we should know the data type in packet
            auto vframe = pkt.get<VideoFrame>();

            // Deep copy
            VideoFrame vframe_out = VideoFrame(vframe.frame().clone());
            vframe_out.copy_props(vframe);

            // Add output frame to output queue
            auto output_pkt = Packet(vframe_out);

            task.fill_output_packet(label, output_pkt);
        }
    }
    return 0;
}
REGISTER_MODULE_CLASS(CopyModule)
```

### go模块

创建一个名为`pass_through_module`的目录，并在`pass_through_module/pass_through.go`编写以下go代码：

```Go
package main

import "C"
import (
        "encoding/json"
        "errors"
        "fmt"

        "github.com/babitmf/bmf-gosdk/bmf"
)

type PassThroughModuleOption struct {
        Value int32
}

type PassThroughModule struct {
        nodeId int32
        option PassThroughModuleOption
}

func (self *PassThroughModule) Process(task *bmf.Task) error {
        fmt.Println("Go-PassThrough process-in")
        defer fmt.Println("Go-PassThrough process-out")
        iids := task.GetInputStreamIds()
        oids := task.GetOutputStreamIds()

        gotEof := false
        for i, iid := range iids {
                for pkt, err := task.PopPacketFromInputQueue(iid); err == nil; {
                        defer pkt.Free()
                        if ok := task.FillOutputPacket(oids[i], pkt); !ok {
                                return errors.New("Fill output queue failed")
                        }

                        if pkt.Timestamp() == bmf.EOF {
                                gotEof = true
                        }

                        pkt, err = task.PopPacketFromInputQueue(iid)
                }
        }

        if gotEof {
                task.SetTimestamp(bmf.DONE)
        }
        return nil
}

func (self *PassThroughModule) Init() error {
        return nil
}

func (self *PassThroughModule) Reset() error {
        return errors.New("Reset is not supported")
}

func (self *PassThroughModule) Close() error {
        return nil
}

func (self *PassThroughModule) GetModuleInfo() (interface{}, error) {
        info := map[string]string{
                "NodeId": fmt.Sprintf("%d", self.nodeId),
        }

        return info, nil
}

func (self *PassThroughModule) NeedHungryCheck(istreamId int32) (bool, error) {
        return true, nil
}

func (self *PassThroughModule) IsHungry(istreamId int32) (bool, error) {
        return true, nil
}

func (self *PassThroughModule) IsInfinity() (bool, error) {
        return true, nil
}

func NewPassThroughModule(nodeId int32, option []byte) (bmf.Module, error) {
        m := &PassThroughModule{}
        err := json.Unmarshal(option, &m.option)
        if err != nil {
                return nil, err
        }
        m.nodeId = nodeId

        return m, nil
}

func RegisterPassThroughInfo(info bmf.ModuleInfo) {
        info.SetModuleDescription("Go PassThrough description")
        tag := bmf.NewModuleTag(bmf.BMF_TAG_UTILS|bmf.BMF_TAG_VIDEO_PROCESSOR)
        info.SetModuleTag(tag)
}

//export ConstructorRegister
func ConstructorRegister() {
        bmf.RegisterModuleConstructor("go_pass_through", NewPassThroughModule, RegisterPassThroughInfo)
}

func main() {}
```

## 模块建立

开发模块后，对于C++和go模块，首先要将其编译。对于Python模块，无需额外的操作。

### C++模块

然后将这部分cmake代码写入名为`cpp_copy_module/CMakeLists.txt`的文件中：

```Bash
file(GLOB SRCS *.cc *.h)

add_library(copy_module SHARED ${SRCS})
set_property(TARGET PROPERTY CXX_STANDARD 17)

add_definitions(-D_GLIBCXX_USE_CXX11_ABI=0)

target_link_libraries(copy_module
    PRIVATE
    bmf_module_sdk
)

set(CMAKE_INSTALL_PREFIX ${PROJECT_SOURCE_DIR})
install(TARGETS copy_module)
```

接下来编译它：

```Bash
if [ -d build ]; then rm -rf build; fi
cmake -B build -S my_cpp_module
cmake --build build
cmake --install build
```

### go模块

```bash
go mod init test
go mod tidy
go build -buildmode c-shared -o pass_through_module/lib/go_pass_through.so pass_through_module/pass_through.go
```

## 模块安装

接下来，使用`module_manager`安装这个模块：

```bash
# installing python module
module_manager install my_python_module python my_module:my_module $(pwd)/my_python_module v0.0.1
# installing c++ module
module_manager install cpp_copy_module c++ libcopy_module:CopyModule $(pwd)/cpp_copy_module/lib v0.0.1
# installing go module
module_manager install go_pass_through go go_pass_through:PassThrough $(pwd)/pass_through_module/lib v0.0.1
```

您也可以使用以下命令卸载名为`mymodule`的模块：

```bash
module_manager uninstall mymodule
```

## 模块列表和转储

使用不带任何参数的`module_manager list`列出本地安装的所有模块：

```bash
module_manager list
```

您还可以使用以下命令转储每个模块的信息：

```bash
module_manager dump ${module_name}
```
