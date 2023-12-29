---
title: '服务模式'
linkTitle: '服务模式'
weight: 3
---
BMF 也支持类服务端模式。以下示例展示了 server 初始化和使用：

```python
from bmf import ServerGateway

server_gateway = ServerGateway(graph)
server_gateway.init()
```

Server 处理之前，先构建 packet：

```python
packet1 = Packet()
packet1.set_timestamp(1)
video_info_list1 = [{'input_path': input_video_path_1}]
packet1.set_data({'type': InputType.VIDEO, 'input_path': video_info_list1})
```

之后启动线程，把 packet 发送到 server graph：

```python
thread_ = threading.Thread(target=process_thread, args=(server_gateway, packet1))
thread_.start()
```


如果您需要完整代码，请参阅 `test_server.py`