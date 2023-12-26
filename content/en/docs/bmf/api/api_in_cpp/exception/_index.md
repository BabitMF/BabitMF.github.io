---
title: 'Exception'
linkTitle: 'Exception'
weight: 3
---

[//]: <> (REF_MD: classException.html)


  [公有成员函数](https://babitmf.github.io/docs/bmf/api/api_in_cpp/exception/#public-member-functions)  |  [公共属性](https://babitmf.github.io/docs/bmf/api/api_in_cpp/exception/#public-attributes)  |  List of all members  # Exception Class Reference

Class passed to an error.  [More...](page_classexception_v3_0_0#details)  

exception_factory.h![img](/img/docs/classException__inherit__graph.png)

![img](/img/docs/classException__coll__graph.png)

 ## 公有成员函数


   [Exception](#exception-12) ()
 
   [Exception](#exception-22) (int _code, const char *_err, const char *_func, const char *_file, int _line)
 
virtual   [~Exception](#~exception) () throw ()
 
virtual const char *   [what](#what) () const throw ()
 
void   [formatMessage](#formatmessage) ()
 

 ## 公共属性


std::string   [msg](#msg) 
 
 
int   [code](#code) 
 
 
std::string   [err](#err) 
 
 
std::string   [func](#func) 
 
 
std::string   [file](#file) 
 
 
int   [line](#line) 
 
 

## 详细描述

Class 传递一个错误。

该 class 封装了有关程序中发生的错误的所有或几乎所有必要的信息。异常通常是通过 BMF_Error 隐式构造和抛出的。

**See also**
  error  

## 构造函数和析构函数文档


###  Exception() [1/2]

```
Exception::Exception (  )  
```
默认构造函数


###  Exception() [2/2]

```
Exception::Exception ( int _code, 
  const char * _err, 
  const char * _func, 
  const char * _file, 
  int _line 
 )   
```
完整的构造函数。通常构造函数不会被显式调用。而是使用宏 BMF_Error()、BMF_Error_()。


###  ~Exception()

 ```
virtual Exception::~Exception (  )  
throw (  
 )   
```
 virtualvirtual





## 成员函数文档


###  formatMessage()

```
void Exception::formatMessage (  )  
```

###  what()

 ```
virtual const char* Exception::what (  ) const 
throw (  
 )   
```
 virtualvirtual





**Returns**


## 成员数据文档


###  code

```
int Exception::code 
```
错误代码

**See also**
  BMFStatus  


###  err

```
std::string Exception::err 
```
错误描述


###  file

```
std::string Exception::file 
```
发生错误的源文件名


###  func

```
std::string Exception::func 
```
函数名称。仅当编译器支持获取时可用


###  line

```
int Exception::line 
```
发生错误的源文件中的行号


###  msg

```
std::string Exception::msg 
```
格式化的错误消息

 - /20230627/doxygen_converter/bmf/bmf/sdk/cpp_sdk/include/bmf/sdk/  exception_factory.h  

