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

  [Module](http://localhost:1313/docs/bmf/api/api_in_python/module/)  class in Python  [Module](http://localhost:1313/docs/bmf/api/api_in_python/module/)  SDK.

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

###  reset()

```
def bmf.python_sdk.module.Module.reset (  self )  
```
reset module when the module need to be reseted


```
     def reset(self):

```

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
