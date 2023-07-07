---
title: 'BMFAVPacket'
linkTitle: 'BMFAVPacket'
weight: 2
---

[//]: <> (REF_MD: classbmf__sdk_1_1BMFAVPacket.html)


  [Public Member Functions](http://localhost:1313/docs/bmf/api/api_in_cpp/bmfavpacket/#public-member-functions)  |  [Static Public Member Functions](http://localhost:1313/docs/bmf/api/api_in_cpp/bmfavpacket/#static-public-member-functions)  |  [Public Attributes](http://localhost:1313/docs/bmf/api/api_in_cpp/bmfavpacket/#public-attributes)   # bmf_sdk::BMFAVPacket Class Reference

bmf_av_packet.h!

!

 ## Public Member Functions


   [BMFAVPacket](#bmfavpacket-15) ()=default
 
   [BMFAVPacket](#bmfavpacket-25) (const [BMFAVPacket](http://localhost:1313/docs/bmf/api/api_in_cpp/bmfavpacket/) &)=default
 
   [BMFAVPacket](#bmfavpacket-35) ( [BMFAVPacket](http://localhost:1313/docs/bmf/api/api_in_cpp/bmfavpacket/) &&)=default
 
  [BMFAVPacket](http://localhost:1313/docs/bmf/api/api_in_cpp/bmfavpacket/) &  [operator=](#operator=) (const [BMFAVPacket](http://localhost:1313/docs/bmf/api/api_in_cpp/bmfavpacket/) &)=default
 
   [BMFAVPacket](#bmfavpacket-45) (const Tensor & [data](#data-12) )
 
 
   [BMFAVPacket](#bmfavpacket-55) (int size, const TensorOptions &options=kUInt8)
 
 
   [operator bool](#operator-bool) () const
 
 
Tensor &   [data](#data-12) ()
 
const Tensor &   [data](#data-22) () const
 
void *   [data_ptr](#data_ptr-12) ()
 
 
const void *   [data_ptr](#data_ptr-22) () const
 
int   [nbytes](#nbytes) () const
 
 
  [BMFAVPacket](http://localhost:1313/docs/bmf/api/api_in_cpp/bmfavpacket/) &  [copy_props](#copy_props) (const [BMFAVPacket](http://localhost:1313/docs/bmf/api/api_in_cpp/bmfavpacket/) &from)
 
 
int64_t   [get_offset](#get_offset) () const
 
 
int   [get_whence](#get_whence) () const
 
 
void   [set_offset](#set_offset) (int64_t offset)
 
 
void   [set_whence](#set_whence) (int whence)
 
 
 ![img](/img/docs/closed.png)

 [bmf_sdk::OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/) 
   [OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/#opaquedataset-13) ()=default
 
   [OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/#opaquedataset-23) ( [OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/) &&)=default
 
   [OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/#opaquedataset-33) (const [OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/) &)=default
 
  [OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/) &  [operator=](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/#operator=) (const [OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/) &)=default
 
 
void   [private_attach](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/#private_attach) (const T *data, Args &&...args)
 
 
 
const T *   [private_get](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/#private_get) () const
 
 
void   [private_merge](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/#private_merge) (const [OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/) &from)
 
 
  [OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/) &  [copy_props](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/#copy_props) (const [OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/) &from)
 
 
 ![img](/img/docs/closed.png)

 [bmf_sdk::SequenceData](http://localhost:1313/docs/bmf/api/api_in_cpp/sequencedata/) 
void   [set_pts](http://localhost:1313/docs/bmf/api/api_in_cpp/sequencedata/#set_pts) (int64_t [pts](http://localhost:1313/docs/bmf/api/api_in_cpp/sequencedata/#pts) )
 
 
int64_t   [pts](http://localhost:1313/docs/bmf/api/api_in_cpp/sequencedata/#pts) () const
 
  [Rational](http://localhost:1313/docs/bmf/api/api_in_cpp/rational/)   [time_base](http://localhost:1313/docs/bmf/api/api_in_cpp/sequencedata/#time_base) () const
 
 
void   [set_time_base](http://localhost:1313/docs/bmf/api/api_in_cpp/sequencedata/#set_time_base) ( [Rational](http://localhost:1313/docs/bmf/api/api_in_cpp/rational/)  [time_base](http://localhost:1313/docs/bmf/api/api_in_cpp/sequencedata/#time_base) )
 
 
bool   [operator>](http://localhost:1313/docs/bmf/api/api_in_cpp/sequencedata/#operator-1) (const [SequenceData](http://localhost:1313/docs/bmf/api/api_in_cpp/sequencedata/) &other)
 
bool   [operator>=](http://localhost:1313/docs/bmf/api/api_in_cpp/sequencedata/#operator-2) (const [SequenceData](http://localhost:1313/docs/bmf/api/api_in_cpp/sequencedata/) &other)
 
bool   [operator<](http://localhost:1313/docs/bmf/api/api_in_cpp/sequencedata/#operator-3) (const [SequenceData](http://localhost:1313/docs/bmf/api/api_in_cpp/sequencedata/) &other)
 
bool   [operator<=](http://localhost:1313/docs/bmf/api/api_in_cpp/sequencedata/#operator-4) (const [SequenceData](http://localhost:1313/docs/bmf/api/api_in_cpp/sequencedata/) &other)
 
  [SequenceData](http://localhost:1313/docs/bmf/api/api_in_cpp/sequencedata/) &  [copy_props](http://localhost:1313/docs/bmf/api/api_in_cpp/sequencedata/#copy_props) (const [SequenceData](http://localhost:1313/docs/bmf/api/api_in_cpp/sequencedata/) &from)
 
 

 ## Static Public Member Functions


 
static  [BMFAVPacket](http://localhost:1313/docs/bmf/api/api_in_cpp/bmfavpacket/)   [make](#make) (int size, Options &&...opts)
 

 ## Public Attributes


int64_t   [offset_](#offset_) 
 
int   [whence_](#whence_) 
 

 ## Additional Inherited Members


 ![img](/img/docs/closed.png)

 [bmf_sdk::OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/) 
virtual void   [set_private_data](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/#set_private_data) (int key, const OpaqueData &data)
 
 
virtual const  OpaqueData &  [private_data](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/#private_data) (int key) const
 

## Constructor & Destructor Documentation


###  BMFAVPacket() [1/5]

 ```
bmf_sdk::BMFAVPacket::BMFAVPacket (  )  
```
 defaultdefault






###  BMFAVPacket() [2/5]

 ```
bmf_sdk::BMFAVPacket::BMFAVPacket ( const BMFAVPacket & )  
```
 defaultdefault






###  BMFAVPacket() [3/5]

 ```
bmf_sdk::BMFAVPacket::BMFAVPacket (  BMFAVPacket && )  
```
 defaultdefault






###  BMFAVPacket() [4/5]

```
bmf_sdk::BMFAVPacket::BMFAVPacket ( const Tensor & data )  
```
Construct a new  [BMFAVPacket](http://localhost:1313/docs/bmf/api/api_in_cpp/bmfavpacket/)  object.

**Parameters**
 - **data** contiguous tensor data, cpu only 




###  BMFAVPacket() [5/5]

```
bmf_sdk::BMFAVPacket::BMFAVPacket ( int size, 
  const TensorOptions & options = kUInt8 
 )   
```
Construct a new  [BMFAVPacket](http://localhost:1313/docs/bmf/api/api_in_cpp/bmfavpacket/)  object.

**Parameters**
 - **size**  
 - **options** ref  [VideoFrame](http://localhost:1313/docs/bmf/api/api_in_cpp/video_frame/) 



## Member Function Documentation


###  copy_props()

```
 BMFAVPacket & bmf_sdk::BMFAVPacket::copy_props( const BMFAVPacket &from )  
```
copy all extra props(set by member func set_xxx) from  `from` (deepcopy if needed), **Parameters**
 - **from**  



**Returns**
  [VideoFrame](http://localhost:1313/docs/bmf/api/api_in_cpp/video_frame/)  &


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
return raw pointer of underlying data

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
get the current data offset which is file write pointer offset

**Returns**



###  get_whence()

```
int bmf_sdk::BMFAVPacket::get_whence (  ) const 
```
get the data whence which is mode. whence == SEEK_SET, from begin; whence == SEEK_CUR, current

**Returns**



###  make()

 ```
static BMFAVPacket bmf_sdk::BMFAVPacket::make( int size, 
  Options &&... opts 
 )   
```
 inlinestaticinline

static





**Template Parameters**
 - **Options**  



**Parameters**
 - **size**  
 - **opts** ref  [VideoFrame](http://localhost:1313/docs/bmf/api/api_in_cpp/video_frame/) 



**Returns**
  [BMFAVPacket](http://localhost:1313/docs/bmf/api/api_in_cpp/bmfavpacket/)  


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
number of bytes of underlying data

**Returns**



###  operator bool()

```
bmf_sdk::BMFAVPacket::operator bool (  ) const 
```
check if  [BMFAVPacket](http://localhost:1313/docs/bmf/api/api_in_cpp/bmfavpacket/)  if defined

**Returns**




###  operator=()

 ```
 BMFAVPacket & bmf_sdk::BMFAVPacket::operator=( const BMFAVPacket & )  
```
 defaultdefault






###  set_offset()

```
void bmf_sdk::BMFAVPacket::set_offset ( int64_t offset )  
```
set the current data offset which is file write pointer offset

**Returns**



###  set_whence()

```
void bmf_sdk::BMFAVPacket::set_whence ( int whence )  
```
set the data whence which is mode. whence == SEEK_SET, from begin; whence == SEEK_CUR, current

**Returns**


## Member Data Documentation


###  offset_

```
int64_t bmf_sdk::BMFAVPacket::offset_ 
```

###  whence_

```
int bmf_sdk::BMFAVPacket::whence_ 
```
 - /20230627/doxygen_converter/bmf/bmf/sdk/cpp_sdk/include/bmf/sdk/  bmf_av_packet.h  

