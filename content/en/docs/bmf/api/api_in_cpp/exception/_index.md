---
title: 'Exception'
linkTitle: 'Exception'
weight: 3
---

[//]: <> (REF_MD: classException.html)

  [Public Member Functions](https://babitmf.github.io/docs/bmf/api/api_in_cpp/exception/#public-member-functions)  |  [Public Attributes](https://babitmf.github.io/docs/bmf/api/api_in_cpp/exception/#public-attributes)  |  List of all members

# Exception Class Reference

Class passed to an error.

exception_factory.h![img](/img/docs/classException__inherit__graph.png)

![img](/img/docs/classException__coll__graph.png)

## Public Member Functions

   [Exception](#exception-12) ()

   [Exception](#exception-22) (int _code, const char *_err, const char *_func, const char *_file, int _line)

virtual   [~Exception](#~exception) () throw ()

virtual const char *   [what](#what) () const throw ()

void   [formatMessage](#formatmessage) ()

## Public Attributes

std::string   [msg](#msg)

int   [code](#code)

std::string   [err](#err)

std::string   [func](#func)

std::string   [file](#file)

int   [line](#line)

## Detailed Description

Class passed to an error.

This class encapsulates all or almost all necessary information about the error happened in the program. The exception is usually constructed and thrown implicitly via BMF_Error

**See also**
  error

## Constructor & Destructor Documentation

### Exception() [1/2]

```cpp
Exception::Exception (  )
```

Default constructor

### Exception() [2/2]

```cpp
Exception::Exception ( int _code,
  const char * _err,
  const char * _func,
  const char * _file,
  int _line
 )
```

Full constructor. Normally the constructor is not called explicitly. Instead, the macros  BMF_Error()  ,  BMF_Error_()  are used.

### ~Exception()

```cpp
virtual Exception::~Exception (  )
throw (
 )
```

 virtualvirtual

## Member Function Documentation

### formatMessage()

```cpp
void Exception::formatMessage (  )
```

### what()

```cpp
virtual const char* Exception::what (  ) const
throw (
 )
```

 virtualvirtual

**Returns**

## Member Data Documentation

### code

```cpp
int Exception::code
```

error code

**See also**
  BMFStatus

### err

```cpp
std::string Exception::err
```

error description

### file

```cpp
std::string Exception::file
```

source file name where the error has occurred

### func

```cpp
std::string Exception::func
```

function name. Available only when the compiler supports getting it

### line

```cpp
int Exception::line
```

line number in the source file where the error has occurred

### msg

```cpp
std::string Exception::msg
```

the formatted error message

- /20230627/doxygen_converter/bmf/bmf/sdk/cpp_sdk/include/bmf/sdk/  exception_factory.h
