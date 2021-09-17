# vue

## 一些概念

### 组件化编程

* 组件
  * 应用中局部功能代码和资源的集合
* 传统式编程问题
  * 依赖关系混乱，不好维护
  * 代码复用率不高

### MVVM

1. M：模型（ Model）：data中的数据
2. V：试图（View）：模板代码
3. VM：视图模型（ViewModel）：Vue实例

### vue中的数据代理

* 通过vm对象来代理_data对象中属性的操作（读/写）
* 好处
  * 更加方便的操作data中的数据
* 基本原理
  * 通过Object.defineProperty()把_data对象中所有属性添加到vm上
  * 为每一个添加到vm上的属性，都指定一个getter/setter
  * 在getter/setter内部去操作（读/写）_data中对应的属性

### 单向绑定

* 数据从data流向页面

### 双向绑定 - v-model

* 数据从data流向页面
* 数据从页面流向data
* 双向绑定一般应用在表单元素上

### 虚拟DOM

* 虚拟dom**对比**(**diff**erence)算法

## 生命周期

new Vue()

### 创建期间

* beforeCreate
* created
* beforeMount
* mounted
  
### 运行期间

* beforeUpdate
* updated
  
### 销毁期间

* beforeDestroy
* destroyed

### keep-alive

* activated
* deactivated

### 错误时

* errorCaptured

### 父子组件生命周期顺序

* 父-beforeCreate
* 父-created
* 父-beforeMount
* 子-beforeCreate
* 子-created
* 子-beforeMount
* 子-mounted
* 父-mounted
* 父-beforeDestroy
* 子-beforeDestroy
* 子-destroyed
* 父-destroyed

## 组件通信

### 父子

* props

* $emit()

------

* $children[n]

* $parent
  
------

* ref
  
------

* 回调函数(callback)
  * 通过 props 传递事件

### 祖先

* provied
* inject
  
------

* $attrs
* $listeners

### 兄弟

* GlobalEventBus

```javascript
main.js
new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  }
})

// 提供数据
this.$bus.$emit('xxxxx', 数据)

// 接收数据
this.$bus.$on('xxxxx', this.someMethods(数据))
// 解绑数据
beforeDestrory() {
  this.$bus.$off('xxxxx)
}
```

### 任意

* vuex

## vuex

### 相关概念

* state，驱动应用的数据源；
* view，以声明方式将 state 映射到视图；
* actions，响应在 view 上的**用户输入**导致的状态变化。

### 数据流向

<img src="https://vuex.vuejs.org/vuex.png" width="80%">

### State

驱动应用的数据源

### Getters

可以认为是 store 的计算属性

### Mutations

* store 中的状态的唯一方法是提交 mutation
* 同步函数
  * 在 mutation 中混合异步调用会导致你的程序很难调试

```javascript
this.$store.commit()
```

### Actions

* Action 提交的是 mutation，而不是直接变更状态。
* Action 可以包含任意异步操作。

```javascript
this.$store.dispatch()
```

### Modules

## vue-router

### 模式

