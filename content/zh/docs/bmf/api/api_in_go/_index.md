---
title: 'API In Go'
linkTitle: 'API In Go'
weight: 3
---
## Normal mode (即 normalMode)
### func NewBMFGraph(mode BMFGraphMode, option interface{}) *BMFGraph

Para:
- mode: 枚举类型，即 BMF 的运行模式，有以下选项：
   - Normal mode（最常用）
   - Server：预构建模式
   - Generator：生成器模式
   - SubGraph：子图模式
   - Update：动态增删流场景
- option: interface{} 类型，BMF 的全局参数，通常可以填空值 nil

Return:
- *BMFGraph: 结构体指针类型，全局 Graph 指针

### func (g *BMFGraph) Decode(decodePara interface{}, controlStream *BMFStream) *BMFNode

Para:
- decodePara: interface{} 类型，解码模块的参数，可以用 map[string]interface{} 数据结构来表示
- controlStream: 结构体指针类型，通常为空 nil

Return:
- *BMFNode: 结构体指针类型，指向解码节点的指针

### func (n *BMFNode) Stream(id interface{}) *BMFStream
Para:

- id: 整数，表示该节点的 stream number（stream number 通常从 0 开始）

Return:
- *BMFStream: 结构体指针类型，指向流结构体的指针

### func (g *BMFGraph) Encode(videoStream *BMFStream, audioStream *BMFStream, encoderPara interface{}) *BMFNode

Para:
- videoStream: 结构体指针类型，视频流的结构体指针
- audioStream: 结构体指针类型，音频流的结构体指针
- encoderPara: interface{} 类型，解码模块的参数，可以用 map[string]interface{} 数据结构来表示

Return:
- *BMFNode: 结构体指针类型，编码节点指针

### func (g *BMFGraph) Module(inputs []*BMFStream, moduleName string, moduleType BMFModuleType, modulePath string, moduleEntry string, option interface{}, preModule *BMFModuleInstance) *BMFNode

Para:
- inputs: BMFStream 结构指针的 slice 结构，代表模块的所有输入流
- moduleName: 字符串类型，模块名称
- moduleType: 枚举类型，有以下选项：
   -Python
   -Cpp
   -Go
- modulePath: 字符串类型，模块文件所在路径
- moduleEntry: 字符串类型，模块入口
- option: interface{} 类型，模块参数
- preModule: BMFModuleInstance 的结构体指针，预加载模块，如果没有则为 nil

Return:
- *BMFNode: 结构体指针类型，模块对应节点的指针

### func (g *BMFGraph) Run(needMerge bool) *CBMFGraph

Para:
- needMerge: Boolean 类型，是否合并图中的 ffmpeg filter 节点，通常为 true

Return:
- *CBMFGraph: 结构体指针类型，是指向 C 语言 Graph 对象的封装结构体的指针

### func (bgp *CBMFGraph) Close() error

Return:
- error: error类型，当 C graph 结构为空时，会报错

## preload mode (即 premoduleMode)
### func NewCBMFModule(moduleName string, option interface{}, moduleType BMFModuleType, modulePath, moduleEntry string) (*CBMFModule, error)

Para:
- moduleName: 字符串类型，模块名称
- option: interface{} 类型，模块参数
- moduleType: 枚举类型，具有以下选项：
   - Python
   - Cpp
   - Go
- modulePath: 字符串类型，模块文件所在的路径
- moduleEntry: 字符串类型，模块入口

Return:
- *BMFModuleInstance: 结构体指针类型，是指向 C 语言模块对象的封装结构体的指针
- error: error 类型，当 C Graph 结构为空时，会报错

### func (s *BMFStream) Module(inputs []*BMFStream, moduleName string, moduleType BMFModuleType, modulePath string, moduleEntry string, option interface{}, preModule *CBMFModule) *BMFNode

注意: 该接口与普通模式下的模块接口的区别在于调用者是 BMFStream 而不是 BMFGraph。
当调用者为 BMFStream 时，与调用者对应的流将与输入中的其他流合并，共同用作模块的输入流。

## Sync mode (see syncMode & syncModeSerial)
### func NewModulefunctor(name, tp, path, entry string, option interface{}, ninputs, nooutputs int32) (*Modulefunctor, error)

Para:
- name: string type, Module name字符串类型，模块名称
- tp: 字符串类型，模块类型（Python，C++，Go）
- Path: 字符串类型，对应模块实施文件的路径
- entry: 字符串类型，模块入口
- ninputs: int32 类型，指定输入流的数量
- nooutputs: int32 类型，注定输出流的数量

Return:
- *Modulefunctor: 实例化的 Modulefunctor
- error: 错误信息，默认为 nil
### func (self *Modulefunctor) Execute(inputs []*Packet, cleanup bool) (bool, error)

Para:
- inputs: *Packet 是元素类型的 slice structure，其中包含要处理的输入数据包
- cleanup : bool 类型，控制是否清除所有未获取结果

Return:
- bool: 操作是否成功，1 表示成功，0 表示失败
- error: 错误信息，默认为 nil
### func (self *Modulefunctor) Fetch(index int) ([]*Packet, error)

Para:
- inputs: *Packet 是元素类型的 slice structure，其中包含要处理的输入数据包
- cleanup : bool 类型，控制是否清除所有未获取结果

Return:
- []*Packet: 同步模式模块处理的数据包列表
- error: 错误信息，默认为 nil
### func (self *Modulefunctor) Call(inputs []*Packet) ([]*Packet, error)

Para:
- inputs: *Packet 是元素类型的 slice structure，其中包含要处理的输入数据包

Return:
- []*Packet: 同步模式模块处理的数据包列表
- error: 错误信息，默认为 nil
### func deleteModulefunctor(o *Modulefunctor)

Para:
- o: *Modulefunctor，指向将被释放的 Modulefunctor 实例