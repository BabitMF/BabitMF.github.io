---
title: 'BmfEdge'
linkTitle: 'BmfEdge'
weight: 3
---

[//]: <> (REF_MD: classbmf_1_1builder_1_1bmf__node_1_1BmfNode-members.html)

## Detailed Description

**BMFEdge** class.

## Function Documentation


## Member Functions


def   [__init__](#__init__) (self, upstream_stream, downstream_stream)
 
def   [get_downstream_stream](#get_downstream_stream) (self)
 
def   [get_upstream_stream](#get_upstream_stream) (self)
 
## Member Datas
   [upstream_stream_](#upstream_stream_) 
 
   [downstream_stream_](#downstream_stream_) 
   
## Member Function Documentation


### \_\_init\_\_()

```
def bmf.builder.bmf_node.BmfEdge.__init__ (  self, 
   upstream_stream, 
   downstream_stream 
 )   
```

```
     def __init__(self, upstream_stream, downstream_stream):
         self.upstream_stream_ = upstream_stream
         self.downstream_stream_ = downstream_stream
 

```

###  get_downstream_stream()

```
def bmf.builder.bmf_node.BmfEdge.get_downstream_stream (  self )  
```

```
     def get_downstream_stream(self):
         return self.downstream_stream_
 

```

###  get_upstream_stream()

```
def bmf.builder.bmf_node.BmfEdge.get_upstream_stream (  self )  
```

```
     def get_upstream_stream(self):
         return self.upstream_stream_
 
 

```

## Member Data Documentation


###  downstream_stream_

```
bmf.builder.bmf_node.BmfEdge.downstream_stream_ 
```

###  upstream_stream_

```
bmf.builder.bmf_node.BmfEdge.upstream_stream_ 
```

- /20230627/doxygen_converter/bmf/bmf/builder/  bmf_node.py  

