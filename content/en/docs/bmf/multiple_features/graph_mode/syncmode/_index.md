---
title: 'Sync Mode'
linkTitle: 'Sync Mode'
weight: 2
---

The use of Sync mode requires the sync module. The following example shows the process of decoding, scaling, and transcoding an image in sync mode.

```python
from bmf import bmf_sync, Packet
```

The Sync module is built as follows:

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

If necessary, the init function can be called manually after the Sync module is created:

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

The usage of Sync mode is different from the normal way, it needs ```bmf_sync.process()```:

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

After the Process is complete, send the EOF packet to the encoder:

**Python**
```python
bmf_sync.send_eof(encoder) # encoder.send_eof()
```

**C++**

```cpp
encoder.SendEOF(); // graph.SendEOF(encoder);
```

The Sync module can manually call the close function if needed:

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

If you need the complete code, you can refer to [test_sync_mode.py](#tbytodo-1) [c_sync_mode.cpp](#tbytodo-2)

You can also experience sync mode using the colab link: [sync mode](#tbytodo-3)