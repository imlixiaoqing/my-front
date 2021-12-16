# JavaScript

## Array

### Array.prototype.slice()

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

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

### 字符串

* 字符串的遍历

```js
for (let codePoint of 'foo') {
  console.log(codePoint)
}
// "f"
// "o"
// "o"
```

* 模板字符串

* 实例方法 - includes、startsWith、endsWith

```js
let s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true

// endsWith 前n个字符,从1开始计算
s.endsWith('Hello', 5) // true
// 从第n个位置直到字符串结束,从0开始计算
s.startsWith('world', 6) // true
s.includes('Hello', 6) // false
```

* 实例方法 - repeat、padStart、padEnd
* 实例方法 - trimStart()，trimEnd()

```js
const s = '  abc  ';

s.trim() // "abc"
s.trimStart() // "abc  "
s.trimEnd() // "  abc"
```

* 实例方法：replaceAll()

```js
'aabbcc'.replaceAll('b', '_')
// 'aa__cc'
```

### 数值

* Number.isNaN()
  检查一个值是否为NaN
  
```js
Number.isNaN(NaN) // true
Number.isNaN(15) // false
```

* Number.isInteger()
判断一个数值是否为整数

```js
Number.isInteger(25) // true
Number.isInteger(25.1) // false
Number.isInteger(25.0) // true
```

### 函数

* 函数参数的默认值

```js
function log(x, y = 'World') {
  console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello
```

* rest 参数

```js
function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  return sum;
}

add(2, 5, 3) // 10
```

```js
function push(array, ...items) {
  items.forEach(function(item) {
    array.push(item);
    console.log(item);
  });
}

var a = [];
push(a, 1, 2, 3)
```

```js
// 与变量解构结合使用
const full = ({ first, last }) => first + ' ' + last;

// 等同于
function full(person) {
  return person.first + ' ' + person.last;
}

// rest 参数与箭头函数结合的例子
const numbers = (...nums) => nums;

numbers(1, 2, 3, 4, 5)
// [1,2,3,4,5]

const headAndTail = (head, ...tail) => [head, tail];

headAndTail(1, 2, 3, 4, 5)
// [1,[2,3,4,5]]
```

* 箭头函数
  * 箭头函数没有自己的this对象
  * 不可以当作构造函数，也就是说，不可以对箭头函数使用new命令，否则会抛出一个错误。
  * 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
  * 不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
  * 不适用场合
    * 定义对象的方法，且该方法内部包括this
  
    ```js
    const cat = {
      lives: 9,
      jumps: () => {
        this.lives--;
      }
    }
    ```

    * 需要动态this的时候

    ```js
    var button = document.getElementById('press');
    button.addEventListener('click', () => {
      this.classList.toggle('on');
    });
    ```

* catch 命令的参数省略

```js
try {
  // ...
} catch (err) {
  // 处理错误
}
// 现在
try {
  // ...
} catch {
  // ...
}
```

### 数组Array

#### 扩展运算符

将一个数组转为用逗号分隔的参数序列

```js
console.log(...[1, 2, 3])

// 1 2 3

function push(array, ...items) {
  array.push(...items);
}

function add(x, y) {
  return x + y;
}
const numbers = [4, 38];
add(...numbers) // 42
```

替代函数的 apply 方法 

```js
// ES5 的写法
function f(x, y, z) {
  // ...
}
var args = [0, 1, 2];
f.apply(null, args);

// ES6的写法
function f(x, y, z) {
  // ...
}
let args = [0, 1, 2];
f(...args);

// push函数
// ES5的 写法
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
Array.prototype.push.apply(arr1, arr2);

// ES6 的写法
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1.push(...arr2);
```

##### 作用

1. 复制数组

	```js
	const a1 = [1, 2];
	// 写法一
	const a2 = [...a1];
	// 写法二
	const [...a2] = a1;
	```

2. 合并数组（浅拷贝）

	```js
	const arr1 = ['a', 'b'];
	const arr2 = ['c'];
	const arr3 = ['d', 'e'];
	
	// ES5 的合并数组
	arr1.concat(arr2, arr3);
	// [ 'a', 'b', 'c', 'd', 'e' ]
	
	// ES6 的合并数组
	[...arr1, ...arr2, ...arr3]
	// [ 'a', 'b', 'c', 'd', 'e' ]
	```

	```js
	// 浅拷贝
	const a1 = [{ foo: 1 }];
	const a2 = [{ bar: 2 }];
	
	const a3 = a1.concat(a2);
	const a4 = [...a1, ...a2];
	
	a3[0] === a1[0] // true
	a4[0] === a1[0] // true
	```

3. 与解构赋值结合

	```js
	// ES5
	a = list[0], rest = list.slice(1)
	// ES6
	const [first, ...rest] = [1, 2, 3, 4, 5];
	first // 1
	rest  // [2, 3, 4, 5]
	
	const [first, ...rest] = [];
	first // undefined
	rest  // []
	
	const [first, ...rest] = ["foo"];
	first  // "foo"
	rest   // []
	
	```

4. 字符串

	将字符串转为真正的数组

	```js
	// [...str]
	[...'hello']
	// [ "h", "e", "l", "l", "o" ]
	
	// Unicode 字符；不用扩展运算符，字符串的reverse操作就不正确
	let str = 'x\uD83D\uDE80y';
	
	str.split('').reverse().join('')
	// 'y\uDE80\uD83Dx'
	
	[...str].reverse().join('')
	// 'y\uD83D\uDE80x'
	```

