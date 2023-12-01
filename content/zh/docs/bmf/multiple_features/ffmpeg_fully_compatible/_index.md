---
title: '完全兼容FFmpeg'
linkTitle: '完全兼容FFmpeg'
weight: 2
---

## 完全兼容FFmpeg

BMF与FFmpeg的能力完全兼容。FFmpeg以其丰富的AV解封装、解码、filter、编码、封装等能力而闻名业界。
BMF为Python、C++、Go用户提供了内置模块和灵活的API，以便将FFmpeg能力应用到自己的解决方案中。

### 环境
需要使用FFmpeg库，支持的版本和安装详情可在开始使用->安装部署中找到。


### 能力
- demux + decode
- filter
- encode + mux

详细参数可以在API->内置解码模块，API->内置filter模块和API->内置编码模块中找到。

### 如何使用
下面用一些经典的示例来展示在多媒体处理场景中使用BMF的方法。
#### 仅解码
下方示例仅解码了一个多媒体文件：
```python
        import bmf

        input_video_path = "../files/test.mp4"

        graph = bmf.graph()

        stream = graph.decode({
            "input_path": input_video_path
        })

        (
            bmf.encode(
                stream['video'],
                stream['audio'],
                {
                    "null_output": 1
                }
            )
            .run()
        )
```

#### 转码
为了实现模块并行，编码模块将应用于scheduler 1，而解码和其他模块默认应用于scheduler 0。

```python
        import bmf

        input_video_path = "test.mp4"
        output_path = "./output.mp4"

        graph = bmf.graph({'dump_graph': 1})

        stream = graph.decode({
            "input_path": input_video_path,
            "dec_params": {
                "threads": "8"
            }
        })
        # using scale filter
        scaled = stream['video'].scale(320, 240)
        (
            bmf.encode(
                scaled,
                stream['audio'],
                {
                    "output_path": output_path,
                    "video_params": {
                        "codec": "h264",
                        "width": 320,
                        "height": 240,
                        "crf": 23,
                        "preset": "veryfast",
                    },
                    "audio_params": {
                        "codec": "aac",
                        "bit_rate": 128000,
                        "sample_rate": 44100,
                        "channels": 2
                    }
                }
            ).run()
        )
```

