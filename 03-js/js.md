# JavaScript

## ES6

### 块级作用域

### let命令

* 代码块内有效
* 不存在变量提升
* 暂时性死区
* 不允许重复声明

### const命令

* 常量 - 并不是变量的值不得改动，而是变量指向的那个**内存地址**所保存的数据不得改动

### 解构赋值

* 数组
  
```js
let [a, b, c] = [1, 2, 3]
let [foo, [[bar], baz]] = [1, [[2], 3]]
```

* 对象

```js
let { foo, bar } = { foo: 'aaa', bar: 'bbb' }
let { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb' }

// 将现有对象的方法，赋值到某个变量
// 例一
let { log, sin, cos } = Math

// 例二
const { log } = console
log('hello') // hello
```

* 字符串

```js
const [a, b, c, d, e] = 'hello'
const [a, b, c, d, e] = [h, e, l, l, o]

// [h, e, l, l, o].length
let {length: len} = 'hello'
let {length: len} = [h, e, l, l, o]
len // 5
```

* 函数参数的解构赋值

```js
// undefined 就会触发函数参数的默认值
[1, undefined, 3].map((x = 'yes') => x);
// [ 1, 'yes', 3 ]
```

## 一些概念

### 执行上下文 & 作用域

* 全局
* 函数
* 块级

### 表达式

### js代码、语句

## 数据类型

### 基本数据类型

* 概念
  * 保存在**栈内存**中的简单数据段
* 访问方式
  * 按值访问，操作的是它们实际的值。

* String
* Number
* Boolean
* Undefined
* Null
* Symbol (ES6)

存储方式

### 引用数据类型

* 概念
  * 保存在**堆内存**中的对象
  * 变量名实际上是一个指针，而这个指针指向的位置，就是保存对象的位置
* 访问方式
  * 按引用访问，当查询时，我们需要先从**栈**中读取内存地址，然后按照指针所指向的地方，找到**堆**内存里面的值。

* Object

### 数据类型判断

* Typeof
* Instanceof
  * 检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上

## eventloop

* js是单线程语言，异步 和 多线程 是通过 eventloop 来实现的
* 宏任务
  * setTimeout、setInterval、DOM事件、AJAX请求
* 微任务
  * promise、async、await
* 执行
  * 调用栈 - 同步
  * 微任务队列
  * 消息队列

## 函数

## 知识点

### 箭头函数

* this

### var、let、const

* var 声明提升
* var 可重复定义
* let 定义**变量**
* const 定义**常量**
* let、const 块级作用域

### == 和 === 的不同？

### 真值 & 假值

* undefined、null、false、+0、-0 和 NaN、""
* 除以上假值

### 常用的数组方法
