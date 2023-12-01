---
title: '动态Graph'
linkTitle: '动态Graph'
weight: 4
---

BMF中的动态Graph是一种允许在运行时添加/删除/配置Graph中node的功能，几乎不会对性能造成影响，也不会阻塞其它正在运行的node。这意味着，开始时构建的Graph可以如下图所示在运行中更改：
<img src="/img/docs/dynamic_graph.png" style="zoom:50%;" />

基于动态Graph的demo和test可以在`bmf/demo/broadcaster/`，`bmf/test/dynamical_graph/`中查看。



### 相关接口：

dynamic_add()

dynamic_remove()

dynamic_reset()

update()

run_wo_block()

示例程序：\ref dynamical_graph.py

### 动态增加：

```python
main_graph = bmf.graph()
video1 = main_graph.decode({'input_path': input_video_path, 'alias': "decoder0"})

passthru = bmf.module([video1['video'], video1['audio']], 'pass_through',
            {
                'alias': "pass_through",
            },
            "", "", "immediate")
passthru. run_wo_block()
```
main_graph作为初始创建的graph，对于graph中的每个模块加入“aliias”标记，用于后续动态增加关联使用。

初始graph运行时可以使用run_wo_block()非阻塞调用，也可以使用run()阻塞调用但需要启用另外的线程支持动态操作。

```python
update_decoder = bmf.graph()
video2 = update_decoder.decode(
                       {
                           'input_path': input_video_path2,
                           'alias': "decoder1"
                       })

outputs = {'alias': 'pass_through', 'streams': 2}
update_decoder.dynamic_add(video2, None, outputs)
main_graph. update(update_decoder)
```
动态添加节点需要明确要增加节点的输入流、输出流以及自身的配置，最后使用update()接口执行实际的操作。

### 动态删除：

```python
remove_graph = bmf.graph()
remove_graph.dynamic_remove({'alias': 'decoder1'})
main_graph. update(remove_graph)
```
动态删除只需要指定要删除节点的alias即可。

### 动态配置：

```python
main_graph. update(remove_graph)
option = {
           'alias': 'encode1',
           'output_path': output_path,
           'video_params': {
                 'codec': 'h264',
                 'width': 320,
                 'height': 240,
                 'crf': 23,
                 'preset': 'very fast'
            }
}
reset_graph = bmf.graph()
reset_graph. dynamic_reset(option)
main_graph. update(reset_graph)
```
动态配置只需要把需要配置的节点alias和具体参数写成json格式的变量，作为dynamic_reset()的参数即可。

### 回调方式：

有些应用场景需要在某些模块节点中决定什么时候去动态的增删和配置，这种情况可以用BMF的回调机制去配合实现，详见示例程序：test_dynamical_graph_cb()。