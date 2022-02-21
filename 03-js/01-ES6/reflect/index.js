// var myObject = {
//   foo: 1,
//   bar: 2,
//   get baz() {
//     return this.foo + this.bar;
//   },
// }

// Reflect.get(myObject, 'foo') // 1
// Reflect.get(myObject, 'bar') // 2
// Reflect.get(myObject, 'baz') // 3

// // gap
// var myObject = {
//   foo: 1,
//   bar: 2,
//   get baz() {
//     return this.foo + this.bar;
//   },
// };

// var myReceiverObject = {
//   foo: 4,
//   bar: 4,
// };

// Reflect.get(myObject, 'baz', myReceiverObject) // 8

// // gap
// var myObject = {
//   foo: 1,
//   set bar(value) {
//     return this.foo = value;
//   },
// }

// myObject.foo // 1

// Reflect.set(myObject, 'foo', 2);
// myObject.foo // 2

// Reflect.set(myObject, 'bar', 3)
// myObject.foo // 3

// // gap
// var myObject = {
//   foo: 4,
//   set bar(value) {
//     return this.foo = value;
//   },
// };

// var myReceiverObject = {
//   foo: 0,
// };

// Reflect.set(myObject, 'bar', 1, myReceiverObject);
// myObject.foo // 4
// myReceiverObject.foo // 1

// gap
const queuedObservers = new Set();

const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, {set});

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queuedObservers.forEach(observer => observer());
  return result;
}

const person = observable({
  name: '张三',
  age: 20
});

function print() {
  console.log(`${person.name}, ${person.age}`)
}

observe(print);
person.name = '李四';
// 输出
// 李四, 20