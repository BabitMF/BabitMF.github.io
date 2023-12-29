---
title: 'VideoFrame'
linkTitle: 'VideoFrame'
weight: 9
---

[//]: <> (REF_MD: classbmf__sdk_1_1VideoFrame.html)


  [Public Types](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/#public-types)  |  [Public Member Functions](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/#public-member-functions)  |  [Static Public Member Functions](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/#static-public-member-functions)  |  [Protected Member Functions](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/#protected-member-functions)  |  [List of all members](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/)  # bmf_sdk::VideoFrame Class Reference

video_frame.h


 ## 公共类型


using   [Frame](#frame) = hmp::Frame
 

 ## 公共成员函数


   [VideoFrame](#videoframe-16) ()
 
 
   [VideoFrame](#videoframe-26) (const [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/) &)=default
 
 
  [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/) &  [operator=](#operator) (const [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/) &)=default
 
   [VideoFrame](#videoframe-36) ( [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/) &&)=default
 
 
   [VideoFrame](#videoframe-46) (const [Frame](#frame) & [frame](#frame) )
 
 
   [VideoFrame](#videoframe-56) (int [width](#width) , int [height](#height) , const PixelInfo &pix_info, const Device & [device](#device) =kCPU)
 
 
   [operator bool](#operator-bool) () const
 
 
int   [width](#width) () const
 
int   [height](#height) () const
 
ScalarType   [dtype](#dtype) () const
 
const  [Frame](#frame) &  [frame](#frame) () const
 
  [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/)   [reformat](#reformat) (const PixelInfo &pix_info)
 
 
  [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/)   [crop](#crop) (int x, int y, int w, int h) const
 
 
const Device &   [device](#device) () const override
 
 
  [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/)   [cpu](#cpu) (bool non_blocking=false) const
 
  [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/)   [cuda](#cuda) () const
 
  [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/) &  [copy_](#copy_) (const [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/) &from)
 
 
  [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/)   [to](#to) (const Device & [device](#device) , bool non_blocking=false) const
 
 
  [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/) &  [copy_props](#copy_props) (const [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/) &from)
 
 
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
 
 
 ![img](/img/docs/closed.png)

 [bmf_sdk::Future](https://babitmf.github.io/docs/bmf/api/api_in_cpp/future/) 
   [Future](https://babitmf.github.io/docs/bmf/api/api_in_cpp/future/#future-13) ()
 
   [Future](https://babitmf.github.io/docs/bmf/api/api_in_cpp/future/#future-23) (const [Future](https://babitmf.github.io/docs/bmf/api/api_in_cpp/future/) &)=default
 
   [Future](https://babitmf.github.io/docs/bmf/api/api_in_cpp/future/#future-33) ( [Future](https://babitmf.github.io/docs/bmf/api/api_in_cpp/future/) &&)=default
 
  [Future](https://babitmf.github.io/docs/bmf/api/api_in_cpp/future/) &  [operator=](https://babitmf.github.io/docs/bmf/api/api_in_cpp/future/#operator=) (const [Future](https://babitmf.github.io/docs/bmf/api/api_in_cpp/future/) &)=default
 
virtual   [~Future](https://babitmf.github.io/docs/bmf/api/api_in_cpp/future/#~future) ()
 
void   [set_stream](https://babitmf.github.io/docs/bmf/api/api_in_cpp/future/#set_stream) (uint64_t [stream](https://babitmf.github.io/docs/bmf/api/api_in_cpp/future/#stream) )
 
 
uint64_t   [stream](https://babitmf.github.io/docs/bmf/api/api_in_cpp/future/#stream) () const
 
bool   [ready](https://babitmf.github.io/docs/bmf/api/api_in_cpp/future/#ready) () const
 
 
void   [record](https://babitmf.github.io/docs/bmf/api/api_in_cpp/future/#record) (bool use_current=true)
 
 
void   [synchronize](https://babitmf.github.io/docs/bmf/api/api_in_cpp/future/#synchronize) ()
 
 
  [Future](https://babitmf.github.io/docs/bmf/api/api_in_cpp/future/) &  [copy_props](https://babitmf.github.io/docs/bmf/api/api_in_cpp/future/#copy_props) (const [Future](https://babitmf.github.io/docs/bmf/api/api_in_cpp/future/) &from)
 
 

 ## 静态公共成员函数


static  [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/)   [make](#make-12) (int [width](#width) , int [height](#height) , const PixelInfo &pix_info, const Device & [device](#device) =kCPU)
 
 
static  [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/)   [make](#make-22) (int [width](#width) , int [height](#height) , const PixelInfo &pix_info, const std::string & [device](#device) )
 

 ## 受保护的成员函数


   [VideoFrame](#videoframe-66) (const std::shared_ptr< Private > &other)
 
 ![img](/img/docs/closed.png)

 [bmf_sdk::OpaqueDataSet](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/) 
virtual void   [set_private_data](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/#set_private_data) (int key, const OpaqueData &data)
 
 
virtual const  OpaqueData &  [private_data](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/#private_data) (int key) const
 

## Member Typedef Documentation


###  Frame

```
using bmf_sdk::VideoFrame::Frame = hmp::Frame
```
## 构造函数和析构函数文档


###  VideoFrame() [1/6]

```
bmf_sdk::VideoFrame::VideoFrame (  )  
```
构建一个未定义的 Video Frame object。


```
assert(VideoFrame() == false)

```

###  VideoFrame() [2/6]

 ```
bmf_sdk::VideoFrame::VideoFrame ( const VideoFrame & )  
```
 defaultdefault





  [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/)  is copyable.


###  VideoFrame() [3/6]

 ```
bmf_sdk::VideoFrame::VideoFrame (  VideoFrame && )  
```
 defaultdefault





  [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/)  is movable.


###  VideoFrame() [4/6]

```
bmf_sdk::VideoFrame::VideoFrame ( const Frame &frame )  
```
Construct  [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/)  from Frame object.

**Parameters**
 - **frame**：专用于 YUV 数据，平面之间形状不规则




###  VideoFrame() [5/6]

```
bmf_sdk::VideoFrame::VideoFrame ( int width, 
  int height, 
  const PixelInfo & pix_info, 
  const Device & device = kCPU 
 )   
```
使用 factory function VideoFrame::make 构建具有给定尺寸（宽、高）、PixelInfo 和设备的 VideoFrame(Frame) 以方便使用。
**Parameters**
 - **width**：Y 平面的宽
 - **height**：Y 平面的高
 - **pix_info**：PixelFormat 和 ColorModel 
 - **device**：device 




###  VideoFrame() [6/6]

 ```
bmf_sdk::VideoFrame::VideoFrame ( const std::shared_ptr< Private > & other )  
```
 protectedprotected





## 成员函数文档


###  copy_()

```
 VideoFrame & bmf_sdk::VideoFrame::copy_( const VideoFrame &from )  
```
原地复制。

**Parameters**
 - **from**：type和shape相同的数据源



**Returns**
  [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/)  &


###  copy_props()

```
 VideoFrame & bmf_sdk::VideoFrame::copy_props( const VideoFrame &from )  
```
复制来自 `from` 的所有 extra props（由成员函数set_xxx设置）（如果需要，可深度复制）
**Parameters**
 - **from**  



**Returns**
  [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/)  &


###  cpu()

```
 VideoFrame bmf_sdk::VideoFrame::cpu( bool non_blocking = false ) const 
```

###  crop()

```
 VideoFrame bmf_sdk::VideoFrame::crop( int x, 
  int y, 
  int w, 
  int h 
 )  const 
```
返回由(x、y、w、h)指定的选定区域

**Parameters**
 - **x**：起始列索引
 - **y**：起始行索引
 - **w**：列数
 - **h**：行数



**Returns**
  [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/)  


###  cuda()

```
 VideoFrame bmf_sdk::VideoFrame::cuda(  ) const 
```

###  device()

 ```
const Device& bmf_sdk::VideoFrame::device (  ) const 
```
 overridevirtualoverride

virtual





接口必须由子类实现，子类提供设备信息。

**Returns**


Implements  [bmf_sdk::Future](https://babitmf.github.io/docs/bmf/api/api_in_cpp/future/#device)  .


###  dtype()

```
ScalarType bmf_sdk::VideoFrame::dtype (  ) const 
```

###  frame()

```
const Frame & bmf_sdk::VideoFrame::frame(  ) const 
```
**Returns**



###  height()

```
int bmf_sdk::VideoFrame::height (  ) const 
```

###  make() [1/2]

 ```
static VideoFrame bmf_sdk::VideoFrame::make( int width, 
  int height, 
  const PixelInfo & pix_info, 
  const Device & device = kCPU 
 )   
```
 inlinestaticinline

static





构建 VideoFrame(Frame) 的 Facotry function

更多详细信息，请参阅 [test_video_frame.cpp](https://github.com/BabitMF/bmf/blob/a5d8c8626c0ae0bf5d2ae13ab284fe5e3fb4b5ee/bmf/sdk/cpp_sdk/test/test_video_frame.cpp#L4)


```
//allocate VideoFrame with default device CPU
auto H420 = PixelInfo(PF_YUV420P, CS_BT607)
auto vf = VideoFrame::make(1920, 1080, H420);

//allocate VideoFrame on CUDA device
auto vf = VideoFrame::make(1920, 1080, H420, kCUDA);
auto vf = VideoFrame::make(1920, 1080, H420, "cuda:0");
auto vf = VideoFrame::make(1920, 1080, H420, Device(kCUDA, 0));

```
**Template Parameters**
 - **device**  



**Parameters**
 - **width**  
 - **height**  
 - **format**  
 - **device**：const char*, string, Device - infer to Device 



**Returns**
  [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/)  


```
     {
         return VideoFrame(width, height, pix_info, device); 
     }

```

###  make() [2/2]

 ```
static VideoFrame bmf_sdk::VideoFrame::make( int width, 
  int height, 
  const PixelInfo & pix_info, 
  const std::string & device 
 )   
```
 inlinestaticinline

static






```
     {
         return VideoFrame(width, height, pix_info, device); 
     }

```

###  operator bool()

```
bmf_sdk::VideoFrame::operator bool (  ) const 
```
检查是否定义了 [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/)。

**Returns**




###  operator=()

 ```
 VideoFrame & bmf_sdk::VideoFrame::operator=( const VideoFrame & )  
```
 defaultdefault





**Returns**
  [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/)  &


###  reformat()

```
 VideoFrame bmf_sdk::VideoFrame::reformat( const PixelInfo & pix_info )  
```
帧格式转换，此功能仅支持 rgb 转换为 yuv 或 yuv 转换为 rgb。

**Parameters**
 - **pix_info**  



**Returns**
  [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/)  


###  to()

```
 VideoFrame bmf_sdk::VideoFrame::to( const Device & device, 
  bool non_blocking = false 
 )  const 
```
复制到目标设备上，如果目标设备上已经有，则将执行 shadow copy。

**Parameters**
 - **device**：目标设备
 - **non_blocking**：为 true 时，内部分配器将尝试分配固定的内存，这会导致数据复制异步



**Returns**
  [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/)  


###  width()

```
int bmf_sdk::VideoFrame::width (  ) const 
```
 - /20230627/doxygen_converter/bmf/bmf/sdk/cpp_sdk/include/bmf/sdk/  video_frame.h  

