---
title: 'JsonParam'
linkTitle: 'JsonParam'
weight: 4
---

[//]: <> (REF_MD: classJsonParam.html)


  [公有成员函数](https://babitmf.github.io/docs/bmf/api/api_in_cpp/jsonparam/#public-member-functions)  |  [公共属性](https://babitmf.github.io/docs/bmf/api/api_in_cpp/jsonparam/#public-attributes)  |  [成员清单](https://babitmf.github.io/docs/bmf/api/api_in_cpp/jsonparam/)  
  
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
 
 

 ## 公共属性


  bmf_nlohmann::json   [json_value_](#json_value_) 
 

## 构造函数和析构函数


###  JsonParam() [1/4]

 ```
JsonParam::JsonParam (  )  
```
 default





  [JsonParam](https://babitmf.github.io/docs/bmf/api/api_in_cpp/jsonparam/)  struct.


###  JsonParam() [2/4]

```
JsonParam::JsonParam ( const JsonParam &json_param )  
```
**Parameters**
 - **json_param**：复制 json_param 




###  JsonParam() [3/4]

```
JsonParam::JsonParam ( std::string opt_str )  
```
**Parameters**
 - **opt_str**：json string 的内容




###  JsonParam() [4/4]

 ```
JsonParam::JsonParam (  bmf_nlohmann::json json_value )  
```
 explicit





**Parameters**
 - **json_value** json value 



## 成员函数文档


###  dump()

```
std::string JsonParam::dump (  ) const 
```
将 json object 传输到 string

**Returns**



###  erase()

```
int JsonParam::erase ( std::string name )  
```
删除 json 参数中的关键内容

**Parameters**
 - **name**：key 的名称 



**Returns**



###  get()

 ```
T JsonParam::get ( U name ) const 
```
 inline






```
{
    return json_value_[name].template get<T>();
}、
```

###  get_double()

```
int JsonParam::get_double ( std::string name, 
  double & result 
 )   
```
根据 key 的名称获取 double value

**Parameters**
 - **name**：key 的名称 
 - **result**：double 的结果



**Returns**



###  get_double_list()

```
int JsonParam::get_double_list ( std::string name, 
  std::vector< double > & result 
 )   
```
根据 key 的名称获取 double value list

**Parameters**
 - **name**：key 的名称
 - **result** doule list 的结果 



**Returns**



###  get_float()

```
int JsonParam::get_float ( std::string name, 
  float & result 
 )   
```
根据 key 的名称获取 float value

**Parameters**
 - **name**：key 的名称 
 - **result**：float 的结果 



**Returns**



###  get_float_list()

```
int JsonParam::get_float_list ( std::string name, 
  std::vector< float > & result 
 )   
```
根据 key 的名称获取 float value list

**Parameters**
 - **name**：key 的名称 
 - **result**：float list 的结果



**Returns**



###  get_int()

```
int JsonParam::get_int ( std::string name, 
  int & result 
 )   
```
根据 key 的名称获取 int

**Parameters**
 - **name**：key 的名称 
 - **result**：int 的结果 



**Returns**



###  get_int_list()

```
int JsonParam::get_int_list ( std::string name, 
  std::vector< int > & result 
 )   
```
根据 key 的名称获取int value list

**Parameters**
 - **name**：key 的名称 
 - **result**：int list 的结果



**Returns**



###  get_iterated()

```
int JsonParam::get_iterated ( std::vector< std::pair< std::string, std::string >> & group )  
```
参数中获取所有内容

**Parameters**
 - **name**：key 的名称 



**Returns**



###  get_long()

```
int JsonParam::get_long ( std::string name, 
  int64_t & result 
 )   
```
根据 key 的名称获取 long value

**Parameters**
 - **name**：key 的名称 
 - **result**：long 的结果 



**Returns**



###  get_object()

```
int JsonParam::get_object ( std::string name, 
   JsonParam &result 
 )   
```
根据 key 的名称获取 json object

**Parameters**
 - **name**：key 的名称 
 - **result**：json object 的结果 



**Returns**



###  get_object_list()

```
int JsonParam::get_object_list ( std::string name, 
  std::vector< JsonParam > &result 
 )   
```
根据 key 的名称获取 json object list

**Parameters**
 - **name**：key 的名称 
 - **result**：json object list 的结果 



**Returns**



###  get_string()

```
int JsonParam::get_string ( std::string name, 
  std::string & result 
 )   
```
根据 key 的名称获取 string

**Parameters**
 - **name**：key 的名称 
 - **result**：string 的结果 



**Returns**



###  get_string_list()

```
int JsonParam::get_string_list ( std::string name, 
  std::vector< std::string > & result 
 )   
```
根据 key 的名称获取 string list

**Parameters**
 - **name**：key 的名称 
 - **result**；string list 的结果 



**Returns**



###  has_key()

```
bool JsonParam::has_key ( std::string name )  
```
judge the json has key

**Parameters**
 - **name**：key 的名称 



**Returns**



###  load()

```
int JsonParam::load ( std::string file_name )  
```
加载 json content 的文件

**Parameters**
 - **file_name**：json content 的文件名称 



**Returns**



###  merge_patch()

```
void JsonParam::merge_patch ( const JsonParam &json_patch )  
```
将 json patch 合并到当前 target

**Parameters**
 - **json_patch**：json patch 




###  operator[]()

 ```
 JsonParam JsonParam::operator[]( T name )  
```
 inline






```
{
    return JsonParam(json_value_[name]);
}
```

###  parse()

```
int JsonParam::parse ( std::string content )  
```
解析 json content string

**Parameters**
 - **content**：json string 



**Returns**



###  set_value()

```
void JsonParam::set_value (  bmf_nlohmann::json &value )  
```
设置 json value 的值

**Parameters**
 - **json_value**：json value 




###  store()

```
int JsonParam::store ( std::string file_name )  
```
存储 json content 到文件

**Parameters**
 - **file_name**：json content 的文件名称 



**Returns**



###  to()

 ```
T JsonParam::to (  ) const 
```
 inline






```
{
    return json_value_.get<T>();
}
```
## 成员数据文档


###  json_value_

```
 bmf_nlohmann::json JsonParam::json_value_
```
 - /20230627/doxygen_converter/bmf/bmf/sdk/cpp_sdk/include/bmf/sdk/  json_param.h  

