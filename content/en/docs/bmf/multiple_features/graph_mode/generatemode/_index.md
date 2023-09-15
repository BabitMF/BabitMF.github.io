---
title: 'Generator Mode'
linkTitle: 'Generator Mode'
weight: 1
---

/** \page GeneratorMode Generator Mode

The generator method has common similarities and differences, mainly using ```start()``` (usually ```run()```):

```python
pkts = (
  bmf.graph()
      .decode({'input_path': "../files/big_bunny_10s_30fps.mp4"})['video']
      .ff_filter('scale', 299, 299)  # or you can use '.scale(299, 299)'
      .start()  # this will return a packet generator
)
```

The generated frames can be used like iterators:

```python
for i, pkt in enumerate(pkts):
  # convert frame to a nd array
  if pkt.is_(bmf.VideoFrame) and i < 10:
      vf = pkt.get(bmf.VideoFrame)
      rgb = mp.PixelInfo(mp.kPF_RGB24)
      np_vf = vf.reformat(rgb).frame().plane(0).numpy()
      # we can add some more processing here, e.g. predicting
      print("frame", i, "shape", np_vf.shape)
  else:
      break
```

If you need the complete code, you can refer to [test_generator.py]（#tbytodo)
