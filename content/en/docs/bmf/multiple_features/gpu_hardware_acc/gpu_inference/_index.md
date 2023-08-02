---
title: 'GPU Inference Module'
linkTitle: 'GPU Inference Module'
weight: 3
---

# Use TensorRT to accelerate DL inference in BMF

## TensorRT Inference

For video processings that use deep learning models, they can use [NVIDIA TensorRT](https://developer.nvidia.com/tensorrt) to accelerate inference. TensorRT is an SDK for high-performance deep learning inference, includes a deep learning inference optimizer and runtime that delivers low latency and high throuphput for inference applications.

We provide two examples to show how to use TensorRT in BMF. One is the face detection, you can find it in the `bmf/demo/face_detect` folder. Another is the super resolution, it locates in the `bmf/demo/predict` folder.

### Install TensorRT

If you don't want to use TensorRT C++ APIs or to compile plugins written in C++. The simplest way to install TensorRT is by python package index installation.

```python
python3 -m pip install --upgrade tensorrt
```

The above pip command will pull in all the required CUDA libraries and cuDNN in Python wheel format from PyPI because they are dependencies of the TensorRT Python wheel. Also, it will upgrade tensorrt to the latest version if you had a previous version installed.

If you want to access TensorRT C++ APIs, it's recommened to install TensorRT by `.tar` file or `.deb`, `.rpm` package. For more information, please refer to the official documentation: https://docs.nvidia.com/deeplearning/tensorrt/install-guide/index.html#installing


### Build a TensorRT engine

Before you use TensorRT, you should build an engine from a trained model. There're many ways to do it. You can see more details from the official [document](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html). In our examples, we introduce our commands to build the two engines.

For face detection example:
```
trtexec --onnx=version-RFB-640.engine --buildOnly --saveEngine=version-RFB-640.engine
```

For super resolution example:
```
trtexec --onnx=v1.onnx --minShapes=input:0:1x360x640x21 --optShapes=input:0:1x360x640x21 --maxShapes=input:0:1x360x640x21 --buildOnly --fp16 --saveEngine=v1.engine
```

### Write a TensorRT module

In order to write a TensorRT module, you have to prepare these things:

- engine path
- inputs shapes
- outputs buffer

The `engine path` and `inputs shapes` can be passed by the users. Once the input shapes are set, TensorRT can infer the outputs shapes automatically. So `outputs buffer` can be allocated without users' control. The steps are usually as follows:

1. Get the total number of inputs and outputs

```python
self.num_io_tensors_ = self.engine_.num_io_tensors
self.tensor_names_ = [self.engine_.get_tensor_name(i) for i in range(self.num_io_tensors_)]
self.num_inputs_ = [self.engine_.get_tensor_mode(self.tensor_names_[i]) for i in range(self.num_io_tensors_)] \
                        .count(trt.TensorIOMode.INPUT)
assert self.num_inputs_ == len(self.input_shapes_.keys()), "The number of input_shapes doesn't match the number of model's inputs."
self.num_outputs_ = [self.engine_.get_tensor_mode(self.tensor_names_[i]) for i in range(self.num_io_tensors_)] \
                        .count(trt.TensorIOMode.OUTPUT)
```

2. For each input, set its shape
```python
for i in range(self.num_inputs_):
    self.context_.set_input_shape(self.tensor_names_[0], self.input_shapes_[self.tensor_names_[0]])
```

3. Allocate the output buffer
```python
self.output_dict_ = dict()
for i in range(self.num_inputs_, self.num_io_tensors_):
    self.output_dict_[self.tensor_names_[i]] = mp.empty(self.context_.get_tensor_shape(self.tensor_names_[i]),
                                                        device=mp.kCUDA,
                                                        dtype=self.to_scalar_types(self.engine_.get_tensor_dtype(self.tensor_names_[i])))
```

The inputs of TensorRT are usually from the decoded frames. If we need to do some image preprocessing, we can convert the frames to the torch tensors. So, we can use torch operations to do preprocessing. During the inference, we should set the pointer bindings of inputs and outputs. Both torch tensor and bmf tensor can obtained raw pointers through `data_ptr()`.

```python
for i in range(self.num_inputs_):
    self.context_.set_tensor_address(self.tensor_names_[i], int(input_tensor.data_ptr()))

for i in range(self.num_inputs_, self.num_io_tensors_):
    self.context_.set_tensor_address(self.tensor_names_[i], int(self.output_dict_[self.tensor_names_[i]].data_ptr()))
```

After setting the input/output bindings, we can start TensorRT execution by:
```python
self.context_.execute_async_v3(self.stream_.handle())
```

The outputs are BMF tensors since we create output buffer using `mp.empty`. If you want to process these outputs, you can convert these BMF tensors to Torch tensors.
```python
output_tensor = torch.from_dlpack(self.output_dict_[self.tensor_names_[-1]])
```
