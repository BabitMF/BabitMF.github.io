---
title: 'SyncModule'
linkTitle: 'SyncModule'
weight: 7
---

[//]: <> (REF_MD: group__syncMd.html)


def   [bmf.builder.bmf_sync.sync_module](#sync_module) (name, option, input_streams, output_streams)
 
 
def   [bmf.builder.bmf_sync.process](#process) (module, pkts_dict)
 
 
def   [bmf.builder.bmf_sync.send_eof](#send_eof) (module)

 

## 详细描述

BMF sync module class.

## 函数文档


###  process()

```
def bmf.builder.bmf_sync.process (  module, 
   pkts_dict 
 )   
```
直接进行模块处理。

**Parameters**
 - **module**：相应的同步模块对象
 - **pkts_dict**：包含所有input data packet的字典



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
示例：

```
import bmf
input_video_path = "../../files/overlay.png"
output_path = "./videoframe.jpg"
expect_result = './videoframe.jpg|240|320|0.04|IMAGE2|950000|4750|mjpeg|' \
                '{"fps": "25.0"}'
self.remove_result_data(output_path)

# create decoder
decoder = bmf_sync.sync_module("c_ffmpeg_decoder",
                                {"input_path": input_video_path}, [],
                                [0])
'''
# for non-builtin modules, use module_info instead of module_name to specify type/path/entry

module_info = {
    "name": "my_module",
    "type": "",
    "path": "",
    "entry": ""
}
module = bmf_sync.sync_module(module_info, {"input_path": input_video_path}, [], [0])
'''

# create scale
scale = bmf_sync.sync_module("c_ffmpeg_filter", {
    "name": "scale",
    "para": "320:240"
}, [0], [0])

# create encoder
encoder = bmf_sync.sync_module(
    "c_ffmpeg_encoder", {
        "output_path": output_path,
        "format": "mjpeg",
        "video_params": {
            "codec": "jpg"
        }
    }, [0], [])

# call init if necessary, otherwise we skip this step
decoder.init()
scale.init()
encoder.init()

# decode
frames, _ = bmf_sync.process(decoder, None)

# scale
frames, _ = bmf_sync.process(scale, {0: frames[0]})

# encode
bmf_sync.process(encoder, {0: frames[0]})

```

如果您需要完整代码，请参阅[test_sync_mode.py](https://github.com/BabitMF/bmf/blob/master/bmf/test/sync_mode/test_sync_mode.py)


###  send_eof()

```
def bmf.builder.bmf_sync.send_eof (  module )  
```
模块处理带有eof packet的task。

**Parameters**
 - **module**：相应的同步模块对象




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

示例：

```
import bmf
input_video_path = "../../files/overlay.png"
output_path = "./videoframe.jpg"
expect_result = './videoframe.jpg|240|320|0.04|IMAGE2|950000|4750|mjpeg|' \
                '{"fps": "25.0"}'
self.remove_result_data(output_path)

# create encoder
encoder = bmf_sync.sync_module(
    "c_ffmpeg_encoder", {
        "output_path": output_path,
        "format": "mjpeg",
        "video_params": {
            "codec": "jpg"
        }
    }, [0], [])

# call init if necessary, otherwise we skip this step
encoder.init()

# encode
bmf_sync.process(encoder, {0: frames[0]})

# send eof to encoder
bmf_sync.send_eof(encoder)

```
如果您需要完整代码，请参阅[test_sync_mode.py](https://github.com/BabitMF/bmf/blob/master/bmf/test/sync_mode/test_sync_mode.py)

###  sync_module()

```
def bmf.builder.bmf_sync.sync_module (  name, 
   option, 
   input_streams, 
   output_streams 
 )   
```
根据名称、选项、input_stream_id_list和output_stream_id_list，创建 [SyncModule](https://babitmf.github.io/docs/bmf/api/api_in_python/syncmodule/)。

**Parameters**
 - **name**：模块的名称
 - **option**：模块的选项
 - **input_streams**：模块的input stream id list
 - **output_streams**：模块的output stream id list



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

示例：

```
import bmf
input_video_path = "../../files/big_bunny_10s_30fps.mp4"
output_path = "./videoframe.jpg"
expect_result = './videoframe.jpg|240|320|0.04|IMAGE2|950000|4750|mjpeg|' \
                '{"fps": "0.0"}'
self.remove_result_data(output_path)

# create decoder
decoder = bmf_sync.sync_module("c_ffmpeg_decoder",
                                {"input_path": input_video_path}, [],
                                [0])

```

如果您需要完整代码，请参阅[test_sync_mode.py](https://github.com/BabitMF/bmf/blob/master/bmf/test/sync_mode/test_sync_mode.py)
