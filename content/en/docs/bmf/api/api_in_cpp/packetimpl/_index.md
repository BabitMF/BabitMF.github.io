---
title: 'PacketImpl'
linkTitle: 'PacketImpl'
weight: 7
---

[//]: <> (REF_MD: classbmf__sdk_1_1PacketImpl.html)


  [Public Member Functions](https://babitmf.github.io/docs/bmf/api/api_in_cpp/packetimpl/#public-member-functions)  |  [Protected Member Functions](https://babitmf.github.io/docs/bmf/api/api_in_cpp/packetimpl/#protected-member-functions)  |  [Friends](https://babitmf.github.io/docs/bmf/api/api_in_cpp/packetimpl/#friends)  |  List of all members  # bmf_sdk::PacketImpl Class Reference

packetimpl.h

 ## 公有成员函数


   [PacketImpl](#packetimpl-14) ()=delete
 
   [PacketImpl](#packetimpl-24) (const [PacketImpl](https://babitmf.github.io/docs/bmf/api/api_in_cpp/packetimpl/) &)=delete
 
   [PacketImpl](#packetimpl-34) ( [PacketImpl](https://babitmf.github.io/docs/bmf/api/api_in_cpp/packetimpl/) &&)=default
 
   [~PacketImpl](#~packetimpl) ()
 
 
T &   [get](#get-12) ()
 
 
const T &   [get](#get-22) () const
 
 
bool   [is](#is) () const
 
const  TypeInfo &  [type_info](#type_info) () const
 
void   [set_timestamp](#set_timestamp) (int64_t [timestamp](#timestamp) )
 
int64_t   [timestamp](#timestamp) () const
 
void   [set_time](#set_time) (double [time](#time) )
 
double   [time](#time) () const
 

 ## 受保护的成员函数


   [PacketImpl](#packetimpl-44) (void *obj, const TypeInfo * [type_info](#type_info) , const std::function< void(void *)> &del)
 

 ## Friends


class   [Packet](#packet) 
 

## 构造函数和析构函数文档


###  PacketImpl() [1/4]

 ```
bmf_sdk::PacketImpl::PacketImpl (  )  
```
 deletedelete






###  PacketImpl() [2/4]

 ```
bmf_sdk::PacketImpl::PacketImpl ( const PacketImpl & )  
```
 deletedelete






###  PacketImpl() [3/4]

 ```
bmf_sdk::PacketImpl::PacketImpl (  PacketImpl && )  
```
 defaultdefault






###  ~PacketImpl()

```
bmf_sdk::PacketImpl::~PacketImpl (  )  
```

###  PacketImpl() [4/4]

 ```
bmf_sdk::PacketImpl::PacketImpl ( void * obj, 
  const TypeInfo *type_info, 
  const std::function< void(void *)> & del 
 )   
```
 protectedprotected





## 成员函数文档


###  get() [1/2]

 ```
T& bmf_sdk::PacketImpl::get (  )  
```
 inlineinline






```
     {
         if(bmf_sdk::type_info<T>() != *type_info_){
             throw std::bad_cast();
         }
         return *static_cast<T*>(obj_);
     }

```

###  get() [2/2]

 ```
const T& bmf_sdk::PacketImpl::get (  ) const 
```
 inlineinline






```
     {
         if(bmf_sdk::type_info<T>() != *type_info_){
             throw std::bad_cast();
         }
         return *static_cast<const T*>(obj_);
     }

```

###  is()

 ```
bool bmf_sdk::PacketImpl::is (  ) const 
```
 inlineinline






```
     {
         return bmf_sdk::type_info<T>() == *type_info_;
     }

```

###  set_time()

 ```
void bmf_sdk::PacketImpl::set_time ( double time )  
```
 inlineinline






```
     {
         time_ = time;
     }

```

###  set_timestamp()

 ```
void bmf_sdk::PacketImpl::set_timestamp ( int64_t timestamp )  
```
 inlineinline






```
     {
         timestamp_ = timestamp;
     }

```

###  time()

 ```
double bmf_sdk::PacketImpl::time (  ) const 
```
 inlineinline






```
     {
         return time_;
     }

```

###  timestamp()

 ```
int64_t bmf_sdk::PacketImpl::timestamp (  ) const 
```
 inlineinline






```
     {
         return timestamp_;
     }

```

###  type_info()

 ```
const TypeInfo & bmf_sdk::PacketImpl::type_info(  ) const 
```
 inlineinline






```
     {
         return *type_info_;
     }

```
## Friends And Related Function Documentation


###  Packet

 ```
friend class Packet 
```
 friendfriend





 - /20230627/doxygen_converter/bmf/bmf/sdk/cpp_sdk/include/bmf/sdk/  packet.h  

