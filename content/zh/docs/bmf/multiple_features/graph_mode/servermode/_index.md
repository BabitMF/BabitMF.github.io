---
title: 'Server Mode'
linkTitle: 'Server Mode'
weight: 3
---
BMF also supports pre-built modes. The following example shows server initialization and usage:

```python
from bmf import ServerGateway

server_gateway = ServerGateway(graph)
server_gateway.init()
```

Before Server processing, build the packet first:

```python
packet1 = Packet()
packet1.set_timestamp(1)
video_info_list1 = [{'input_path': input_video_path_1}]
packet1.set_data({'type': InputType.VIDEO, 'input_path': video_info_list1})
```

After that, a thread is generated and the packet is sent to the server graph:

```python
thread_ = threading.Thread(target=process_thread, args=(server_gateway, packet1))
thread_.start()
```


If you need the complete code, you can refer to [test_server.py](#tbytodo)