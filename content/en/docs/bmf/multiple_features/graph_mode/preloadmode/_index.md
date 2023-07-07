---
title: 'Preload Mode'
linkTitle: 'Preload Mode'
weight: 5
---

In this example, a \ref analysis.py is used

When the application scenario requires preloading mode, initialize it first:

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

Then you can use it directly:

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

If you need the complete code, you can refer to [test_pre_module.py](#tbytodo-1) (Python) or  [c_mode.cpp](#tbytodo-2)