// class MyClass {
//   constructor() {
//     // ...
//   }
//   get prop() {
//     return 'getter';
//   }
//   set prop(value) {
//     console.log('%c [ value ]-9', 'font-size:13px; background:pink; color:#bf2c9f;', value)
//   }
//   get test() {
//     return 123;
//   }
//   set test(value) {
//     console.log('%c [ value ]-15', 'font-size:13px; background:pink; color:#bf2c9f;', value)
//   }
// }

// let inst = new MyClass();

// inst.prop = 123;
// // setter: 123

// inst.prop
// console.log('%c [ inst.prop ]-19', 'font-size:13px; background:pink; color:#bf2c9f;', inst.prop)
// // 'getter'

// inst.test = 'test'
// console.log('%c [ inst.test ]-30', 'font-size:13px; background:pink; color:#bf2c9f;', inst.test)

// gap
// class CustomHTMLElement {
//   constructor(element) {
//     this.element = element;
//   }

//   get html() {
//     return this.element.innerHTML;
//   }

//   set html(value) {
//     this.element.innerHTML = value;
//   }
// }

// var descriptor = Object.getOwnPropertyDescriptor(
//   CustomHTMLElement.prototype, "html"
// );
// console.log('%c [ descriptor ]-47', 'font-size:13px; background:pink; color:#bf2c9f;', descriptor)

// // "get" in descriptor  // true
// console.log('%c [ "get" in descriptor ]-52', 'font-size:13px; background:pink; color:#bf2c9f;', "get" in descriptor)
// // "set" in descriptor  // true
// console.log('%c [ "set" in descriptor ]-54', 'font-size:13px; background:pink; color:#bf2c9f;', "set" in descriptor)

// gap
class Logger {
  printName(name = 'there') {
    console.log('%c [ this ]-61', 'font-size:13px; background:pink; color:#bf2c9f;', this)
    this.print(`Hello ${name}`);
  }

  print(text) {
    console.log(text);
  }
}

const logger = new Logger();
logger.printName()
const { printName } = logger;
printName(); // Uncaught TypeError: Cannot read properties of undefined (reading 'print')