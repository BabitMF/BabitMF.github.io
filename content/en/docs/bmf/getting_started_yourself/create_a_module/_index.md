---
title: 'Create a Module'
linkTitle: ''
weight: 4
menu:
  main:
    weight: 4
    parent: 'Getting started'
---

## Built-in modules

BMF's built-in modules include commonly used video processing modules, which can be directly used by developers to implement video applications, including FFmpeg-based decoder, filter and encoder modules, and many more gpu processing modules. For detailed descriptions of built-in modules, see [ffmpeg_fully_compatible](https://babitmf.github.io/docs/bmf/multiple_features/ffmpeg_fully_compatible/)<!-- and [gpu_modules_introduction]()-->.

## Custom Module Development

 If you want to develop your own modules, please follow these instructions.

C++, python and go modules are now supported. You can write a module with anyone and call it in any language. For each language, we provide a minimized example here. In this part. You can try it on  [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/BabitMF/bmf/blob/master/bmf/test/customize_module/bmf_customize_demo_latest.ipynb)

### python module

Create a `my_python_module` directory and write the following python code into `my_python_module/my_module.py`. 

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

### c++ module

Implement your own c++ class, inheriting from [the Module base class](/docs/bmf/api/api_in_cpp/module/). In the simplest case, you just need to implement the process method. Create a `my_cpp_module` directory and write the following c++ code into `cpp_copy_module/copy_module.h`: 

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

### go module

Create a directory named `pass_through_module` and write the following go code into `pass_through_module/pass_through.go`.

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

## Module building

Once you've developed a module, compile it first for C++ and Go modules. For Python modules, no additional actions are needed.

### c++ module

Then write this part of cmake code to the file named `cpp_copy_module/CMakeLists.txt`:

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

Compile it next:

```Bash
if [ -d build ]; then rm -rf build; fi
cmake -B build -S my_cpp_module
cmake --build build
cmake --install build
```

### go module

```bash
go mod init test
go mod tidy
go build -buildmode c-shared -o pass_through_module/lib/go_pass_through.so pass_through_module/pass_through.go
```

## Module installing

Next, install the module using `module_manager`:

```bash
# installing python module
module_manager install my_python_module python my_module:my_module $(pwd)/my_python_module v0.0.1
# installing c++ module
module_manager install cpp_copy_module c++ libcopy_module:CopyModule $(pwd)/cpp_copy_module/lib v0.0.1
# installing go module
module_manager install go_pass_through go go_pass_through:PassThrough $(pwd)/pass_through_module/lib v0.0.1
```

You can also uninstall modules named `mymodule`with:

```bash
module_manager uninstall mymodule
```

## Module Listing and Dumping

To list all modules installed locally, using `module_manager list` without any args:

```bash
module_manager list
```

You can also dump the information for each module using the following command:

```bash
module_manager dump ${module_name}
```
