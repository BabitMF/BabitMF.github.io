---
title: 'PacketImpl'
linkTitle: 'PacketImpl'
weight: 7
---

[//]: <> (REF_MD: classbmf__sdk_1_1PacketImpl.html)

  [Public Member Functions](https://babitmf.github.io/docs/bmf/api/api_in_cpp/packetimpl/#public-member-functions)  |  [Protected Member Functions](https://babitmf.github.io/docs/bmf/api/api_in_cpp/packetimpl/#protected-member-functions)  |  [Friends](https://babitmf.github.io/docs/bmf/api/api_in_cpp/packetimpl/#friends)  |  List of all members

# bmf_sdk::PacketImpl Class Reference

packetimpl.h

## Public Member Functions

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

## Protected Member Functions

   [PacketImpl](#packetimpl-44) (void *obj, const TypeInfo * [type_info](#type_info) , const std::function< void(void *)> &del)

## Friends

class   [Packet](#packet)

## Constructor & Destructor Documentation

### PacketImpl() [1/4]

```cpp
bmf_sdk::PacketImpl::PacketImpl (  )
```

 deletedelete

### PacketImpl() [2/4]

```cpp
bmf_sdk::PacketImpl::PacketImpl ( const PacketImpl & )
```

 deletedelete

### PacketImpl() [3/4]

```cpp
bmf_sdk::PacketImpl::PacketImpl (  PacketImpl && )
```

 defaultdefault

### ~PacketImpl()

```cpp
bmf_sdk::PacketImpl::~PacketImpl (  )
```

### PacketImpl() [4/4]

```cpp
bmf_sdk::PacketImpl::PacketImpl ( void * obj,
  const TypeInfo *type_info,
  const std::function< void(void *)> & del
 )
```

 protectedprotected

## Member Function Documentation

### get() [1/2]

```cpp
T& bmf_sdk::PacketImpl::get (  )
```

 inlineinline

```cpp
     {
         if(bmf_sdk::type_info<T>() != *type_info_){
             throw std::bad_cast();
         }
         return *static_cast<T*>(obj_);
     }

```

### get() [2/2]

```cpp
const T& bmf_sdk::PacketImpl::get (  ) const
```

 inlineinline

```cpp
     {
         if(bmf_sdk::type_info<T>() != *type_info_){
             throw std::bad_cast();
         }
         return *static_cast<const T*>(obj_);
     }

```

### is()

```cpp
bool bmf_sdk::PacketImpl::is (  ) const
```

 inlineinline

```cpp
     {
         return bmf_sdk::type_info<T>() == *type_info_;
     }

```

### set_time()

```cpp
void bmf_sdk::PacketImpl::set_time ( double time )
```

 inlineinline

```cpp
     {
         time_ = time;
     }

```

### set_timestamp()

```cpp
void bmf_sdk::PacketImpl::set_timestamp ( int64_t timestamp )
```

 inlineinline

```cpp
     {
         timestamp_ = timestamp;
     }

```

### time()

```cpp
double bmf_sdk::PacketImpl::time (  ) const
```

 inlineinline

```cpp
     {
         return time_;
     }

```

### timestamp()

```cpp
int64_t bmf_sdk::PacketImpl::timestamp (  ) const
```

 inlineinline

```cpp
     {
         return timestamp_;
     }

```

### type_info()

```cpp
const TypeInfo & bmf_sdk::PacketImpl::type_info(  ) const
```

 inlineinline

```cpp
     {
         return *type_info_;
     }

```

## Friends And Related Function Documentation

### Packet

```cpp
friend class Packet
```

 friendfriend

- /20230627/doxygen_converter/bmf/bmf/sdk/cpp_sdk/include/bmf/sdk/  packet.h
