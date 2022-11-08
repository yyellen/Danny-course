// 三角形

function triangle(size) {
  let str = "";
  for (let i = 1; i <= size; i++) {
    str += "*";
    console.log(str);
  }
}

triangle(5);
triangle(12);

// *
// **
// ***
// ****
// *****
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
// ***********
// ************

// 學到另一種寫法-repeat
function triangleRepeat(size) {
  for (let i = 1; i <= size; i++) {
    let star = "*";
    console.log(`${star.repeat(i)}`);
  }
}

triangleRepeat(5);
triangleRepeat(12);

// *
// **
// ***
// ****
// *****
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
// ***********
// ************


// 另一種寫法-Nested loop
function triangleNested(size) {
  let strr = "";
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= i; j++) {
      strr += "*";
    }
    strr += "\n";
  }
  console.log(strr);
}

triangleNested(5);
triangleNested(12);

// *
// **
// ***
// ****
// *****

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
// ***********
// ************