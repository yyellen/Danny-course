// 奇數或偶數 給定一個數，並判斷此數為奇數或偶數

function numOddEven (num) {
  if ((num % 2) === 1) {
    console.log(num + "是奇數");
  } else if ((num % 2) === -1) {
    console.log(num + "是奇數");
  } else if ((num % 2) === 0) {
    console.log(num + "是偶數");
  }
  else {
    console.log("無法判斷");
  }
}

numOddEven(0); // 0是偶數
numOddEven(1); // 1是奇數
numOddEven(2); // 2是偶數
numOddEven(3); // 3是奇數
numOddEven(100000); // 100000是偶數
numOddEven(1111111);  // 1111111是奇數
numOddEven(-1); // -1是奇數
numOddEven(-2); // -2是偶數
numOddEven(-100000); // -100000是偶數
numOddEven(-1111111); // -1111111是奇數
numOddEven(0.1); // 無法判斷(小數沒有奇數偶數之分)


// 另一種寫法
function oddOrEven(num) {
  const result = (num % 2) === 0 ? "偶數" : "奇數";
  console.log(num + result);
}

oddOrEven(0);
oddOrEven(1);
oddOrEven(2);
oddOrEven(-1);
oddOrEven(100000);
oddOrEven(1111111);
oddOrEven(-100000);
oddOrEven(-1111111);
oddOrEven(0.1);

// 0偶數
// 1奇數
// 2偶數
// -1奇數
// 100000偶數
// 1111111奇數
// -100000偶數
// -1111111奇數
// 0.1奇數