const nobin = {
  profession: "developer",
  age: 25,
  isMarred: false,
  girlFriend: ["Rupa", "Shila", "bisty", "batasa"],
  hobby: ["cow farm", "Pigeon Loft", "programming"],
};

for (const prop in nobin) {
//   console.log(prop);
//   console.log(nobin[prop]);
}

const keys = Object.keys(nobin);
for (const ke of keys) {
  console.log(ke,':', nobin[ke]);
}


