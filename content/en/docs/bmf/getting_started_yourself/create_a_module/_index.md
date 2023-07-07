---
title: 'Create a Module'
linkTitle: ''
weight: 4
menu:
  main:
    weight: 4
    parent: 'Getting started'
---

 [TOC]

### Module Development

The FFmpeg-based decoder, encoder, and filter modules have already been built. If you want to develop your own modules, please follow these instructions.

C++, python and go modules are now supported. You can write a module with anyone and call it 

#### c++ module

Implement your own c++ class, inheriting from Module:

```C++
#include <bmf/sdk/module_registry.h>
#include <bmf/sdk/module.h>
#include <bmf/sdk/packet.h>
#include <bmf/sdk/task.h>
#include <bmf/sdk/json_param.h>

class MyModule : public bmf_sdk::Module {
    MyModule(int node_id, bmf_sdk::JsonParam &option):Module(node_id, option){}
    int Process(bmf_sdk::Task &task) {
        bmf_sdk::Packet packet_in, packet_out;
        while(task.pop_packet_from_input_queue(0, packet_in)) {
            //do something
            packet_out = packet_in;
        }
        task.fill_output_packet(0, packet_out);
    }
};

//register module, required
REGISTER_MODULE_CLASS(MyModule)
//register module info, optional
REGISTER_MODULE_INFO(MyModule, info) {
    info.module_description = "My first BMF Module";
    info.module_tag = bmf_sdk::ModuleTag::BMF_TAG_UTILS;
}
```

#### python module

```Python
from bmf import Module, Log, LogLevel, InputType, ProcessResult, Packet, Timestamp, scale_av_pts, av_time_base, \
    BmfCallBackType, ModuleTag, ModuleInfo


class mymodule(Module):
    def __init__(self, node, option=None):
        super().__init__(node, option)
        self.node_ = node
        pass

    def process(self, task):
        input_queue = task.get_inputs()[0]

        while not input_queue.empty():
            pkt = input_queue.get()
            if pkt.timestamp == Timestamp.EOF:
                task.timestamp = Timestamp.DONE
            else:
                Log.log_node(LogLevel.DEBUG, self.node_, 'upload info', pkt.get_data())

        return ProcessResult.OK

#register module info, optional
def register_upload_info(info):
    info.module_description = "upload module description"
    info.module_tag = ModuleTag.TAG_UTILS
```

#### go module

```Go
package main

import "C"
import (
        "encoding/json"
        "errors"
        "fmt"

        "github.com/taoboyang/bmf-gosdk/bmf"
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
        tag := bmf.NewModuleTag(bmf.BMF_TAG_DEVICE_CPU|bmf.BMF_TAG_VIDEO_PROCESSOR)
        info.SetModuleTag(tag)
}

//export ConstructorRegister
func ConstructorRegister() {
        bmf.RegisterModuleConstructor("GoPassThrough", NewPassThroughModule, RegisterPassThroughInfo)
}

func main() {}
```

### Module building

Once you've developed a module, compile it first for C++ and Go modules. For Python modules, no additional actions are needed.

#### c++ module

```Shell
g++ -shared -fPIC -o mymodule.so mymodule.cpp
```

#### go module

```Shell
go build -buildmode c-shared -o go_pass_through.so pass_through.go
```

### Module installing

Next, install the module using `module_manager`. For example, to install a C++ module named 'mymodule' with version number 'v0.0.1', entry 'mymodule:MYMODULE', and storage path '/mymodule', use the following command:

```Shell
module_manager install mymodule c++ mymodule:MYMODULE ~/mymodule v0.0.1
```

You can also uninstall modules with:

```Shell
module_manager uninstall mymodule
```

### Module Listing and Dumping

To list all modules installed locally, using module_manager:

```Shell
module_manager list
```

You can dump the information for each module using the following command:

```Shell
module_manager dump ${module_name}
```