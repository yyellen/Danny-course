// 反轉三角形

// 跑不出期望結果
function reverseTriangle(size) {
  let str = "";
  for (let i = 0; i < size; i++) {
    let space = "";
    for (let j = 1; j < size; j++) {
      space += " ";
    }
    let star = "";
    for (let k = size; k > 0; k--) {
      star += "*";
    }
    str += space + star + "\n";
  }
  console.log(str);
}

reverseTriangle(5);


// 學到另一種寫法-repeat
function reverseTriangleRepeat(size){
  for (let i = 0; i <= size; i++) {
    let space = " ";
    let star = "*";
    console.log(`${space.repeat(i)}${star.repeat(size-i)}`);
  }
}

reverseTriangleRepeat(5);
reverseTriangleRepeat(12);

// *****
//  ****
//   ***
//    **
//     *
     
// ************
//  ***********
//   **********
//    *********
//     ********
//      *******
//       ******
//        *****
//         ****
//          ***
//           **
//            *

// 結果與題目範例不合
// function revTriangle(size) {
//   let str = "";
//   for (let i = 1; i <= size; i++) {
//     for (let j = i; j <= size; j++) {
//       str += "*";
//     }
//     str += "\n";
//   }
//   console.log(str);
// }

// revTriangle(5);
// revTriangle(12);

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