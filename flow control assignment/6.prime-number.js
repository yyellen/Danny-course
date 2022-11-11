// 質數 給定一個數，顯示出從 2 至此數所有的質數 給 11 要顯示 2, 3, 5, 7, 11

// 老師解答
function primeNumbers(num) {
  let result = [];
  for (let i = 2; i < num; i++) {
    let isPrime = true;
    if (i === 2) {
      result.push(2);
    } else { for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        // 這個數字不是質數
        isPrime = false;
      }
    }}
    if (isPrime && i != 2) {
      result.push(i);
    }
  }
  
  console.log(result);
}

primeNumbers(11); // [ 2, 3, 5, 7 ]
primeNumbers(1); // []
// primeNumbers(10000);


// // 變成印奇數..
// function isPrime(n) {
//     for (let i = 2; i <= n; i++) {
//       if ((n % i) == 0) {
//         return false;
//       }
//       return true;
//     }
// }

// function getPrime(num) {
//   for (let j = 2; j <= num; j++) {
//     if (isPrime(j)) {
//       console.log(j);
//     }
//   }
// }

// getPrime(11);

// 3
// 5
// 7
// 9
// 11