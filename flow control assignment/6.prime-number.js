// 質數 給定一個數，顯示出從 2 至此數所有的質數 給 11 要顯示 2, 3, 5, 7, 11
// 印不出2 多印出9
function isPrime(n) {
    for (let i = 2; i <= n; i++) {
      if ((n % i) == 0) {
        return false;
      }
      return true;
    }
}

function getPrime(num) {
  for (let j = 2; j <= num; j++) {
    if (isPrime(j)) {
      console.log(j);
    }
  }
}

getPrime(11);