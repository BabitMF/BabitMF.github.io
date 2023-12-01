---
title: 'BMF工具'
linkTitle: 'BMF工具'
weight: 6
---

## Module Manager

`module_manager`是一个管理模块的工具，提供以下能力：
1. 模块清单：您可以通过`module_manager list`获取本地安装模块的清单，包括内置模块和您自己开发的模块；
2. 模块详情：每一个模块都可以通过`module_manager dump ${module_name}`获取模块的详细信息，比如模块名称、模块类型、模块入口、模块描述信息、模块定义标签和模块安装路径；
3. 模块的安装和卸载：对于自定义模块，您可以将其安装到BMF的模块路径中，以便更方便地在graph中使用。当不再需要这些模块时，也可以将其卸载。
具体用法可以通过`module_manager help`查看。请注意：module_manager工具需要依赖BMF底层库，因此需要设置相应的环境变量。具体步骤请参考[BMF安装部署](/docs/bmf/getting_started_yourself/install/)。

## Trace工具

Trace的主要功能是记录一些重要的事件，以供故障排除或分析。 Trace在运行时记录相关信息，然后在最后写入tracelog日志。

### 启用Trace

Trace工具也可以通过环境变量启用：
```bash
$ export BMF_TRACE=ENABLE
```
默认情况下，引擎中提供了各种Trace类型。启用Trance允许在运行时记录这些事件。

为了向用户提供较低级别的控制以最大程度地减少不必要的Trance事件收集，用户可以选择仅启用选定的[Trace-types](#trace-types) (comma-separated)：
```bash
$ export BMF_TRACE=PROCESSING,SCHEDULE
```

### 禁用Trace

默认情况下禁用Trace。但是，如果之前已设置了启用Trace的环境变量，则可以将其禁用：
```bash
$ unset BMF_TRACE
```

### Trace分析

该工具执行后将打印并生成tracelog日志。用户可以通过不同的方式参考Trace收集的信息。

#### 1. 控制台打印

使用Trace工具时，graph执行后，会打印出Trace的一些信息：

![Trace printing](/img/docs/traceimg_print0.png)

打印的信息包括：
- **Runtime信息**
   Graph总实行时间。如果使用了[BMF_TRACE_INIT](#bmf_trace_init)接口，还会显示从BMF_TRACE_INIT到graph执行完成的时间。这些时间不包括tracelog的生成时间。
- **事件频率**
   每个Trace事件的发生次数（按降序排列）。
- **事件持续时间**
   每个duration事件的执行时间：
   - **Total**：总时间
   - **Total (%)**：运行总执行时间的百分比
   - **Ave**: 执行时间
   - **Min, Max**：最小和最大值
- **Queue信息**
   Stream的队列信息:
   - **Limit**：队列大小的上限（如果无限则为零）
   - **Ave**：队列中的平均项目数
   - **Max**：队列中的最大项目数
- **吞吐量**
   1 秒内处理的平均输入package
- **Trace信息**
   有关Trace工具的一些信息，例如每个线程的Trace事件总数、由于缓冲区不足而溢出的事件数量、记录时间等。

默认情况下，Trace信息会在grapg执行结束时将Trace信息打印到控制台。但是，这将导致代码执行结束之前的处理时间增加。如果需要，可以禁用打印：
```bash
# Default is ENABLE
$ export BMF_TRACE_PRINTING=DISABLE
```

#### 2. Chrome Tracing

Tracelog JSON日志格式符合Chrome Tracing(Chrome web browser - chrome://tracing/ )中使用的格式，因此可以使用 Chrome Tracing进行可视化：

![Viewing tracelog in Chrome Tracing](/img/docs/traceimg_common1.png)

即时事件和持续时间事件的表示很容易区分：

![Instant event and duration event](/img/docs/traceimg_common2.png)

记录结束时，Trace会在日志末尾追加相关信息（Trace info）以表明日志已完成：

![Trace info display](/img/docs/traceimg_common3.png)

在底部面板中您可以看到：
- **Title**: Trace事件名称
- **Category**: Trace类型
- **Start**: Trace事件当前时间
- **Wall Duration**: Duration事件执行时间（即时事件无此参数）
- **Args**: 跟踪信息或用户信息（附加参数）

注意：如果溢出计数不为0，则表示当前分配的缓冲区不足，并且某些事件未记录（溢出）。为了不错过任何Trace事件，建议[增加缓冲区大小](#buffer-size).

#### 3. GraphUtilization工具

除了Chrome Trace之外，[BMF GraphUtilization工具](./Page_GraphUtilization.md)还支持Trace事件的可视化：

![Visualizing tracelog using BMF GraphUtilization](/img/docs/graphutil_common2.png)

GraphUtilization工具可以显示图形以及Chrome Tracing无法显示的一些信息或图表。

### 示例

#### 示例1:预加载模式

以一个典型的转码示例为例，说明如何使用Trace工具识别实施过程中的瓶颈：

![Typical transcoding DAG](/img/docs/traceimg_example1.png)

注意：上图的结构图可通过[GraphUtilization Tool](./Page_GraphUtilization.md)显示。

使用以下Python代码：

```python
module_name = "analysis"

(
     bmf. graph({"dump_graph": 1})
         .decode({'input_path': input_video_path})['video']
         .scale(320, 240)
         .module(module_name, {
             "name": "analysis_SR",
             "para": "analysis_SR"
         })
         .encode(None, {
         "output_path": output_path,
         "video_params": {
             "width": 300,
             "height": 200,
         }
     }).run()
)
```

如果不使用预模块方法，执行该graoh将非常耗时。使用Trace工具生成的tracelog，可以在Chrome浏览器跟踪中看到节点2（即上图中的分析模块，括号中的数字表示节点ID）的初始化耗时3秒：

![Module initialization time](/img/docs/traceimg_example2.png)

使用预模块的最优代码：

```python
module_name = "analysis"

pre_module = bmf.create_module(module_name, {
     "name": "analysis_SR",
     "para": "analysis_SR"
})

(
     bmf. graph({"dump_graph": 1})
         .decode({'input_path': input_video_path})['video']
         .scale(320, 240)
         .module(module_name, option, pre_module=pre_module)
         .encode(None, {
         "output_path": output_path,
         "video_params": {
             "width": 300,
             "height": 200,
         }
     }).run()
)
```

预加载模式（预模块）可以很大程度上减少Graph的执行时间：

![Analysis module in pre-module mode](/img/docs/traceimg_example3.png)

#### 示例2：解决挂起问题

在编写模块时，有时会遇到一些bug或瓶颈，Trace工具可以帮助用户找到问题的根源。

以下示例发生在编码器模块中，执行时Graph似乎被挂起。由于Graph未执行，因此不会生成tracelog。但是，使用 [trace_format_log](#trace_format_log)后，tracelog将由Chrome Tracing构建并可以在Chrome Tracing上进行分析：

![Hang problem troubleshoot](/img/docs/traceimg_example7.png)

基本Trace节点的功能有限，但可以看到`process_node`未完成的节点（和模块）。如果需要进一步分析，可以从函数中添加一个`CUSTOM Trace`节点（使用Trace接口），这样就可以进一步查看重新运行后进程函数的进程调用情况：

![Hang problem troubleshoot](/img/docs/traceimg_example6.png)

从这个例子中可以看出，每当有一个新的视频帧出现，`handle_vide_frame`函数都需要处理一千多个同步帧，导致执行时间过长（看起来像挂起）。

---

### Trace类型

目前有几种可用的Trace类型：

| Type Name | Description |
| --------- | ----------- |
| PROCESSING | A duration event that captures nodes
