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
