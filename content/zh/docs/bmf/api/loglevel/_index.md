---
title: '日志级别'
linkTitle: '日志级别'
weight: 7
---

## 日志级别

如果要修改内置模块中与 FFmpeg 相关的日志级别，请在构建 graph 时传递日志级别参数。下面的示例将解码器的日志级别设为 quiet，将编码器的日志级别设为 debug。
```
     graph = bmf.graph()

     #decode
     video = graph.decode({
         "loglevel" : "quiet",
         "input_path": input_video_path
     })
     graph.encode({
         "loglevel" : "debug",
         "input_path": input_video_path
     })
```

BMF 框架也有自己的日志和日志级别。BMF 的日志默认设置为 INFO，如果要修改，请使用 ENV：

```export BMF_LOG_LEVEL=WARNING/INFO/ERROR/FATAL/DISABLE```