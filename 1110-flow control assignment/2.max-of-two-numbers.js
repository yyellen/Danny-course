// 比大小 給定兩個數，並找出哪個數字比較大

function numMax(num1, num2) {
  if (num1 > num2) {
    console.log(num1 + "比" + num2 + "大")
  } else if (num2 > num1) {
    console.log(num2 + "比" + num1 + "大")
  } else if (num2 === num1) {
    console.log(num1 + "和" + num2 + "一樣大")
  }
  else {
    console.log("無法比較")
  }
}

numMax(0, 1); // 1比0大
numMax(0, 1000000); // 1000000比0大
numMax(0, -1); // 0比-1大
numMax(0, -1000000); // 0比-1000000大
numMax(0, 0); // 0和0一樣大
numMax(0, "0"); // 無法比較
numMax(-100, -100); // -100和-100一樣大

// JavaScript 比大小：為何 1<2<3 為真，而 3>2>1 為否？ https://mike2014mike.github.io/work/2020/12/08/javascript-321-return-false/