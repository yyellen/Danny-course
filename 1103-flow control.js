// // function
// function pee() {
//   console.log("上廁所");
// }

// function brush() {
//   console.log("刷刷牙")
// }

// pee();
// brush();

// function calculatePrice(quantity, unitPrice) {
//   // 用const確保不會有被改變的風險
//   const price = quantity * unitPrice;
//   return price;
// }

// const try1 = calculatePrice(5, 120);
// // try是保留名稱不能用
// console.log(try1);


// // if...elseif...else
// let score = 900;

// if (score >= 90 ) {
//   console.log("Good job!");
// } else if (score >= 60 && score <90) {
//   console.log("Nice!");
// } else {
//   console.log("Keep it up!");
// }


// // ternary operator
// let score = 70;
// const isPass = score >= 60 ? "Pass" : "Fail";
// console.log(isPass);


// // switch case 不加break會繼續執行
// const num = 1;

// switch (num) {
//   case 1:
//     console.log("一")
//     // break;
//   case 2:
//     console.log("二")
//     // break;
//   case 3:
//     console.log("三")
//     // break;
//   case 4:
//     console.log("四")
//     // break;
//   default:
//     console.log("預設")
//     // break;
// }


// // for loop
// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   console.log("Hello World");
// }

// // while loop 一定要定義好<的條件並確定條件會發生，不然會無限迴圈
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   console.log("Hello World");
//   i++;
// }

// // do..while loop 無論如何永遠會執行第一次的結果
// let i = 0;
// do {
//   console.log(i);
//   console.log("Hello World");
//   i++;
// } while (i < 10);

// // for...in loop
// let Ellen = {
//   name: 'Ellen',
//   age: 27,
//   premium: false
// }

// for (ellenProperty in Ellen) {
//   // console.log(ellenProperty);
//   console.log(Ellen[ellenProperty]); // 存取物件裡面屬性的值 [屬性]
// }

// // for..of loop
// const sentence = "Dannyisadog"
// for (char of sentence) {
//   console.log(char);
// }

// const friends = ['Danny', 'Josh', 'Jean', 'Max'];
// for (friend of friends) {
//   console.log(friend);
// }

// // forin拿key，forof拿value

// // forEach和map的差別
// // map是return一個新的array
const users = ["Danny", "Josh", "Abby"];

users.forEach(function(user, index) {
  console.log(user);
  console.log(index);
});

const newUsers = users.map(function (user, index) {
  return user + "!";
})

console.log(newUsers);


// // Array Basic
// // 新增push
// const array1 = [];

// array1.push("Danny");
// array1.push("Josh");

// const array2 = [1, 2, 3, "Apple", "Banana"];

// array2.push(true);
// array2.push(false);
// array2.push(array1);
// console.log(array2);

// // 查詢indexOf
// const users = ["Danny", "Josh", "Abby"];

// const newUser1 = "Abby";
// const newUser2 = "Aaron";

// const findUser1 = users.indexOf(newUser1);
// console.log(findUser1); // 2

// const findUser2 = users.indexOf(newUser2);
// console.log(findUser2); // -1 找不到就是-1

// // 刪除splice
// const numbers = [1, 2, 3, 4, 5, 6, 7];

// numbers.splice(0, 1);
// console.log(numbers);

// numbers.splice(4, 2);
// console.log(numbers);

// // splice和slice 浪live會考
// // https://medium.com/@bebebobohaha/slice-splice-split-%E5%82%BB%E5%82%BB%E5%88%86%E4%B8%8D%E6%B8%85-46d9c8992729
