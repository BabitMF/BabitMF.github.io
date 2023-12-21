---
title: 'Transcode Functions'
linkTitle: 'Transcode Functions'
weight: 9
---

[//]: <> (REF_MD: group__transFunc.html)

def   [bmf.builder.ff_filter.ff_filter](#ff_filter) (streams, filter_name, args, kwargs)
 
 
def   [bmf.builder.ff_filter.vflip](#vflip) (stream, kwargs)
 
def   [bmf.builderß.ff_filter.scale](#scale) (stream, args, kwargs)
 
def   [bmf.builder.ff_filter.setsar](#setsar) (stream, args, kwargs)
 
def   [bmf.builder.ff_filter.pad](#pad) (stream, args, kwargs)
 
def   [bmf.builder.ff_filter.trim](#trim) (stream, args, kwargs)
 
def   [bmf.builder.ff_filter.setpts](#setpts) (stream, args, kwargs)
 
def   [bmf.builder.ff_filter.loop](#loop) (stream, args, kwargs)
 
def   [bmf.builder.ff_filter.split](#split) (stream, args, kwargs)
 
def   [bmf.builder.ff_filter.adelay](#adelay) (stream, args, kwargs)
 
def   [bmf.builder.ff_filter.atrim](#atrim) (stream, args, kwargs)
 
def   [bmf.builder.ff_filter.amix](#amix) (stream, args, kwargs)
 
def   [bmf.builder.ff_filter.afade](#afade) (stream, args, kwargs)
 
def   [bmf.builder.ff_filter.asetpts](#asetpts) (stream, args, kwargs)
 
def   [bmf.builder.ff_filter.overlay](#overlay) (stream, overlay_stream, args, kwargs)
 
def   [bmf.builder.ff_filter.concat](#concat) (streams, kwargs)
 
def   [bmf.builder.ff_filter.fps](#fps) (stream, f, kwargs)
 
 
def   [bmf.builder.ff_filter.encode](#encode) (video_stream, audio_stream, encoder_para, [type](https://babitmf.github.io/docs/bmf/api/api_in_python/transcode_functions/#type) ="", [path](https://babitmf.github.io/docs/bmf/api/api_in_python/transcode_functions/#path) ="", [entry](https://babitmf.github.io/docs/bmf/api/api_in_python/transcode_functions/#entry) ="", [stream_alias](https://babitmf.github.io/docs/bmf/api/api_in_python/transcode_functions/#stream_alias) =None)
 
 
def   [bmf.builder.ff_filter.decode](#decode) (self, [decoder_para](https://babitmf.github.io/docs/bmf/api/api_in_python/transcode_functions/#decoder_para) =None, [type](https://babitmf.github.io/docs/bmf/api/api_in_python/transcode_functions/#type) ="", [path](https://babitmf.github.io/docs/bmf/api/api_in_python/transcode_functions/#path) ="", [entry](https://babitmf.github.io/docs/bmf/api/api_in_python/transcode_functions/#entry) ="", [stream_alias](https://babitmf.github.io/docs/bmf/api/api_in_python/transcode_functions/#stream_alias) =None)
 
 

## 详细描述

BMF transcode 相关的函数，可直接由 BmfStream 对象调用。

## 函数文档


###  adelay()

```
def bmf.builder.ff_filter.adelay (  stream, 
   args, 
   kwargs 
 )   
```
**Returns**



```
 def adelay(stream, 
  * args
  ** kwargs
):

```

###  afade()

```
def bmf.builder.ff_filter.afade (  stream, 
   args, 
   kwargs 
 )   
```
**Returns**



```
 def afade(stream, 
  * args
  ** kwargs
):

```

###  amix()

```
def bmf.builder.ff_filter.amix (  stream, 
   args, 
   kwargs 
 )   
```
**Returns**



```
 def amix(stream, 
  * args
  ** kwargs
):

```

###  asetpts()

```
def bmf.builder.ff_filter.asetpts (  stream, 
   args, 
   kwargs 
 )   
```
**Returns**



```
 def asetpts(stream, 
  * args
  ** kwargs
):

```

###  atrim()

```
def bmf.builder.ff_filter.atrim (  stream, 
   args, 
   kwargs 
 )   
```
**Returns**



```
 def atrim(stream, 
  * args
  ** kwargs
):

```

###  concat()

```
def bmf.builder.ff_filter.concat (  streams, 
   kwargs 
 )   
```
**Returns**



```
 def concat(
  * streams
  ** kwargs
):

```

###  decode()

```
def bmf.builder.ff_filter.decode (  self, 
   decoder_para = None, 
   type = "", 
   path = "", 
   entry = "", 
   stream_alias = None 
 )   
```
提供内置解码器 BMF stream 的 graph 函数，包括 av demuxer 和 decoder。

**Parameters**
 - **decoder_para**：解码器的参数



**Returns**



```
 def decode(self, decoder_para=None, type="", path="", entry="", stream_alias=None):

```

###  encode()

```
def bmf.builder.ff_filter.encode (  video_stream, 
   audio_stream, 
   encoder_para, 
   type = "", 
   path = "", 
   entry = "", 
   stream_alias = None 
 )   
```
内置编码器 BMF stream，包括 av encoder 和 muxer。

**Parameters**
 - **video_stream**：视频流，它应该是编码器的第一个输入流
 - **audio_stream**：音频流
 - **encoder_para**：编码器的参数



**Returns**



```
 def encode(video_stream, audio_stream, encoder_para, type="", path="", entry="", stream_alias=None):

```

###  ff_filter()

```
def bmf.builder.ff_filter.ff_filter (  streams, 
   filter_name, 
   args, 
   kwargs 
 )   
```
内置的 filter BMF stream。

**Parameters**
 - **filter_name**：libavfilter 中的 filte r名称
 - **args**：filter 的参数 
 - **kwargs**：filter stream 的额外参数，如：alias、stream_alias、type、path、entry



**Returns**



```
 def ff_filter(streams, filter_name, 
  * args
  ** kwargs
):

```

###  fps()

```
def bmf.builder.ff_filter.fps (  stream, 
   f, 
   kwargs 
 )   
```
''' video_stream_count = kwargs.get('v', 1) audio_stream_count = kwargs.get('a', 0) stream_count = video_stream_count + audio_stream_count if len(streams) % stream_count != 0: raise ValueError( 'Expected concat input streams to have length multiple of {} (v={}, a={}); got {}'.format( stream_count, video_stream_count, audio_stream_count, len(streams) ) ) seg_count = int(len(streams) / stream_count)

**Returns**



```
 def fps(stream, f, **kwargs):

```

###  loop()

```
def bmf.builder.ff_filter.loop (  stream, 
   args, 
   kwargs 
 )   
```
**Returns**



```
 def loop(stream, 
  * args
  ** kwargs
):

```

###  overlay()

```
def bmf.builder.ff_filter.overlay (  stream, 
   overlay_stream, 
   args, 
   kwargs 
 )   
```
**Returns**



```
 def overlay(stream, overlay_stream, 
  * args
  ** kwargs
):

```

###  pad()

```
def bmf.builder.ff_filter.pad (  stream, 
   args, 
   kwargs 
 )   
```
**Returns**



```
 def pad(stream, 
  * args
  ** kwargs
):

```

###  scale()

```
def bmf.builder.ff_filter.scale (  stream, 
   args, 
   kwargs 
 )   
```
**Returns**



```
 def scale(stream, 
  * args
  ** kwargs
):

```

###  setpts()

```
def bmf.builder.ff_filter.setpts (  stream, 
   args, 
   kwargs 
 )   
```
**Returns**



```
 def setpts(stream, 
  * args
  ** kwargs
):

```

###  setsar()

```
def bmf.builder.ff_filter.setsar (  stream, 
   args, 
   kwargs 
 )   
```
**Returns**



```
 def setsar(stream, 
  * args
  ** kwargs
):

```

###  split()

```
def bmf.builder.ff_filter.split (  stream, 
   args, 
   kwargs 
 )   
```
**Returns**



```
 def split(stream, 
  * args
  ** kwargs
):

```

###  trim()

```
def bmf.builder.ff_filter.trim (  stream, 
   args, 
   kwargs 
 )   
```
**Returns**



```
 def trim(stream, 
  * args
  ** kwargs
):

```

###  vflip()

```
def bmf.builder.ff_filter.vflip (  stream, 
   kwargs 
 )   
```
**Returns**



```
 def vflip(stream, **kwargs):

```
