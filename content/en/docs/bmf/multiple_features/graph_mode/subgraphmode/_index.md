---
title: 'Subgraph Mode'
linkTitle: 'Subgraph Mode'
weight: 5
---

If you need to use subgraph, you can refer to the following example.

## Build Subgraph

See \ref subgraph_module.py for detailed reference to how subgraph is built. This example first makes the original video a vertical flip, and then overlays an image.

```python
from bmf import SubGraph

class subgraph_module(SubGraph):
     def create_graph(self, option=None):
         # Build subgraph here
```

When building a subgraph, you need to enter the name of the input streams into Subgraph's ```self.inputs```:

```python
# input stream name, used to fill packet in
self.inputs.append('video')
self.inputs.append('overlay')
```

After that, you need to output the output streams:
```python
# finish creating graph
self. output_streams = self. finish_create_graph([output_stream])
```

## Using Subgraphs

The method of using subgraph is similar to other modules:

```python
bmf.module([video['video'], overlay['video']], 'subgraph_module')
```

If you need the complete code, you can refer to [test_subgraph.py](#tbytodo)