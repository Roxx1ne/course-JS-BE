let contohSpread = ["nopal", 21, false, "pentol"];

console.log(contohSpread);
console.log(...contohSpread);

let jenisAir = ["panas", "dingin", "biasa"];
let jenisMinuman = ["kopi", "air biasa", "softdrink"];

let minuman = [jenisAir, jenisMinuman];
let minuman1 = [...jenisAir, ...jenisMinuman];

console.log(minuman);
console.log(" ");
console.log(minuman1);

//bisa untuk gabungkan beberapa object

const obj1 = { firstName: "Obi-Wan", age: 30 };
const obj2 = { lastName: "Kenobi", gender: "M" };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);
