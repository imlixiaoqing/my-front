// export var firstName = 'Michael';
// export var lastName = 'Jackson';
// export var lastName = 'Jackson';
// // or
// var firstName = 'Michael';
// var lastName = 'Jackson';
// var year = 1958;
// export { firstName, lastName, year };

// gap
// export function multiply(x, y) {
//   return x * y;
// };
// // or
// function multiply(x, y) {
//   return x * y;
// };
// export { multiply };
// // or
// export {
//   multiply as v1,
//   multiply as v2
// };

// gap
export default function () {
  console.log('foo');
}
// or
export default function foo() {
  console.log('foo');
}
// or
function foo() {
  console.log('foo');
}
export default foo;

// export default命令的本质是将后面的值，赋给default变量