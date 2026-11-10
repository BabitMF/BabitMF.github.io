---
title: 'JsonParam'
linkTitle: 'JsonParam'
weight: 4
---

[//]: <> (REF_MD: classJsonParam.html)

  [Public Member Functions](https://babitmf.github.io/docs/bmf/api/api_in_cpp/jsonparam/#public-member-functions)  |  [Public Attributes](https://babitmf.github.io/docs/bmf/api/api_in_cpp/jsonparam/#public-attributes)  |  [List of all members](https://babitmf.github.io/docs/bmf/api/api_in_cpp/jsonparam/)

# JsonParam Class Reference

json_param.h

## Public Member Functions

   [JsonParam](#jsonparam-14) ()=default

   [JsonParam](#jsonparam-24) (const [JsonParam](https://babitmf.github.io/docs/bmf/api/api_in_cpp/jsonparam/) &json_param)

   [JsonParam](#jsonparam-34) (std::string opt_str)

   [JsonParam](#jsonparam-44) ( bmf_nlohmann::json json_value)

  [JsonParam](https://babitmf.github.io/docs/bmf/api/api_in_cpp/jsonparam/)   [operator[]](#operator) (T name)

T   [to](#to) () const

T   [get](#get) (U name) const

void   [set_value](#set_value) ( bmf_nlohmann::json &value)

int   [load](#load) (std::string file_name)

int   [store](#store) (std::string file_name)

int   [parse](#parse) (std::string content)

bool   [has_key](#has_key) (std::string name)

int   [erase](#erase) (std::string name)

int   [get_iterated](#get_iterated) (std::vector< std::pair< std::string, std::string >> &group)

int   [get_object](#get_object) (std::string name, [JsonParam](https://babitmf.github.io/docs/bmf/api/api_in_cpp/jsonparam/) &result)

int   [get_object_list](#get_object_list) (std::string name, std::vector< [JsonParam](https://babitmf.github.io/docs/bmf/api/api_in_cpp/jsonparam/) > &result)

int   [get_string](#get_string) (std::string name, std::string &result)

int   [get_string_list](#get_string_list) (std::string name, std::vector< std::string > &result)

int   [get_int](#get_int) (std::string name, int &result)

int   [get_long](#get_long) (std::string name, int64_t &result)

int   [get_int_list](#get_int_list) (std::string name, std::vector< int > &result)

int   [get_double](#get_double) (std::string name, double &result)

int   [get_double_list](#get_double_list) (std::string name, std::vector< double > &result)

int   [get_float](#get_float) (std::string name, float &result)

int   [get_float_list](#get_float_list) (std::string name, std::vector< float > &result)

std::string   [dump](#dump) () const

void   [merge_patch](#merge_patch) (const [JsonParam](https://babitmf.github.io/docs/bmf/api/api_in_cpp/jsonparam/) &json_patch)

## Public Attributes

  bmf_nlohmann::json   [json_value_](#json_value_)

## Constructor & Destructor Documentation

### JsonParam() [1/4]

```cpp
JsonParam::JsonParam (  )
```

 default

  [JsonParam](https://babitmf.github.io/docs/bmf/api/api_in_cpp/jsonparam/)  struct.

### JsonParam() [2/4]

```cpp
JsonParam::JsonParam ( const JsonParam &json_param )
```

**Parameters**

- **json_param** copy json_param

### JsonParam() [3/4]

```cpp
JsonParam::JsonParam ( std::string opt_str )
```

**Parameters**

- **opt_str** content of json string

### JsonParam() [4/4]

```cpp
JsonParam::JsonParam (  bmf_nlohmann::json json_value )
```

 explicit

**Parameters**

- **json_value** json value

## Member Function Documentation

### dump()

```cpp
std::string JsonParam::dump (  ) const
```

dump json object to string

**Returns**

### erase()

```cpp
int JsonParam::erase ( std::string name )
```

erase the key content from json param

**Parameters**

- **name** name of key

**Returns**

### get()

```cpp
T JsonParam::get ( U name ) const
```

 inline

```cpp
  {
    return json_value_[name].template get<T>();
  }
```

### get_double()

```cpp
int JsonParam::get_double ( std::string name,
  double & result
 )
```

get double value according to the key name

**Parameters**

- **name** name of key
- **result** result of double

**Returns**

### get_double_list()

```cpp
int JsonParam::get_double_list ( std::string name,
  std::vector< double > & result
 )
```

get double value list according to the key name

**Parameters**

- **name** name of key
- **result** result of double list

**Returns**

### get_float()

```cpp
int JsonParam::get_float ( std::string name,
  float & result
 )
```

get float value according to the key name

**Parameters**

- **name** name of key
- **result** result of float

**Returns**

### get_float_list()

```cpp
int JsonParam::get_float_list ( std::string name,
  std::vector< float > & result
 )
```

get float value list according to the key name

**Parameters**

- **name** name of key
- **result** result of float list

**Returns**

### get_int()

```cpp
int JsonParam::get_int ( std::string name,
  int & result
 )
```

get int according to the key name

**Parameters**

- **name** name of key
- **result** result of int

**Returns**

### get_int_list()

```cpp
int JsonParam::get_int_list ( std::string name,
  std::vector< int > & result
 )
```

get int value list according to the key name

**Parameters**

- **name** name of key
- **result** result of int list

**Returns**

### get_iterated()

```cpp
int JsonParam::get_iterated ( std::vector< std::pair< std::string, std::string >> & group )
```

get all content from json param

**Parameters**

- **name** name of key

**Returns**

### get_long()

```cpp
int JsonParam::get_long ( std::string name,
  int64_t & result
 )
```

get long value according to the key name

**Parameters**

- **name** name of key
- **result** result of long

**Returns**

### get_object()

```cpp
int JsonParam::get_object ( std::string name,
   JsonParam &result
 )
```

get json object according to the key name

**Parameters**

- **name** name of key
- **result** result of json object

**Returns**

### get_object_list()

```cpp
int JsonParam::get_object_list ( std::string name,
  std::vector< JsonParam > &result
 )
```

get json object list according to the key name

**Parameters**

- **name** name of key
- **result** result of json object list

**Returns**

### get_string()

```cpp
int JsonParam::get_string ( std::string name,
  std::string & result
 )
```

get string according to the key name

**Parameters**

- **name** name of key
- **result** result of string

**Returns**

### get_string_list()

```cpp
int JsonParam::get_string_list ( std::string name,
  std::vector< std::string > & result
 )
```

get string list according to the key name

**Parameters**

- **name** name of key
- **result** result of string list

**Returns**

### has_key()

```cpp
bool JsonParam::has_key ( std::string name )
```

judge the json has key

**Parameters**

- **name** name of key

**Returns**

### load()

```cpp
int JsonParam::load ( std::string file_name )
```

load file of json content

**Parameters**

- **file_name** file name of json content

**Returns**

### merge_patch()

```cpp
void JsonParam::merge_patch ( const JsonParam &json_patch )
```

merge json patch to current target

**Parameters**

- **json_patch** json patch

### operator[]()

```cpp
 JsonParam JsonParam::operator[]( T name )
```

 inline

```cpp
  {
    return JsonParam(json_value_[name]);
  }
```

### parse()

```cpp
int JsonParam::parse ( std::string content )
```

parse json content string

**Parameters**

- **content** json string

**Returns**

### set_value()

```cpp
void JsonParam::set_value (  bmf_nlohmann::json &value )
```

set value of json value

**Parameters**

- **json_value** json value

### store()

```cpp
int JsonParam::store ( std::string file_name )
```

store json content to file

**Parameters**

- **file_name** file name of json content

**Returns**

### to()

```cpp
T JsonParam::to (  ) const
```

 inline

```cpp
  {
    return json_value_.get<T>();
  }
```

## Member Data Documentation

### json_value_

```cpp
 bmf_nlohmann::json JsonParam::json_value_
```

- /20230627/doxygen_converter/bmf/bmf/sdk/cpp_sdk/include/bmf/sdk/  json_param.h
