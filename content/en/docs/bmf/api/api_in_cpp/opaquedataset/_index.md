---
title: 'Opaquedataset'
linkTitle: 'Opaquedataset'
weight: 10
---

[//]: <> (REF_MD: classbmf__sdk_1_1OpaqueDataSet.html)


  [公有成员函数](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/#public-member-functions)  |  [受保护的成员函数](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/#pro-methods)  |  List of all members  # bmf_sdk::OpaqueDataSet Class Reference

sdk_interface.h!

 ## 公共成员函数


   [OpaqueDataSet](#opaquedataset-13) ()=default
 
   [OpaqueDataSet](#opaquedataset-23) ( [OpaqueDataSet](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/) &&)=default
 
   [OpaqueDataSet](#opaquedataset-33) (const [OpaqueDataSet](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/) &)=default
 
  [OpaqueDataSet](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/) &  [operator=](#operator) (const [OpaqueDataSet](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/) &)=default
 
 
void   [private_attach](#private_attach) (const T *data, Args &&...args)
 
 

const T *   [private_get](#private_get) () const
 
 
void   [private_merge](#private_merge) (const [OpaqueDataSet](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/) &from)
 
 
  [OpaqueDataSet](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/) &  [copy_props](#copy_props) (const [OpaqueDataSet](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/) &from)
 
 

 ## 受保护的成员函数


virtual void   [set_private_data](#set_private_data) (int key, const OpaqueData &data)
 
 
virtual const  OpaqueData &  [private_data](#private_data) (int key) const
 

## 构造函数和析构函数文档


###  OpaqueDataSet() [1/3]

 ```
bmf_sdk::OpaqueDataSet::OpaqueDataSet (  )  
```
 defaultdefault






###  OpaqueDataSet() [2/3]

 ```
bmf_sdk::OpaqueDataSet::OpaqueDataSet (  OpaqueDataSet && )  
```
 defaultdefault





###  OpaqueDataSet() [3/3]

 ```
bmf_sdk::OpaqueDataSet::OpaqueDataSet ( const OpaqueDataSet & )  
```
 defaultdefault




## 成员函数文档


###  copy_props()

```
 OpaqueDataSet & bmf_sdk::OpaqueDataSet::copy_props( const OpaqueDataSet &from )  
```
复制 props 的 util 函数

**Parameters**
 - **from**  



**Returns**
  [OpaqueDataSet](https://babitmf.github.io/docs/bmf/api/api_in_cpp/opaquedataset/)  &


###  operator=()

 ```
 OpaqueDataSet & bmf_sdk::OpaqueDataSet::operator=( const OpaqueDataSet & )  
```
 defaultdefault






###  private_attach()

 ```
void bmf_sdk::OpaqueDataSet::private_attach ( const T * data, 
  Args &&... args 
 )   
```
 inlineinline





附加类型为 T 的私有数据，为确保类型安全，T 应当由 OpaqueDataInfo 注册。

  ffmpeg_helper.h  , test_video_frame.cpp

**Template Parameters**
 - **T**  
 - **Args**  



**Parameters**
 - **data**  
 - **args**：传递的额外的 arguments




```
     {
         using Info = OpaqueDataInfo<T>;
         auto opaque = Info::construct(data, std::forward<Args>(args)...);
         set_private_data(Info::key, opaque);
     }

```

###  private_data()

 ```
virtual const OpaqueData & bmf_sdk::OpaqueDataSet::private_data( int key ) const 
```
 protectedvirtualprotected

virtual






###  private_get()

 ```
const T* bmf_sdk::OpaqueDataSet::private_get (  ) const 
```
 inlineinline





读取通过 private_attach 或 private_merge 附加的只读私有数据。

**Template Parameters**
 - **T**  



**Returns**



```
     {
         using Info = OpaqueDataInfo<T>;
         return static_cast<const T*>(private_data(Info::key).get());
     }

```

###  private_merge()

```
void bmf_sdk::OpaqueDataSet::private_merge ( const OpaqueDataSet &from )  
```
合并来自 `from` 的私有数据  
**Parameters**
 - **from**  




###  set_private_data()

 ```
virtual void bmf_sdk::OpaqueDataSet::set_private_data ( int key, 
  const OpaqueData &data 
 )   
```
 protectedvirtualprotected

virtual





设置私有数据对象，派生类可以重载此函数以过滤掉不支持的 key。

**Parameters**
 - **key**  
 - **data**  



 - /20230627/doxygen_converter/bmf/bmf/sdk/cpp_sdk/include/bmf/sdk/  sdk_interface.h  

