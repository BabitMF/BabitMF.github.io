---
title: 'API In Go'
linkTitle: 'API In Go'
weight: 3
---
## Normal mode (refer to normalMode)
### func NewBMFGraph(mode BMFGraphMode, option interface{}) *BMFGraph

Para:
- mode: Enumeration type, the operation mode of BMF, with the following options:
   - Normal mode (most commonly used)
   - Server pre-built mode
   - Generator generator mode
   - SubGraph subgraph mode
   - Update Dynamic addition and deletion of streaming scenarios
- option: interface{} type, global Parameter of BMF, usually can be filled with null value nil

Return:
- *BMFGraph: structure pointer type, global Graph pointer

### func (g *BMFGraph) Decode(decodePara interface{}, controlStream *BMFStream) *BMFNode

Para:
- decodePara: interface{} type, decoding module Parameters, can be represented by map[string]interface{} data structure
- controlStream: structure pointer type, usually empty nil

Return:
- *BMFNode: structure pointer type, pointer to decoding node

### func (n *BMFNode) Stream(id interface{}) *BMFStream
Para:

- id: integer, representing the stream number of the node (the stream number usually starts from 0)

Return:
- *BMFStream: structure pointer type, pointer to stream structure

### func (g *BMFGraph) Encode(videoStream *BMFStream, audioStream *BMFStream, encoderPara interface{}) *BMFNode

Para:
- videoStream: structure pointer type, the structure pointer of the video stream
- audioStream: structure pointer type, structure pointer of audio stream
- encoderPara: interface{} type, encoding module Parameters, can be represented by map[string]interface{} data structure

Return:
- *BMFNode: structure pointer type, coded node pointer

### func (g *BMFGraph) Module(inputs []*BMFStream, moduleName string, moduleType BMFModuleType, modulePath string, moduleEntry string, option interface{}, preModule *BMFModuleInstance) *BMFNode

Para:
- inputs: The slice structure of the BMFStream structure pointer, representing all input streams of the module
- moduleName: string type, module name
- moduleType: enumerated type, with the following options:
   - Python
   - Cpp
   - Go
- modulePath: string type, the path where the module file is located
- moduleEntry: string type, module entry
- option: interface{} type, module Parameter
- preModule: structure pointer of BMFModuleInstance, preload module, nil if no

Return:
- *BMFNode: structure pointer type, the pointer of the corresponding node of the module

### func (g *BMFGraph) Run(needMerge bool) *CBMFGraph

Para:
- needMerge: Boolean type, whether to merge the ffmpeg filter nodes in the graph, usually true

Return:
- *CBMFGraph: structure pointer type, which is a pointer to the encapsulation structure of the C language graph object

### func (bgp *CBMFGraph) Close() error

Return:
- error: error type, when the C graph structure is empty, an error will be reported

## preload mode (refer to premoduleMode)
### func NewCBMFModule(moduleName string, option interface{}, moduleType BMFModuleType, modulePath, moduleEntry string) (*CBMFModule, error)

Para:
- moduleName: string type, module name
- option: interface{} type, module Parameter
- moduleType: enumerated type, with the following options:
   -Python
   -Cpp
   - Go
- modulePath: string type, the path where the module file is located
- moduleEntry: string type, module entry

Return:
- *BMFModuleInstance: structure pointer type, which is a pointer to the encapsulation structure of the C language module object
- error: error type, when the C graph structure is empty, an error will be reported

### func (s *BMFStream) Module(inputs []*BMFStream, moduleName string, moduleType BMFModuleType, modulePath string, moduleEntry string, option interface{}, preModule *CBMFModule) *BMFNode

Note: The difference between this interface and the Module interface in normal mode is that the caller is BMFStream instead of BMFGraph.
When the caller is BMFStream, the stream corresponding to the caller will be merged with other streams in inputs, and they will be used as the input stream of the module together.

## Sync mode (see syncMode & syncModeSerial)
### func NewModulefunctor(name, tp, path, entry string, option interface{}, ninputs, nooutputs int32) (*Modulefunctor, error)

Para:
- name: string type, Module name
- tp: string type, Module type (python, c++, go)
- Path: string type, corresponding to the path of the module implementation file
- entry: string type, module entry
- ninputs: int32 type, specifies the number of input streams
- nooutputs: int32 type, specifies the number of output streams

Return:
- *Modulefunctor: the instantiated Modulefunctor
- error: error message, default is nil
### func (self *Modulefunctor) Execute(inputs []*Packet, cleanup bool) (bool, error)

Para:
- inputs: *Packet is a slice structure of element type, which contains the input Packet to be processed
- cleanup : bool type, controls whether to clear all un-fetch results

Return:
- bool: Whether the operation is successful, 1 is success, 0 is failed
- error: error message, default is nil
### func (self *Modulefunctor) Fetch(index int) ([]*Packet, error)

Para:
- inputs: *Packet is a slice structure of element type, which contains the input Packet to be processed
- cleanup : bool type, controls whether to clear all un-fetch results

Return:
- []*Packet: packet list processed by Sync mode module
- error: error message, default is nil
### func (self *Modulefunctor) Call(inputs []*Packet) ([]*Packet, error)

Para:
- inputs: *Packet is a slice structure of element type, which contains the input Packet to be processed

Return:
- []*Packet: packet list processed by Sync mode module
- error: error message, default is nil
### func deleteModulefunctor(o *Modulefunctor)

Para:
- o: *Modulefunctor, pointing to the Modulefunctor instance that will be free