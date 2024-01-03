---
title: 'Loglevel'
linkTitle: 'Loglevel'
weight: 7
---

## LogLevel 

If you want to modify the loglevel related to FFmpeg in the built-in Module, please pass the loglevel parameter when building the graph. The following example sets the loglevel of decoder to quiet and the loglevel of encoder to debug.
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

The BMF framework also has its own log and loglevel. For the log from BMF, it's set to INFO default, if you want to modify, please use the ENV:

```export BMF_LOG_LEVEL=WARNING/INFO/ERROR/FATAL/DISABLE```