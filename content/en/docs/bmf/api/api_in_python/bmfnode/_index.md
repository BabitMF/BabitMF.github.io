---
title: 'BmfNode'
linkTitle: 'BmfNode'
weight: 2
---

[//]: <> (REF_MD: classbmf_1_1builder_1_1bmf__node_1_1BmfNode-members.html)

## Detailed Description

**BMFNode** class.

## Function Documentation


### \_\_init\_\_()

```
def bmf.builder.bmf_node.BmfNode.__init__ (  self, 
   module_info, 
   option, 
   upstream_streams, 
   input_manager = 'default', 
   pre_module = None, 
   scheduler = 0 
 )   
```

```
                  pre_module=None, scheduler=0):
         if isinstance(module_info, dict):
             self.module_info_ = module_info
         else:
             self.module_info_ = {"name": module_info}
         self.option_ = option
         self.scheduler_ = scheduler
 
         # the input stream of current node and corresponding
         # output stream of upstream node point to same stream instance
         self.input_streams_ = {}
         if  upstream_streams is not None:
             self.graph_ = self.init_input_streams(upstream_streams)
         else:
             from .bmf_graph import BmfGraph
             self.graph_ = BmfGraph(option)
             print('DEBUG GRAPH created new graph for empty inputstream node')
 
         # input manager
         self.input_manager_ = input_manager
 
         # pre_allocated module if exists
         self.pre_module = pre_module
 
         self.user_callbacks = {}
 
         # generate node_id and add node to graph
         assert (self.graph_ is not None), "graph is none when create node"
         self.id_ = self.graph_.generate_node_id()
         self.graph_.add_node(self)
 
         # output stream is empty now, created by calling stream() or []
         # TODO: do we need keep all streams or only need keep all edges?
         self.output_streams_ = {}
         self.output_stream_idx = 0
         self.output_stream_idx_mutex_ = threading.Lock()
 
         # downstream edges
         # while the output stream is actually connected a node, it will
         # create an edge and add to outgoing_edges_
         self.outgoing_edges_ = []


```

## Member Functions


def   [__init__](#__init__) (self, module_info, option, upstream_streams, input_manager='default', [pre_module](#pre_module) =None, scheduler=0)
 
def   [init_input_stream_and_edge](#init_input_stream_and_edge) (self, upstream_stream, notify)
 
def   [init_input_streams](#init_input_streams) (self, upstream_streams)
 
def   [generate_stream_name](#generate_stream_name) (self)
 
def   [stream](#stream) (self, notify=None, stream_alias=None)
 
def   [__getitem__](#__getitem__) (self, item)
 
def   [add_outgoing_edge](#add_outgoing_edge) (self, edge)
 
def   [get_outgoing_edges](#get_outgoing_edges) (self)
 
def   [get_input_streams](#get_input_streams) (self)
 
def   [get_output_streams](#get_output_streams) (self)
 
def   [get_module_info](#get_module_info) (self)
 
def   [get_id](#get_id) (self)
 
def   [get_scheduler](#get_scheduler) (self)
 
def   [set_scheduler](#set_scheduler) (self, schediler)
 
def   [get_option](#get_option) (self)
 
def   [get_pre_module](#get_pre_module) (self)
 
def   [get_graph](#get_graph) (self)
 
def   [get_input_manager](#get_input_manager) (self)
 
def   [set_input_manager](#set_input_manager) (self, input_manager)
 
def   [run](#run) (self)
 
def   [add_user_callback](#add_user_callback) (self, key, cb)
 
def   [get_user_callback](#get_user_callback) (self)
 
def   [start](#start) (self)
 
def   [create_sync_module](#create_sync_module) (self)
 
## Member Datas
   [module_info_](#module_info_) 
 
   [option_](#option_) 
 
   [scheduler_](#scheduler_) 
 
   [input_streams_](#input_streams_) 
 
   [graph_](#graph_) 
 
   [input_manager_](#input_manager_) 
 
   [pre_module](#pre_module) 
 
   [user_callbacks](#user_callbacks) 
 
   [id_](#id_) 
 
   [output_streams_](#output_streams_) 
 
   [output_stream_idx](#output_stream_idx) 
 
   [output_stream_idx_mutex_](#output_stream_idx_mutex_) 
 
   [outgoing_edges_](#outgoing_edges_) 
   
## Member Function Documentation


###  __getitem__()

```
def bmf.builder.bmf_node.BmfNode.__getitem__ (  self, 
   item 
 )   
```

```
     def __getitem__(self, item):
         return self.stream(notify=item)
 

```

###  add_outgoing_edge()

```
def bmf.builder.bmf_node.BmfNode.add_outgoing_edge (  self, 
   edge 
 )   
```

```
     def add_outgoing_edge(self, edge):
         if edge is not None:
             self.outgoing_edges_.append(edge)
 

```

###  add_user_callback()

```
def bmf.builder.bmf_node.BmfNode.add_user_callback (  self, 
   key, 
   cb 
 )   
```

```
     def add_user_callback(self, key, cb):
         from bmf.lib._bmf import engine
         callback = engine.Callback(cb)
         self.user_callbacks[key] = (callback.uid(), callback)
 

```

###  create_sync_module()

```
def bmf.builder.bmf_node.BmfNode.create_sync_module (  self )  
```

```
     def create_sync_module(self):
         from bmf.lib._bmf import engine
         node_option = json.dumps(self.option_)
 
         # convert node option for filter
         if self.module_info_["name"] == "c_ffmpeg_filter":
             node_config = self.get_graph().generate_node_config(self)
             node_option = engine.convert_filter_para(node_config.dump())
 
         # create module
         mod = engine.Module(self.module_info_["name"], node_option,
                          self.module_info_["type"],
                          self.module_info_["path"], self.module_info_["entry"])
 
         # input stream list
         input_stream_id = []
         if self.module_info_["name"] == "c_ffmpeg_encoder" and 1 in self.get_input_streams().keys():
             input_stream_id.append(0)
             input_stream_id.append(1)
         else:
             for id in self.get_input_streams().keys():
                 input_stream_id.append(id)
 
         # output stream list
         output_stream_id = []
         if self.module_info_["name"] == "c_ffmpeg_decoder":
             for key in self.get_output_streams().keys():
                 if key == "video":
                     output_stream_id.append(0)
                 elif key == "audio":
                     output_stream_id.append(1)
         else:
             for id in self.get_output_streams().keys():
                 output_stream_id.append(id)
 
         # create sync module
         sync_module = SyncModule(mod, input_stream_id, output_stream_id)
         return sync_module
 

```

###  generate_stream_name()

```
def bmf.builder.bmf_node.BmfNode.generate_stream_name (  self )  
```

```
     def generate_stream_name(self):
         # stream name format: $(node_type)_$(node_id)_$(stream_index)
         self.output_stream_idx_mutex_.acquire()
         stream_name = self.module_info_["name"] + '_' + str(self.id_) + '_' + str(self.output_stream_idx)
         self.output_stream_idx += 1
         self.output_stream_idx_mutex_.release()
         return stream_name
 

```

###  get_graph()

```
def bmf.builder.bmf_node.BmfNode.get_graph (  self )  
```

```
     def get_graph(self):
         return self.graph_
 

```

###  get_id()

```
def bmf.builder.bmf_node.BmfNode.get_id (  self )  
```

```
     def get_id(self):
         return self.id_
 

```

###  get_input_manager()

```
def bmf.builder.bmf_node.BmfNode.get_input_manager (  self )  
```

```
     def get_input_manager(self):
         return self.input_manager_
 

```

###  get_input_streams()

```
def bmf.builder.bmf_node.BmfNode.get_input_streams (  self )  
```

```
     def get_input_streams(self):
         return self.input_streams_
 

```

###  get_module_info()

```
def bmf.builder.bmf_node.BmfNode.get_module_info (  self )  
```

```
     def get_module_info(self):
         return self.module_info_
 

```

###  get_option()

```
def bmf.builder.bmf_node.BmfNode.get_option (  self )  
```

```
     def get_option(self):
         return self.option_
 

```

###  get_outgoing_edges()

```
def bmf.builder.bmf_node.BmfNode.get_outgoing_edges (  self )  
```

```
     def get_outgoing_edges(self):
         return self.outgoing_edges_
 

```

###  get_output_streams()

```
def bmf.builder.bmf_node.BmfNode.get_output_streams (  self )  
```

```
     def get_output_streams(self):
         return self.output_streams_
 

```

###  get_pre_module()

```
def bmf.builder.bmf_node.BmfNode.get_pre_module (  self )  
```

```
     def get_pre_module(self):
         return self.pre_module
 

```

###  get_scheduler()

```
def bmf.builder.bmf_node.BmfNode.get_scheduler (  self )  
```

```
     def get_scheduler(self):
         return self.scheduler_
 

```

###  get_user_callback()

```
def bmf.builder.bmf_node.BmfNode.get_user_callback (  self )  
```

```
     def get_user_callback(self):
         return self.user_callbacks
 

```

###  init_input_stream_and_edge()

```
def bmf.builder.bmf_node.BmfNode.init_input_stream_and_edge (  self, 
   upstream_stream, 
   notify 
 )   
```

```
     def init_input_stream_and_edge(self, upstream_stream, notify):
         graph = None
 
         if upstream_stream is not None:
             # create input stream
             input_stream = BmfStream(upstream_stream.get_name(), self, notify, stream_alias=upstream_stream.get_alias())
             self.input_streams_[notify] = input_stream
 
             # get graph
             graph = upstream_stream.get_graph()
 
             # create edge
             edge = BmfEdge(upstream_stream, input_stream)
 
             # add edge to upstream node
             if upstream_stream.get_node() is not None:
                 upstream_stream.get_node().add_outgoing_edge(edge)
 
         return graph
 

```

###  init_input_streams()

```
def bmf.builder.bmf_node.BmfNode.init_input_streams (  self, 
   upstream_streams 
 )   
```

```
     def init_input_streams(self, upstream_streams):
         graph = None
 
         from .bmf_graph import BmfGraph
 
         if upstream_streams is None:
             return
 
         elif isinstance(upstream_streams, BmfGraph):
             # for source node, there is no input streams
             # use graph to initialize node
             return upstream_streams
 
         elif isinstance(upstream_streams, BmfStream):
             # if there is only one upstream stream, notify is 0
             graph = self.init_input_stream_and_edge(upstream_streams, 0)
 
         elif isinstance(upstream_streams, (list, tuple)):
             for index, upstream_stream in enumerate(upstream_streams):
                 # for list input, index is notify
                 graph = self.init_input_stream_and_edge(upstream_stream, index)
 
         elif isinstance(upstream_streams, dict):
             for (notify, upstream_stream) in upstream_streams.items():
                 graph = self.init_input_stream_and_edge(upstream_stream, notify)
 
         return graph
 

```

###  run()

```
def bmf.builder.bmf_node.BmfNode.run (  self )  
```

```
     def run(self):
         self.graph_.run()
 

```

###  set_input_manager()

```
def bmf.builder.bmf_node.BmfNode.set_input_manager (  self, 
   input_manager 
 )   
```

```
     def set_input_manager(self, input_manager):
         self.input_manager_ = input_manager
 

```

###  set_scheduler()

```
def bmf.builder.bmf_node.BmfNode.set_scheduler (  self, 
   schediler 
 )   
```

```
     def set_scheduler(self, schediler):
         self.scheduler_ = schediler
 

```

###  start()

```
def bmf.builder.bmf_node.BmfNode.start (  self )  
```

```
     def start(self):
         print('no output stream')
 

```

###  stream()

```
def bmf.builder.bmf_node.BmfNode.stream (  self, 
   notify = None, 
   stream_alias = None 
 )   
```

```
     def stream(self, notify=None, stream_alias=None):
         if notify is None:
             notify = 0
 
         if notify not in self.output_streams_.keys():
             stream_name = self.generate_stream_name()
 
             # create output stream
             s = BmfStream(stream_name, self, notify, stream_alias=stream_alias)
 
             self.output_streams_[notify] = s
 
         return self.output_streams_[notify]
 

```
## Member Data Documentation



###  graph_

```
bmf.builder.bmf_node.BmfNode.graph_ 
```

###  id_

```
bmf.builder.bmf_node.BmfNode.id_ 
```

###  input_manager_

```
bmf.builder.bmf_node.BmfNode.input_manager_ 
```

###  input_streams_

```
bmf.builder.bmf_node.BmfNode.input_streams_ 
```

###  module_info_

```
bmf.builder.bmf_node.BmfNode.module_info_ 
```

###  option_

```
bmf.builder.bmf_node.BmfNode.option_ 
```

###  outgoing_edges_

```
bmf.builder.bmf_node.BmfNode.outgoing_edges_ 
```

###  output_stream_idx

```
bmf.builder.bmf_node.BmfNode.output_stream_idx 
```

###  output_stream_idx_mutex_

```
bmf.builder.bmf_node.BmfNode.output_stream_idx_mutex_ 
```

###  output_streams_

```
bmf.builder.bmf_node.BmfNode.output_streams_ 
```

###  pre_module

```
bmf.builder.bmf_node.BmfNode.pre_module 
```

###  scheduler_

```
bmf.builder.bmf_node.BmfNode.scheduler_ 
```

###  user_callbacks

```
bmf.builder.bmf_node.BmfNode.user_callbacks 
```
 - /20230627/doxygen_converter/bmf/bmf/builder/  bmf_node.py  

