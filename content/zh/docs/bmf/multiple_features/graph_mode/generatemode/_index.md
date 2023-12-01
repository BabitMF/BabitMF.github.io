---
title: '生成器模式'
linkTitle: '生成器模式'
weight: 1
---

生成器方法以普通异同，主要使用```start()```（通常使用```run()```）：

```python
pkts = (
  bmf.graph()
      .decode({'input_path': "../files/big_bunny_10s_30fps.mp4"})['video']
      .ff_filter('scale', 299, 299)  # or you can use '.scale(299, 299)'
      .start()  # this will return a packet generator
)
```

生成后的frames，能像iterator一样使用：

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

如果您需要完整代码，请参阅`test_generator.py`
