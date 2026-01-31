// // const friend = ['rohim', 'kahim', 'mahim'];
// // console.log(friend.reverse());

// //reverse jodi string e korte chai tahole kaj korbe na
// const sentence = 'I am learning web dev';
// // console.log(sentence.reverse()); // error dia dibe

// // kaj kora te chaile ekta string ke array te convert korte hobe
// const arr = sentence.split('');
// // ekhn reverse korte hobe
// const riv = arr.reverse();
// // erpor abr string e convert korte hobe
// const str = arr.join('');
// console.log(str);

// ai puru kaj ta ek line o kora jai \
// const sentence = 'I am learning web dev';
// const reverse = sentence.split(' ').reverse().join(' ');
// console.log(reverse);

// const sentence = 'I am learning web dev';
// let reverse = '';
// for(const letter of sentence){
//     reverse = letter + reverse
// }
// console.log(reverse);

const sentence = "I am learning web dev";
let reverse = "";
for (let i = 0; i < sentence.length; i++) {
  reverse = sentence[i] + reverse;
}
console.log(reverse);
