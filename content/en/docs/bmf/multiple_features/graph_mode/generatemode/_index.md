---
title: 'Generator Mode'
linkTitle: 'Generator Mode'
weight: 2
---

/** \page GeneratorMode Generator Mode

The generator method has common similarities and differences, mainly using ```start()``` (usually ```run()```):

```python
frames = (
     bmf. graph()
         .decode({'input_path': "../files/img.mp4"})['video']
         .ff_filter('scale', 299, 299) # or you can use '.scale(299, 299)'
         .start() # this will return a packet generator
)
```

The generated frames can be used like iterators:

```python
for i, frame in enumerate(frames):
     # convert frame to a nd array
     if frame is not None:
         np_frame = frame.to_ndarray(format='rgb24')

         # we can add some more processing here, e.g. predicting
         print('frame', i, 'shape', np_frame.shape)
     else:
         break
```

If you need the complete code, you can refer to [test_generator.py]（#tbytodo)
