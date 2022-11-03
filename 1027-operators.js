let name = 'Ellen';
let age = 27;
const PI = 3.14;

let friends = ['Danny', 'Josh', 'Jean', 'Max'];

let Ellen = {
  name: 'Ellen',
  age: 27,
  premium: false
} 

function sayHello() {
  console.log('Hello World!');
}

// let a = 5;
// let b = 3;
// console.log ( a + b ); // 8
// console.log ( a - b ); // 2
// console.log ( a * b ); // 15
// console.log ( a / b ); // 1.66
// console.log ( a % b ); // 2
// console.log ( a ** b ); // 125
// console.log(a++); // 5，先顯示a才+1
// console.log(a); // 6
// console.log(++a); // 7，先+1才顯示a
// console.log(a--); // 7，先顯示a才-1
// console.log(a); // 6
// console.log(--a); // 5，先-1才顯示a
// b = a;
// console.log(b);

// let num = 100;
// console.log(num > 100); // false
// console.log(num > 99); // true
// console.log(num < 101); // true
// console.log(num >= 100); // true
// console.log(num <= 99); // false
// console.log(num === 100); // true
// console.log(num !== 100); // false

// let num = 1;
// let numStr = '1';
// console.log(num == numStr); // true
// console.log(num === numStr); // false
// console.log(1 == true) // true
// console.log(1 === true) // false
// // 判斷最好都用===

// // &&: 全部通過檢查
// // ||: 只要其中一個值通過
// console.log(true && false && true && true) // false
// console.log(true && true && true && true) // true
// console.log(false || false || false || true) // true
// console.log(false || false || false || false) // false
// let num = 3;
// console.log(!num) // false，原本存在的東西變不存在
// result = true || false // true
// console.log(!result) // false
// console.log(!!result) // true

let x = 10;
let y = 6;

let t = x;
x = y;
y = t;

console.log(x);
console.log(y);