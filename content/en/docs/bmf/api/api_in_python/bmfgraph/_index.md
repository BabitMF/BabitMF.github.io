---
title: 'BmfGraph'
linkTitle: 'BmfGraph'
weight: 1
---
 

def   [bmf.builder.bmf_graph.BmfGraph.set_option](#set_option) (self, [option](#option) =None)
 
 
def   [bmf.builder.bmf_graph.BmfGraph.get_av_log_buffer](#get_av_log_buffer) (self, level='info')
 
 
def   [bmf.builder.bmf_graph.BmfGraph.get_module](#get_module) (self, alias)
 
 
def   [bmf.builder.bmf_graph.BmfGraph.add_user_callback](#add_user_callback) (self, cb_type, cb)
 
 
def   [bmf.builder.bmf_graph.BmfGraph.remove_user_callback](#remove_user_callback) (self, cb_type, cb)
 
 
def   [bmf.builder.bmf_graph.BmfGraph.c_module](#c_module) (self, name, [option](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#option) =None, module_path="", entry="", [input_manager](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#input_manager) ="immediate", pre_module=None, [scheduler](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#scheduler) =0, [stream_alias](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#stream_alias) =None)
 
 
def   [bmf.builder.bmf_graph.BmfGraph.run_by_config](#run_by_config) (self, graph_config)
 
 
def   [bmf.builder.bmf_graph.BmfGraph.generate_config_file](#generate_config_file) (self, streams=None, is_sub_graph=False, [mode](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#mode) = [GraphMode.NORMAL](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#normal) , is_blocked=True, file_name="original_graph.json")
 
 
def   [bmf.builder.bmf_graph.BmfGraph.run_wo_block](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#run_wo_block) (self, streams=None, is_sub_graph=False, [mode](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#mode) = [GraphMode.NORMAL](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#normal) )
 
 
def   [bmf.builder.bmf_graph.BmfGraph.dynamic_remove](#dynamic_remove) (self, [option](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#option) )
 
 
def   [bmf.builder.bmf_graph.BmfGraph.dynamic_add](#dynamic_add) (self, module_stream, inputs=None, outputs=None)
 
 
def   [bmf.builder.bmf_graph.BmfGraph.dynamic_reset](#dynamic_reset) (self, [option](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#option) )
 
 
def   [bmf.builder.bmf_graph.BmfGraph.update](#update) (self, update_graph)
 
 
def   [bmf.builder.bmf_graph.BmfGraph.close](#close) (self)
 
 
def   [bmf.builder.bmf_graph.BmfGraph.force_close](#force_close) (self)
 
def   [bmf.builder.bmf.graph](#graph) ( option =None)
 
def   [bmf.builder.bmf_graph.BmfGraph.run](#run-22) (self, streams=None, is_sub_graph=False, [mode](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#mode) = [GraphMode.NORMAL](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#normal) , is_blocked=True)
 
def   [bmf.builder.bmf_graph.BmfGraph.run_wo_block](#run_wo_block) (self, streams=None, is_sub_graph=False, [mode](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#mode) = [GraphMode.NORMAL](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#normal) )
 
def   [bmf.builder.bmf_stream.BmfStream.run](#run-12) ( [self](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfstream/#self) )

## Detailed Description

**BMFGraph** class.

## Function Documentation


###  add_user_callback()

```
def bmf.builder.bmf_graph.BmfGraph.add_user_callback (  self, 
   cb_type, 
   cb 
 )   
```
To setup a user defined callback into the graph.

The callback can be triggered in the module

**Parameters**
 - **cb_type** a value can be defined by user to distinguish which is the one to call in multiple callbacks 
 - **cb** the function for this callback 




```
     def add_user_callback(self, cb_type, cb):

```

###  c_module()

```
def bmf.builder.bmf_graph.BmfGraph.c_module (  self, 
   name, 
   option = None, 
   module_path = "", 
   entry = "", 
   input_manager = "immediate", 
   pre_module = None, 
   scheduler = 0, 
   stream_alias = None 
 )   
```
Using the stream in the graph to build a c/c++ implemented module stream loaded by module library path and entry.

**Parameters**
 - **name** the module name 
 - **option** the parameters for the module 
 - **module_path** the path to load the module 
 - **entry** the call entry of the module 
 - **input_manager** select the input manager for this module, immediate by default 



**Returns**



```
     def c_module(self, name, option=None, module_path="", entry="", input_manager="immediate", pre_module=None, scheduler=0, stream_alias=None):

```

###  close()

```
def bmf.builder.bmf_graph.BmfGraph.close (  self )  
```
To close the graph by block wait until all the tasks are finished.


```
     def close(self):

```

###  dynamic_add()

```
def bmf.builder.bmf_graph.BmfGraph.dynamic_add (  self, 
   module_stream, 
   inputs = None, 
   outputs = None 
 )   
```
To generate the graph of dynamical add node, the graph should be different from running main graph.

**Parameters**
 - **module_stream** the stream(s) of the new node 
 - **inputs** a json style description for the input to be connected with this new node exp. {'alias': 'layout', 'streams': 1} it means the input of this node will be "layout" alias node and have 1 stream linked 
 - **outputs** a json style description for the output to be connected with this new node 




```
     def dynamic_add(self, module_stream, inputs=None, outputs=None):

```

###  dynamic_remove()

```
def bmf.builder.bmf_graph.BmfGraph.dynamic_remove (  self, 
   option 
 )   
```
To generate the graph of dynamical remove node, the graph should be different from running main graph.

**Parameters**
 - **option** json style of description of which node to be removed exp. {'alias': 'decode1'} 




```
     def dynamic_remove(self, option):

```

###  dynamic_reset()

```
def bmf.builder.bmf_graph.BmfGraph.dynamic_reset (  self, 
   option 
 )   
```
To generate the graph of dynamical node option reset, the graph should be different from running main graph.

**Parameters**
 - **option** json style of description of the parameters to be reset of the node exp. {'alias': 'encode1', 'output_path': output_path, 'video_params': { 'codec': 'h264', 'width': 320, 'height': 240, 'crf': 23, 'preset': 'veryfast' } } 




```
     def dynamic_reset(self, option):

```

###  force_close()

```
def bmf.builder.bmf_graph.BmfGraph.force_close (  self )  
```
Force close the running graph even if the whole pipeline in the graph is not finished.


```
     def force_close(self):

```

###  generate_config_file()

```
def bmf.builder.bmf_graph.BmfGraph.generate_config_file (  self, 
   streams = None, 
   is_sub_graph = False, 
   mode = GraphMode.NORMAL, 
   is_blocked = True, 
   file_name = "original_graph.json" 
 )   
```
To generate the graph config only, without running.

**Parameters**
 - **streams** the input stream list of the module 
 - **is_sub_graph** bool value to indicate whether it's a sub graph, False by default 
 - **mode** to set the graph mode, NORMAL by default, other option  [bmf_graph.GraphMode](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/) 
 - **file_name** output file name with extension 




```
         is_blocked=True, file_name="original_graph.json"):

```

###  get_av_log_buffer()

```
def bmf.builder.bmf_graph.BmfGraph.get_av_log_buffer (  self, 
   level = 'info' 
 )   
```
To get a globalized effect buffer (list) which include all the log coming from ffmpeg libraries.

**Parameters**
 - **level** ffmpeg av log level by default "info" level. it's optional, and also can be set: "quiet","panic","fatal","error","warning","info","verbose","debug","trace" 



**Returns**


**Note**



```
     def get_av_log_buffer(self, level = 'info'):

```

###  get_module()

```
def bmf.builder.bmf_graph.BmfGraph.get_module (  self, 
   alias 
 )   
```
get sync module by given alias

**Parameters**
 - **alias** a node tag given by user while building graph pipeline 




```
     def get_module(self, alias):

```

###  remove_user_callback()

```
def bmf.builder.bmf_graph.BmfGraph.remove_user_callback (  self, 
   cb_type, 
   cb 
 )   
```
Remove the user defined callback from the callback list.

**Parameters**
 - **cb_type** a value can be defined by user to distinguish which is the one to call in multiple callbacks 
 - **cb** the function for this callback 




```
     def remove_user_callback(self, cb_type, cb):

```

###  run_by_config()

```
def bmf.builder.bmf_graph.BmfGraph.run_by_config (  self, 
   graph_config 
 )   
```
To run a graph by a graph config file.

**Parameters**
 - **graph_config** the graph config file path 



**Returns**



```
     def run_by_config(self, graph_config):

```

###  run_wo_block()

```
def bmf.builder.bmf_graph.BmfGraph.run_wo_block (  self, 
   streams = None, 
   is_sub_graph = False, 
   mode = GraphMode.NORMAL 
 )   
```
Run the graph without wait to close, user should call  [close()](#close)  by themself.


```
     def run_wo_block(self, streams=None, is_sub_graph=False, mode=GraphMode.NORMAL):

```

###  set_option()

```
def bmf.builder.bmf_graph.BmfGraph.set_option (  self, 
   option = None 
 )   
```
set new graph options before run

**Parameters**
 - **option** the option patch for the graph 




```
     def set_option(self, option=None):

```

###  update()

```
def bmf.builder.bmf_graph.BmfGraph.update (  self, 
   update_graph 
 )   
```
Final action to do the dynamical add/remove/reset node for current running graph.

**Parameters**
 - **update_graph** the graph generated by previous  [dynamic_add()](#dynamic_add) , [dynamic_remove()](#dynamic_remove) or [dynamic_reset()](#dynamic_reset) 




```
     def update(self, update_graph):

```
 
###  graph()

```
def bmf.builder.bmf.graph (  option = None )  
```
To provide a BMF graph.

**Parameters**
 - **option** the option for the graph 



**Returns**



```
 def graph(option=None):

```

###  run() [1/2]

```
def bmf.builder.bmf_stream.BmfStream.run (  self )  
```
Using the stream of the module to call the routine of graph run.


```
     def run(self):

```

###  run() [2/2]

```
def bmf.builder.bmf_graph.BmfGraph.run (  self, 
   streams = None, 
   is_sub_graph = False, 
   mode = GraphMode.NORMAL, 
   is_blocked = True 
 )   
```
To run the graph until it's finished.

**Parameters**
 - **streams** the input stream list of the module 
 - **is_sub_graph** bool value to indicate whether it's a sub graph, False by default 
 - **mode** to set the graph mode, NORMAL by default, other option  [bmf_graph.GraphMode](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/) 




```
     def run(self, streams=None, is_sub_graph=False, mode=GraphMode.NORMAL, is_blocked=True):
         
         file_name = ""
         if 'dump_graph' in self.option_ and self.option_['dump_graph'] == 1:
             file_name = "original_graph.json"
 
         self.generate_config_file(
             streams=streams,
             is_sub_graph=is_sub_graph,
             mode=mode,
             is_blocked=is_blocked,
             file_name=file_name
         )
 
         graph_config_str = self.graph_config_.dump()
         print(graph_config_str)
         # call engine
         self.exec_graph_ = engine.Graph(graph_config_str, False, self.option_.get('optimize_graph', True))
         self.exec_graph_.start()
 
         # if graph has no input stream, 'close' will wait all nodes finish
         # else, we need fill packets to input stream and close graph manually
         if len(self.input_streams_) == 0 and len(self.output_streams_) == 0:
             if is_blocked:
                 self.exec_graph_.close()
             else:
                 print("start to run without block")
         elif len(self.output_streams_) > 0:
             # return output stream name which is used to poll packets
             output_streams_name = []
             for stream in self.output_streams_:
                 output_streams_name.append(stream.get_name())
             return output_streams_name
 
         return None
 

```

###  run_wo_block()

```
def bmf.builder.bmf_graph.BmfGraph.run_wo_block (  self, 
   streams = None, 
   is_sub_graph = False, 
   mode = GraphMode.NORMAL 
 )   
```
Run the graph without wait to close, user should call  [close()](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#close)  by themself.


```
     def run_wo_block(self, streams=None, is_sub_graph=False, mode=GraphMode.NORMAL):

```


[//]: <> (REF_MD: classbmf_1_1builder_1_1bmf__graph_1_1BmfGraph.html)

![img](/img/docs/classbmf_1_1builder_1_1bmf__graph_1_1BmfGraph__coll__graph.png)

 ## Member Functions


def   [__init__](#__init__) (self, [option](#option) =None)
 
def   [clear_user_callback](#clear_user_callback) (self, cb_type, cb)
 
def   [callback_for_engine](#callback_for_engine) (self, cb_type, para)
 
def   [add_node](#add_node) (self, node)
 
def   [module](#module) (self, [module_info](#module_info) , [option](#option) =None, module_path="", entry="", [input_manager](#input_manager) ='immediate', [pre_module](#pre_module) =None, [scheduler](#scheduler) =0, [stream_alias](#stream_alias) =None)
 
def   [download](#download) (self, download_para, type="", path="", entry="", [stream_alias](#stream_alias) =None)
 
def   [py_module](#py_module) (self, name, [option](#option) =None, module_path="", entry="", [input_manager](#input_manager) ='immediate', [pre_module](#pre_module) =None, [scheduler](#scheduler) =0, [stream_alias](#stream_alias) =None)
 
def   [go_module](#go_module) (self, name, [option](#option) =None, module_path="", entry="", [input_manager](#input_manager) ="immediate", pre_module=None, [scheduler](#scheduler) =0, [stream_alias](#stream_alias) =None)
 
def   [anullsrc](#anullsrc) (self, args, kwargs)
 
def   [input_stream](#input_stream) (self, name)
 
def   [fill_packet](#fill_packet) (self, name, packet, block=False)
 
def   [fill_eos](#fill_eos) (self, name)
 
def   [poll_packet](#poll_packet) (self, name, block=False)
 
def   [dump_graph](#dump_graph) (self, graph_config)
 
def   [generate_graph_config](#generate_graph_config) (self)
 
def   [parse_output_streams](#parse_output_streams) (self, streams)
 
def   [get_graph_config](#get_graph_config) (self)
 
def   [runFFmpegByConfig](#runffmpegbyconfig) (self, config_path)
 
def   [start](#start) (self, [stream](#stream-12) , is_sub_graph=False)
 
def   [status](#status) (self)
 
def   [generateConfig](#generateconfig) (self, file_name)
 
 
def   [set_option](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#set_option) (self, [option](#option) =None)
 
 
 
def   [get_av_log_buffer](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#get_av_log_buffer) (self, level='info')
 
 
 
def   [get_module](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#get_module) (self, alias)
 
 
 
def   [add_user_callback](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#add_user_callback) (self, cb_type, cb)
 
 
 
def   [remove_user_callback](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#remove_user_callback) (self, cb_type, cb)
 
 
 
def   [decode](#decode) (self, decoder_para, type="", path="", entry="", [stream_alias](#stream_alias) =None)
 
 
 
def   [c_module](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#c_module) (self, name, [option](#option) =None, module_path="", entry="", [input_manager](#input_manager) ="immediate", pre_module=None, [scheduler](#scheduler) =0, [stream_alias](#stream_alias) =None)
 
 
 
def   [run_by_config](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#run_by_config) (self, graph_config)
 
 
 
def   [generate_config_file](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#generate_config_file) (self, streams=None, is_sub_graph=False, [mode](#mode) = [GraphMode.NORMAL](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#normal) , is_blocked=True, file_name="original_graph.json")
 
 
 
def   [run](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#run-22) (self, streams=None, is_sub_graph=False, [mode](#mode) = [GraphMode.NORMAL](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#normal) , is_blocked=True)
 
 
def   [run_wo_block](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#run_wo_block) (self, streams=None, is_sub_graph=False, [mode](#mode) = [GraphMode.NORMAL](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#normal) )
 
 
 
def   [dynamic_remove](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#dynamic_remove) (self, [option](#option) )
 
 
 
def   [dynamic_add](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#dynamic_add) (self, module_stream, inputs=None, outputs=None)
 
 
 
def   [dynamic_reset](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#dynamic_reset) (self, [option](#option) )
 
 
 
def   [update](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#update) (self, update_graph)
 
 
 
def   [close](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#close) (self)
 
 
 
def   [force_close](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfgraph/#force_close) (self)
 
def   [generate_node_id](#generate_node_id) ()
 
def   [generate_add_id](#generate_add_id) ()
 
def   [get_node_output_stream_map](#get_node_output_stream_map) (node)
 
def   [all_stream_has_notify](#all_stream_has_notify) (stream_map)
 
def   [all_stream_has_index](#all_stream_has_index) (stream_map)
 
def   [generate_node_stream_config](#generate_node_stream_config) (stream_map, node)
 
def   [generate_module_info_config](#generate_module_info_config) (module_info_dict)
 
def   [generate_meta_info_config](#generate_meta_info_config) ( [pre_module](#pre_module) , callback_dict)
 
def   [generate_node_config](#generate_node_config) (node)
 

 ## Member Data


   [nodes_](#nodes_) 
 
   [option_](#option_) 
 
   [input_streams_](#input_streams_) 
 
   [output_streams_](#output_streams_) 
 
   [node_streams_](#node_streams_) 
 
   [update_graph_](#update_graph_) 
 
   [sync_mode_](#sync_mode_) 
 
   [user_callbacks](#user_callbacks) 
 
   [cb_lock](#cb_lock) 
 

int   [global_node_id_](#global_node_id_) = 0
 
int   [global_added_id_](#global_added_id_) = 0
 
string   [server_input_name](#server_input_name) = "server_input"
 
   [node_id_mutex_](#node_id_mutex_) = threading.Lock()
 
   [logbuffer_](#logbuffer_) = None
 
   [av_log_list_](#av_log_list_) = list()
 
   [select_node](#select_node) = None
 
   [sync_mode](#sync_mode) = select_node.create_sync_module()
 
   [cb_list](#cb_list) = self.user_callbacks.get(cb_type, [])
 
dictionary   [module_info](#module_info) 
 
   [stream_alias](#stream_alias) 
 
dictionary   [option](#option) = {}
 
   [input_manager](#input_manager) 
 
   [pre_module](#pre_module) 
 
   [scheduler](#scheduler) 
 
   [graph_config_str](#graph_config_str) = graph_config.dump()
 
   [exec_graph_](#exec_graph_) 
 
list   [output_streams_name](#output_streams_name) = []
 
   [mode](#mode) 
 
   [no_output_stream_](#no_output_stream_) 
 
def   [stream](#stream-12) = self.input_stream(self.server_input_name)
 
   [stream](#stream-22) = self.input_streams_[0]
 
   [f](#f) = open(file_name, 'w')
 
dictionary   [alias_name](#alias_name) = option.get('alias', '')
 
   [graph_](#graph_) 
 
   [remove_node](#remove_node) = [BmfNode](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfnode/) ( [alias_name](#alias_name) , [option](#option) , self, 'immediate')
 
   [graph_config_](#graph_config_) 
 
int   [nb_links](#nb_links-12) = 0
 
int   [add_id](#add_id-22) = 0
 
   [tmp](#tmp) 
 
   [tail_config](#tail_config) = None
 
string   [out_link_module_alias](#out_link_module_alias-12) = ''
 
   [out_link_module_alias](#out_link_module_alias-22) = outputs.get('alias', '')
 
   [nb_links](#nb_links-22) = outputs.get('streams', 0)
 
def   [add_id](#add_id-22) = self.generate_add_id()
 
   [stream_config](#stream_config) = [StreamConfig](https://babitmf.github.io/docs/bmf/api/api_in_python/streamconfig/) ()
 
string   [out_link_name](#out_link_name) = [out_link_module_alias](#out_link_module_alias-12) + "." + str( [add_id](#add_id-22) ) + "_" + str(i)
 
   [in_link_module_alias](#in_link_module_alias) = inputs.get('alias', '')
 
   [ncfg](#ncfg) = None
 
string   [in_link_name](#in_link_name) = [in_link_module_alias](#in_link_module_alias) + "." + str( [add_id](#add_id-22) ) + "_" + str(i)
 
   [reset_node](#reset_node) = [BmfNode](https://babitmf.github.io/docs/bmf/api/api_in_python/bmfnode/) ("", [option](#option) , self)

   string   [NORMAL](#normal) = 'Normal'
 
string   [SERVER](#server) = 'Server'
 
string   [GENERATOR](#generator) = 'Generator'
 
string   [SUBGRAPH](#subgraph) = 'Subgraph'
 
string   [PUSHDATA](#pushdata) = 'Pushdata'
 
string   [FFMPEG](#ffmpeg) = 'ffmpeg'
 
string   [C_ENGINE](#c_engine) = 'c_engine'
 
### \_\_init\_\_()

```
def bmf.builder.bmf_graph.BmfGraph.__init__ (  self, 
   option = None 
 )   
```

```
     def __init__(self, option=None):
         if option is None:
             option = {}
         self.mode = GraphMode.NORMAL
         self.nodes_ = []
         self.option_ = option
 
         # ignore graph output stream
         self.no_output_stream_ = option.get('no_output_stream', True)
 
         # graph input and output streams
         self.input_streams_ = []
         self.output_streams_ = []
 
         # save pre_created streams in SERVER mode
         self.node_streams_ = []
 
         # engine graph
         self.exec_graph_ = None
         self.graph_config_ = None
         self.update_graph_ = None
 
         # engine pre_allocated modules
         self.pre_module = {}
 
         # save created modules for sync mode
         self.sync_mode_ = {}
 
         # callbacks set by user
         self.user_callbacks = {}
         self.cb_lock = threading.RLock()
 
         if BmfGraph.logbuffer_ is not None:
             BmfGraph.logbuffer_.close()
 

```
## Member Function Documentation


###  add_node()

```
def bmf.builder.bmf_graph.BmfGraph.add_node (  self, 
   node 
 )   
```

```
     def add_node(self, node):
         if node is not None:
             self.nodes_.append(node)
 

```

###  all_stream_has_index()

 ```
def bmf.builder.bmf_graph.BmfGraph.all_stream_has_index (  stream_map )  
```
 staticstatic






```
     def all_stream_has_index(stream_map):
         max_index = -1
         for notify in stream_map.keys():
             if not isinstance(notify, int):
                 return False, 0
             else:
                 max_index = max(max_index, notify)
 
         return True, max_index
 

```

###  all_stream_has_notify()

 ```
def bmf.builder.bmf_graph.BmfGraph.all_stream_has_notify (  stream_map )  
```
 staticstatic






```
     def all_stream_has_notify(stream_map):
         for notify in stream_map.keys():
             if not isinstance(notify, str):
                 return False
         return True
 

```

###  anullsrc()

```
def bmf.builder.bmf_graph.BmfGraph.anullsrc (  self, 
   args, 
   kwargs 
 )   
```

```
     def anullsrc(self, 
  * args
  ** kwargs
):
         stream_alias = None
         type = ""
         path = ""
         entry = ""
         if 'stream_alias' in kwargs:
             stream_alias = kwargs['stream_alias']
             del kwargs['stream_alias']
         if 'type' in kwargs:
             type = kwargs['type']
             del kwargs['type']
         if 'path' in kwargs:
             path = kwargs['path']
             del kwargs['path']
         if 'entry' in kwargs:
             entry = kwargs['entry']
             del kwargs['entry']
 
         para = get_filter_para(
  * args
  ** kwargs
)
         if para is not None and len(para) > 0:
             option = {
                 'name': 'anullsrc',
                 'para': para
             }
         module_info = {
             "name": bmf_modules['ff_filter'],
             "type": type,
             "path": path,
             "entry": entry
         }
         # create node
         return BmfNode(module_info, option, self, 'immediate').stream(stream_alias=stream_alias)
 

```

###  callback_for_engine()

```
def bmf.builder.bmf_graph.BmfGraph.callback_for_engine (  self, 
   cb_type, 
   para 
 )   
```

```
     def callback_for_engine(self, cb_type, para):
         # TODO: here we locked all types, can optimize to lock one type
         self.cb_lock.acquire()
         res = bytes("", "ASCII")
         cb_list = self.user_callbacks.get(cb_type, [])
         for cb in cb_list:
             if cb is not None:
                 res = cb(para)
                 break
         self.cb_lock.release()
         return res
 

```

###  clear_user_callback()

```
def bmf.builder.bmf_graph.BmfGraph.clear_user_callback (  self, 
   cb_type, 
   cb 
 )   
```

```
     def clear_user_callback(self, cb_type, cb):
         self.cb_lock.acquire()
         self.user_callbacks[cb_type] = []
         self.cb_lock.release()
 

```

###  decode()

```
def bmf.builder.bmf_graph.BmfGraph.decode (  self, 
   decoder_para, 
   type = "", 
   path = "", 
   entry = "", 
   stream_alias = None 
 )   
```
A graph function to provide a build-in decoder BMF stream Include av demuxer and decoder.

**Parameters**
 - **decoder_para** the parameters for the decoder 



**Returns**



```
     def decode(self, decoder_para, type="", path="", entry="", stream_alias=None):

```

###  download()

```
def bmf.builder.bmf_graph.BmfGraph.download (  self, 
   download_para, 
   type = "", 
   path = "", 
   entry = "", 
   stream_alias = None 
 )   
```

```
     def download(self, download_para, type="", path="", entry="", stream_alias=None):
         module_info = {
             "name": 'download',
             "type": type,
             "path": path,
             "entry": entry
         }
         return BmfNode(module_info, download_para, self, 'immediate').stream(stream_alias=stream_alias)
 

```

###  dump_graph()

```
def bmf.builder.bmf_graph.BmfGraph.dump_graph (  self, 
   graph_config 
 )   
```

```
     def dump_graph(self, graph_config):
         dump = self.option_.get('dump_graph', 0)
 
         graph_str = json.dumps(obj=graph_config.__dict__,
                                ensure_ascii=False,
                                indent=4,
                                cls=GraphConfigEncoder)
 
         # print(graph_str)
         Log.log(LogLevel.DEBUG, graph_str)
 
         if dump == 1:
             if 'graph_name' in self.option_:
                 file_name = 'original_' + self.option_['graph_name'] + '.json'
             else:
                 file_name = 'original_graph.json'
 
             f = open(file_name, 'w')
             f.write(graph_str)
             f.close()
 

```

###  fill_eos()

```
def bmf.builder.bmf_graph.BmfGraph.fill_eos (  self, 
   name 
 )   
```

```
     def fill_eos(self, name):
         if self.exec_graph_ is not None:
             self.exec_graph_.add_eos_packet(name)
 

```

###  fill_packet()

```
def bmf.builder.bmf_graph.BmfGraph.fill_packet (  self, 
   name, 
   packet, 
   block = False 
 )   
```

```
     def fill_packet(self, name, packet, block=False):
         if self.exec_graph_ is not None:
             # pq = Queue()
             # pq.put(packet)
             self.exec_graph_.add_input_stream_packet(name, packet, block)
 

```

###  generate_add_id()

 ```
def bmf.builder.bmf_graph.BmfGraph.generate_add_id (  )  
```
 staticstatic






```
     def generate_add_id():
         BmfGraph.node_id_mutex_.acquire()
         result = BmfGraph.global_added_id_
         BmfGraph.global_added_id_ += 1
         BmfGraph.node_id_mutex_.release()
         return result
 

```

###  generate_graph_config()

```
def bmf.builder.bmf_graph.BmfGraph.generate_graph_config (  self )  
```

```
     def generate_graph_config(self):
         graph_config = GraphConfig()
 
         # set option
         graph_config.set_option(self.option_)
 
         # set input stream
         for stream in self.input_streams_:
             stream_config = StreamConfig()
             stream_config.set_identifier(stream.get_name())
             if stream.get_alias() is None:
                 stream_config.set_alias("")
             else:
                 stream_config.set_alias(stream.get_alias())
             graph_config.add_input_stream(stream_config)
 
         # set output stream
         for stream in self.output_streams_:
             stream_config = StreamConfig()
             stream_config.set_identifier(stream.get_name())
             if stream.get_alias() is None:
                 stream_config.set_alias("")
             else:
                 stream_config.set_alias(stream.get_alias())
             graph_config.add_output_stream(stream_config)
 
         # node config
         for node in self.nodes_:
             node_config = BmfGraph.generate_node_config(node)
             graph_config.add_node_config(node_config)
 
         # graph pre_allocated module
         graph_pre_module = {}
         for node in self.nodes_:
             if node.get_pre_module() is not None:
                 graph_pre_module[node.get_id()] = node.get_pre_module()
 
         # set graph mode
         graph_config.set_mode(self.mode)
 
         return graph_config, graph_pre_module
 

```

###  generate_meta_info_config()

 ```
def bmf.builder.bmf_graph.BmfGraph.generate_meta_info_config (  pre_module, 
   callback_dict 
 )   
```
 staticstatic






```
     def generate_meta_info_config(pre_module, callback_dict):
         meta_info_config = MetaConfig()
 
         # set pre_module
         if pre_module is not None:
             meta_info_config.set_premodule_id(pre_module.uid())
         # set callback function
         for key, callback in callback_dict.items():
             callback_binding = "{}:{}".format(key, callback[0])
             meta_info_config.add_callback_binding(callback_binding)
 
         return meta_info_config
 

```

###  generate_module_info_config()

 ```
def bmf.builder.bmf_graph.BmfGraph.generate_module_info_config (  module_info_dict )  
```
 staticstatic






```
     def generate_module_info_config(module_info_dict):
         module_info_config = ModuleConfig()
 
         # set module name
         if module_info_dict.get('name'):
             module_info_config.set_name(module_info_dict['name'])
         else:
             module_info_config.set_name('')
 
         # set module type
         if module_info_dict.get('type'):
             module_info_config.set_type(module_info_dict['type'])
         else:
             module_info_config.set_type('')
 
         # set module path
         if module_info_dict.get('path'):
             module_info_config.set_path(module_info_dict['path'])
         else:
             module_info_config.set_path('')
 
         # set module entry
         if module_info_dict.get('entry'):
             module_info_config.set_entry(module_info_dict['entry'])
         else:
             module_info_config.set_entry('')
 
         return module_info_config
 

```

###  generate_node_config()

 ```
def bmf.builder.bmf_graph.BmfGraph.generate_node_config (  node )  
```
 staticstatic






```
     def generate_node_config(node):
         input_stream_map = node.get_input_streams()
         output_stream_map = BmfGraph.get_node_output_stream_map(node)
 
         node_config = NodeConfig()
 
         # set node id
         node_config.set_id(node.get_id())
 
         # set option
         node_config.set_option(node.get_option())
 
         # set module info
         node_config.set_module_info(
             BmfGraph.generate_module_info_config(node.get_module_info())
         )
 
         # set meta info
         node_config.set_meta_info(
             BmfGraph.generate_meta_info_config(node.get_pre_module(), node.get_user_callback())
         )
 
         # set alias
         node_config.set_alias(node.get_option().get('alias', ''))
 
         # set scheduler index
         node_config.set_scheduler(node.get_scheduler())
 
         # set input manager
         node_config.set_input_manager(node.get_input_manager())
 
         # set input streams
         node_config.set_input_streams(
             BmfGraph.generate_node_stream_config(input_stream_map, node)
         )
 
         # set output streams
         node_config.set_output_streams(
             BmfGraph.generate_node_stream_config(output_stream_map, node)
         )
 
         return node_config
 

```

###  generate_node_id()

 ```
def bmf.builder.bmf_graph.BmfGraph.generate_node_id (  )  
```
 staticstatic






```
     def generate_node_id():
         BmfGraph.node_id_mutex_.acquire()
         result = BmfGraph.global_node_id_
         BmfGraph.global_node_id_ += 1
         BmfGraph.node_id_mutex_.release()
         return result
 

```

###  generate_node_stream_config()

 ```
def bmf.builder.bmf_graph.BmfGraph.generate_node_stream_config (  stream_map, 
   node 
 )   
```
 staticstatic






```
     def generate_node_stream_config(stream_map, node):
         streams = []
         if len(stream_map) == 0:
             return streams
 
         # all streams has notify
         if BmfGraph.all_stream_has_notify(stream_map):
             for (_, stream) in stream_map.items():
                 stream_config = StreamConfig()
                 stream_config.set_identifier(stream.get_identifier())
                 if stream.get_alias() is None:
                     stream_config.set_alias("")
                 else:
                     stream_config.set_alias(stream.get_alias())
                 streams.append(stream_config)
             return streams
 
         # all streams don't have notify, use stream index as notify
         ret, max_index = BmfGraph.all_stream_has_index(stream_map)
         if ret:
             for index in range(max_index + 1):
                 stream_config = StreamConfig()
                 if index in stream_map.keys():
                     if stream_map[index].get_alias() is None:
                         stream_config.set_alias("")
                     else:
                         stream_config.set_alias(stream_map[index].get_alias())
                     stream_config.set_identifier(stream_map[index].get_identifier())
                     streams.append(stream_config)
                 else:
                     # just generate an unique name and hold the position
                     stream_config.set_identifier(node.generate_stream_name())
                     stream_config.set_alias("")
                     streams.append(stream_config)
             return streams
 
         print('failed to generate node stream config for ', node.get_type(), node.get_id())
         return streams
 

```

###  generateConfig()

```
def bmf.builder.bmf_graph.BmfGraph.generateConfig (  self, 
   file_name 
 )   
```

```
     def generateConfig(self, file_name):
         self.graph_config_, graph_pre_module = self.generate_graph_config()
         print(self.graph_config_)
         self.dump_graph(self.graph_config_)
         graph_str = json.dumps(obj=self.graph_config_.__dict__,
                                ensure_ascii=False,
                                indent=4,
                                cls=GraphConfigEncoder)
         f = open(file_name, 'w')
         f.write(graph_str)
         f.close()
 

```

###  get_graph_config()

```
def bmf.builder.bmf_graph.BmfGraph.get_graph_config (  self )  
```

```
     def get_graph_config(self):
         return self.graph_config_
 

```

###  get_node_output_stream_map()

 ```
def bmf.builder.bmf_graph.BmfGraph.get_node_output_stream_map (  node )  
```
 staticstatic






```
     def get_node_output_stream_map(node):
         stream_map = {}
         for edge in node.get_outgoing_edges():
             stream_map[edge.get_upstream_stream().get_notify()] = edge.get_upstream_stream()
         return stream_map
 

```

###  go_module()

```
def bmf.builder.bmf_graph.BmfGraph.go_module (  self, 
   name, 
   option = None, 
   module_path = "", 
   entry = "", 
   input_manager = "immediate", 
   pre_module = None, 
   scheduler = 0, 
   stream_alias = None 
 )   
```

```
     def go_module(self, name, option=None, module_path="", entry="", input_manager="immediate", pre_module=None, scheduler=0, stream_alias=None):
         if option is None:
             option = {}
         return self.module({"name": name, "type": "go", "path": module_path, "entry": entry}, option,
                            input_manager=input_manager, pre_module=pre_module, scheduler=scheduler, stream_alias=stream_alias)
 

```

###  input_stream()

```
def bmf.builder.bmf_graph.BmfGraph.input_stream (  self, 
   name 
 )   
```

```
     def input_stream(self, name):
         stream = BmfStream(name, self, name)
         self.input_streams_.append(stream)
         return stream
 

```

###  module()

```
def bmf.builder.bmf_graph.BmfGraph.module (  self, 
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

```
     def module(self, module_info, option=None, module_path="", entry="", input_manager='immediate', pre_module=None, scheduler=0, stream_alias=None):
         if option is None:
             option = {}
         if isinstance(module_info, str):
             return BmfNode({"name": module_info, "type": "", "path": module_path, "entry": entry}, option, self,
                            input_manager, pre_module, scheduler).stream(stream_alias=stream_alias)
         return BmfNode(module_info, option, self, input_manager, pre_module, scheduler).stream(stream_alias=stream_alias)
 

```

###  parse_output_streams()

```
def bmf.builder.bmf_graph.BmfGraph.parse_output_streams (  self, 
   streams 
 )   
```

```
     def parse_output_streams(self, streams):
         if streams is not None:
             if isinstance(streams, BmfStream):
                 # create a edge connected with stream and graph output stream
                 graph_output_stream = BmfStream(streams.get_name(), None, 0)
                 edge = BmfEdge(streams, graph_output_stream)
                 streams.get_node().add_outgoing_edge(edge)
                 self.output_streams_.append(graph_output_stream)
             elif isinstance(streams, list):
                 for stream in streams:
                     if stream is not None:
                         graph_output_stream = BmfStream(stream.get_name(), None, 0)
                         edge = BmfEdge(stream, graph_output_stream)
                         stream.get_node().add_outgoing_edge(edge)
                         self.output_streams_.append(graph_output_stream)
 

```

###  poll_packet()

```
def bmf.builder.bmf_graph.BmfGraph.poll_packet (  self, 
   name, 
   block = False 
 )   
```

```
     def poll_packet(self, name, block=False):
         if self.exec_graph_ is not None:
             return self.exec_graph_.poll_output_stream_packet(name, block)
         else:
             time.sleep(1)
 

```

###  py_module()

```
def bmf.builder.bmf_graph.BmfGraph.py_module (  self, 
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

```
     def py_module(self, name, option=None, module_path="", entry="", input_manager='immediate', pre_module=None, scheduler=0, stream_alias=None):
         if option is None:
             option = {}
         return self.module({"name": name, "type": "python", "path": module_path, "entry": entry}, option,
                            input_manager=input_manager, pre_module=pre_module, scheduler=scheduler, stream_alias=stream_alias)
 

```

###  runFFmpegByConfig()

```
def bmf.builder.bmf_graph.BmfGraph.runFFmpegByConfig (  self, 
   config_path 
 )   
```

```
     def runFFmpegByConfig(self, config_path):
         start_time = time.time()
         self.graph_config_ = GraphConfig(config_path)
         ffmpeg_engine = FFmpegEngine()
         command = ""
         if (ffmpeg_engine.is_valid_for_ffmpeg(self.graph_config_)):
             # self.dump_graph(self.graph_config_)
             command = ffmpeg_engine.get_ffmpeg_command(self.graph_config_)
             command = command + " -y"
         # do graph optimization
         print("ffmpeg command: ", command)
         os.system(command)
         end_time = time.time()
         ffmpeg_time = (end_time - start_time)
         return ffmpeg_time
 

```

###  start()

```
def bmf.builder.bmf_graph.BmfGraph.start (  self, 
   stream, 
   is_sub_graph = False 
 )   
```

```
     def start(self, stream, is_sub_graph=False):
         self.output_streams_.append(stream)
 
         # create a edge connected with stream and graph output stream
         graph_output_stream = BmfStream(stream.get_name(), None, 0)
         edge = BmfEdge(stream, graph_output_stream)
         stream.get_node().add_outgoing_edge(edge)
         if stream is not None:
             self.mode = GraphMode.GENERATOR
 
         # parse graph config
         self.graph_config_, self.pre_module = self.generate_graph_config()
 
         # for sub-graph, don't start executing
         if is_sub_graph:
             return
 
         # create and run graph
         graph_config_str = self.graph_config_.dump()
         self.exec_graph_ = engine.Graph(graph_config_str, False, True)
         self.exec_graph_.start()
 
         while True:
             pkt = self.exec_graph_.poll_output_stream_packet(stream.get_name(), True)
             if pkt is not None and pkt.defined():
                 if pkt.timestamp == Timestamp.EOF:
                     break
                 yield pkt
 
         self.exec_graph_.close()
 

```

###  status()

```
def bmf.builder.bmf_graph.BmfGraph.status (  self )  
```

```
     def status(self):
         if self.exec_graph_ is not None:
             return self.exec_graph_.status()
         return None
 

```
## Member Data Documentation


###  add_id [1/2]

 ```
def bmf.builder.bmf_graph.BmfGraph.add_id = 0 
```
 staticstatic






###  add_id [2/2]

 ```
def bmf.builder.bmf_graph.BmfGraph.add_id = self.generate_add_id() 
```
 staticstatic






###  alias_name

 ```
dictionary bmf.builder.bmf_graph.BmfGraph.alias_name = option.get('alias', '') 
```
 staticstatic






###  av_log_list_

 ```
bmf.builder.bmf_graph.BmfGraph.av_log_list_ = list() 
```
 staticstatic






###  cb_list

 ```
bmf.builder.bmf_graph.BmfGraph.cb_list = self.user_callbacks.get(cb_type, []) 
```
 staticstatic






###  cb_lock

```
bmf.builder.bmf_graph.BmfGraph.cb_lock 
```

###  exec_graph_

 ```
bmf.builder.bmf_graph.BmfGraph.exec_graph_ 
```
 staticstatic






###  f

 ```
bmf.builder.bmf_graph.BmfGraph.f = open(file_name, 'w') 
```
 staticstatic






###  global_added_id_

 ```
int bmf.builder.bmf_graph.BmfGraph.global_added_id_ = 0 
```
 staticstatic






###  global_node_id_

 ```
int bmf.builder.bmf_graph.BmfGraph.global_node_id_ = 0 
```
 staticstatic






###  graph_

 ```
bmf.builder.bmf_graph.BmfGraph.graph_ 
```
 staticstatic






###  graph_config_

 ```
bmf.builder.bmf_graph.BmfGraph.graph_config_ 
```
 staticstatic






###  graph_config_str

 ```
bmf.builder.bmf_graph.BmfGraph.graph_config_str = graph_config.dump() 
```
 staticstatic






###  in_link_module_alias

 ```
bmf.builder.bmf_graph.BmfGraph.in_link_module_alias = inputs.get('alias', '') 
```
 staticstatic






###  in_link_name

 ```
string bmf.builder.bmf_graph.BmfGraph.in_link_name = in_link_module_alias + "." + str(add_id ) + "_" + str(i)
```
 staticstatic






###  input_manager

 ```
bmf.builder.bmf_graph.BmfGraph.input_manager 
```
 staticstatic






###  input_streams_

```
bmf.builder.bmf_graph.BmfGraph.input_streams_ 
```

###  logbuffer_

 ```
bmf.builder.bmf_graph.BmfGraph.logbuffer_ = None 
```
 staticstatic






###  mode

 ```
bmf.builder.bmf_graph.BmfGraph.mode 
```
 staticstatic






###  module_info

 ```
dictionary bmf.builder.bmf_graph.BmfGraph.module_info 
```
 staticstatic






```
=  {
 "name": bmf_modules['ff_decoder'],
 "type": type,
 "path": path,
 "entry": entry
        }

```

###  nb_links [1/2]

 ```
int bmf.builder.bmf_graph.BmfGraph.nb_links = 0 
```
 staticstatic






###  nb_links [2/2]

 ```
bmf.builder.bmf_graph.BmfGraph.nb_links = outputs.get('streams', 0) 
```
 staticstatic






###  ncfg

 ```
bmf.builder.bmf_graph.BmfGraph.ncfg = None 
```
 staticstatic






###  no_output_stream_

 ```
bmf.builder.bmf_graph.BmfGraph.no_output_stream_ 
```
 staticstatic






###  node_id_mutex_

 ```
bmf.builder.bmf_graph.BmfGraph.node_id_mutex_ = threading.Lock() 
```
 staticstatic






###  node_streams_

```
bmf.builder.bmf_graph.BmfGraph.node_streams_ 
```

###  nodes_

```
bmf.builder.bmf_graph.BmfGraph.nodes_ 
```

###  option

 ```
dictionary bmf.builder.bmf_graph.BmfGraph.option = {} 
```
 staticstatic






###  option_

```
bmf.builder.bmf_graph.BmfGraph.option_ 
```

###  out_link_module_alias [1/2]

 ```
string bmf.builder.bmf_graph.BmfGraph.out_link_module_alias = '' 
```
 staticstatic






###  out_link_module_alias [2/2]

 ```
bmf.builder.bmf_graph.BmfGraph.out_link_module_alias = outputs.get('alias', '') 
```
 staticstatic






###  out_link_name

 ```
string bmf.builder.bmf_graph.BmfGraph.out_link_name = out_link_module_alias + "." + str(add_id ) + "_" + str(i)
```
 staticstatic






###  output_streams_

```
bmf.builder.bmf_graph.BmfGraph.output_streams_ 
```

###  output_streams_name

 ```
list bmf.builder.bmf_graph.BmfGraph.output_streams_name = [] 
```
 staticstatic






###  pre_module

 ```
bmf.builder.bmf_graph.BmfGraph.pre_module 
```
 staticstatic






###  remove_node

 ```
bmf.builder.bmf_graph.BmfGraph.remove_node = BmfNode (alias_name ,option , self, 'immediate')
```
 staticstatic






###  reset_node

 ```
bmf.builder.bmf_graph.BmfGraph.reset_node = BmfNode ("",option , self)
```
 staticstatic






###  scheduler

 ```
bmf.builder.bmf_graph.BmfGraph.scheduler 
```
 staticstatic






###  select_node

 ```
bmf.builder.bmf_graph.BmfGraph.select_node = None 
```
 staticstatic






###  server_input_name

 ```
string bmf.builder.bmf_graph.BmfGraph.server_input_name = "server_input" 
```
 staticstatic






###  stream [1/2]

 ```
def bmf.builder.bmf_graph.BmfGraph.stream = self.input_stream(self.server_input_name) 
```
 staticstatic






###  stream [2/2]

 ```
bmf.builder.bmf_graph.BmfGraph.stream = self.input_streams_[0] 
```
 staticstatic






###  stream_alias

 ```
bmf.builder.bmf_graph.BmfGraph.stream_alias 
```
 staticstatic






###  stream_config

 ```
bmf.builder.bmf_graph.BmfGraph.stream_config = StreamConfig ()
```
 staticstatic






###  sync_mode

 ```
bmf.builder.bmf_graph.BmfGraph.sync_mode = select_node.create_sync_module() 
```
 staticstatic






###  sync_mode_

```
bmf.builder.bmf_graph.BmfGraph.sync_mode_ 
```

###  tail_config

 ```
bmf.builder.bmf_graph.BmfGraph.tail_config = None 
```
 staticstatic






###  tmp

 ```
bmf.builder.bmf_graph.BmfGraph.tmp 
```
 staticstatic






###  update_graph_

```
bmf.builder.bmf_graph.BmfGraph.update_graph_ 
```

###  user_callbacks

```
bmf.builder.bmf_graph.BmfGraph.user_callbacks 
```

###  C_ENGINE

 ```
string bmf.builder.bmf_graph.GraphMode.C_ENGINE = 'c_engine' 
```
 staticstatic






###  FFMPEG

 ```
string bmf.builder.bmf_graph.GraphMode.FFMPEG = 'ffmpeg' 
```
 staticstatic






###  GENERATOR

 ```
string bmf.builder.bmf_graph.GraphMode.GENERATOR = 'Generator' 
```
 staticstatic






###  NORMAL

 ```
string bmf.builder.bmf_graph.GraphMode.NORMAL = 'Normal' 
```
 staticstatic






###  PUSHDATA

 ```
string bmf.builder.bmf_graph.GraphMode.PUSHDATA = 'Pushdata' 
```
 staticstatic






###  SERVER

 ```
string bmf.builder.bmf_graph.GraphMode.SERVER = 'Server' 
```
 staticstatic




###  SUBGRAPH

 ```
string bmf.builder.bmf_graph.GraphMode.SUBGRAPH = 'Subgraph' 
```
 staticstatic

 - /20230627/doxygen_converter/bmf/bmf/builder/  bmf_graph.py  

