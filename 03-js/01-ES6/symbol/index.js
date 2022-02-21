// 1
let size = Symbol('size');

class Collection {
  constructor() {
    this[size] = 0;
    // Symbol('size') - 0
  }

  add(item) {
    this[this[size]] = item;
    // 0 - item
    this[size]++;
    // Symbol('size') - 1
  }

  static sizeOf(instance) {
    return instance[size];
  }
}

let x = new Collection();
Collection.sizeOf(x) // 0
x.add('foo') // 1

Object.keys(x) // ['0']
Object.getOwnPropertyNames(x) // ['0']
Object.getOwnPropertySymbols(x) // [Symbol(size)]

// 2
// mod.js
function A() {
  this.foo = 'hello';
}

// if (!global._foo) {
//   global._foo = new A();
// }


// mod.js
const FOO_KEY = Symbol('foo');

function A() {
  this.foo = 'hello';
}

// if (!global[FOO_KEY]) {
//   global[FOO_KEY] = new A();
// }

// module.exports = global[FOO_KEY];

// 3

let obj = {
  a: 'a',
  [Symbol.toStringTag]: 'b'
}
console.log('obj :>> ', obj.toString());
