---
title: 'Opaquedataset'
linkTitle: 'Opaquedataset'
weight: 10
---

[//]: <> (REF_MD: classbmf__sdk_1_1OpaqueDataSet.html)


  [Public Member Functions](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/#public-member-functions)  |  [Protected Member Functions](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/#pro-methods)  |  List of all members  # bmf_sdk::OpaqueDataSet Class Reference

sdk_interface.h!

 ## Public Member Functions


   [OpaqueDataSet](#opaquedataset-13) ()=default
 
   [OpaqueDataSet](#opaquedataset-23) ( [OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/) &&)=default
 
   [OpaqueDataSet](#opaquedataset-33) (const [OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/) &)=default
 
  [OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/) &  [operator=](#operator=) (const [OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/) &)=default
 
 
void   [private_attach](#private_attach) (const T *data, Args &&...args)
 
 
 
const T *   [private_get](#private_get) () const
 
 
void   [private_merge](#private_merge) (const [OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/) &from)
 
 
  [OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/) &  [copy_props](#copy_props) (const [OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/) &from)
 
 

 ## Protected Member Functions


virtual void   [set_private_data](#set_private_data) (int key, const OpaqueData &data)
 
 
virtual const  OpaqueData &  [private_data](#private_data) (int key) const
 

## Constructor & Destructor Documentation


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





## Member Function Documentation


###  copy_props()

```
 OpaqueDataSet & bmf_sdk::OpaqueDataSet::copy_props( const OpaqueDataSet &from )  
```
utils function to copy props

**Parameters**
 - **from**  



**Returns**
  [OpaqueDataSet](http://localhost:1313/docs/bmf/api/api_in_cpp/opaquedataset/)  &


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





Attach private data with type T, for type safety, T should be registry by  OpaqueDataInfo  .

  ffmpeg_helper.h  , test_video_frame.cpp

**Template Parameters**
 - **T**  
 - **Args**  



**Parameters**
 - **data**  
 - **args** extra arguments pass to 




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





Retrieve readonly private data which attached by private_attach or private_merge.

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
merge private data from  `from`  **Parameters**
 - **from**  




###  set_private_data()

 ```
virtual void bmf_sdk::OpaqueDataSet::set_private_data ( int key, 
  const OpaqueData &data 
 )   
```
 protectedvirtualprotected

virtual





Set the private data object, Derived class can override this function to filter out unsupported keys.

**Parameters**
 - **key**  
 - **data**  



 - /20230627/doxygen_converter/bmf/bmf/sdk/cpp_sdk/include/bmf/sdk/  sdk_interface.h  

