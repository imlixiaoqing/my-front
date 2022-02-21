// gap
// var handler = {
//   get: function(target, name) {
//     if (name === 'prototype') {
//       return Object.prototype;
//     }
//     return 'Hello, ' + name;
//   },

//   apply: function(target, thisBinding, args) {
//     return args[0];
//   },

//   construct: function(target, args) {
//     return {value: args[1]};
//   }
// };

// var fproxy = new Proxy(function(x, y) {
//   return x + y;
// }, handler);

// fproxy(1, 2) // 1 apply
// new fproxy(1, 2) // {value: 2} construct
// fproxy.prototype === Object.prototype // true get
// fproxy.foo === "Hello, foo" // true get

// set
// const handler = {
//   set: function(obj, prop, value, receiver) {
//     obj[prop] = receiver;
//     return true;
//   }
// };
// const proxy = new Proxy({}, handler);
// const myObj = {};
// Object.setPrototypeOf(myObj, proxy);

// myObj.foo = 'bar';
// myObj.foo === myObj // true


// set
// 'use strict';
// const handler = {
//   set: function(obj, prop, value, receiver) {
//     obj[prop] = receiver;
//     // 无论有没有下面这一行，都会报错
//     return false;
//   }
// };
// const proxy = new Proxy({}, handler);
// proxy.foo = 'bar';


// gap
// var target = function () { return 'I am the target'; };
// var handler = {
//   apply: function () {
//     return 'I am the proxy';
//   }
// };
// var p = new Proxy(target, handler);
// p()
// // "I am the proxy"


// // gap
// var twice = {
//   apply (target, ctx, args) {
//     return Reflect.apply(...arguments) * 2;
//   }
// };
// function sum (left, right) {
//   return left + right;
// };
// var proxy = new Proxy(sum, twice);
// proxy(1, 2) // 6
// proxy.call(null, 5, 6) // 22
// proxy.apply(null, [7, 8]) // 30

// Reflect.apply(proxy, null, [9, 10]) // 38


// // gap
// var handler = {
//   has (target, key) {
//     if (key[0] === '_') {
//       return false;
//     }
//     return key in target;
//   }
// };
// var target = { _prop: 'foo', prop: 'foo' };
// var proxy = new Proxy(target, handler);
// '_prop' in proxy // false


// // gap
// let stu1 = {name: '张三', score: 59};
// let stu2 = {name: '李四', score: 99};
// let handler = {
//   has(target, prop) {
//     if (prop === 'score' && target[prop] < 60) {
//       return false;
//     }
//     return prop in target;
//   }
// }
// let oproxy1 = new Proxy(stu1, handler);
// let oproxy2 = new Proxy(stu2, handler);

// 'score' in oproxy1
// // 张三 不及格
// // false
// 'score' in oproxy2
// // true
// for (let a in oproxy1) {
// }
// // 张三
// // 59
// for (let b in oproxy2) {
// }
// // 李四
// // 99


// // gap
// var handler = {
//   deleteProperty (target, key) {
//     invariant(key, 'delete');
//     delete target[key];
//     return true;
//   }
// };
// function invariant (key, action) {
//   if (key[0] === '_') {
//     throw new Error(`Invalid attempt to ${action} private "${key}" property`);
//   }
// }
// var target = { _prop: 'foo' };
// var proxy = new Proxy(target, handler);
// delete proxy._prop
// // Error: Invalid attempt to delete private "_prop" property


// // gap
// var handler = {
//   defineProperty (target, key, descriptor) {
//     // target[key] = descriptor
//     return false;
//   }
// };
// var target = {};
// var proxy = new Proxy(target, handler);
// proxy.foo = 'bar' // 不会生效


// gap
var handler = {
  getOwnPropertyDescriptor (target, key) {
    if (key[0] === '_') {
      return;
    }
    return Object.getOwnPropertyDescriptor(target, key);
  }
};
var target = { _foo: 'bar', baz: 'tar' };
var proxy = new Proxy(target, handler);
Object.getOwnPropertyDescriptor(proxy, 'wat')
// undefined
Object.getOwnPropertyDescriptor(proxy, '_foo')
Object.getOwnPropertyDescriptor(proxy, '_foo')
Object.getOwnPropertyDescriptor(proxy, '_foo')
Object.getOwnPropertyDescriptor(proxy, '_foo')
Object.getOwnPropertyDescriptor(proxy, '_foo')
// undefined
// undefined
Object.getOwnPropertyDescriptor(proxy, 'baz')
// { value: 'tar', writable: true, enumerable: true, configurable: true }










