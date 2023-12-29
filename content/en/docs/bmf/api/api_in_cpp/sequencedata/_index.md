---
title: 'SequenceData'
linkTitle: 'SequenceData'
weight: 11
---

[//]: <> (REF_MD: classbmf__sdk_1_1SequenceData.html)


  [Public Member Functions](https://babitmf.github.io/docs/bmf/api/api_in_cpp/sequencedata/#public-member-functions)  |  List of all members  # bmf_sdk::SequenceData Class Reference

sdk_interface.h

 ## 公共成员函数


void   [set_pts](#set_pts) (int64_t [pts](#pts) )
 
 
int64_t   [pts](#pts) () const
 
  [Rational](https://babitmf.github.io/docs/bmf/api/api_in_cpp/rational/)   [time_base](#time_base) () const
 
 
void   [set_time_base](#set_time_base) ( [Rational](https://babitmf.github.io/docs/bmf/api/api_in_cpp/rational/)  [time_base](#time_base) )
 
 
bool   [operator>](#operator) (const [SequenceData](https://babitmf.github.io/docs/bmf/api/api_in_cpp/sequencedata/) &other)
 
bool   [operator>=](#operator-1) (const [SequenceData](https://babitmf.github.io/docs/bmf/api/api_in_cpp/sequencedata/) &other)
 
bool   [operator<](#operator-2) (const [SequenceData](https://babitmf.github.io/docs/bmf/api/api_in_cpp/sequencedata/) &other)
 
bool   [operator<=](#operator-3) (const [SequenceData](https://babitmf.github.io/docs/bmf/api/api_in_cpp/sequencedata/) &other)
 
  [SequenceData](https://babitmf.github.io/docs/bmf/api/api_in_cpp/sequencedata/) &  [copy_props](#copy_props) (const [SequenceData](https://babitmf.github.io/docs/bmf/api/api_in_cpp/sequencedata/) &from)
 
 

## 成员函数文档


###  copy_props()

```
 SequenceData & bmf_sdk::SequenceData::copy_props( const SequenceData &from )  
```
复制 props 的 util function

**Parameters**
 - **from**  



**Returns**
  [SequenceData](https://babitmf.github.io/docs/bmf/api/api_in_cpp/sequencedata/)  &


###  operator>()

 ```
bool bmf_sdk::SequenceData::operator> ( const SequenceData &other )  
```
 inlineinline






```
     {
         return pts_ > other.pts_;
     }

```

###  operator>=()

 ```
bool bmf_sdk::SequenceData::operator>= ( const SequenceData &other )  
```
 inlineinline






```
     {
         return pts_ >= other.pts_;
     }

```

###  operator<()

 ```
bool bmf_sdk::SequenceData::operator< ( const SequenceData &other )  
```
 inlineinline






```
     {
         return !(*this >= other);
     }

```

###  operator<=()

 ```
bool bmf_sdk::SequenceData::operator<= ( const SequenceData &other )  
```
 inlineinline






```
     {
         return !(*this > other);
     }

```


###  pts()

 ```
int64_t bmf_sdk::SequenceData::pts (  ) const 
```
 inlineinline





**Returns**



```
 { return pts_; }

```

###  set_pts()

 ```
void bmf_sdk::SequenceData::set_pts ( int64_t pts )  
```
 inlineinline





设置该 pts 的 object。

**Parameters**
 - **pts**  




```
 { pts_ = pts;}

```

###  set_time_base()

 ```
void bmf_sdk::SequenceData::set_time_base (  Rational time_base )  
```
 inlineinline





设置帧的 time base

**Parameters**
 - **time_base**；帧的 time base




```
     {
         time_base_ = time_base;
     }

```

###  time_base()

 ```
 Rational bmf_sdk::SequenceData::time_base(  ) const 
```
 inlineinline





获取 time base object。
**Returns**
  [Rational](https://babitmf.github.io/docs/bmf/api/api_in_cpp/rational/)  


```
     {
         return time_base_;
     }

```
 - /20230627/doxygen_converter/bmf/bmf/sdk/cpp_sdk/include/bmf/sdk/  sdk_interface.h  

