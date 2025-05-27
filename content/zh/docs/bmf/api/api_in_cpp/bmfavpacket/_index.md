---
title: 'BMFAVPacket'
linkTitle: 'BMFAVPacket'
weight: 2
---

[//]: <> (REF_MD: classbmf__sdk_1_1BMFAVPacket.html)


  [公有成员函数](#公有成员函数)  |  [静态公有成员函数](#静态公有成员函数)  |  [Public Attributes](#公共属性)   
  # bmf_sdk::BMFAVPacket Class Reference

bmf_av_packet.h!



 ## 公有成员函数


   [BMFAVPacket](#bmfavpacket-15) ()=default
 
   [BMFAVPacket](#bmfavpacket-25) (const [BMFAVPacket](https://babitmf.github.io/docs/bmf/api/api_in_cpp/bmfavpacket/) &)=default
 
   [BMFAVPacket](#bmfavpacket-35) ( [BMFAVPacket](https://babitmf.github.io/docs/bmf/api/api_in_cpp/bmfavpacket/) &&)=default
 
  [BMFAVPacket](https://babitmf.github.io/docs/bmf/api/api_in_cpp/bmfavpacket/) &  [operator=](#operator) (const [BMFAVPacket](https://babitmf.github.io/docs/bmf/api/api_in_cpp/bmfavpacket/) &)=default
 
   [BMFAVPacket](#bmfavpacket-45) (const Tensor & [data](#data-12) )
 
 
   [BMFAVPacket](#bmfavpacket-55) (int size, const TensorOptions &options=kUInt8)
 
 
   [operator bool](#operator-bool) () const
 
 
Tensor &   [data](#data-12) ()
 
const Tensor &   [data](#data-22) () const
 
void *   [data_ptr](#data_ptr-12) ()
 
 
const void *   [data_ptr](#data_ptr-22) () const
 
int   [nbytes](#nbytes) () const
 
 
  [BMFAVPacket](https://babitmf.github.io/docs/bmf/api/api_in_cpp/bmfavpacket/) &  [copy_props](#copy_props) (const [BMFAVPacket](https://babitmf.github.io/docs/bmf/api/api_in_cpp/bmfavpacket/) &from)
 
 
int64_t   [get_offset](#get_offset) () const
 
 
int   [get_whence](#get_whence) () const
 
 
void   [set_offset](#set_offset) (int64_t offset)
 
 
void   [set_whence](#set_whence) (int whence)
 
 
 ![img](/img/docs/closed.png)

 [bmf_sdk::OpaqueDataSet](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/) 
   [OpaqueDataSet](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/#opaquedataset-13) ()=default
 
   [OpaqueDataSet](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/#opaquedataset-23) ( [OpaqueDataSet](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/) &&)=default
 
   [OpaqueDataSet](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/#opaquedataset-33) (const [OpaqueDataSet](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/) &)=default
 
  [OpaqueDataSet](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/) &  [operator=](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/#operator=) (const [OpaqueDataSet](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/) &)=default
 
 
void   [private_attach](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/#private_attach) (const T *data, Args &&...args)
 
 
 
const T *   [private_get](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/#private_get) () const
 
 
void   [private_merge](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/#private_merge) (const [OpaqueDataSet](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/) &from)
 
 
  [OpaqueDataSet](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/) &  [copy_props](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/#copy_props) (const [OpaqueDataSet](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/) &from)
 
 
 ![img](/img/docs/closed.png)

 [bmf_sdk::SequenceData](https://babitmf.github.io/docs/bmf/api/api_in_cpp/sequencedata/) 
void   [set_pts](https://babitmf.github.io/docs/bmf/api/api_in_cpp/sequencedata/#set_pts) (int64_t [pts](https://babitmf.github.io/docs/bmf/api/api_in_cpp/sequencedata/#pts) )
 
 
int64_t   [pts](https://babitmf.github.io/docs/bmf/api/api_in_cpp/sequencedata/#pts) () const
 
  [Rational](https://babitmf.github.io/docs/bmf/api/api_in_cpp/rational/)   [time_base](https://babitmf.github.io/docs/bmf/api/api_in_cpp/sequencedata/#time_base) () const
 
 
void   [set_time_base](https://babitmf.github.io/docs/bmf/api/api_in_cpp/sequencedata/#set_time_base) ( [Rational](https://babitmf.github.io/docs/bmf/api/api_in_cpp/rational/)  [time_base](https://babitmf.github.io/docs/bmf/api/api_in_cpp/sequencedata/#time_base) )
 
 
bool   [operator>](https://babitmf.github.io/docs/bmf/api/api_in_cpp/sequencedata/#operator-1) (const [SequenceData](https://babitmf.github.io/docs/bmf/api/api_in_cpp/sequencedata/) &other)
 
bool   [operator>=](https://babitmf.github.io/docs/bmf/api/api_in_cpp/sequencedata/#operator-2) (const [SequenceData](https://babitmf.github.io/docs/bmf/api/api_in_cpp/sequencedata/) &other)
 
bool   [operator<](https://babitmf.github.io/docs/bmf/api/api_in_cpp/sequencedata/#operator-3) (const [SequenceData](https://babitmf.github.io/docs/bmf/api/api_in_cpp/sequencedata/) &other)
 
bool   [operator<=](https://babitmf.github.io/docs/bmf/api/api_in_cpp/sequencedata/#operator-4) (const [SequenceData](https://babitmf.github.io/docs/bmf/api/api_in_cpp/sequencedata/) &other)
 
  [SequenceData](https://babitmf.github.io/docs/bmf/api/api_in_cpp/sequencedata/) &  [copy_props](https://babitmf.github.io/docs/bmf/api/api_in_cpp/sequencedata/#copy_props) (const [SequenceData](https://babitmf.github.io/docs/bmf/api/api_in_cpp/sequencedata/) &from)
 
 

 ## 静态公有成员函数


 
static  [BMFAVPacket](https://babitmf.github.io/docs/bmf/api/api_in_cpp/bmfavpacket/)   [make](#make) (int size, Options &&...opts)
 

 ## 公共属性


int64_t   [offset_](#offset_) 
 
int   [whence_](#whence_) 
 

 ## 其它继承成员


 ![img](/img/docs/closed.png)

 [bmf_sdk::OpaqueDataSet](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/) 
virtual void   [set_private_data](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/#set_private_data) (int key, const OpaqueData &data)
 
 
virtual const  OpaqueData &  [private_data](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/#private_data) (int key) const
 

## 构造函数和析构函数文档


###  BMFAVPacket() [1/5]

 ```
bmf_sdk::BMFAVPacket::BMFAVPacket (  )  
```
 default






###  BMFAVPacket() [2/5]

 ```
bmf_sdk::BMFAVPacket::BMFAVPacket ( const BMFAVPacket & )  
```
 default






###  BMFAVPacket() [3/5]

 ```
bmf_sdk::BMFAVPacket::BMFAVPacket (  BMFAVPacket && )  
```
 default






###  BMFAVPacket() [4/5]

```
bmf_sdk::BMFAVPacket::BMFAVPacket ( const Tensor & data )  
```
构建一个新的 [BMFAVPacket](https://babitmf.github.io/docs/bmf/api/api_in_cpp/bmfavpacket/) 对象。
**Parameters**
 - **data**：连续张量数据，仅限 cpu




###  BMFAVPacket() [5/5]

```
bmf_sdk::BMFAVPacket::BMFAVPacket ( int size, 
  const TensorOptions & options = kUInt8 
 )   
```
构建一个新的 [BMFAVPacket](https://babitmf.github.io/docs/bmf/api/api_in_cpp/bmfavpacket/) 对象。
**Parameters**
 - **size**  
 - **options**：参考 [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/) 



## 成员函数文档


###  copy_props()

```
 BMFAVPacket & bmf_sdk::BMFAVPacket::copy_props( const BMFAVPacket &from )  
```
从`from`复制所有额外的 props（由成员函数 set_xxx 设置）（如果需要则进行深复制）
**Parameters**
 - **from**  



**Returns**
  [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/)  &


###  data() [1/2]

```
Tensor& bmf_sdk::BMFAVPacket::data (  )  
```
**Returns**



###  data() [2/2]

```
const Tensor& bmf_sdk::BMFAVPacket::data (  ) const 
```
**Returns**



###  data_ptr() [1/2]

```
void* bmf_sdk::BMFAVPacket::data_ptr (  )  
```
返回底层数据的原始指针

**Returns**



###  data_ptr() [2/2]

```
const void* bmf_sdk::BMFAVPacket::data_ptr (  ) const 
```
**Returns**



###  get_offset()

```
int64_t bmf_sdk::BMFAVPacket::get_offset (  ) const 
```
获取当前数据偏移量，即文件的 write pointer 偏移量

**Returns**



###  get_whence()

```
int bmf_sdk::BMFAVPacket::get_whence (  ) const 
```
获取来自 mode 的数据。whence == SEEK_SET, from begin; whence == SEEK_CUR, current
**Returns**



###  make()

 ```
static BMFAVPacket bmf_sdk::BMFAVPacket::make( int size, 
  Options &&... opts 
 )   
```
 inline static





**Template Parameters**
 - **Options**  



**Parameters**
 - **size**  
 - **opts**：参考 [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/) 



**Returns**
  [BMFAVPacket](https://babitmf.github.io/docs/bmf/api/api_in_cpp/bmfavpacket/)  


```
     {
         return BMFAVPacket(size,
             TensorOptions(kUInt8).options(std::forward<Options>(opts)...));
     }

```

###  nbytes()

```
int bmf_sdk::BMFAVPacket::nbytes (  ) const 
```
底层数据的字节数

**Returns**



###  operator bool()

```
bmf_sdk::BMFAVPacket::operator bool (  ) const 
```
检查 [BMFAVPacket](https://babitmf.github.io/docs/bmf/api/api_in_cpp/bmfavpacket/) 是否已定义。

**Returns**




###  operator=()

 ```
 BMFAVPacket & bmf_sdk::BMFAVPacket::operator=( const BMFAVPacket & )  
```
 default






###  set_offset()

```
void bmf_sdk::BMFAVPacket::set_offset ( int64_t offset )  
```
设置当前数据偏移量，即文件的 write pointer 偏移量

**Returns**



###  set_whence()

```
void bmf_sdk::BMFAVPacket::set_whence ( int whence )  
```
设置数据来源，即 mode。whence == SEEK_SET, from begin; whence == SEEK_CUR, current

**Returns**


## 成员函数文档


###  offset_

```
int64_t bmf_sdk::BMFAVPacket::offset_ 
```

###  whence_

```
int bmf_sdk::BMFAVPacket::whence_ 
```
 - /20230627/doxygen_converter/bmf/bmf/sdk/cpp_sdk/include/bmf/sdk/  bmf_av_packet.h  

