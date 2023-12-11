---
title: 'GPU 推理模块'
linkTitle: 'GPU 推理模块'
weight: 3
---

# 在 BMF 中使用 TensorRT 加速深度学习接口

## TensorRT 接口

对于使用深度学习模型的视频处理，您可以使用 [NVIDIA TensorRT](https://developer.nvidia.com/tensorrt) 来加速推理。TensorRT 是一个用于高性能深度学习推理的 SDK，其中包括深度学习推理优化器和运行时，可为推理应用程序提供低延迟和高吞吐量。 

我们提供两个示例来说明如何在 BMF 中使用 TensorRT。 一个是人脸检测，您可以在 `bmf/demo/face_detect` 文件夹中找到它。另一个是超分，它位于 `bmf/demo/predict` 文件夹中。

### 安装 TensorRT

如果您不想使用 TensorRT C++ API 或编译用 C++ 编写的插件。安装 TensorRT 最简单的方法是通过 python package 索引安装。

```python
python3 -m pip install --upgrade tensorrt
```

上述 pip 命令将以 Python wheel 格式从 PyPI 获取所有需要的 CUDA 库和 cuDNN，因为它们是 TensorRT Python wheel 的依赖项。此外，如果安装的是之前的版本，该命令还会将 tensorrt 升级到最新版本。

如果您想访问 TensorRT C++ API，建议使用 `.tar` 文件或 `.deb`、`.rpm` 安装包安装 TensorRT。 更多信息请参阅[官方文档](https://docs.nvidia.com/deeplearning/tensorrt/install-guide/index.html#installing)


### 构建 TensorRT 引擎

在使用 TensorRT 之前，您应该从训练好的模型中构建一个引擎。有许多方法可以做到这一点。更多详情请参阅[官方文档](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html)。在示例中，我们介绍了构建两个引擎的命令。

对于人脸检测示例：
```
trtexec --onnx=version-RFB-640.engine --buildOnly --saveEngine=version-RFB-640.engine
```

对于超分示例：
```
trtexec --onnx=v1.onnx --minShapes=input:0:1x360x640x21 --optShapes=input:0:1x360x640x21 --maxShapes=input:0:1x360x640x21 --buildOnly --fp16 --saveEngine=v1.engine
```

### 编写一个 TensorRT 模块

为了编写一个 TensorRt 模块，您需要做以下准备：

- engine path
- inputs shapes
- outputs buffer

`engine path` 和 `inputs shapes` 由用户传递。设置 inputs shapes 后，TensorRT 可以自动推断 outputs shapes。 因此 `outputs buffer` 可以在无需用户控制的情况下进行分配。步骤通常如下：

1. 获取输入和输出的总数：

```python
self.num_io_tensors_ = self.engine_.num_io_tensors
self.tensor_names_ = [self.engine_.get_tensor_name(i) for i in range(self.num_io_tensors_)]
self.num_inputs_ = [self.engine_.get_tensor_mode(self.tensor_names_[i]) for i in range(self.num_io_tensors_)] \
                        .count(trt.TensorIOMode.INPUT)
assert self.num_inputs_ == len(self.input_shapes_.keys()), "The number of input_shapes doesn't match the number of model's inputs."
self.num_outputs_ = [self.engine_.get_tensor_mode(self.tensor_names_[i]) for i in range(self.num_io_tensors_)] \
                        .count(trt.TensorIOMode.OUTPUT)
```

2. 设置每一个 input shape
```python
for i in range(self.num_inputs_):
    self.context_.set_input_shape(self.tensor_names_[0], self.input_shapes_[self.tensor_names_[0]])
```

3. 分配 output buffer
```python
self.output_dict_ = dict()
for i in range(self.num_inputs_, self.num_io_tensors_):
    self.output_dict_[self.tensor_names_[i]] = mp.empty(self.context_.get_tensor_shape(self.tensor_names_[i]),
                                                        device=mp.kCUDA,
                                                        dtype=self.to_scalar_types(self.engine_.get_tensor_dtype(self.tensor_names_[i])))
```

TensorRT 的输入通常来自解码后的视频帧。如果需要进行一些图像预处理，可以将 frames 转换为 torch tensors。因此可以使用 torch 操作来进行预处理。在推理过程中，应将输入和输出的指针绑定。torch tensor 和 bmf tensor 都可以通过 `data_ptr()` 获取原始指针。

```python
for i in range(self.num_inputs_):
    self.context_.set_tensor_address(self.tensor_names_[i], int(input_tensor.data_ptr()))

for i in range(self.num_inputs_, self.num_io_tensors_):
    self.context_.set_tensor_address(self.tensor_names_[i], int(self.output_dict_[self.tensor_names_[i]].data_ptr()))
```

设置输入/输出绑定后，可以通过以下方式启动 TensorRT 执行：
```python
self.context_.execute_async_v3(self.stream_.handle())
```

输出是 BMF tensor，因为我们使用 `mp.empty` 创建 output buffer。如果要处理这些输出，可以将这些 BMF tensors 转换为 Torch tensors。
```python
output_tensor = torch.from_dlpack(self.output_dict_[self.tensor_names_[-1]])
```
