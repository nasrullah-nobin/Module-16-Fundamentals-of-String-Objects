// sadharon data type ke bola hoi primitive jemon: string boolean numbers
// ar object ke bola hoi non primitive data type: karon ekhani mix data rakha jai

const madrasah = {
  class: 1,
  student: 20,
  teacher: "Rashed karim",
  mam: "rumana",
  'student Name': {
    id1: "jabed",
    id2: "sikandar",
    id3: "rohim munshi",
  },
  multimedia: true,

};


// console.log(madrasah);
// console.log(madrasah.mam)
// console.log(madrasah.studentName.id3)
// console.log(madrasah['mam']);
console.log(madrasah['student Name']['id3']);
console.log(madrasah['student Name'].id3);
