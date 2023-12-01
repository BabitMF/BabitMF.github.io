---
title: '推送数据模式'
linkTitle: '推送数据模式'
weight: 6
---

推送数据模式也是BMF Graph的一个重要能力。如下图所示，生成器模式提供提取Graph的处理结果帧的能力，推送模式提供“喂食”Graph的输入的能力。

<img src="/img/docs/pushdata.png" style="zoom:100%;" />


您只需要关注Graph的节点连接和运行逻辑，不断向Graph填充数据包即可。

推送数据模式适用于用户的输入源来自其他第三方库或者一些自定义数据类型，需要对输入进行很多与BMF框架无关的自定义处理操作的场景。

下面展示一个使用推送数据模式的示例：

```
@timeout_decorator.timeout(seconds=120)
def test_push_pkt_into_decoder(self):
    output_path = "./aac.mp4"

    self.remove_result_data(output_path)
    
    graph = bmf.graph({"dump_graph": 1})

    video_stream = graph.input_stream("outside_raw_video")
    decode_stream = video_stream.decode()
    bmf.encode(None,decode_stream["audio"],{"output_path": output_path})
    
    graph.run_wo_block(mode = GraphMode.PUSHDATA)
    pts_ = 0
    for index in range(100,105):
        file_name = "../files/aac_slice/"+str(index)+".aac"
        with open(file_name, "rb") as fp:
            lines = fp.read()    
            buf = BMFAVPacket(len(lines))
            buf.data.numpy()[:] = np.frombuffer(lines, dtype=np.uint8)
            buf.pts = pts_

            packet = Packet(buf)
            pts_ += 1
            packet.timestamp = pts_
            start_time = time.time()
            graph.fill_packet(video_stream.get_name(), packet, True)
    graph.fill_packet(video_stream.get_name(),Packet.generate_eof_packet())
    graph.close()

```

此示例顺序读取5个fltp aac音频流，使用推送数据模式将它们顺序推送到graph中，并将它们编码为aac.mp4文件。

下面再看一下另外一个更加复杂的视频处理示例：

```
def test_push_raw_stream_into_decoder(self):
    input_video_content = "../files/video_content.txt"
    input_content_size = "../files/video_length.txt"
    output_path = "./push_pkt_output.mp4"

    self.remove_result_data(output_path)

    graph = bmf.graph({"dump_graph": 1})

    video_stream = graph.input_stream("outside_raw_video")
    
    decode_stream = video_stream.module(
        'ffmpeg_decoder', 
        option={
            "video_codec": "h264", 'video_time_base': "1,30000",
            "push_raw_stream": 1
        }
    )

    encode_stream = decode_stream['video'].encode(
        None,
        {
            "output_path": output_path,
            "video_params": {
                "codec": "h264",
                "width": 640,
                "height": 480,
                "max_fr": 30,
                "crf": "23",
                "preset": "veryfast"
            }
        }
    )
    graph.run_wo_block(mode = GraphMode.PUSHDATA)

    f_cont = open(input_video_content,'rb')
    f_size = open(input_content_size,'r')

    pts_ = 0
    timestamp = 0
    lines = f_size.readlines()
    for size in lines:
        pkt = BMFAVPacket(int(size))
        memview = pkt.data.numpy()
        memview[:] = np.frombuffer(f_cont.read(int(size)), dtype='uint8')
        pkt.pts = pts_
        packet = Packet(pkt)
        packet.timestamp = timestamp
        pts_ += 1001
        timestamp += 1
        graph.fill_packet(video_stream.get_name(), packet)

    graph.fill_packet(video_stream.get_name(), Packet.generate_eof_packet())
    graph.close()
    f_size.close()
    f_cont.close()

```

此示例实现了一个处理管道，该管道以推送数据模式解码原始264流并在graph内重新编码。在代码中，我们首先构建一个graph，然后读取原始流。`video_content.txt`存储码流的二进制内容。 `video_length.txt`存储每个数据包的大小。在图形选项中，我们打开`push_raw_stream`开关，这将使解码器感知到您将填写的数据包是原始流格式。