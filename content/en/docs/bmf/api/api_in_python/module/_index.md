---
title: 'Module'
linkTitle: 'Module'
weight: 10
---

def   [bmf.python_sdk.module.Module.__init__](#__init__) (self, node=None, option=None)
 
 
def   [bmf.python_sdk.module.Module.init](#init) (self)
 
 
def   [bmf.python_sdk.module.Module.reset](#reset) (self)
 
 
def   [bmf.python_sdk.module.Module.dynamic_reset](#dynamic_reset) (self, opt_reset=None)
 
 
def   [bmf.python_sdk.module.Module.set_node](#set_node) (self, node)
 
 
def   [bmf.python_sdk.module.Module.is_subgraph](#is_subgraph) (self)
 
 
def   [bmf.python_sdk.module.Module.process](#process) (self, task)
 
 
def   [bmf.python_sdk.module.Module.close](#close) (self)
 
 
def   [bmf.python_sdk.module.Module.need_hungry_check](#need_hungry_check) (self, input_idx)
 
 
def   [bmf.python_sdk.module.Module.is_hungry](#is_hungry) (self, input_idx)
 
 
def   [bmf.python_sdk.module.Module.is_infinity](#is_infinity) (self)
 
 
def   [bmf.python_sdk.module.Module.set_callback](#set_callback) (self, callback)
 
 
def   [bmf.python_sdk.module.Module.get_graph_config](#get_graph_config) (self)
 
 

## Detailed Description

  [Module](https://babitmf.github.io/docs/bmf/api/api_in_python/module/)  class in Python  [Module](https://babitmf.github.io/docs/bmf/api/api_in_python/module/)  SDK.

## Function Documentation


###  __init__()

```
def bmf.python_sdk.module.Module.__init__ (  self, 
   node = None, 
   option = None 
 )   
```
construct bmf module

**Parameters**
 - **node_id** unique id . 
 - **json_param** json param of module. 



**Returns**



```
     def __init__(self, node=None, option=None):

```

Example:

```
from bmf import (
    Module,
    Log,
    LogLevel,
    InputType,
    ProcessResult,
    Packet,
    AudioFrame,
    Timestamp,
    scale_av_pts,
    av_time_base,
    BmfCallBackType,
)

class Audiomix(Module):
    def __init__(self, node, option=None):
        self.node_ = node
        self.option = option
        # we only support audio frame: 44100 lc-aac, fltp, stereo 1024 samples
        self.timebase = Rational(1, sample_rate)
        self.volume_table = dict()
```

If you need the complete code, you can refer to [audiomix.py](https://github.com/BabitMF/bmf/blob/master/bmf/demo/broadcaster/audiomix.py)

###  close()

```
def bmf.python_sdk.module.Module.close (  self )  
```
close module


```
     def close(self):

```

###  dynamic_reset()

```
def bmf.python_sdk.module.Module.dynamic_reset (  self, 
   opt_reset = None 
 )   
```
dynamic_reset module when the option need to be updated.

**Parameters**
 - **opt_reset** dict value of option 




```
     def dynamic_reset(self, opt_reset=None):

```

Example:

```
from bmf import (
    Module,
    Log,
    LogLevel,
    InputType,
    ProcessResult,
    Packet,
    AudioFrame,
    Timestamp,
    scale_av_pts,
    av_time_base,
    BmfCallBackType,
)

class Audiomix(Module):
    def dynamic_reset(self, opt_reset=None):
        Log.log_node(
            LogLevel.INFO,
            self.node_,
            "opt_reset type:",
            type(opt_reset),
            "opt_reset: ",
            opt_reset,
        )
        if opt_reset is None:
            return
        if self.option is None:
            self.option = dict()
        for (para, value) in opt_reset.items():
            self.option[para] = value
        Log.log_node(
            LogLevel.INFO,
            self.node_,
            "opt_reset:",
            opt_reset,
            "self.option: ",
            self.option,
        )
```

If you need the complete code, you can refer to [audiomix.py](https://github.com/BabitMF/bmf/blob/master/bmf/demo/broadcaster/audiomix.py)

###  get_graph_config()

```
def bmf.python_sdk.module.Module.get_graph_config (  self )  
```
get the graph config of the module

**Returns**



```
     def get_graph_config(self):

```

###  init()

```
def bmf.python_sdk.module.Module.init (  self )  
```
init module


```
     def init(self):

```

###  is_hungry()

```
def bmf.python_sdk.module.Module.is_hungry (  self, 
   input_idx 
 )   
```
check the module's input stream need data

**Parameters**
 - **input_idx** input stream id 



**Returns**



```
     def is_hungry(self,input_idx):

```

###  is_infinity()

```
def bmf.python_sdk.module.Module.is_infinity (  self )  
```
check the module is infinity

**Returns**



```
     def is_infinity(self):

```

###  is_subgraph()

```
def bmf.python_sdk.module.Module.is_subgraph (  self )  
```
check the module is subgraph

**Returns**



```
     def is_subgraph(self):

```

###  need_hungry_check()

```
def bmf.python_sdk.module.Module.need_hungry_check (  self, 
   input_idx 
 )   
```
check the module's input stream should hungry check

**Parameters**
 - **input_idx** input stream id 



**Returns**



```
     def need_hungry_check(self,input_idx):

```

###  process()

```
def bmf.python_sdk.module.Module.process (  self, 
   task 
 )   
```
process task

**Parameters**
 - **task** reference to the  Task class. The module should process input packet in task and produce output packet to the task



**Returns**



```
     def process(self, task):

```

Example:

```
from bmf import (
    Module,
    Log,
    LogLevel,
    InputType,
    ProcessResult,
    Packet,
    AudioFrame,
    Timestamp,
    scale_av_pts,
    av_time_base,
    BmfCallBackType,
)

class Audiomix(Module):
    def process(self, task):
        output_queue = task.get_outputs().get(0, None)
        for (input_id, input_packets) in task.get_inputs().items():
            Log.log(LogLevel.DEBUG, "audiomix get input stream id:", input_id)
            while not input_packets.empty():
                timestamp = 0
                bmf_pkt = input_packets.get()
                frame_list = bmf_pkt.get(list)
                if frame_list:
                    timestamp = frame_list[0][1]

                Log.log(
                    LogLevel.DEBUG,
                    "audiomix do mix, framelist len",
                    len(frame_list),
                    "timestamp: ",
                    timestamp,
                )
                audio_frame = self.do_mix(frame_list)
                audio_frame.time_base = self.timebase
                audio_frame.pts = scale_av_pts(
                    timestamp,
                    av_time_base,
                    float(self.timebase.num) / self.timebase.den,
                )
                # Log.log(
                #    LogLevel.DEBUG,
                #    "audio mix output frame, sample_rate:",
                #    audio_frame.sample_rate,
                #    "samples:",
                #    audio_frame.samples,
                #    "layout:",
                #    audio_frame.layout,
                #    "format:",
                #    audio_frame.format,
                #    "timestamp:",
                #    timestamp,
                # )
                output_pkt = Packet(audio_frame)
                output_pkt.timestamp = timestamp

                if output_queue is not None:
                    output_queue.put(output_pkt)

        return ProcessResult.OK
```

If you need the complete code, you can refer to [audiomix.py](https://github.com/BabitMF/bmf/blob/master/bmf/demo/broadcaster/audiomix.py)

###  reset()

```
def bmf.python_sdk.module.Module.reset (  self )  
```
reset module when the module need to be reseted


```
     def reset(self):

```

Example:

```
from bmf import (
    Module,
    Log,
    LogLevel,
    InputType,
    ProcessResult,
    Packet,
    AudioFrame,
    Timestamp,
    scale_av_pts,
    av_time_base,
    BmfCallBackType,
)

class Audiomix(Module):
    def reset(self):
        Log.log_node(LogLevel.DEBUG, self.node_, " is doing reset")
```

If you need the complete code, you can refer to [audiomix.py](https://github.com/BabitMF/bmf/blob/master/bmf/demo/broadcaster/audiomix.py)

###  set_callback()

```
def bmf.python_sdk.module.Module.set_callback (  self, 
   callback 
 )   
```
set the graph callback to the module

**Parameters**
 - **callback** graph callback. 




```
     def set_callback(self,callback):

```

###  set_node()

```
def bmf.python_sdk.module.Module.set_node (  self, 
   node 
 )   
```
set node id of this module

**Parameters**
 - **node** node id of the module 




```
     def set_node(self, node):

```
