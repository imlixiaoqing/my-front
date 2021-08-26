# vue3

## setup

## 生命周期
  
### 销毁期间

* beforeUnmount
* unmounted

### 组合式

* setup() 优先运行
* beforeCreate -> 使用 setup()
* created -> 使用 setup()
* beforeMount -> onBeforeMount
* mounted -> onMounted
* beforeUpdate -> onBeforeUpdate
* updated -> onUpdated
* beforeUnmount -> onBeforeUnmount
* unmounted -> onUnmounted
* errorCaptured -> onErrorCaptured
* renderTracked -> onRenderTracked
* renderTriggered -> onRenderTriggered
* activated -> onActivated
* deactivated -> onDeactivated

## 组件通信

### Event Bus

``` js
// eventBus.js
import emitter from 'tiny-emitter/instance'

export default {
  $on: (...args) => emitter.on(...args),
  $once: (...args) => emitter.once(...args),
  $off: (...args) => emitter.off(...args),
  $emit: (...args) => emitter.emit(...args),
}
```

## 知识点

### 双向数据绑定原理

Object.defineProperty()
Proxy es6

### ref

### reactive