* hash(#)
  * 内部传递的实际 URL 之前使用了一个哈希字符（#）
    * 由于这部分 URL 从未被发送到服务器，所以它不需要在服务器层面上进行任何特殊处理
    * 在 SEO 中确实有不好的影响。如果你担心这个问题，可以使用 HTML5 模式。
  * window.location 对象
  * window.onhashchange => hashchange 事件
  * location.hash / location.href
  
```javascript
window.addEventListener('hashchange', handleHashchange)

window.onhashchange((e) => {
  console.log(e.oldURL)
  console.log(e.newURL)
})
```

* history
  * window.history 对象
  * window.onpopstate 事件
  
```javascript
window.addEventListener('popstate', handlePopState)

window.onpopstate((e) => {
  console.log(e)
})
```

### 导航守卫

#### 全局

* 全局前置守卫 - beforeEach
* 全局解析守卫 - beforeResolve
* 全局后置钩子 - afterEach

```javascript
const router = new VueRouter({ ... })

<!-- 全局前置守卫 -->
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()

  // next()
  // next(false)
  // next('/')
  // next(error)
})

<!-- 全局解析守卫 -->
router.beforeResolve((to, from, next) => {
})

<!-- 全局后置钩子 -->
router.afterEach((to, from) => {
  // ...
})
```

#### 路由

* 路由独享的守卫
* beforeEnter

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```

#### 组件内

* 组件内的守卫
  * beforeRouteEnter
  * beforeRouteUpdate
  * beforeRouteLeave
  
```javascript
beforeRouteEnter (to, from, next) {
  // 在渲染该组件的对应路由被 confirm 前调用
  // 不！能！获取组件实例 `this`
  // 因为当守卫执行前，组件实例还没被创建
  next(vm => {
    // 通过 `vm` 访问组件实例
  })
}

beforeRouteUpdate(to, from, next) {
  // 在当前路由改变，但是该组件被复用时调用
  // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  // 可以访问组件实例 `this`

  // just use `this`
  this.name = to.params.name
  next()
},

beforeRouteLeave(to, from, next) {
  // 导航离开该组件的对应路由时调用
  // 可以访问组件实例 `this`

  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    next()
  } else {
    next(false)
  }
}
```

#### 应用

* beforeEach
  * 登录权限等判断
* beforeRouteLeave
  * 清除当前组件中的定时器
  * 当页面中有未关闭的窗口, 或未保存的内容时, 阻止页面跳转
  * 保存相关内容到Vuex中或Session中

#### 执行顺序

当点击切换路由时

* beforeRouterLeave
* beforeEach
* beforeEnter
* beforeRouteEnter
* beforeResolve
* `afterEach`
* `beforeCreat`
* created
* beforeMount
* mounted
* beforeRouteEnter - next()

当路由更新时

* beforeRouteUpdate

### 编程式导航、传参

* 如果提供了 path，params 会被忽略
* `params` 不能与 `path` 一起使用

```js

// 字符串路径
router.push('/users/eduardo')

// 带有路径的对象
router.push({ path: '/users/eduardo' })

// 带查询参数，结果是 /register?plan=private
router.push({ path: '/register', query: { plan: 'private' } })

// 带 hash，结果是 /about#team
router.push({ path: '/about', hash: '#team' })

// 命名的路由，并加上参数，让路由建立 url
router.push({ name: 'user', params: { username: 'eduardo' } })

```

## 脚手架

## 知识点

### 双向数据绑定原理

Object.defineProperty()

### nexttick

* Vue 在更新 DOM 时是异步执行的
* 将回调延迟到下次 DOM 更新循环之后执行
* 修改数据、dom更新后、执行回调
* 应用场景
  * 使用、操作dom元素时

### keepAlive(keep-alive)

* 避免反复重渲染导致的性能问题
* 缓存不活动的组件实例，而不是销毁它们
* 生命周期钩子
  * activated
  * deactivated

### watch & computed

1. computed能完成的功能，watch都可以实现
2. watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作

* computed - 基于响应式依赖进行缓存
  * 属性不存在，通过已有属性计算得来
  * 底层借助Object.defineProperty方法提供的getter和setter
  * get执行
    * 初次读取时执行一次
    * 依赖数据改变时再次执行
  * 内部有缓存机制，效率更高
  * 绑定在vm身上，可直接读取
* watch - 数据变化时执行异步或开销较大的操作时
  * 被监视属性变化时，回调函数自动调用，进行相关操作
  * 监视的属性必须存在
  * 两种写法
    * new Vue() watch 配置
    * 通过vm.$watch监视

### Mixin

* Vue 组件中的可复用功能
* 多个组件共用的配置提取成一个混入对象
* 使用方式
  * 定义混合
  
  ```js
  {
    data() {},
    methods: {}
  }
  ```

  * 使用混合
  
  ```js
  // 全局
  Vue.mixin(xxx)
  // 局部
  mixins: ['xxx']
  ```

### 虚拟dom中key的作用

* key 是虚拟dom对象的标识
* 数据变化时，旧虚拟dom与新虚拟dom 根据 key 和 数据内容 进行比较
* key = index
  * 导致真实dom发生更新，效率低
  * 有输入框时，产生错误dom更新，界面出现问题

### 组件data函数形式

* 避免组件被复用时，数据存在引用关系

### class样式

* 字符串写法  :class="classVar"
  * 适用于样式类名不确定，需要动态指定
* 数组写法  :class="classArr"
  * 绑定的样式个数不确定、名字也不确定
* 对象写法  :class="classObj"
  * 绑定的样式个数确定、名字也确定，但是动态决定用不用
