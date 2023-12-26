---
title: 'Task'
linkTitle: 'Task'
weight: 8
---

[//]: <> (REF_MD: classTask.html)


  [Public Member Functions](https://babitmf.github.io/docs/bmf/api/api_in_cpp/task/#public-member-functions)  |  [Public Attributes](https://babitmf.github.io/docs/bmf/api/api_in_cpp/task/#public-attributes)  |  [Friends](https://babitmf.github.io/docs/bmf/api/api_in_cpp/task/#friends)  |  List of all members  # Task Class Reference

task.h ## Public Member Functions


   [Task](#task-13) (int node_id=-1, std::vector< int > input_stream_id_list={}, std::vector< int > output_stream_id_list={})
 
 
   [Task](#task-23) (const [Task](https://babitmf.github.io/docs/bmf/api/api_in_cpp/task/) &rhs)
 
   [Task](#task-33) ( [Task](https://babitmf.github.io/docs/bmf/api/api_in_cpp/task/) &&rhs)
 
  [Task](https://babitmf.github.io/docs/bmf/api/api_in_cpp/task/) &  [operator=](#operator) ( [Task](https://babitmf.github.io/docs/bmf/api/api_in_cpp/task/) rhs)
 
bool   [fill_input_packet](#fill_input_packet) (int stream_id, Packet packet)
 
 
bool   [fill_output_packet](#fill_output_packet) (int stream_id, Packet packet)
 
 
bool   [pop_packet_from_out_queue](#pop_packet_from_out_queue) (int stream_id, Packet &packet)
 
 
bool   [pop_packet_from_input_queue](#pop_packet_from_input_queue) (int stream_id, Packet &packet)
 
 
bool   [input_queue_empty](#input_queue_empty) (int stream_id)
 
bool   [output_queue_empty](#output_queue_empty) (int stream_id)
 
int64_t   [timestamp](#timestamp) () const
 
 
void   [set_timestamp](#set_timestamp) (int64_t t)
 
 
  PacketQueueMap &  [get_outputs](#get_outputs) ()
 
 
  PacketQueueMap &  [get_inputs](#get_inputs) ()
 
 
std::vector< int >   [get_input_stream_ids](#get_input_stream_ids) ()
 
 
std::vector< int >   [get_output_stream_ids](#get_output_stream_ids) ()
 
 
int   [get_node](#get_node) ()
 
void   [init](#init) (int node_id, std::vector< int > input_stream_id_list, std::vector< int > output_stream_id_list)
 

 ## 公共属性


int64_t   [timestamp_](#timestamp_) = [UNSET](page_timestamp_8h_v3_0_0#a6fc8e10db27041311d7695900743667caec1d962808cbb9cf1b89a5cdd6197923) 
 
int   [node_id_](#node_id_) 
 
  PacketQueueMap   [inputs_queue_](#inputs_queue_) 
 
  PacketQueueMap   [outputs_queue_](#outputs_queue_) 
 

 ## Friends


void   [swap](#swap) ( [Task](https://babitmf.github.io/docs/bmf/api/api_in_cpp/task/) &target, [Task](https://babitmf.github.io/docs/bmf/api/api_in_cpp/task/) &source)
 

## 构造函数和析构函数


###  Task() [1/3]

```
Task::Task ( int node_id = -1, 
  std::vector< int > input_stream_id_list = {}, 
  std::vector< int > output_stream_id_list = {} 
 )   
```
构造 [Task](https://babitmf.github.io/docs/bmf/api/api_in_cpp/task/)

**Parameters**
 - **node_id**：正在运行的 task 的 id
 - **input_stream_id_list**：输入流的 id list
 - **output_stream_id_list**：输出流的 id list




###  Task() [2/3]

```
Task::Task ( const Task &rhs )  
```

###  Task() [3/3]

```
Task::Task (  Task &&rhs )  
```
## 成员函数文档


###  fill_input_packet()

```
bool Task::fill_input_packet ( int stream_id, 
  Packet packet 
 )   
```
将 packet 填入输入流队列。

**Parameters**
 - **stream_id**：输入流的 id
 - **packet**：填入输入流队列的 packet



**Returns**



###  fill_output_packet()

```
bool Task::fill_output_packet ( int stream_id, 
  Packet packet 
 )   
```
将 packet 填入输出流队列。

**Parameters**
 - **stream_id**：输出流的 id
 - **packet**：填入输出流队列的 packet



**Returns**



###  get_input_stream_ids()

```
 (  )  
```
获取输入流的 id list.

**Returns**



###  get_inputs()

```
 PacketQueueMap & Task::get_inputs(  )  
```
获取输入流队列。

**Returns**



###  get_node()

```
int Task::get_node (  )  
```

###  get_output_stream_ids()

```
 (  )  
```
获取输出流的 id list。

**Returns**



###  get_outputs()

```
 PacketQueueMap & Task::get_outputs(  )  
```
获取输出流队列。

**Returns**



###  init()

```
void Task::init ( int node_id, 
  std::vector< int > input_stream_id_list, 
  std::vector< int > output_stream_id_list 
 )   
```

###  input_queue_empty()

```
bool Task::input_queue_empty ( int stream_id )  
```

###  operator=()

```
 Task & Task::operator=(  Task rhs )  
```

###  output_queue_empty()

```
bool Task::output_queue_empty ( int stream_id )  
```

###  pop_packet_from_input_queue()

```
bool Task::pop_packet_from_input_queue ( int stream_id, 
  Packet & packet 
 )   
```
从输入队列的给定 stream id 中弹出 packet。

**Parameters**
 - **stream_id**：输入流的 id
 - **packet**：从输入流队列中弹出的 packet。



**Returns**



###  pop_packet_from_out_queue()

```
bool Task::pop_packet_from_out_queue ( int stream_id, 
  Packet & packet 
 )   
```
从输出队列的给定 stream id 中弹出 packet。

**Parameters**
 - **stream_id**：输出流的 id
 - **packet**：从输出流队列中弹出的 packet。



**Returns**



###  set_timestamp()

```
void Task::set_timestamp ( int64_t t )  
```
设置该task的timestamp

**Parameters**
 - **t**：该 task 的 timestamp



**Returns**



###  timestamp()

```
int64_t Task::timestamp (  ) const 
```
获取该 task 的 timestamp

**Returns**


## Friends And Related Function Documentation


###  swap

 ```
void swap (  Task &target, 
   Task &source 
 )   
```
 friendfriend





## 成员数据文档


###  inputs_queue_

```
 PacketQueueMap Task::inputs_queue_
```

###  node_id_

```
int Task::node_id_ 
```

###  outputs_queue_

```
 PacketQueueMap Task::outputs_queue_
```

###  timestamp_

```
int64_t Task::timestamp_ = UNSET 
```
 - /20230627/doxygen_converter/bmf/bmf/sdk/cpp_sdk/include/bmf/sdk/  task.h  

