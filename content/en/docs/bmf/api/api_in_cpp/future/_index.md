---
title: 'Future'
linkTitle: 'Future'
weight: 13
---

[//]: <> (REF_MD: classbmf__sdk_1_1Future.html)


  [Public Member Functions](http://localhost:1313/docs/bmf/api/api_in_cpp/future/#public-member-functions)  |  List of all members  # bmf_sdk::Future Class Referenceabstract

sdk_interface.h!

 ## Public Member Functions


   [Future](#future-13) ()
 
   [Future](#future-23) (const [Future](http://localhost:1313/docs/bmf/api/api_in_cpp/future/) &)=default
 
   [Future](#future-33) ( [Future](http://localhost:1313/docs/bmf/api/api_in_cpp/future/) &&)=default
 
  [Future](http://localhost:1313/docs/bmf/api/api_in_cpp/future/) &  [operator=](#operator=) (const [Future](http://localhost:1313/docs/bmf/api/api_in_cpp/future/) &)=default
 
virtual   [~Future](#~future) ()
 
virtual const Device &   [device](#device) () const =0
 
 
void   [set_stream](#set_stream) (uint64_t [stream](#stream) )
 
 
uint64_t   [stream](#stream) () const
 
bool   [ready](#ready) () const
 
 
void   [record](#record) (bool use_current=true)
 
 
void   [synchronize](#synchronize) ()
 
 
  [Future](http://localhost:1313/docs/bmf/api/api_in_cpp/future/) &  [copy_props](#copy_props) (const [Future](http://localhost:1313/docs/bmf/api/api_in_cpp/future/) &from)
 
 

## Constructor & Destructor Documentation


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
## Member Function Documentation


###  copy_props()

```
 Future & bmf_sdk::Future::copy_props( const Future &from )  
```
util function to copy props

**Parameters**
 - **from**  



**Returns**
  [SequenceData](http://localhost:1313/docs/bmf/api/api_in_cpp/sequencedata/)  &


###  device()

 ```
virtual const Device& bmf_sdk::Future::device (  ) const 
```
 pure virtualpure virtual





interface must implemented by sub-class, which provide device info

**Returns**


Implemented in  [bmf_sdk::VideoFrame](http://localhost:1313/docs/bmf/api/api_in_cpp/video_frame/#device)  .


###  operator=()

 ```
 Future & bmf_sdk::Future::operator=( const Future & )  
```
 defaultdefault






###  ready()

```
bool bmf_sdk::Future::ready (  ) const 
```
check if result is ready, must be called after  [record()](#record)  

**Returns**




###  record()

```
void bmf_sdk::Future::record ( bool use_current = true )  
```
record a event to track the readiness of the data

use current stream or self->stream


###  set_stream()

```
void bmf_sdk::Future::set_stream ( uint64_t stream )  
```
Set the stream object, device specific stream handle currently, only cuda stream handle(cudaStream_t) is suporrted, we only take the ref of this stream, the ownership of this stream is still belongs to caller.

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

