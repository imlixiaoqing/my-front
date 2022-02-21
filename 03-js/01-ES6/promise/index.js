// const promise = new Promise(function(resolve, reject) {
//   // ... some code
//   let a = 0
//   /* 异步操作成功 */
//   if (a > 0) {
//     resolve(a);
//   } else {
//     reject('error');
//   }
// });

// promise.then(function(value) {
//   // success
//   console.log('value :>> ', value);
// }, function(error) {
//   // failure
//   console.log('error :>> ', error);
// });

// gap
// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done');
//   });
// }
// timeout(1000).then((value) => {
//   console.log(value);
// }, (error) => {
//   console.log('error :>> ', error);
// });

// gap
// function loadImageAsync(url) {
//   return new Promise(function(resolve, reject) {
//     const image = new Image();

//     image.onload = function() {
//       resolve(image);
//     };

//     image.onerror = function() {
//       reject(new Error('Could not load image at ' + url));
//     };

//     image.src = url;
//   });
// }
// loadImageAsync('123').then((value) => {
//   console.log('value :>> ', value);
// }, (error) => {
//   console.log('error :>> ', error);
// })

// gap
// const getJSON = function(url) {
//   const promise = new Promise(function(resolve, reject){
//     const handler = function() {
//       if (this.readyState !== 4) {
//         return;
//       }
//       if (this.status === 200) {
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     };
//     const client = new XMLHttpRequest();
//     client.open("GET", url);
//     client.onreadystatechange = handler;
//     client.responseType = "json";
//     client.setRequestHeader("Accept", "application/json");
//     client.send();

//   });

//   return promise;
// };

// getJSON("/posts.json").then(function(json) {
//   console.log('Contents: ' + json);
// }, function(error) {
//   console.error('出错了', error);
// });

// gap
// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error('fail')), 3000)
// })

// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(p1), 1000)
// })

// p2
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
// p2.then(
//   result => console.log(result),
//   error => console.log(error)
// )
// // Error: fail
// setTimeout(() => {
//   console.log('test :>> ', 'test');
// }, 3000)

// gap
// const someAsyncThing = function() {
//   return new Promise(function(resolve, reject) {
//     // 下面一行会报错，因为x没有声明
//     resolve(x + 2);
//   });
// };
// someAsyncThing().then(function() {
//   console.log('everything is great');
// });
// setTimeout(() => { console.log(123) }, 2000);

// gap
// const promise = new Promise(function (resolve, reject) {
//   resolve('ok');
//   setTimeout(function () { throw new Error('test') }, 0)
// });
// promise.then(function (value) { console.log(value) });
// console.log('2 :>> ', 2);
// setTimeout(function () { console.log(3) }, 0)

// gap
// const someAsyncThing = function() {
//   return new Promise(function(resolve, reject) {
//     // 下面一行会报错，因为x没有声明
//     resolve(x + 2);
//   });
// };

// someAsyncThing()
// .catch(function(error) {
//   console.log('oh no', error);
// })
// .then(function() {
//   console.log('carry on');
// });
// // oh no [ReferenceError: x is not defined]
// // carry on

// gap
// const p1 = new Promise((resolve, reject) => {
//   resolve('hello');
// })
// .then(result => result)
// .catch(e => e);

// const p2 = new Promise((resolve, reject) => {
//   throw new Error('报错了');
// })
// .then(result => result)
// .catch(e => e);

// Promise.all([p1, p2])
// .then(result => console.log(result))
// .catch(e => console.log(e));
// // ["hello", Error: 报错了]

// gap
// const p1 = new Promise((resolve, reject) => {
//   console.log('1 :>> ', 1);
//   setTimeout(() =>console.log('3 :>> ', 3))
//   resolve('hello');
// })
// .then(result => result);

// const p2 = new Promise((resolve, reject) => {
//   console.log('2 :>> ', 2);
//   setTimeout(() =>console.log('4 :>> ', 4))
//   throw new Error('报错了');
// })
// .then(result => result);

// Promise.all([p1, p2])
// .then(result => console.log(result))
// .catch(e => console.log(e));
// // Error: 报错了

// gap
// const p = Promise.race([
//   fetch('/resource-that-may-take-a-while'),
//   new Promise(function (resolve, reject) {
//     setTimeout(() => reject(new Error('request timeout')), 5000)
//   })
// ]);

// p
// .then(console.log)
// .catch(console.error);
