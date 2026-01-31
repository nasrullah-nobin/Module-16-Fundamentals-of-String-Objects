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
madrasah.class = 2;
console.log(madrasah);
madrasah['teacher']= 'rohim gazi'
console.log(madrasah);

let prop = 'multimedia';
madrasah[prop] = false;
console.log(madrasah);