# JavaScript

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

## 执行上下文 & 作用域

* 全局
* 函数
* 块级

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
