//destructuring array

const mhs = ["nopal", "aulio", "sopian"];

let [a, b, c] = mhs; //dessctruction

console.log(a);
console.log(b);
console.log(c);

//destruction object

const biodataMhs = {
  fullname: " nopal",
  lastname: "aulio",
  age: 21,
  "carrer now": "college",
};

const {
  fullname,
  lastname,
  jurusan = "IT", //default value/nambah value
  /* inisialisasi*/ age: umur,
  ["carrer now"]: carrer,
} = biodataMhs; //destruction

console.log(fullname, lastname, jurusan, umur, carrer);
