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

数组的处理

```js
Object.assign([1, 2, 3], [4, 5])
// [4, 5, 3]
```

取值函数的处理

```js
const source = {
  get foo() { return 1 }
};
const target = {};

Object.assign(target, source)
// { foo: 1 }
```

#### Object.getOwnPropertyDescriptors()

返回指定对象所有自身属性（非继承属性）的描述对象

#### Object.setPrototypeOf

#### Object.getPrototypeOf()

#### Object.keys()

```js
var obj = { foo: 'bar', baz: 42 };
Object.keys(obj)
// ["foo", "baz"]
```

#### Object.values()

```js
const obj = { foo: 'bar', baz: 42 };
Object.values(obj)
// ["bar", 42]
```

#### Object.entries()

```js
const obj = { foo: 'bar', baz: 42 };
Object.entries(obj)
// [ ["foo", "bar"], ["baz", 42] ]
```

#### Object.fromEntries()

```js
Object.fromEntries([
  ['foo', 'bar'],
  ['baz', 42]
])
// { foo: "bar", baz: 42 }
```

### 运算符

#### 指数运算符

```js
let a = 1.5;
a **= 2;
// 等同于 a = a * a;

let b = 4;
b **= 3;
// 等同于 b = b * b * b;
```

#### 链判断运算符(?.)

链判断运算符`?.`有三种写法

- `obj?.prop` // 对象属性是否存在
- `obj?.[expr]` // 同上
- `func?.(...args)` // 函数或对象方法是否存在

读取对象内部的某个属性，往往需要判断一下，属性的上层对象是否存在

```js
const firstName = (message
  && message.body
  && message.body.user
  && message.body.user.firstName) || 'default';

const firstName = message?.body?.user?.firstName || 'default';
const fooValue = myForm.querySelector('input[name=foo]')?.value
```

对于那些可能没有实现的方法

```js
if (myForm.checkValidity?.() === false) {
  // 表单校验失败
  return;
}
```

#### Null 判断运算符

如果某个属性的值是`null`或`undefined`，有时候需要为它们指定默认值

```js
// 开发者的原意是，只要属性的值为null或undefined，默认值就会生效，但是属性的值如果为空字符串或false或0，默认值也会生效

const headerText = response.settings.headerText || 'Hello, world!';
const animationDuration = response.settings.animationDuration || 300;
const showSplashScreen = response.settings.showSplashScreen || true;
```

```js
// 只有运算符左侧的值为null或undefined时，才会返回右侧的值

const headerText = response.settings.headerText ?? 'Hello, world!';
const animationDuration = response.settings.animationDuration ?? 300;
const showSplashScreen = response.settings.showSplashScreen ?? true;
```

```js
// 如果response.settings是null或undefined，或者response.settings.animationDuration是null或undefined，就会返回默认值300
const animationDuration = response.settings?.animationDuration ?? 300;
```

#### 逻辑赋值运算符

将逻辑运算符与赋值运算符进行结合

```js
// 或赋值运算符
x ||= y
// 等同于
x || (x = y)

// 与赋值运算符
x &&= y
// 等同于
x && (x = y)

// Null 赋值运算符
x ??= y
// 等同于
x ?? (x = y)
```

```js
// 为变量或属性设置默认值

// 老的写法
user.id = user.id || 1;
// 新的写法
user.id ||= 1;

function example(opts) {
  opts.foo = opts.foo ?? 'bar';
  opts.baz ?? (opts.baz = 'qux');
}

function example(opts) {
  opts.foo ??= 'bar';
  opts.baz ??= 'qux';
}
```

### Symbol

```js
let s = Symbol();

typeof s
// "symbol"

let s1 = Symbol('foo');
let s2 = Symbol('bar');

s1 // Symbol(foo)
s2 // Symbol(bar)

s1.toString() // "Symbol(foo)"
s2.toString() // "Symbol(bar)"
```

#### 属性名 Symbol 

```js
let mySymbol = Symbol();

// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
let a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"
```

Symbol 值作为对象属性名时，不能用点运算符

```js
const mySymbol = Symbol();
const a = {};

a.mySymbol = 'Hello!';
a[mySymbol] // undefined
a['mySymbol'] // "Hello!"
```

#### Symbol.for()

#### Symbol.keyFor()

```js
Symbol.for("bar") === Symbol.for("bar")
// true

Symbol("bar") === Symbol("bar")
// false
```

#### Symbol.isConcatSpreadable

```js
let arr1 = ['c', 'd'];
['a', 'b'].concat(arr1, 'e') // ['a', 'b', 'c', 'd', 'e']
arr1[Symbol.isConcatSpreadable] // undefined

let arr2 = ['c', 'd'];
arr2[Symbol.isConcatSpreadable] = false;
['a', 'b'].concat(arr2, 'e') // ['a', 'b', ['c','d'], 'e']
```

类似数组的对象正好相反

```js
let obj = {length: 2, 0: 'c', 1: 'd'};
['a', 'b'].concat(obj, 'e') // ['a', 'b', obj, 'e']

obj[Symbol.isConcatSpreadable] = true;
['a', 'b'].concat(obj, 'e') // ['a', 'b', 'c', 'd', 'e']
```

