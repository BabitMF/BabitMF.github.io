---
title: 'VideoFrame'
linkTitle: 'VideoFrame'
weight: 9
---

[//]: <> (REF_MD: classbmf__sdk_1_1VideoFrame.html)


  [Public Types](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/#public-types)  |  [Public Member Functions](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/#public-member-functions)  |  [Static Public Member Functions](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/#static-public-member-functions)  |  [Protected Member Functions](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/#protected-member-functions)  |  [List of all members](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/)  # bmf_sdk::VideoFrame Class Reference

video_frame.h


 ## Public Types


using   [Frame](#frame) = hmp::Frame
 

 ## Public Member Functions


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
 
 

 ## Static Public Member Functions


static  [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/)   [make](#make-12) (int [width](#width) , int [height](#height) , const PixelInfo &pix_info, const Device & [device](#device) =kCPU)
 
 
static  [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/)   [make](#make-22) (int [width](#width) , int [height](#height) , const PixelInfo &pix_info, const std::string & [device](#device) )
 

 ## Protected Member Functions


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
## Constructor & Destructor Documentation


###  VideoFrame() [1/6]

```
bmf_sdk::VideoFrame::VideoFrame (  )  
```
Construct a undefined Video Frame object.


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
 - **frame** Dedicated to YUV data, with irregular shapes between planes 




###  VideoFrame() [5/6]

```
bmf_sdk::VideoFrame::VideoFrame ( int width, 
  int height, 
  const PixelInfo & pix_info, 
  const Device & device = kCPU 
 )   
```
Construct VideoFrame(Frame) with given size (width, height), PixelInfo, and device, for ease of use, using factory function VideoFrame::make **Parameters**
 - **width** width of Y plane 
 - **height** height of Y plane 
 - **pix_info** PixelFormat and ColorModel 
 - **device** device 




###  VideoFrame() [6/6]

 ```
bmf_sdk::VideoFrame::VideoFrame ( const std::shared_ptr< Private > & other )  
```
 protectedprotected





## Member Function Documentation


###  copy_()

```
 VideoFrame & bmf_sdk::VideoFrame::copy_( const VideoFrame &from )  
```
In-place copy.

**Parameters**
 - **from** data source which have the same type and shape 



**Returns**
  [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/)  &


###  copy_props()

```
 VideoFrame & bmf_sdk::VideoFrame::copy_props( const VideoFrame &from )  
```
copy all extra props(set by member func set_xxx) from  `from` (deepcopy if needed), **Parameters**
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
Return the selected region which specified by (x, y, w, h)

**Parameters**
 - **x** start col index 
 - **y** start row index 
 - **w** number of cols 
 - **h** number of rows 



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





interface must implemented by sub-class, which provide device info

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





Facotry function to construct VideoFrame(Frame)

test_video_frame.cpp for more details


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
 - **device** const char*, string, Device - infer to Device 



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
check if  [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/)  is defined

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
Frame reformat, this only support rgb to yuv, or yuv to rgb.

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
Copy to target device, if it have already reside on target device, shadow copy will be performed.

**Parameters**
 - **device** Target device 
 - **non_blocking** if true, internal allocator will try to allocate pinned memory, which can make data copy asynchronous 



**Returns**
  [VideoFrame](https://babitmf.github.io/docs/bmf/api/api_in_cpp/video_frame/)  


###  width()

```
int bmf_sdk::VideoFrame::width (  ) const 
```
 - /20230627/doxygen_converter/bmf/bmf/sdk/cpp_sdk/include/bmf/sdk/  video_frame.h  

