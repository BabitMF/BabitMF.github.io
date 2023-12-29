---
title: 'BmfStream'
linkTitle: 'BmfStream'
weight: 3
---


def   [bmf.builder.bmf_stream.BmfStream.generate_config_file](#generate_config_file) ( [self](#self) , [file_name](#file_name) ="original_graph.json")
 
 
def   [bmf.builder.bmf_stream.BmfStream.run_wo_block](#run_wo_block) ( [self](#self) )
 
 

## 详细描述

BMF stream class.

## 函数文档


###  generate_config_file()

```
def bmf.builder.bmf_stream.BmfStream.generate_config_file (  self, 
   file_name = "original_graph.json" 
 )   
```
使用模块的 stream 来调用 graph generate_config 的例程。


```
     def generate_config_file(self, file_name="original_graph.json"):

```


###  run_wo_block()

```
def bmf.builder.bmf_stream.BmfStream.run_wo_block (  self )  
```
使用 stream object 调用 graph 运行，无阻塞。


```
     def run_wo_block(self):
         return self.node_.get_graph().run_wo_block(self)

```