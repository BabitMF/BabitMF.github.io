---
title: 'Module'
linkTitle: 'Module'
weight: 5
---

[//]: <> (REF_MD: classbmf__sdk_1_1Module.html)


  [公有成员函数](https://babitmf.github.io/docs/bmf/api/api_in_cpp/module/#public-member-functions)  |  [公共属性](https://babitmf.github.io/docs/bmf/api/api_in_cpp/module/#public-attributes)  |  List of all members  
  
  # bmf_sdk::Module Class Referenceabstract

module.h 

## Public Member Functions


   [Module](#module) (int32_t node_id=-1, [JsonParam](https://babitmf.github.io/docs/bmf/api/api_in_cpp/jsonparam/) json_param= [JsonParam](https://babitmf.github.io/docs/bmf/api/api_in_cpp/jsonparam/) ())
 
virtual int32_t   [get_input_stream_info](#get_input_stream_info) ( [JsonParam](https://babitmf.github.io/docs/bmf/api/api_in_cpp/jsonparam/) &json_param)
 
 
virtual int32_t   [set_input_stream_info](#set_input_stream_info) ( [JsonParam](https://babitmf.github.io/docs/bmf/api/api_in_cpp/jsonparam/) &json_param)
 
 
virtual int32_t   [set_output_stream_info](#set_output_stream_info) ( [JsonParam](https://babitmf.github.io/docs/bmf/api/api_in_cpp/jsonparam/) &json_param)
 
 
virtual int32_t   [get_output_stream_info](#get_output_stream_info) ( [JsonParam](https://babitmf.github.io/docs/bmf/api/api_in_cpp/jsonparam/) &json_param)
 
 
virtual int32_t   [get_module_info](#get_module_info) ( [JsonParam](https://babitmf.github.io/docs/bmf/api/api_in_cpp/jsonparam/) &json_param)
 
 
virtual int32_t   [init](#init) ()
 
 
virtual int32_t   [reset](#reset) ()
 
 
virtual int32_t   [flush](#flush) ()
 
 
virtual int32_t   [dynamic_reset](#dynamic_reset) ( [JsonParam](https://babitmf.github.io/docs/bmf/api/api_in_cpp/jsonparam/) opt_reset)
 
 
virtual int32_t   [process](#process) ( [Task](https://babitmf.github.io/docs/bmf/api/api_in_cpp/task/) &task)=0
 
 
virtual int32_t   [close](#close) ()
 
 
virtual bool   [need_hungry_check](#need_hungry_check) (int input_stream_id)
 
 
virtual bool   [is_hungry](#is_hungry) (int input_stream_id)
 
 
virtual bool   [is_infinity](#is_infinity) ()
 
 
virtual void   [set_callback](#set_callback) (std::function< CBytes(int64_t, CBytes)> callback_endpoint)
 
 
virtual bool   [is_subgraph](#is_subgraph) ()
 
 
virtual bool   [get_graph_config](#get_graph_config) ( [JsonParam](https://babitmf.github.io/docs/bmf/api/api_in_cpp/jsonparam/) &json_param)
 
 
virtual int32_t   [report](#report) ( [JsonParam](https://babitmf.github.io/docs/bmf/api/api_in_cpp/jsonparam/) &json_param, int hints=0)
 
 
virtual   [~Module](#~module) ()
 

 ## 公共属性


int32_t   [node_id_](#node_id_) = -1
 

## 构造函数和析构函数


###  Module()

 ```
bmf_sdk::Module::Module ( int32_t node_id = -1, 
   JsonParam json_param = JsonParam() 
 )   
```
 inline virtual





**Parameters**
 - **node_id**：唯一标识
 - **json_param**：模块的 json 参数 




```
 { 
    configure_bmf_log();
    node_id_ = node_id;
 };
```

###  ~Module()

 ```
virtual bmf_sdk::Module::~Module (  )  
```
 inline virtual






```
 {};

```
## 成员函数文档


###  close()

 ```
virtual int32_t bmf_sdk::Module::close (  )  
```
 inline virtual





关闭模块并释放资源

**Returns**



```
 { return 0; };

```

###  dynamic_reset()

 ```
virtual int32_t bmf_sdk::Module::dynamic_reset (  JsonParam opt_reset )  
```
 inline virtual





根据 json 参数动态重置模块

**Parameters**
 - **opt_reset**：重置 json 参数



**Returns**



```
 { return 0; };

```

###  flush()

 ```
virtual int32_t bmf_sdk::Module::flush (  )  
```
 inline virtual





设置模块 mode 为 flush data

**Returns**



```
 { return 0; };

```

###  get_graph_config()

 ```
virtual bool bmf_sdk::Module::get_graph_config (  JsonParam &json_param )  
```
 inline virtual





如果模块是 subgraph，则获取 graph config

**Parameters**
 - **json_param**：返回 config 的值



**Returns**



```
 { return false;}

```

###  get_input_stream_info()

 ```
virtual int32_t bmf_sdk::Module::get_input_stream_info (  JsonParam &json_param )  
```
 inline virtual





获取模块的 input stream 信息

**Parameters**
 - **json_param**：input stream 信息



**Returns**



```
 { return 0; };

```

###  get_module_info()

 ```
virtual int32_t bmf_sdk::Module::get_module_info (  JsonParam &json_param )  
```
 inline virtual




获取模块的信息

**Parameters**
 - **json_param**：模块信息


**Returns**



```
 { return 0; };

```

###  get_output_stream_info()

 ```
virtual int32_t bmf_sdk::Module::get_output_stream_info (  JsonParam &json_param )  
```
 inline virtual





获取模块的 output stream 信息

**Parameters**
 - **json_param**：output stream 信息


**Returns**



```
 { return 0; };

```

###  init()

 ```
virtual int32_t bmf_sdk::Module::init (  )  
```
 inline virtual





初始化模块

**Returns**



```
 { return 0; };

```

###  is_hungry()

 ```
virtual bool bmf_sdk::Module::is_hungry ( int input_stream_id )  
```
 inline virtual





检查 input stream 是否需要数据

**Parameters**
 - **input_stream_id**：input stream id 



**Returns**



```
 { return true; };

```

###  is_infinity()

 ```
virtual bool bmf_sdk::Module::is_infinity (  )  
```
 inline virtual





检查模块类型

**Returns**



```
 { return false; };

```

###  is_subgraph()

 ```
virtual bool bmf_sdk::Module::is_subgraph (  )  
```
 inline virtual





检查模块是否是 subgraph

**Returns**



```
 { return false; };

```

###  need_hungry_check()

 ```
virtual bool bmf_sdk::Module::need_hungry_check ( int input_stream_id )  
```
 inline virtual





检查 input stream 是否需要 hungry check

**Parameters**
 - **input_stream_id**：input stream id 



**Returns**



```
 { return false; };

```

###  process()

 ```
virtual int32_t bmf_sdk::Module::process (  Task &task )  
```
 pure virtual





process task

**Parameters**
 - **task**：需要被处理



**Returns**



###  report()

 ```
virtual int32_t bmf_sdk::Module::report (  JsonParam &json_param, 
  int hints = 0 
 )   
```
 inline virtual





报告模块的统计数据

**Parameters**
 - **json_param**：统计数据
 - **hints** 提示传递到统计计算



**Returns**



```
 { return 0; };

```

###  reset()

 ```
virtual int32_t bmf_sdk::Module::reset (  )  
```
 inline virtual





重置模块

**Returns**



```
 { return 0; };

```

###  set_callback()

 ```
virtual void bmf_sdk::Module::set_callback ( std::function< CBytes(int64_t, CBytes)> callback_endpoint )  
```
 inline virtual





设置模块的 graph callback

**Parameters**
 - **callback_endpoint**：graph 中定义的 callback




```
 {};

```

###  set_input_stream_info()

 ```
virtual int32_t bmf_sdk::Module::set_input_stream_info (  JsonParam &json_param )  
```
 inline virtual





设置模块的 input stream 信息

**Parameters**
 - **json_param**：input stream 信息



**Returns**



```
 { return 0; };

```

###  set_output_stream_info()

 ```
virtual int32_t bmf_sdk::Module::set_output_stream_info (  JsonParam &json_param )  
```
 inline virtual





设置模块的 output stream 信息

**Parameters**
 - **json_param**：output stream 信息



**Returns**



```
 { return 0; };

```
## 成员数据文档


###  node_id_

```
int32_t bmf_sdk::Module::node_id_ = -1 
```
 - /20230627/doxygen_converter/bmf/bmf/sdk/cpp_sdk/include/bmf/sdk/  module.h  

