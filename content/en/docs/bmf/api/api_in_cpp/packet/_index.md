---
title: 'Packet'
linkTitle: 'Packet'
weight: 6
---

  Public Member Functions  |  Static Public Member Functions  |  Protected Member Functions  |  List of all members  # bmf_sdk::Packet Class Reference

packet.h ## Public Member Functions


   [Packet](#packet-19) ()=default
 
 
   [Packet](#packet-29) (const T &data)
 
   [Packet](#packet-39) (const Packet &data)
 
 
   [Packet](#packet-49) (T &data)
 
   [Packet](#packet-59) ( Packet &data)
 
 
   [Packet](#packet-69) (T &&data)
 
   [Packet](#packet-79) ( Packet &&data)
 
   [Packet](#packet-89) (RefPtr< [PacketImpl](http://localhost:1313/docs/bmf/api/api_in_cpp/packetimpl/) > &impl)
 
  Packet &  [operator=](#operator=) (const Packet &other)=default
 
   [operator bool](#operator-bool) () const
 
 
T &   [get](#get-12) ()
 
 
const T &   [get](#get-22) () const
 
 
bool   [is](#is) () const
 
const  TypeInfo &  [type_info](#type_info) () const
 
void   [set_timestamp](#set_timestamp) (int64_t [timestamp](#timestamp) )
 
int64_t   [timestamp](#timestamp) () const
 
void   [set_time](#set_time) (double [time](#time) )
 
double   [time](#time) () const
 
  [PacketImpl](http://localhost:1313/docs/bmf/api/api_in_cpp/packetimpl/) *  [unsafe_self](#unsafe_self-12) ()
 
const  [PacketImpl](http://localhost:1313/docs/bmf/api/api_in_cpp/packetimpl/) *  [unsafe_self](#unsafe_self-22) () const
 

 ## Static Public Member Functions


static  Packet   [generate_eos_packet](#generate_eos_packet) ()
 
static  Packet   [generate_eof_packet](#generate_eof_packet) ()
 

 ## Protected Member Functions


 
   [Packet](#packet-99) (T *obj)
 

## Constructor & Destructor Documentation


###  Packet() [1/9]

 ```
bmf_sdk::Packet::Packet (  )  
```
 defaultdefault






###  Packet() [2/9]

 ```
bmf_sdk::Packet::Packet ( const T & data )  
```
 inlineinline






```
 : Packet(new T(data)) {}

```

###  Packet() [3/9]

 ```
bmf_sdk::Packet::Packet ( const Packet &data )  
```
 inlineinline






```
 : self(data.self) {}

```

###  Packet() [4/9]

 ```
bmf_sdk::Packet::Packet ( T & data )  
```
 inlineinline






```
 : Packet(new T(data)) {}

```

###  Packet() [5/9]

 ```
bmf_sdk::Packet::Packet (  Packet &data )  
```
 inlineinline






```
 : self(data.self) {}

```

###  Packet() [6/9]

 ```
bmf_sdk::Packet::Packet ( T && data )  
```
 inlineinline






```
 : Packet(new T(std::move(data))) {}

```

###  Packet() [7/9]

 ```
bmf_sdk::Packet::Packet (  Packet &&data )  
```
 inlineinline






```
 : self(std::move(data.self)) {}

```

###  Packet() [8/9]

 ```
bmf_sdk::Packet::Packet ( RefPtr< PacketImpl > &impl )  
```
 inlineinline






```
 : self(impl) {}

```

###  Packet() [9/9]

 ```
bmf_sdk::Packet::Packet ( T * obj )  
```
 inlineprotectedinline

protected






```
     {
         auto impl = new PacketImpl(obj, 
                 &bmf_sdk::type_info<T>(), 
                 [](void *obj) { delete (T*)obj; });
         self = RefPtr<PacketImpl>::take(impl, true);
     }

```
## Member Function Documentation


###  generate_eof_packet()

 ```
static Packet bmf_sdk::Packet::generate_eof_packet(  )  
```
 staticstatic






###  generate_eos_packet()

 ```
static Packet bmf_sdk::Packet::generate_eos_packet(  )  
```
 staticstatic






###  get() [1/2]

 ```
T& bmf_sdk::Packet::get (  )  
```
 inlineinline






```
     {
         return self->get<T>();
     }

```

###  get() [2/2]

 ```
const T& bmf_sdk::Packet::get (  ) const 
```
 inlineinline






```
     {
         return self->get<T>();
     }

```

###  is()

 ```
bool bmf_sdk::Packet::is (  ) const 
```
 inlineinline






```
     {
         return self->is<T>();
     }

```

###  operator bool()

 ```
bmf_sdk::Packet::operator bool (  ) const 
```
 inlineinline






```
 { return bool(self); }

```

###  operator=()

 ```
 Packet & bmf_sdk::Packet::operator=( const Packet &other )  
```
 defaultdefault






###  set_time()

```
void bmf_sdk::Packet::set_time ( double time )  
```

###  set_timestamp()

```
void bmf_sdk::Packet::set_timestamp ( int64_t timestamp )  
```

###  time()

```
double bmf_sdk::Packet::time (  ) const 
```

###  timestamp()

```
int64_t bmf_sdk::Packet::timestamp (  ) const 
```

###  type_info()

```
const TypeInfo & bmf_sdk::Packet::type_info(  ) const 
```

###  unsafe_self() [1/2]

```
 PacketImpl * bmf_sdk::Packet::unsafe_self(  )  
```

###  unsafe_self() [2/2]

```
const PacketImpl * bmf_sdk::Packet::unsafe_self(  ) const 
```
 - /20230627/doxygen_converter/bmf/bmf/sdk/cpp_sdk/include/bmf/sdk/  packet.h  

