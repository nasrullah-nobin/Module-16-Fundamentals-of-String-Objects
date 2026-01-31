// // task 01
// const colors = {
//   red: "#ff0000",
//   green: "#00ff00",
//   blue: "#0000ff",
//   "golden rod": "#daa520",
// };
// console.log(colors["golden rod"]);

// task 02
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
car["passenger capacity"] = 5;
console.log(car);
// // task 03
// const student = {
//   name: "Hamim Sakep",
//   id: 5421,
//   physics: {
//     subject: "HSC Physics",
//     author: "Shahjahan Tapan",
//     marks: 30,
//   },
// };

// console.log(student.physics.marks);

// task 04
// let student = {
//   name: "Ariana Grande",
//   age: 21,
//   city: "Gaibandha",
//   isStudent: true,
// };
// //Method 01
// const n = Object.keys(student);
// console.log(n.length);

// //Method 02
// const num = Object.entries(student);
// console.log(num.length);

//Method 03
// let num = 0;
// for (const number in student) {
//   num++;
// }
// console.log(num);

// task 05

// let myObject = {
//   name: "John Doe",
//   age: 25,
//   city: "Example City",
//   isStudent: true,
// };
// // Method 01
// for (const keys in myObject) {
//   console.log("keys:", keys, "type:", typeof myObject[keys]);
// }
// // Method 02
// const key = Object.keys(myObject);
// const value = Object.values(myObject);
// for (let i = 0; i < key.length; i++) {
//   console.log("keys:", key[i], "type:", typeof value[i]);
// }
