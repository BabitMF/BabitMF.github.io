---
title: 'Module'
linkTitle: 'Module'
weight: 5
---

[//]: <> (REF_MD: classbmf__sdk_1_1Module.html)


  [Public Member Functions](https://babitmf.github.io/docs/bmf/api/api_in_cpp/module/#public-member-functions)  |  [Public Attributes](https://babitmf.github.io/docs/bmf/api/api_in_cpp/module/#public-attributes)  |  List of all members  # bmf_sdk::Module Class Referenceabstract

module.h ## Public Member Functions


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
 

 ## Public Attributes


int32_t   [node_id_](#node_id_) = -1
 

## Constructor & Destructor Documentation


###  Module()

 ```
bmf_sdk::Module::Module ( int32_t node_id = -1, 
   JsonParam json_param = JsonParam() 
 )   
```
 inlineinline





**Parameters**
 - **node_id** unique id . 
 - **json_param** json param of module. 




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
 inlinevirtualinline

virtual






```
 {};

```
## Member Function Documentation


###  close()

 ```
virtual int32_t bmf_sdk::Module::close (  )  
```
 inlinevirtualinline

virtual





close module and release resources

**Returns**



```
 { return 0; };

```

###  dynamic_reset()

 ```
virtual int32_t bmf_sdk::Module::dynamic_reset (  JsonParam opt_reset )  
```
 inlinevirtualinline

virtual





dynamic reset module according to the jsonParam

**Parameters**
 - **opt_reset** json param of reset 



**Returns**



```
 { return 0; };

```

###  flush()

 ```
virtual int32_t bmf_sdk::Module::flush (  )  
```
 inlinevirtualinline

virtual





set module mode to flush data

**Returns**



```
 { return 0; };

```

###  get_graph_config()

 ```
virtual bool bmf_sdk::Module::get_graph_config (  JsonParam &json_param )  
```
 inlinevirtualinline

virtual





if the module is subgraph get the graph config

**Parameters**
 - **json_param** return value of config 



**Returns**



```
 { return false;}

```

###  get_input_stream_info()

 ```
virtual int32_t bmf_sdk::Module::get_input_stream_info (  JsonParam &json_param )  
```
 inlinevirtualinline

virtual





get input stream info of module

**Parameters**
 - **json_param** input stream info. 



**Returns**



```
 { return 0; };

```

###  get_module_info()

 ```
virtual int32_t bmf_sdk::Module::get_module_info (  JsonParam &json_param )  
```
 inlinevirtualinline

virtual





get info of module

**Parameters**
 - **json_param** module info. 



**Returns**



```
 { return 0; };

```

###  get_output_stream_info()

 ```
virtual int32_t bmf_sdk::Module::get_output_stream_info (  JsonParam &json_param )  
```
 inlinevirtualinline

virtual





get output stream info of module

**Parameters**
 - **json_param** output stream info. 



**Returns**



```
 { return 0; };

```

###  init()

 ```
virtual int32_t bmf_sdk::Module::init (  )  
```
 inlinevirtualinline

virtual





init module

**Returns**



```
 { return 0; };

```

###  is_hungry()

 ```
virtual bool bmf_sdk::Module::is_hungry ( int input_stream_id )  
```
 inlinevirtualinline

virtual





check the input stream if need data

**Parameters**
 - **input_stream_id** input stream id 



**Returns**



```
 { return true; };

```

###  is_infinity()

 ```
virtual bool bmf_sdk::Module::is_infinity (  )  
```
 inlinevirtualinline

virtual





check the module type

**Returns**



```
 { return false; };

```

###  is_subgraph()

 ```
virtual bool bmf_sdk::Module::is_subgraph (  )  
```
 inlinevirtualinline

virtual





check the module is subgraph

**Returns**



```
 { return false; };

```

###  need_hungry_check()

 ```
virtual bool bmf_sdk::Module::need_hungry_check ( int input_stream_id )  
```
 inlinevirtualinline

virtual





check the input stream if need hungry check

**Parameters**
 - **input_stream_id** input stream id 



**Returns**



```
 { return false; };

```

###  process()

 ```
virtual int32_t bmf_sdk::Module::process (  Task &task )  
```
 pure virtualpure virtual





process task

**Parameters**
 - **task** need to be processed 



**Returns**



###  report()

 ```
virtual int32_t bmf_sdk::Module::report (  JsonParam &json_param, 
  int hints = 0 
 )   
```
 inlinevirtualinline

virtual





report module stats

**Parameters**
 - **json_param** stats 
 - **hints** hints pass to stats caculation 



**Returns**



```
 { return 0; };

```

###  reset()

 ```
virtual int32_t bmf_sdk::Module::reset (  )  
```
 inlinevirtualinline

virtual





reset module

**Returns**



```
 { return 0; };

```

###  set_callback()

 ```
virtual void bmf_sdk::Module::set_callback ( std::function< CBytes(int64_t, CBytes)> callback_endpoint )  
```
 inlinevirtualinline

virtual





set the graph callback of module

**Parameters**
 - **callback_endpoint** callback that defined in graph 




```
 {};

```

###  set_input_stream_info()

 ```
virtual int32_t bmf_sdk::Module::set_input_stream_info (  JsonParam &json_param )  
```
 inlinevirtualinline

virtual





set input stream info of module

**Parameters**
 - **json_param** input stream info. 



**Returns**



```
 { return 0; };

```

###  set_output_stream_info()

 ```
virtual int32_t bmf_sdk::Module::set_output_stream_info (  JsonParam &json_param )  
```
 inlinevirtualinline

virtual





set output stream info of module

**Parameters**
 - **json_param** output stream info. 



**Returns**



```
 { return 0; };

```
## Member Data Documentation


###  node_id_

```
int32_t bmf_sdk::Module::node_id_ = -1 
```
 - /20230627/doxygen_converter/bmf/bmf/sdk/cpp_sdk/include/bmf/sdk/  module.h  

