// 反轉三角形



// 結果與題目範例不合
function revTriangle(size) {
  let str = "";
  for (let i = 1; i <= size; i++) {
    for (let j = i; j <= size; j++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
}

revTriangle(5);
revTriangle(12);

// *****
// ****
// ***
// **
// *

// ************
// ***********
// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *