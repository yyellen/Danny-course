console.log("Hello Module");

// import { add, sub, mul, div } from "./calculate.js"; // 不是default就要用{}且必須要根據原先命名
// import test from "./calculate.js"; // dafault不用{}且可自行命名
import test, { add, sub, mul, div } from "./calculate.js"; // 寫成一行

console.log(add(8, 4)); // 12
console.log(sub(8, 4)); // 4
console.log(mul(8, 4)); // 32
console.log(div(8, 4)); // 2

test(); // This is a calculate function.