BMF也支持FFmpeg GPU编解码器。例如，您可以设置 `"hwaccel"： "cuda"`和`"codec"： "hevc_nvenc"`来使用 GPU进行解码和编码。详情请参阅[GPU转码章节](http://babitmf.github.io/docs/bmf/multiple_features/gpu_hardware_acc/gpu_transcoding)。

#### 图像编码
```python
        import bmf

        input_video_path = "test.png"
        output_path = "./image.jpg"

        (
            bmf.graph()
                .decode({'input_path': input_video_path})['video']
                .scale(320, 240)
                .encode(None, 
                    {
                        "output_path": output_path,
                        "format": "mjpeg",
                        "video_params": {
                            "codec": "jpg",
                            "width": 320,
                            "height": 240
                        }
                    }
                ).run()
        )
```

#### 复制Stream
```python
        import bmf

        input_path = "test.mp4"
        output_path = "./stream_copy.mp4"
        
        stream = bmf.graph().decode(
            {                                            'input_path': input_path,
                'video_codec': "copy"
            }
        )

        video_stream = stream['video']

        video_stream.encode(stream['audio'], {
            "output_path": "stream_copy.mp4",
        }).run()
```

#### 通过参数使用FFmpeg Filter
```python
    import bmf

    input_video_path1 = "test1.mp4"
    input_video_path2 = "test2.mp4"
    graph = bmf.graph({'dump_graph':1})
    stream1 = graph.decode({
        "input_path": input_video_path1
    })
    stream2 = graph.decode({
        "input_path": input_video_path2
    })
    #using "vstack" ffmpeg filter in a common way
    bmf.ff_filter([stream1, stream2], 'vstack', input=2).encode(None, {"output_path": "output.mp4"})
    graph.run()
```

BMF还支持ffmpeg CUDA fliter，调用ffmpeg CUDA fliter和调用CPU fliter非常相似，只需要注意数据的位置。详情请参阅[gpu filter章节](http://babitmf.github.io/docs/bmf/multiple_features/gpu_hardware_acc/gpu_filtering)。

#### 直接使用模块能力（Sync Mode）
用户可以将模块的能力集成到自己的项目中。例如，通过调用`encode()`来解码`yuv`帧或编码`yuv`帧.
```python
        import bmf

        input_video_path = "test.png"
        output_path = "output.jpg"

        # create decoder
        decoder = bmf_sync.sync_module("c_ffmpeg_decoder", {"input_path": input_video_path}, [], [0])

        '''
        # for non-builtin modules, use module_info instead of module_name to specify type/path/entry

        module_info = {
            "name": "my_module",
            "type": "",
            "path": "",
            "entry": ""
        }
        module = bmf_sync.sync_module(module_info, {"input_path": input_video_path}, [], [0])
        '''

        # create scale
        scale = bmf_sync.sync_module("c_ffmpeg_filter", {
            "name": "scale",                                                                                         "para": "320:240"
        }, [0], [0])
                                                                                                                 # create encoder
        encoder = bmf_sync.sync_module("c_ffmpeg_encoder", {
            "output_path": output_path,
            "format": "mjpeg",
            "video_params": {
                "codec": "jpg"
            }
        }, [0], [])
        # call init if necessary, otherwise we skip this step
        decoder.init()
        scale.init()
        encoder.init()

        # decode
        frames, _ = bmf_sync.process(decoder, None)
                                                                                                                 # scale                                                                                                  frames, _ = bmf_sync.process(scale, {0:frames[0]})

        # encode
        bmf_sync.process(encoder, {0:frames[0]})

        # send eof to encoder
        bmf_sync.send_eof(encoder)

        # call close if necessary, otherwise we skip this step
        decoder.close()                                                                                          scale.close()                                                                                            encoder.close()
```

#### 其它参考
在`test_transcode.py`、`test_sync_mode.py`等文件中也有很多示例。如有需要，请参考这些示例代码。


### 工具
BMF提供了一些有用的工具，帮助开发人员进行调试、比较和快速验证等。
#### 运行Graph
app运行“{'dump_graph': 1}”后，例如在[转码](#transcode)中，json描述将转储到文件`original_graph.json`中，如下所示：
```python
{
    "input_streams": [],
    "output_streams": [],
    "nodes": [
        {
            "module_info": {
                "name": "c_ffmpeg_decoder",
                "type": "",
                "path": "",
                "entry": ""
            },
            "meta_info": {
                "premodule_id": -1,
                "callback_binding": []
            },
            "option": {
                "input_path": "test.mp4",
                "dec_params": {
                    "threads": "8"
                }
            },
            "input_streams": [],
            "output_streams": [
                {
                    "identifier": "video:c_ffmpeg_decoder_0_1",
                    "stream_alias": ""
                },
                {
                    "identifier": "audio:c_ffmpeg_decoder_0_2",
                    "stream_alias": ""
                }
            ],
            "input_manager": "immediate",
            "scheduler": 0,
            "alias": "",
            "id": 0
        },
        {
            "module_info": {
                "name": "c_ffmpeg_filter",
                "type": "",
                "path": "",
                "entry": ""
            },
            "meta_info": {
                "premodule_id": -1,
                "callback_binding": []
            },
            "option": {
                "name": "scale",
                "para": "320:240"
            },
            "input_streams": [
                {
                    "identifier": "c_ffmpeg_decoder_0_1",
                    "stream_alias": ""
                }
            ],
            "output_streams": [
                {
                    "identifier": "c_ffmpeg_filter_1_0",
                    "stream_alias": ""
                }
            ],
            "input_manager": "immediate",
            "scheduler": 0,
            "alias": "",
            "id": 1
        },
        {
            "module_info": {
                "name": "c_ffmpeg_encoder",
                "type": "",
                "path": "",
                "entry": ""
            },
            "meta_info": {
                "premodule_id": -1,
                "callback_binding": []
            },
            "option": {
                "name": "scale",
                "para": "320:240"
            },
            "input_streams": [
                {
                    "identifier": "c_ffmpeg_decoder_0_1",
                    "stream_alias": ""
                }
            ],
            "output_streams": [
                {
                    "identifier": "c_ffmpeg_filter_1_0",
                    "stream_alias": ""
                }
            ],
            "input_manager": "immediate",
            "scheduler": 0,
            "alias": "",
            "id": 1
        },
        {
            "module_info": {
                "name": "c_ffmpeg_encoder",
                "type": "",
                "path": "",
                "entry": ""
            },
            "meta_info": {
                "premodule_id": -1,
                "callback_binding": []
            },
            "option": {
                "output_path": "./output.mp4",
                "video_params": {
                    "codec": "h264",
                    "width": 320,
                    "height": 240,
                    "crf": 23,
                    "preset": "veryfast"
                },
                "audio_params": {
                    "codec": "aac",
                    "bit_rate": 128000,
                    "sample_rate": 44100,
                    "channels": 2
                }
            },
            "input_streams": [
                {
                    "identifier": "c_ffmpeg_filter_1_0",
                    "stream_alias": ""
                },
                {
                    "identifier": "c_ffmpeg_decoder_0_2",
                    "stream_alias": ""
                }
            ],
            "output_streams": [],
            "input_manager": "immediate",
            "scheduler": 1,
            "alias": "",
            "id": 2
        }
    ],
    "option": {
        "dump_graph": 1
    },
    "mode": "Normal"
}
```

如果您知道自己正在做什么，可以查看一些细节并进行修改，还可以直接运行json graph：
```bash
$ run_bmf_graph original_graph.json
```

#### 转换为FFmpeg命令行
```python
import bmf

def run():
    my_graph = bmf.graph()
    my_graph.runFFmpegByConfig("original_graph.json")

run()
```
And a FFmpeg command line will be generated and run according to the json description:
```bash
ffmpeg -threads 8 -i test.mp4  -filter_complex "[0:v] scale=320:240[c_ffmpeg_filter_1_0]
" -map '[c_ffmpeg_filter_1_0]' -vcodec libx264 -pix_fmt yuv420p -crf 23 -preset veryfast -s 320x240 -map
0:a -acodec aac -b:a 128000 -ar 44100 -ac 2 -f mp4 ./output.mp4  -y
```