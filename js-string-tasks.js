// task 01
// const mission = "i Am learning web dev";
// let result = 0;
// for (const count of mission) {
//   if (count.toLowerCase() === "a") {
//     result++;
//   }
// }
// console.log(result);

// Method 02 using for loop
// let res = 0;
// for (let i = 0; i < mission.length; i++) {
//   if (mission[i].toLowerCase() === "a") {
//     res++;
//   }
// }
// console.log(res);

// task 03
// const vowels = ["a", "e", "i", "o", "u"];
// const str = "l";
// let result = true;

// for (const v of vowels) {
//   if (!str.includes(v)) {
//     result = false;
//     break;
//   }
// }

// console.log(result);

let str = "exist";
let result = str;
  if (result.includes("x")) {
    result = str.replaceAll("x", "y");
  }if (result.includes("X")) {
    result = str.replaceAll("X", "Y");
  }
console.log(result);
