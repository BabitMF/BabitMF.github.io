---
title: 'BmfModules'
linkTitle: 'BmfModules'
weight: 5
---
[//]: <> (REF_MD: namespacebmf_1_1builder_1_1bmf__modules.html)


  [Functions](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfmodules/#func-members)  |  [Variables](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfmodules/#var-members)  # bmf.builder.bmf_modules Namespace Reference

 ## 函数


def   [upload](#upload) ( [stream](#stream) , type="", path="", entry="")
 
def   [go_module](#go_module) (streams, name, module_path=None, entry=None, [option](#option) =None, [input_manager](#input_manager) ='immediate', [pre_module](#pre_module) =None, [scheduler](#scheduler) =0, [stream_alias](#stream_alias) =None)
 
 
def   module (streams, [module_info](#module_info) , [option](#option) =None, module_path="", entry="", [input_manager](#input_manager) ='immediate', [pre_module](#pre_module) =None, [scheduler](#scheduler) =0, [stream_alias](#stream_alias) =None)
 
 
 
def   pass_through ( [stream](#stream) , type="", path="", entry="", [stream_alias](#stream_alias) =None)
 
 
 
def   null_sink ( [stream](#stream) , type="", path="", entry="")
 
 
 
def   py_module (streams, name, [option](#option) =None, module_path="", entry="", [input_manager](#input_manager) ='immediate', [pre_module](#pre_module) =None, [scheduler](#scheduler) =0, [stream_alias](#stream_alias) =None)
 
 
 
def   c_module (streams, name, module_path="", entry="", [option](#option) =None, [input_manager](#input_manager) ='immediate', [pre_module](#pre_module) =None, [scheduler](#scheduler) =0, [stream_alias](#stream_alias) =None)
 
 

 ## 变量


dictionary   [bmf_modules](#bmf_modules) 
 
dictionary   [option](#option) = {}
 
   [stream_alias](#stream_alias) 
 
dictionary   [module_info](#module_info) 
 
   [stream](#stream) 
 
   [input_manager](#input_manager) 
 
   [pre_module](#pre_module) 
 
   [scheduler](#scheduler) 
 

## 函数文档


###  go_module()

```
def bmf.builder.bmf_modules.go_module (  streams, 
   name, 
   module_path = None, 
   entry = None, 
   option = None, 
   input_manager = 'immediate', 
   pre_module = None, 
   scheduler = 0, 
   stream_alias = None 
 )   
```

```
 def go_module(streams, name, module_path=None, entry=None, option=None, input_manager='immediate', pre_module=None, scheduler=0, stream_alias=None):
     if option is None:
         option = {}
     return module(streams, {"name": name, "type": "go", "path": module_path, "entry": entry}, option,
                   input_manager=input_manager, pre_module=pre_module, scheduler=scheduler, stream_alias=stream_alias)
 bmf.builder.bmf_modules.go_moduledef go_module(streams, name, module_path=None, entry=None, option=None, input_manager='immediate', pre_module=None, scheduler=0, stream_alias=None)Definition: bmf_modules.py:134
bmf.builder.bmf_modules.moduledef module(streams, module_info, option=None, module_path="", entry="", input_manager='immediate', pre_module=None, scheduler=0, stream_alias=None)To build a BMF node by Args. Definition: bmf_modules.py:35


```

###  upload()

```
def bmf.builder.bmf_modules.upload (  stream, 
   type = "", 
   path = "", 
   entry = "" 
 )   
```

```
 def upload(stream, type="", path="", entry=""):
     module_info = {
         "name": 'upload',
         "type": type,
         "path": path,
         "entry": entry
     }
     return BmfNode(module_info, {}, stream, input_manager='immediate')
 
 

```
示例：

```
import bmf
graph = bmf.graph()

video = graph.decode({"input_path": input_video_path})
video["audio"].upload()

```

如果您需要完整代码，请参阅[test_clock_sync.py](https://github.com/BabitMF/bmf/blob/master/bmf/test/clock_sync_manager/test_clock_sync.py)

## 变量文档


###  bmf_modules

```
dictionary bmf.builder.bmf_modules.bmf_modules 
```

```
 =  {
     'ff_decoder': 'c_ffmpeg_decoder',
     'ff_filter': 'c_ffmpeg_filter',
     'ff_encoder': 'c_ffmpeg_encoder',
     'pass_through': 'pass_through'
 }

```

###  input_manager

```
bmf.builder.bmf_modules.input_manager 
```

###  module_info

```
dictionary bmf.builder.bmf_modules.module_info 
```

```
 =  {
         "name": bmf_modules['pass_through'],
         "type": type,
         "path": path,
         "entry": entry
     }

```

###  option

```
dictionary bmf.builder.bmf_modules.option = {} 
```

###  pre_module

```
bmf.builder.bmf_modules.pre_module 
```

###  scheduler

```
bmf.builder.bmf_modules.scheduler 
```

###  stream

```
bmf.builder.bmf_modules.stream 
```

###  stream_alias

```
bmf.builder.bmf_modules.stream_alias 
```
