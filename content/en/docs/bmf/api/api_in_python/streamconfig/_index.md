---
title: 'StreamConfig'
linkTitle: 'StreamConfig'
weight: 8
---

[//]: <> (REF_MD: classbmf_1_1builder_1_1graph__config_1_1StreamConfig.html)


  [Public Member Functions](http://localhost:1313/docs/bmf/api/api_in_python/streamconfig/#pub-methods)  |  [Public Attributes](http://localhost:1313/docs/bmf/api/api_in_python/streamconfig/#pub-attribs)  |  List of all members  # bmf.builder.graph_config.StreamConfig Class Reference

 ## Public Member Functions


def   [__init__](#__init__) (self, stream_config_dict=None)
 
def   [set_identifier](#set_identifier) (self, [identifier](#identifier) )
 
def   [get_identifier](#get_identifier) (self)
 
def   [set_alias](#set_alias) (self, [stream_alias](#stream_alias) )
 
def   [get_alias](#get_alias) (self)
 
def   [dump](#dump) (self)
 

 ## Public Attributes


   [identifier](#identifier) 
 
   [stream_alias](#stream_alias) 
 

## Detailed Description

## Constructor & Destructor Documentation


###  __init__()

```
def bmf.builder.graph_config.StreamConfig.__init__ (  self, 
   stream_config_dict = None 
 )   
```

```
     def __init__(self, stream_config_dict=None):
         self.identifier = None
         self.stream_alias = None
 
         if stream_config_dict is not None:
             if 'identifier' in stream_config_dict.keys():
                 self.identifier = stream_config_dict['identifier']
 
             if 'stream_alias' in stream_config_dict.keys():
                 self.stream_alias = stream_config_dict['stream_alias']
 

```
## Member Function Documentation


###  dump()

```
def bmf.builder.graph_config.StreamConfig.dump (  self )  
```

```
     def dump(self):
         return json.dumps(obj=self.__dict__,
                           ensure_ascii=False,
                           indent=4,
                           cls=GraphConfigEncoder)
 
 

```

###  get_alias()

```
def bmf.builder.graph_config.StreamConfig.get_alias (  self )  
```

```
     def get_alias(self):
         return self.stream_alias
 

```

###  get_identifier()

```
def bmf.builder.graph_config.StreamConfig.get_identifier (  self )  
```

```
     def get_identifier(self):
         return self.identifier
 

```

###  set_alias()

```
def bmf.builder.graph_config.StreamConfig.set_alias (  self, 
   stream_alias 
 )   
```

```
     def set_alias(self, stream_alias):
         self.stream_alias = stream_alias
 

```

###  set_identifier()

```
def bmf.builder.graph_config.StreamConfig.set_identifier (  self, 
   identifier 
 )   
```

```
     def set_identifier(self, identifier):
         self.identifier = identifier
 

```
## Member Data Documentation


###  identifier

```
bmf.builder.graph_config.StreamConfig.identifier 
```

###  stream_alias

```
bmf.builder.graph_config.StreamConfig.stream_alias 
```
 - /20230627/doxygen_converter/bmf/bmf/builder/  graph_config.py  

