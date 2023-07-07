---
title: 'Built-in Filter Module'
linkTitle: 'Built-in Filter Module'
weight: 5
---
[//]: <> (REF_MD: group__FiltM.html)


This is a module capability discrption about BMF build-in filter. The module can be used by Module Related BMF API such as  [bmf.concat()](https://babitmf.github.io/docs/bmf/api/api_in_python/transcode_functions/#concat)  by providing ffmpeg command line style parameters to config the filtergraph:


```
main_video = (
    video['video'].scale(output_width, output_height)
        .overlay(logo_1, repeatlast=0)
        .overlay(logo_2,
                 x='if(gte(t,3.900),960,NAN)',
                 y=0,
                 shortest=1)
)

concat_video = (
 bmf.concat(header['video'].scale(output_width, output_height),
               main_video,
               tail['video'].scale(output_width, output_height),
               n=3)
)

concat_audio = (
 bmf.concat(header['audio'],
               video['audio'],
               tail['audio'],
               n=3, v=0, a=1)
)

```
And in another common way, users can create any filter stream which ffmpeg libavfilter included. exp.:


```
ff_filter('unsharp', '5:5:1')

```
 - module name: c_ffmpeg_filter


### Build-in Filter Module

