---
title: 'SyncModule'
linkTitle: 'SyncModule'
weight: 7
---

[//]: <> (REF_MD: group__syncMd.html)


def   [bmf.builder.bmf_sync.sync_module](#sync_module) (name, option, input_streams, output_streams)
 
 
def   [bmf.builder.bmf_sync.process](#process) (module, pkts_dict)
 
 
def   [bmf.builder.bmf_sync.send_eof](#send_eof) (module)
 
 

## Detailed Description

BMF sync module class.

## Function Documentation


###  process()

```
def bmf.builder.bmf_sync.process (  module, 
   pkts_dict 
 )   
```
Directly do module processing.

**Parameters**
 - **module** corresponding syncModule object 
 - **pkts_dict** a dict which contains all input data packet 



**Returns**




```
 def process(module, pkts_dict):
     
     task = Task(0, module.get_input_streams(), module.get_output_streams())
 
     # fill in task inputs
     if pkts_dict is not None:
         for key, pkts in pkts_dict.items():
             if key not in module.get_input_streams():
                 raise Exception("pkt key not exists")
             for packet in pkts:
                 task.get_inputs()[key].put(packet)
 
     # process task
     module.process(task)
 
     # get task outputs
     result_dict = {}
     for (key, q) in task.get_outputs().items():
         result_dict[key] = []
         while not q.empty():
             result_dict[key].append(q.get())
 
     return result_dict, task.timestamp
 
 

```

###  send_eof()

```
def bmf.builder.bmf_sync.send_eof (  module )  
```
Module process a task with eof packet.

**Parameters**
 - **module** corresponding syncModule object 




```
 def send_eof(module):
     
     task = Task(0, module.get_input_streams(), module.get_output_streams())
 
     # send eof to task
     for key in module.get_input_streams():
         task.get_inputs()[key].put(Packet.generate_eof_packet())
 
     # process eof task
     module.process(task)
 
     # get task outputs
     result_dict = {}
     for (key, q) in task.get_outputs().items():
         result_dict[key] = []
         while not q.empty():
             result_dict[key].append(q.get())
 
     return result_dict, task.timestamp
 bmf.builder.bmf_sync.send_eofdef send_eof(module)Module process a task with eof packet. Definition: bmf_sync.py:143


```

###  sync_module()

```
def bmf.builder.bmf_sync.sync_module (  name, 
   option, 
   input_streams, 
   output_streams 
 )   
```
Create  [SyncModule](https://babitmf.github.io/docs/bmf/api/api_in_python/syncmodule/)  by name, option, input_stream_id_list and output_stream_id_list.

**Parameters**
 - **name** the name for the module 
 - **name** the option for the module 
 - **name** the input stream id list for the module 
 - **name** the output stream id list for the module 



**Returns**



```
 def sync_module(name, option, input_streams, output_streams):
     
     if name == "c_ffmpeg_filter":
         # construct node config
         node_config = {}
         node_config["option"] = option
         node_config["input_streams"] = []
         for index in input_streams:
             input_stream = {"identifier": name + str(index)}
             node_config["input_streams"].append(input_stream)
         node_config["output_streams"] = []
         for index in output_streams:
             output_stream = {"identifier": name + str(index)}
             node_config["output_streams"].append(output_stream)
 
         # convert filter option
         option_str = engine.convert_filter_para(json.dumps(node_config))
         option = json.loads(option_str)
 
     # Directly create a C++ module by module name and option
     mod = bmf.create_module(name, option)
 
     return SyncModule(mod, input_streams, output_streams)
 
 

```