5. 实现了 Iterator 接口的对象

6. Map 和 Set 结构，Generator 函数

#### Array.from() 

1. 从**String**生成数组

	```js
	console.log(Array.from('foo'));
	// expected output: Array ["f", "o", "o"]
	
	console.log(Array.from([1, 2, 3], x => x + x));
	// expected output: Array [2, 4, 6]
	```

2. 从**类数组**（arguments）对象生成数组

	```js
	function f() {
	  return Array.from(arguments);
	}
	
	f(1, 2, 3);
	// [ 1, 2, 3 ]
	```

3. 使用箭头函数

	```js
	Array.from([1, 2, 3], x => x + x);
	// [2, 4, 6]
	
	Array.from({length: 5}, (v, i) => i);
	// [0, 1, 2, 3, 4]
	```

#### Array.of()

```js
Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]

Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]
```

#### Array.prototype.copyWithin()

#### Array.prototype.find() 

```js
[1, 4, -5, 10].find((n) => n < 0)
// -5

[1, 5, 10, 15].find(function(value, index, arr) {
  return value > 9;
}) // 10
```

#### Array.prototype.findIndex()

```js
[1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 9;
}) // 2
```

#### Array.prototype.fill()

```js
['a', 'b', 'c'].fill(7)
// [7, 7, 7]

new Array(3).fill(7)
// [7, 7, 7]

// 从 1 号位开始，向原数组填充 7，到 2 号位之前结束
['a', 'b', 'c'].fill(7, 1, 2)
// ['a', 7, 'c']
```

#### Array.prototype.entries()、keys()、values()

```js
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
```

#### Array.prototype.includes()

```javascript
[1, 2, 3].includes(2)     // true
[1, 2, 3].includes(4)     // false
[1, 2, NaN].includes(NaN) // true
```

#### Array.prototype.flat()、flatMap()

1. flat

```javascript
[1, 2, [3, 4]].flat()
// [1, 2, 3, 4]

[1, 2, [3, [4, 5]]].flat()
// [1, 2, 3, [4, 5]]

[1, 2, [3, [4, 5]]].flat(2)
// [1, 2, 3, 4, 5]

[1, [2, [3]]].flat(Infinity)
// [1, 2, 3]

[1, 2, , 4, 5].flat()
// [1, 2, 4, 5]
```

2. flatMap

```javascript
// 相当于 [[2, 4], [3, 6], [4, 8]].flat()
[2, 3, 4].flatMap((x) => [x, x * 2])
// [2, 4, 3, 6, 4, 8]

// 相当于 [[[2]], [[4]], [[6]], [[8]]].flat()
[1, 2, 3, 4].flatMap(x => [[x * 2]])
// [[2], [4], [6], [8]]
```

### 对象Object

#### 属性的简洁表示法

```js
// 例1
const foo = 'bar';
const baz = {foo};
baz // {foo: "bar"}

// 等同于
const baz = {foo: foo};

// 例2
function f(x, y) {
  return {x, y};
}

// 等同于

function f(x, y) {
  return {x: x, y: y};
}

f(1, 2) // Object {x: 1, y: 2}

// 打印 例子
let user = {
  name: 'test'
};

let foo = {
  bar: 'baz'
};

console.log(user, foo)
// {name: "test"} {bar: "baz"}
console.log({user, foo})
// {user: {name: "test"}, foo: {bar: "baz"}}
```

#### 属性名表达式

```js
// 表达式作为属性名
let propKey = 'foo';

let obj = {
  [propKey]: true,
  ['a' + 'bc']: 123
};

// 表达式还可以用于定义方法名
let obj = {
  ['h' + 'ello']() {
    return 'hi';
  }
};

obj.hello() // hi
```

#### 方法的 name 属性

```js
const person = {
  sayName() {
    console.log('hello!');
  },
};

person.sayName.name   // "sayName"
```

#### 属性的可枚举性和遍历

```js
// 可枚举性 enumerable
let obj = { foo: 123 };
Object.getOwnPropertyDescriptor(obj, 'foo')
//  {
//    value: 123,
//    writable: true,
//    enumerable: true,
//    configurable: true
//  }
```

属性遍历

1. **for...in**
2. **Object.keys(obj)**
3. **Object.getOwnPropertyNames(obj)**
4. **Object.getOwnPropertySymbols(obj)**
5. **Reflect.ownKeys(obj)**

#### super 关键字

`super`，指向当前对象的原型对象。

```js
const proto = {
  foo: 'hello'
};

const obj = {
  foo: 'world',
  find() {
    return super.foo;
  }
};

Object.setPrototypeOf(obj, proto);
obj.find() // "hello"
```

```js
// super.foo指向原型对象proto的foo方法，但是绑定的this却还是当前对象obj，因此输出的就是world。

const proto = {
  x: 'hello',
  foo() {
    console.log(this.x);
  },
};

const obj = {
  x: 'world',
  foo() {
    super.foo();
  }
}

Object.setPrototypeOf(obj, proto);

obj.foo() // "world"
```

#### 对象的扩展运算符

```js
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x // 1
y // 2
z // { a: 3, b: 4 }
```

#### Object.is()

比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致

```js
Object.is('foo', 'foo')
// true
Object.is({}, {})
// false

+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```

#### Object.assign()

将源对象（source）的所有可枚举属性，复制到目标对象（target）

```js
const target = { a: 1 };

const source1 = { b: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
```

后面的属性会覆盖前面的属性

```js
const target = { a: 1, b: 1 };

const source1 = { b: 2, c: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
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
