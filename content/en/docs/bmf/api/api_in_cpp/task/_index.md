---
title: 'Task'
linkTitle: 'Task'
weight: 8
---

[//]: <> (REF_MD: classTask.html)

  [Public Member Functions](https://babitmf.github.io/docs/bmf/api/api_in_cpp/task/#public-member-functions)  |  [Public Attributes](https://babitmf.github.io/docs/bmf/api/api_in_cpp/task/#public-attributes)  |  [Friends](https://babitmf.github.io/docs/bmf/api/api_in_cpp/task/#friends)  |  List of all members

# Task Class Reference

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

## Public Attributes

int64_t   [timestamp_](#timestamp_) = `UNSET`

int   [node_id_](#node_id_)

  PacketQueueMap   [inputs_queue_](#inputs_queue_)

  PacketQueueMap   [outputs_queue_](#outputs_queue_)

## Friends

void   [swap](#swap) ( [Task](https://babitmf.github.io/docs/bmf/api/api_in_cpp/task/) &target, [Task](https://babitmf.github.io/docs/bmf/api/api_in_cpp/task/) &source)

## Constructor & Destructor Documentation

### Task() [1/3]

```cpp
Task::Task ( int node_id = -1,
  std::vector< int > input_stream_id_list = {},
  std::vector< int > output_stream_id_list = {}
 )
```

construct  [Task](https://babitmf.github.io/docs/bmf/api/api_in_cpp/task/)  .

**Parameters**

- **node_id** The id of the running task.
- **input_stream_id_list** input stream id list.
- **output_stream_id_list** output stream id list.

### Task() [2/3]

```cpp
Task::Task ( const Task &rhs )
```

### Task() [3/3]

```cpp
Task::Task (  Task &&rhs )
```

## Member Function Documentation

### fill_input_packet()

```cpp
bool Task::fill_input_packet ( int stream_id,
  Packet packet
 )
```

fill packet into the input stream queue.

**Parameters**

- **stream_id** The id of the input stream.
- **packet** the packet add to the input stream queue.

**Returns**

### fill_output_packet()

```cpp
bool Task::fill_output_packet ( int stream_id,
  Packet packet
 )
```

fill packet into the output stream queue.

**Parameters**

- **stream_id** The id of the output stream.
- **packet** the packet add to the output stream queue.

**Returns**

### get_input_stream_ids()

```cpp
 (  )
```

get input stream id list.

**Returns**

### get_inputs()

```cpp
 PacketQueueMap & Task::get_inputs(  )
```

get input stream queue.

**Returns**

### get_node()

```cpp
int Task::get_node (  )
```

### get_output_stream_ids()

```cpp
 (  )
```

get output stream id list.

**Returns**

### get_outputs()

```cpp
 PacketQueueMap & Task::get_outputs(  )
```

get output stream queue.

**Returns**

### init()

```cpp
void Task::init ( int node_id,
  std::vector< int > input_stream_id_list,
  std::vector< int > output_stream_id_list
 )
```

### input_queue_empty()

```cpp
bool Task::input_queue_empty ( int stream_id )
```

### operator=()

```cpp
 Task & Task::operator=(  Task rhs )
```

### output_queue_empty()

```cpp
bool Task::output_queue_empty ( int stream_id )
```

### pop_packet_from_input_queue()

```cpp
bool Task::pop_packet_from_input_queue ( int stream_id,
  Packet & packet
 )
```

pop packet from the given stream id of input queue.

**Parameters**

- **stream_id** The id of the input stream.
- **packet** the packet poped from the input stream queue.

**Returns**

### pop_packet_from_out_queue()

```cpp
bool Task::pop_packet_from_out_queue ( int stream_id,
  Packet & packet
 )
```

pop packet from the given stream id of output queue.

**Parameters**

- **stream_id** The id of the output stream.
- **packet** the packet poped from the output stream queue.

**Returns**

### set_timestamp()

```cpp
void Task::set_timestamp ( int64_t t )
```

set the timestamp of the task.

**Parameters**

- **t** the timestamp of the task.

**Returns**

### timestamp()

```cpp
int64_t Task::timestamp (  ) const
```

get the timestamp of the task

**Returns**

## Friends And Related Function Documentation

### swap

```cpp
void swap (  Task &target,
   Task &source
 )
```

 friendfriend

## Member Data Documentation

### inputs_queue_

```cpp
 PacketQueueMap Task::inputs_queue_
```

### node_id_

```cpp
int Task::node_id_
```

### outputs_queue_

```cpp
 PacketQueueMap Task::outputs_queue_
```

### timestamp_

```cpp
int64_t Task::timestamp_ = UNSET
```

- /20230627/doxygen_converter/bmf/bmf/sdk/cpp_sdk/include/bmf/sdk/  task.h
