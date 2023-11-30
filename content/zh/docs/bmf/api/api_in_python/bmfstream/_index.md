---
title: 'BmfStream'
linkTitle: 'BmfStream'
weight: 3
---


def   [bmf.builder.bmf_stream.BmfStream.generate_config_file](#generate_config_file) ( [self](#self) , [file_name](#file_name) ="original_graph.json")
 
 
def   [bmf.builder.bmf_stream.BmfStream.run_wo_block](#run_wo_block) ( [self](#self) )
 
 

## Detailed Description

BMF stream class.

## Function Documentation


###  generate_config_file()

```
def bmf.builder.bmf_stream.BmfStream.generate_config_file (  self, 
   file_name = "original_graph.json" 
 )   
```
Using the stream of the module to call the routine of graph generate_config.


```
     def generate_config_file(self, file_name="original_graph.json"):

```

###  run_wo_block()

```
def bmf.builder.bmf_stream.BmfStream.run_wo_block (  self )  
```
Using the stream object to call graph run without block.


```
     def run_wo_block(self):
         return self.node_.get_graph().run_wo_block(self)

```