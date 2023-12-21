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
 
 

## 详细描述

BMF 模块相关的函数。

## 函数文档


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
构建由模块库路径和入口加载的 c/c++ 实现的 module stream。

**Parameters**
 - **streams**：模块的 input stream list
 - **name**：模块的名称
 - **option**：模块的参数
 - **module_path**：加载模块的路径
 - **entry**：模块的调用条目
 - **input_manager**：为该模块选择 input manager，默认为 immediate
 - **pre_module**：该模块先前创建的 module object



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
创建模块的对象，可用于在 graph 运行之前创建真实的模块。

**Parameters**
 - **module_info**：模块的名称
 - **option**：模块的选项



**Returns**

示例：

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

如果您需要完整代码，请参阅[test_pre_module.py](https://github.com/BabitMF/bmf/blob/master/bmf/test/pre_module/test_pre_module.py)


```
 def create_module(module_info, option):

```

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
通过 Arg 构建一个 BMF node。

**Parameters**
 - **streams**  
 - **module_info**：该模块的模块信息
 - **option**：该模块的选项，例如：{ 'alias': 'pass_through', 'output_path': output_path } 
 - **input_manager**：默认为 immediate。它是该模块的 the input stream
 - **pre_module**：默认为 none。它是之前由 [bmf.create_module()](#create_module) 创建的模块。
 - **scheduler**：默认为 0。它是一个专门的线程来调度这个模块



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
null sink module 将丢弃来自 upstream 的所有输入。

**Parameters**
 - **streams**：该模块的 input stream list



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
将 input stream packet 传递到 output（如果连接，按顺序，1:1）

**Parameters**
 - **streams**：该模块的 input stream list



**Returns**



```
 def pass_through(stream, type="", path="", entry="", stream_alias=None):

```

示例：

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

如果您需要完整代码，请参阅[test_server.py](https://github.com/BabitMF/bmf/blob/master/bmf/test/server/test_server.py)

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
构建由模块库路径和入口加载的 python 实现的 module stream。

**Parameters**
 - **streams**：模块的 input stream list
 - **name**：模块的名称
 - **option**：模块的参数
 - **module_path**：加载该模块的路径
 - **entry**：该模块的调用条目
 - **input_manager**：为该模块选择 input manager，默认为 immediate
 - **pre_module**：该模块先前创建的 module object


**Returns**



```
 def py_module(streams, name, option=None, module_path="", entry="", input_manager='immediate', pre_module=None, scheduler=0, stream_alias=None):

```
