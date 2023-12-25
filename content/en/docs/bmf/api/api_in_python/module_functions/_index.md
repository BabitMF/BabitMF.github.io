---
title: 'Module Functions'
linkTitle: 'Module Functions'
weight: 6
---
[//]: <> (REF_MD: group__mdFunc.html)


def   [bmf.builder.bmf.create_module](#create_module) (module_info, option )
 
 
def   [bmf.builder.bmf_modules.module](#module) (streams, [module_info](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfmodules/#module_info) , [option](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfmodules/#option) =None, module_path="", entry="", [input_manager](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfmodules/#input_manager) ='immediate', [pre_module](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfmodules/#pre_module) =None, [scheduler](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfmodules/#scheduler) =0, [stream_alias](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfmodules/#stream_alias) =None)
 
 
def   [bmf.builder.bmf_modules.pass_through](#pass_through) ( [stream](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfmodules/#stream) , type="", path="", entry="", [stream_alias](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfmodules/#stream_alias) =None)
 
 
def   [bmf.builder.bmf_modules.null_sink](#null_sink) ( [stream](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfmodules/#stream) , type="", path="", entry="")
 
 
def   [bmf.builder.bmf_modules.py_module](#py_module) (streams, name, [option](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfmodules/#option) =None, module_path="", entry="", [input_manager](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfmodules/#input_manager) ='immediate', [pre_module](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfmodules/#pre_module) =None, [scheduler](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfmodules/#scheduler) =0, [stream_alias](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfmodules/#stream_alias) =None)
 
 
def   [bmf.builder.bmf_modules.c_module](#c_module) (streams, name, module_path="", entry="", [option](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfmodules/#option) =None, [input_manager](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfmodules/#input_manager) ='immediate', [pre_module](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfmodules/#pre_module) =None, [scheduler](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfmodules/#scheduler) =0, [stream_alias](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfmodules/#stream_alias) =None)
 
 

## Detailed Description

BMF module related functions.

## Function Documentation


###  c_module()

```
def bmf.builder.bmf_modules.c_module (  streams, 
   name, 
   module_path = "", 
   entry = "", 
   option = None, 
   input_manager = 'immediate', 
   pre_module = None, 
   scheduler = 0, 
   stream_alias = None 
 )   
```
To build a c/c++ implemented module stream loaded by module library path and entry.

**Parameters**
 - **streams** the input stream list of the module 
 - **name** the module name 
 - **option** the parameters for the module 
 - **module_path** the path to load the module 
 - **entry** the call entry of the module 
 - **input_manager** select the input manager for this module, immediate by default 
 - **pre_module** the previous created module object of this module 



**Returns**



```
 def c_module(streams, name, module_path="", entry="", option=None, input_manager='immediate', pre_module=None, scheduler=0, stream_alias=None):

```

###  create_module()

```
def bmf.builder.bmf.create_module (  module_info, 
   option 
 )   
```
To create an object of the module, can be used to create the real module before the graph run.

**Parameters**
 - **module_info** the module name 
 - **option** the option for the module 



**Returns**



```
 def create_module(module_info, option):

```

Example:

```
import bmf
def test_pre_module(self):
    input_video_path = "../../files/big_bunny_10s_30fps.mp4"
    output_path = "./output.mp4"
    expect_result = '../pre_module/output.mp4|200|300|10.0|MOV,MP4,M4A,3GP,3G2,MJ2|62956|78695|h264|' \
                    '{"fps": "30.0662251656"}'
    self.remove_result_data(output_path)
    # pre_allocate a module
    module_name = "analysis"
    option = {"name": "analysis_SR", "para": "analysis_SR"}
    pre_module = bmf.create_module(module_name, option)

```

If you need the complete code, you can refer to [test_pre_module.py](https://github.com/BabitMF/bmf/blob/master/bmf/test/pre_module/test_pre_module.py)

###  module()

```
def bmf.builder.bmf_modules.module (  streams, 
   module_info, 
   option = None, 
   module_path = "", 
   entry = "", 
   input_manager = 'immediate', 
   pre_module = None, 
   scheduler = 0, 
   stream_alias = None 
 )   
```
To build a BMF node by Args.

**Parameters**
 - **streams**  
 - **module_info** the module info of the module 
 - **option** the option for this module, for example: { 'alias': 'pass_through', 'output_path': output_path } 
 - **input_manager** immediate by default. It's the input stream manager of this module 
 - **pre_module** none by default. It's a previous CREATED module OBJECT by  [bmf.create_module()](#create_module) 
 - **scheduler** 0 by default. It's a dedicate thread to schedule this module 



**Returns**



```
 def module(streams, module_info, option=None, module_path="", entry="", input_manager='immediate', pre_module=None, scheduler=0, stream_alias=None):

```

###  null_sink()

```
def bmf.builder.bmf_modules.null_sink (  stream, 
   type = "", 
   path = "", 
   entry = "" 
 )   
```
The null sink module which will drop all the input from upstream.

**Parameters**
 - **streams** the input stream list of the module 



**Returns**



```
 def null_sink(stream, type="", path="", entry=""):

```

###  pass_through()

```
def bmf.builder.bmf_modules.pass_through (  stream, 
   type = "", 
   path = "", 
   entry = "", 
   stream_alias = None 
 )   
```
To pass through the input stream packets to output (if connected, by sequence, 1:1)

**Parameters**
 - **streams** the input stream list of the module 



**Returns**



```
 def pass_through(stream, type="", path="", entry="", stream_alias=None):

```

Example:

```
import bmf
graph = bmf.graph({"dump_graph": 1})

video_stream = graph.module('c_ffmpeg_decoder')
video_stream['video'].pass_through().encode(
    video_stream['audio'], {
        "output_prefix": "./output_video_dir",
        "video_params": {
            "codec": "h264",
            "width": 640,
            "height": 480,
            "crf": "23",
            "preset": "veryfast"
        }
    }).output_stream()

```

If you need the complete code, you can refer to [test_server.py](https://github.com/BabitMF/bmf/blob/master/bmf/test/server/test_server.py)

###  py_module()

```
def bmf.builder.bmf_modules.py_module (  streams, 
   name, 
   option = None, 
   module_path = "", 
   entry = "", 
   input_manager = 'immediate', 
   pre_module = None, 
   scheduler = 0, 
   stream_alias = None 
 )   
```
To build a python implemented module stream loaded by module library path and entry.

**Parameters**
 - **streams** the input stream list of the module 
 - **name** the module name 
 - **option** the parameters for the module 
 - **module_path** the path to load the module 
 - **entry** the call entry of the module 
 - **input_manager** select the input manager for this module, immediate by default 
 - **pre_module** the previous created module object of this module 



**Returns**



```
 def py_module(streams, name, option=None, module_path="", entry="", input_manager='immediate', pre_module=None, scheduler=0, stream_alias=None):

```
