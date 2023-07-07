---
title: 'AudioFrame'
linkTitle: 'AudioFrame'
weight: 1
---

[//]: <> (REF_MD: classbmf__sdk_1_1AudioFrame.html)


  [Public Member Functions](#public-member-functions)  |  [Static Public Member Functions](#static-public-member-functions)   # bmf_sdk::AudioFrame Class Reference

audio_frame.h

 ## Public Member Functions


   [AudioFrame](#audioframe-15) ()=default
 
   [AudioFrame](#audioframe-25) (const [AudioFrame](http://localhost:1313/docs/bmf/api/api_in_cpp/audio_frame/) &)=default
 
   [AudioFrame](#audioframe-35) ( [AudioFrame](http://localhost:1313/docs/bmf/api/api_in_cpp/audio_frame/) &&)=default
 
  [AudioFrame](http://localhost:1313/docs/bmf/api/api_in_cpp/audio_frame/) &  [operator=](#operator=) (const [AudioFrame](http://localhost:1313/docs/bmf/api/api_in_cpp/audio_frame/) &)=default
 
   [AudioFrame](#audioframe-45) (int samples, uint64_t [layout](#layout) , bool [planer](#planer) =true, const TensorOptions &options=kUInt8)
 
   [AudioFrame](#audioframe-55) (const TensorList &data, uint64_t [layout](#layout) , bool [planer](#planer) =true)
 
  [AudioFrame](http://localhost:1313/docs/bmf/api/api_in_cpp/audio_frame/)   [clone](#clone) () const
 
   [operator bool](#operator-bool) () const
 
uint64_t   [layout](#layout) () const
 
ScalarType   [dtype](#dtype) () const
 
bool   [planer](#planer) () const
 
int   [nsamples](#nsamples) () const
 
int   [nchannels](#nchannels) () const
 
void   [set_sample_rate](#set_sample_rate) (float [sample_rate](#sample_rate) )
 
float   [sample_rate](#sample_rate) () const
 
const TensorList &   [planes](#planes) () const
 
int   [nplanes](#nplanes) () const
 
Tensor   [plane](#plane) (int p=0) const
 
Tensor   [operator[]](#operator-1) (int p) const
 
  [AudioFrame](http://localhost:1313/docs/bmf/api/api_in_cpp/audio_frame/) &  [copy_props](#copy_props) (const [AudioFrame](http://localhost:1313/docs/bmf/api/api_in_cpp/audio_frame/) &from)
 
 
 ![img](/img/docs/closed.png)

 [bmf_sdk::OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/) 
   [OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/#opaquedataset-13) ()=default
 
   [OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/#opaquedataset-23) ( [OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/) &&)=default
 
   [OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/#opaquedataset-33) (const [OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/) &)=default
 
  [OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/) &  [operator=](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/#operator-2) (const [OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/) &)=default
 
 
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


static  [AudioFrame](http://localhost:1313/docs/bmf/api/api_in_cpp/audio_frame/)   [make](#make-13) (int samples, uint64_t [layout](#layout) , bool [planer](#planer) =true)
 
 
static  [AudioFrame](http://localhost:1313/docs/bmf/api/api_in_cpp/audio_frame/)   [make](#make-23) (int samples, uint64_t [layout](#layout) , bool [planer](#planer) , Options &&...opts)
 
static  [AudioFrame](http://localhost:1313/docs/bmf/api/api_in_cpp/audio_frame/)   [make](#make-33) (const TensorList &data, uint64_t [layout](#layout) , bool [planer](#planer) =true)
 

 ## Additional Inherited Members


 ![img](/img/docs/closed.png)

 [bmf_sdk::OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/) 
virtual void   [set_private_data](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/#set_private_data) (int key, const OpaqueData &data)
 
 
virtual const  OpaqueData &  [private_data](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/#private_data) (int key) const
 

## Constructor & Destructor Documentation


###  AudioFrame() [1/5]

 ```
bmf_sdk::AudioFrame::AudioFrame (  )  
```
 defaultdefault






###  AudioFrame() [2/5]

 ```
bmf_sdk::AudioFrame::AudioFrame ( const AudioFrame & )  
```
 defaultdefault






###  AudioFrame() [3/5]

 ```
bmf_sdk::AudioFrame::AudioFrame (  AudioFrame && )  
```
 defaultdefault






###  AudioFrame() [4/5]

```
bmf_sdk::AudioFrame::AudioFrame ( int samples, 
  uint64_t layout, 
  bool planer = true, 
  const TensorOptions & options = kUInt8 
 )   
```

###  AudioFrame() [5/5]

```
bmf_sdk::AudioFrame::AudioFrame ( const TensorList & data, 
  uint64_t layout, 
  bool planer = true 
 )   
```
## Member Function Documentation


###  clone()

```
 AudioFrame bmf_sdk::AudioFrame::clone(  ) const 
```

###  copy_props()

```
 AudioFrame & bmf_sdk::AudioFrame::copy_props( const AudioFrame &from )  
```
copy all extra props(set by member func set_xxx) from  `from` (deepcopy if needed), **Parameters**
 - **from**  



**Returns**
  [AudioFrame](http://localhost:1313/docs/bmf/api/api_in_cpp/audio_frame/)  &


###  dtype()

```
ScalarType bmf_sdk::AudioFrame::dtype (  ) const 
```

###  layout()

```
uint64_t bmf_sdk::AudioFrame::layout (  ) const 
```

###  make() [1/3]

 ```
static AudioFrame bmf_sdk::AudioFrame::make( int samples, 
  uint64_t layout, 
  bool planer = true 
 )   
```
 inlinestaticinline

static






```
     {
         return AudioFrame(samples, layout, planer,
             TensorOptions(kUInt8));
     }

```

###  make() [2/3]

 ```
static AudioFrame bmf_sdk::AudioFrame::make( int samples, 
  uint64_t layout, 
  bool planer, 
  Options &&... opts 
 )   
```
 inlinestaticinline

static






```
     {
         return AudioFrame(samples, layout, planer,
             TensorOptions(kUInt8).options(std::forward<Options>(opts)...));
     }

```

###  make() [3/3]

 ```
static AudioFrame bmf_sdk::AudioFrame::make( const TensorList & data, 
  uint64_t layout, 
  bool planer = true 
 )   
```
 inlinestaticinline

static






```
     {
         return AudioFrame(data, layout, planer);
     }

```

###  nchannels()

```
int bmf_sdk::AudioFrame::nchannels (  ) const 
```

###  nplanes()

```
int bmf_sdk::AudioFrame::nplanes (  ) const 
```

###  nsamples()

```
int bmf_sdk::AudioFrame::nsamples (  ) const 
```

###  operator bool()

```
bmf_sdk::AudioFrame::operator bool (  ) const 
```

###  operator=()

 ```
 AudioFrame & bmf_sdk::AudioFrame::operator=( const AudioFrame & )  
```
 defaultdefault






###  operator[]()

```
Tensor bmf_sdk::AudioFrame::operator[] ( int p ) const 
```

###  plane()

```
Tensor bmf_sdk::AudioFrame::plane ( int p = 0 ) const 
```

###  planer()

```
bool bmf_sdk::AudioFrame::planer (  ) const 
```

###  planes()

```
const TensorList& bmf_sdk::AudioFrame::planes (  ) const 
```

###  sample_rate()

```
float bmf_sdk::AudioFrame::sample_rate (  ) const 
```

###  set_sample_rate()

```
void bmf_sdk::AudioFrame::set_sample_rate ( float sample_rate )  
```
 - /20230627/doxygen_converter/bmf/bmf/sdk/cpp_sdk/include/bmf/sdk/  audio_frame.h  

