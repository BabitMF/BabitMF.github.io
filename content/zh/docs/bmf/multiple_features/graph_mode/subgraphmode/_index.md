---
title: '子图模式'
linkTitle: '子图模式'
weight: 5
---

如果您需要使用子图模式，可以参考以下示例。

## 构建 Subgraph

若需要详细参考 subgraph 的构建，请参阅 `subgraph_module.py`。这个例子先把原来的 video 做垂直镜像，然后再叠层一个 image。

```python
from bmf import SubGraph

class subgraph_module(SubGraph):
     def create_graph(self, option=None):
         # Build subgraph here
```

构建 subgraph 时，需要把 input streams 名称输入 Subgraph 的 ```self.inputs```：

```python
# input stream name, used to fill packet in
self.inputs.append('video')
self.inputs.append('overlay')
```

之后，需要把 output streams 输出：
```python
# finish creating graph
self. output_streams = self. finish_create_graph([output_stream])
```

## 使用子图

使用子图的方法与其它模块类似：

```python
bmf.module([video['video'], overlay['video']], 'subgraph_module')
```

如果您需要完整代码，请参阅 `test_subgraph.py`