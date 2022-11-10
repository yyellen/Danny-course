// // Arrow function
// // 定義name參數預設值為"John"
const sayHello = (name = "John") => {
  // // concat string
  // console.log("Hello " + name);
  // // concat string with template literal
  console.log(`Hello ${name}`);
}

sayHello("Danny"); // Hello Danny
sayHello(); // Hello John

// // ...Spread Operator 想要複製陣列的時候用
const arr1 = [1, 2, 3, 4];
// console.log(arr1); //  [1, 2, 3, 4]
// console.log(...arr1); // 1 2 3 4

// const arr2 = arr1;
// arr2.push(5);
// console.log(arr2); // [ 1, 2, 3, 4, 5 ]
// console.log(arr1); // [ 1, 2, 3, 4, 5 ]

const arr2 = [...arr1];
arr2.push(5);
console.log(arr2); // [ 1, 2, 3, 4, 5 ]
console.log(arr1); // [ 1, 2, 3, 4 ]

// // Destructing 拆開 可以一次取值
const users = ["Danny", "John", "Josh"];
const [user1, user2, user3] = users;
console.log(user1, user2, user3); // Danny John Josh

const person = {
  name: "Danny",
  age: 27
}
console.log(person); // { name: 'Danny', age: 27 }
const {age, name} = person;
console.log(age, name); // 27 Danny

// // 更名
const obj = {
  a: 123
}
const {a: b} = obj;
console.log(b); // 123
// console.log(a); // a is not defined，a已經被更名不存在