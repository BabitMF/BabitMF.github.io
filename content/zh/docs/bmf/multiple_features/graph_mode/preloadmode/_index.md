---
title: '预加载模式'
linkTitle: '预加载模式'
weight: 4
---

这个例子中用了一个`analysis.py`。

当应用场景需要预加载模式，首先初始化：

**Python**
```python
pre_module = bmf.create_module(module_name, option)
```
**C++**
```cpp
nlohmann::json pre_module_option = {
     {"name", "analysis_SR"},
     {"para", "analysis_SR"}
};
auto pre_module = bmf::builder::GetModuleInstance("analysis", pre_module_option.dump());
```

然后就可以直接使用：

**Python**
```python
bmf. graph()
     .module(module_name, option, pre_module=pre_module)
```
**C++**
```cpp
auto analyzed = output.PythonModule({}, "analysis", bmf_sdk::JsonParam());
analyzed. SetPreModule(pre_module);
```

如果您需要完整代码，请参阅`test_pre_module.py`或`c_mode.cpp`