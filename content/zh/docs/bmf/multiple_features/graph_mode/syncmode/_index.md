---
title: '同步模式'
linkTitle: '同步模式'
weight: 2
---

使用同步模式需要同步模块。以下示例展现了以同步模式把图像做解码、缩放，然后转码的过程。

```python
from bmf import bmf_sync, Packet
```

同步模块的搭建如下：

**Python**
```python
# create decoder
decoder = bmf_sync.sync_module("c_ffmpeg_decoder", {
     "input_path": input_video_path
}, [], [0])

# create scale
scale = bmf_sync.sync_module("c_ffmpeg_filter", {
     "name": "scale",
     "para": "320:240"
}, [0], [0])

# create encoder
encoder = bmf_sync.sync_module("c_ffmpeg_encoder", {
     "output_path": output_path,
     "format": "mjpeg",
     "video_params": {
         "codec": "jpg"
     }
}, [0], [])
```

**C++**
```cpp
bmf::builder::Graph graph = bmf::builder::Graph(bmf::builder::NormalMode);

// create decoder
nlohmann::json decoder_option = {
     {"input_path", "../files/overlay.png"}
};
auto decoder = graph. Sync(std::vector<int> {}, std::vector<int> {0},
     bmf_sdk::JsonParam(decoder_option), "c_ffmpeg_decoder");

// create scale
nlohmann::json scale_option = {
     {"name", "scale"},
     {"para", "320:240"}
};
auto scale = graph. Sync(std::vector<int> {0}, std::vector<int> {0},
     bmf_sdk::JsonParam(scale_option), "c_ffmpeg_filter");

// create encoder
nlohmann::json encoder_option = {
     {"output_path", "./videoframe.jpg"},
     {"format", "mjpeg"},
     {"video_params", {
         {"codec", "jpg"}
     }}
};
auto encoder = graph. Sync(std::vector<int> {0}, std::vector<int> {},
     bmf_sdk::JsonParam(encoder_option), "c_ffmpeg_encoder");
```

如有需要，同步模块创建后可手动调用初始化函数：

**Python**

```python
decoder.init()
scale.init()
encoder.init()
```

**C++**

```cpp
graph.Init(decoder); // decoder.Init();
graph.Init(scale); // scale.Init();
graph.Init(encoder); // encoder.Init();
```

同步模式的用法和普通方式不一样，需要 ```bmf_sync.process()```：

**Python**

```python
#decode
frames, _ = bmf_sync.process(decoder, None) # decoder.process_pkts(None)

#scale
frames, _ = bmf_sync.process(scale, {0:frames[0]}) # scale.process_pkts({0:frames[0]})

#encode
bmf_sync.process(encoder, {0:frames[0]}) # encoder.process_pkts({0:frames[0]})
```

**C++**
```cpp
// decode
auto decoded_frames = decoder.ProcessPkts(); // graph.Process(decoder);

//scale
bmf::builder::SyncPackets input_scale;
input_scale. Insert(0, decoded_frames[0]);
auto scaled_frames = scale. ProcessPkts(input_scale); // graph. Process(scale, input_scale);

// encode
bmf::builder::SyncPackets input_encode;
input_encode. Insert(0, scaled_frames[0]);
encoder.ProcessPkts(input_encode); // graph.Process(encoder, input_encode);
```

Process 完毕后，将 EOF packet 发送到 encoder：

**Python**
```python
bmf_sync.send_eof(encoder) # encoder.send_eof()
```

**C++**

```cpp
encoder.SendEOF(); // graph.SendEOF(encoder);
```

如有需要，同步模块可手动调用 close 函数：

**Python**

```python
decoder. close()
scale. close()
encoder. close()
```

**C++**
 
```cpp
graph.Close(decoder); // decoder.Close();
graph. Close(scale); // scale. Close();
graph.Close(encoder); // encoder.Close();
```

如果您需要完整代码，请参阅 `test_sync_mode.py`，`c_sync_mode.cpp`

您也可以使用 colab 链接体验同步模式：[sync mode](https://github.com/BabitMF/bmf/blob/master/bmf/test/sync_mode/bmf_syncmode_python.ipynb)