#### Symbol.species

指向一个构造函数。创建衍生对象时，会使用该属性

#### Symbol.toStringTag

```js
({[Symbol.toStringTag]: 'Foo'}.toString())
// "[object Foo]"
```

### Set

类似于数组，但是成员的值都是唯一的，没有重复的值

```js
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}
// 2 3 5 4
```

```js
// 例一
const set = new Set([1, 2, 3, 4, 4]);
[...set]
// [1, 2, 3, 4]

// 例二
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
items.size // 5
```

作用

```js
// 去除数组的重复成员
[...new Set(array)]

[...new Set('ababbc')].join('')
// "abc"
```

`Array.from`方法可以将 Set 结构转为数组

```js
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);

// 去除数组重复成员
function dedupe(array) {
  return Array.from(new Set(array));
}

dedupe([1, 1, 2, 3]) // [1, 2, 3]
```

#### 遍历操作 

**`keys()`，`values()`，`entries()`**

由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以`keys`方法和`values`方法的行为完全一致

```js
let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]
```

Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的`values`方法

```js
let set = new Set(['red', 'green', 'blue']);

for (let x of set) {
  console.log(x);
}
// red
// green
// blue
```

#### **遍历的应用**

扩展运算符（`...`）内部使用`for...of`循环，所以也可以用于 Set 结构

```js
let set = new Set(['red', 'green', 'blue']);
let arr = [...set];
// ['red', 'green', 'blue']

// 去除数组的重复成员
let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)];
// [3, 5, 2]
```

数组的`map`和`filter`方法也可以间接用于 Set 

```js
let set = new Set([1, 2, 3]);
set = new Set([...set].map(x => x * 2));
// 返回Set结构：{2, 4, 6}

let set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter(x => (x % 2) == 0));
// 返回Set结构：{2, 4}
```

使用 Set 可以很容易地实现并集（Union）、交集（Intersect）和差集

```js
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// （a 相对于 b 的）差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}
```

#### WeakSet

WeakSet 的成员只能是对象

#### Map

类似于对象，各种类型的值（包括对象）都可以当作键

```js
const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false
```

接受一个数组作为参数, 数组的成员是一个个表示键值对的数组

```js
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);

map.size // 2
map.has('name') // true
map.get('name') // "张三"
map.has('title') // true
map.get('title') // "Author"
```

#### WeakMap

`WeakMap`只接受对象作为键名（`null`除外），不接受其他类型的值作为键名

`WeakMap`的专用场合就是，它的键所对应的对象，可能会在将来消失。`WeakMap`结构有助于防止内存泄漏

#### WeakRef

#### FinalizationRegistry

### Proxy(拦截)

```js
var proxy = new Proxy(target, handler);
```

#### apply()

`apply`方法拦截函数的调用、`call`和`apply`操作。

#### has()

### Reflect(赋值)

#### Reflect.get

#### Reflect.set

#### Reflect.has

`Reflect.has`方法对应`name in obj`里面的`in`运算符。

```js
var myObject = {
  foo: 1,
};

// 旧写法
'foo' in myObject // true

// 新写法
Reflect.has(myObject, 'foo') // true
```

#### Reflect.deleteProperty

`Reflect.deleteProperty`方法等同于`delete obj[name]`，用于删除对象的属性。

```js
const myObj = { foo: 'bar' };

// 旧写法
delete myObj.foo;

// 新写法
Reflect.deleteProperty(myObj, 'foo');
```

#### Reflect.construct

#### Reflect.getPrototypeOf

#### Reflect.setPrototypeOf(obj, newProto)

#### Reflect.apply

#### Reflect.defineProperty

```js
function MyDate() {
  /*…*/
}

// 旧写法
Object.defineProperty(MyDate, 'now', {
  value: () => Date.now()
});

// 新写法
Reflect.defineProperty(MyDate, 'now', {
  value: () => Date.now()
});
```

#### Reflect.getOwnPropertyDescriptor

#### Reflect.isExtensible

#### Reflect.preventExtensions

#### Reflect.ownKeys (target)

```js
var myObject = {
  foo: 1,
  bar: 2,
  [Symbol.for('baz')]: 3,
  [Symbol.for('bing')]: 4,
};

// 旧写法
Object.getOwnPropertyNames(myObject)
// ['foo', 'bar']

Object.getOwnPropertySymbols(myObject)
//[Symbol(baz), Symbol(bing)]

// 新写法
Reflect.ownKeys(myObject)
// ['foo', 'bar', Symbol(baz), Symbol(bing)]
```

### Promise

异步编程

异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数

* pending
* fulfilled
* rejected

#### Promise.all()

### Iterator

### Generator

### Async

### Class

### Module

### 异步遍历器

```javascript
async function f() {
  for await (const x of createAsyncIterable(['a', 'b'])) {
    console.log(x);
  }
}
// a
// b
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

#### 普通函数

#### async 函数

#### Generator 函数

#### 异步 Generator 函数

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
