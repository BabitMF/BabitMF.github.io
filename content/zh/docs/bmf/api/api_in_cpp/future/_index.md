---
title: 'Future'
linkTitle: 'Future'
weight: 13
---

[//]: <> (REF_MD: classbmf__sdk_1_1Future.html)


  [公有成员函数](https://babitmf.github.io/docs/bmf/api/api_in_cpp/future/#public-member-functions)  |  List of all members  # bmf_sdk::Future Class Referenceabstract

sdk_interface.h!

 ## 公有成员函数


   [Future](#future-13) ()
 
   [Future](#future-23) (const [Future](https://babitmf.github.io/docs/bmf/api/api_in_cpp/future/) &)=default
 
   [Future](#future-33) ( [Future](https://babitmf.github.io/docs/bmf/api/api_in_cpp/future/) &&)=default
 
  [Future](https://babitmf.github.io/docs/bmf/api/api_in_cpp/future/) &  [operator=](#operator=) (const [Future](https://babitmf.github.io/docs/bmf/api/api_in_cpp/future/) &)=default
 
virtual   [~Future](#~future) ()
 
virtual const Device &   [device](#device) () const =0
 
 
void   [set_stream](#set_stream) (uint64_t [stream](#stream) )
 
 
uint64_t   [stream](#stream) () const
 
bool   [ready](#ready) () const
 
 
void   [record](#record) (bool use_current=true)
 
 
void   [synchronize](#synchronize) ()
 
 
  [Future](https://babitmf.github.io/docs/bmf/api/api_in_cpp/future/) &  [copy_props](#copy_props) (const [Future](https://babitmf.github.io/docs/bmf/api/api_in_cpp/future/) &from)
 
 

## 构造函数和析构函数文档


###  Future() [1/3]

```
bmf_sdk::Future::Future (  )  
```

###  Future() [2/3]

 ```
bmf_sdk::Future::Future ( const Future & )  
```
 defaultdefault






###  Future() [3/3]

 ```
bmf_sdk::Future::Future (  Future && )  
```
 defaultdefault






###  ~Future()

 ```
virtual bmf_sdk::Future::~Future (  )  
```
 inlinevirtualinline

virtual






```
 {};

```
## 成员函数文档


###  copy_props()

```
 Future & bmf_sdk::Future::copy_props( const Future &from )  
```
util 函数复制 props
**Parameters**
 - **from**  



**Returns**
  [SequenceData](https://babitmf.github.io/docs/bmf/api/api_in_cpp/sequencedata/)  &


###  device()

 ```
virtual const Device& bmf_sdk::Future::device (  ) const 
```
 pure virtualpure virtual





interface must implemented by sub-class, which provide device info

**Returns**


Implemented in  [bmf_sdk::VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/#device)  .


###  operator=()

 ```
 Future & bmf_sdk::Future::operator=( const Future & )  
```
 defaultdefault






###  ready()

```
bool bmf_sdk::Future::ready (  ) const 
```
检查结果是否准备好，必须在 [record()](#record) 之后调用

**Returns**




###  record()

```
void bmf_sdk::Future::record ( bool use_current = true )  
```
记录时间以跟踪数据的准备情况

使用当前的 stream 或 self->stream


###  set_stream()

```
void bmf_sdk::Future::set_stream ( uint64_t stream )  
```
设置 stream object，当前设备特定的 stream handle，只有 cuda stream handle（cudaStream_t）被取代，我们只获取该 stream 的 ref，该 stream 的所有权仍属于调用者。

**Parameters**
 - **stream**  




###  stream()

```
uint64_t bmf_sdk::Future::stream (  ) const 
```
**Returns**



###  synchronize()

```
void bmf_sdk::Future::synchronize (  )  
```
force synchronization

 - /20230627/doxygen_converter/bmf/bmf/sdk/cpp_sdk/include/bmf/sdk/  sdk_interface.h  

