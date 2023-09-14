let x = "nopal";
console.log(typeof x); //(typeoff) buat mengecek tipe data variable

//number
let a = 9;
let b = 10;

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);
console.log(a ** b);

//incerement decrement

let result = 10;

console.log(result++); //ditambahkan setelah console log berikutnya
console.log(result);

let result1 = 20;

console.log(++result1); //langgsung increment
console.log(--result1); //langgsung increment

//bigInt
const bigNumber = 1234567890123456789012345678901234567890n; //n sebagai penanda bigInt
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

const bigIntButSmall = 10n;
const bigIntButSmall1 = 8n;

console.log(bigIntButSmall + bigIntButSmall1);
console.log(bigIntButSmall - bigIntButSmall1);
console.log(bigIntButSmall / bigIntButSmall1); //tanpa desimal kalo bigint
console.log(bigIntButSmall * bigIntButSmall1);
console.log(bigIntButSmall % bigIntButSmall1);
console.log(bigIntButSmall * bigIntButSmall1);

//string concatenation
let backslash = '"I think it\'s awesome!" he answered confidently'; // backslash juga berguna untuk mengabaikan simbol lain yang menimbulkan ambigu di dalam string, contohnya seperti backslash itu sendiri.
console.log(backslash);

let name1 = "naufal";
console.log(`hai nama saya adalah ${name1}`);

//boolean
let bool = true;
console.log(typeof bool);

const nilai1 = 70;
const nilai2 = "70";

console.log(nilai1 === nilai2); //bandingkan nilai dan tipe data
console.log(nilai1 == nilai2);
console.log(nilai1 > nilai2);
console.log(nilai1 < nilai2);

//null
let contohNull = null;
console.log(contohNull);

//symbol
//meskipun kita membuat dua variabel symbol dengan nama atau deskripsi yang sama, kedua nilainya tetap dianggap berbeda.
const id1 = Symbol("nim");
const id2 = Symbol("nim");
console.log(id1 == id2);
