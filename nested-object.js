const nobin = {
  profession: "developer",
  age: 25,
  isMarred: false,
  girlFriend: ["Rupa", "Shila", "bisty", "batasa"],
  hobby: ["cow farm", "Pigeon Loft", "programming"],
  unique: {
    color: "white",
    brilliant: true,
    smart: true,
    education: {
      dawra: true,
      ssc: "gpa 5",
      jsc: "golden a+",
    },
  },
};

console.log(nobin.unique.education.dawra);
// bracket notation 
console.log(nobin['unique']['education']['dawra']);

nobin['unique']['education']['dawra'] = false;
console.log(nobin['unique']['education']['dawra']);

nobin['girlFriend'][4] = 'natasa'
console.log(nobin['girlFriend'])

delete nobin.girlFriend
console.log(nobin)