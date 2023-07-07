---
title: 'Rational'
linkTitle: 'Rational'
weight: 12
---
[//]: <> (REF_MD: structRational.html)


  [Public Member Functions](http://localhost:1313/docs/bmf/api/api_in_cpp/rational/#public-member-functions)  |  [Public Attributes](http://localhost:1313/docs/bmf/api/api_in_cpp/rational/#public-attributes)  |  List of all members  # Rational Struct Reference

rational.h ## Public Member Functions


   [Rational](#rational-12) ()
 
   [Rational](#rational-22) (int n, int d)
 

 ## Public Attributes


int   [num](#num) = -1
 
 
int   [den](#den) = -1
 
 

## Constructor & Destructor Documentation


###  Rational() [1/2]

 ```
Rational::Rational (  )  
```
 inlineinline






```
 {}

```

###  Rational() [2/2]

 ```
Rational::Rational ( int n, 
  int d 
 )   
```
 inlineinline






```
                                {
             num = n;
             den = d;
         }

```
## Member Data Documentation


###  den

```
int Rational::den = -1 
```
Denominator.


###  num

```
int Rational::num = -1 
```
Numerator.

 - /20230627/doxygen_converter/bmf/bmf/sdk/cpp_sdk/include/bmf/sdk/  rational.h  
