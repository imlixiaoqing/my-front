// let obj = {
//   a: 'a',
//   b: 'b',
//   c: 'c'
// }
// for (const item of obj) {
//   console.log('item :>> ', item);
// }

// gap
// class RangeIterator {
//   constructor(start, stop) {
//     this.value = start;
//     this.stop = stop;
//   }

//   [Symbol.iterator]() { return this; }

//   next() {
//     var value = this.value;
//     if (value < this.stop) {
//       this.value++;
//       return {done: false, value: value};
//     }
//     return {done: true, value: undefined};
//   }
// }

// function range(start, stop) {
//   return new RangeIterator(start, stop);
// }

// console.log('range(0, 3) :>> ', range(0, 3));

// for (var value of range(0, 3)) {
//   console.log(value); // 0, 1, 2
// }

// gap
// function Obj(value) {
//   this.value = value;
//   this.next = null;
// }
// Obj.prototype[Symbol.iterator] = function() {
//   var iterator = { next: next };

//   var current = this;

//   function next() {
//     if (current) {
//       var value = current.value;
//       current = current.next;
//       return { done: false, value: value };
//     }
//     return { done: true };
//   }
//   return iterator;
// }

// var one = new Obj(1);
// var two = new Obj(2);
// var three = new Obj(3);

// one.next = two;
// two.next = three;

// for (var i of one){
//   console.log(i); // 1, 2, 3
// }

// // gap
// let iterable = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   length: 3,
//   [Symbol.iterator]: Array.prototype[Symbol.iterator]
// };
// for (let item of iterable) {
//   console.log(item); // 'a', 'b', 'c'
// }

// gap
// const arr = ['red', 'green', 'blue'];

// for(let v of arr) {
//   console.log(v); // red green blue
// }

// const obj = {};
// obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr);

// for(let v of obj) {
//   console.log(v); // red green blue
// }

// arr.forEach(function (element, index) {
//   console.log(element); // red green blue
//   console.log(index);   // 0 1 2
// });

// gap
// var arr = ['a', 'b', 'c', 'd'];

// for (let a in arr) {
//   console.log(a); // 0 1 2 3
// }
// for (let a of arr) {
//   console.log(a); // a b c d
// }

// gap
// let arr = [3, 5, 7];
// arr.foo = 'hello';
// console.log('arr :>> ', arr);

// for (let i in arr) {
//   console.log(i); // "0", "1", "2", "foo"
// }

// for (let i of arr) {
//   console.log(i); //  "3", "5", "7"
// }

// gap
// var engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
// console.log('engines :>> ', engines);
// for (var e of engines) {
//   console.log(e);
// }

// var es6 = new Map();
// es6.set("edition", 6);
// es6.set("committee", "TC39");
// es6.set("standard", "ECMA-262");
// console.log('es6 :>> ', es6);
// for (var [name, value] of es6) {
//   console.log(name + ": " + value);
// }

// gap
let arr = ['a', 'b', 'c'];
console.log('arr :>> ', arr);
for (let pair of arr.entries()) {
  console.log(pair);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']