//destcruction asignment object
const contoh = {
  warna: "hitam",
  bentuk: "bulat",
};

//data coba diubah
let bentuk = "persegi";
let warna = "hijau";

({ warna, bentuk } = contoh); //destruction assignment(print data di awal)

console.log(warna);
console.log(bentuk);
console.log(" ");

//destruction asignment array

const buah = ["apel", "jeruk", "mangga"];

//data coba diubah
let namaBuah = "nanas";
let namaBuah1 = "salak";
let namaBuah2 = "semangka";

[namaBuah, namaBuah1, namaBuah2] = buah;

console.log(namaBuah);
console.log(namaBuah1);
console.log(namaBuah2);
console.log(" ");

//tukar/swap value
let a = 1;
let b = 2;

console.log("sebelum di swap ");
console.log("nilai a = " + a);
console.log("nilai b = " + b);

//swap
[a, b] = [b, a];
console.log("setelah di swap ");
console.log("nilai a = " + a);
console.log("nilai b = " + b);
