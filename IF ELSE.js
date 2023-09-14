let country = " Indonesia ";
let language = " Bahasa ";

if (country === " Inggris ") {
  language = " Good Morning ";
} else if (country === " Jerman ") {
  language = " Guten Morgen ";
} else if (country === " Indonesia ") {
  language = " Selamat Pagi ";
}

console.log(language);

//ternary operator
const isMember = true;
const discount = isMember ? 0.1 : 0; // validasi member jika YA maka 0.1 jika bukan 0

console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`);

//truthy dan falsy
//5 nilai falsy di boolean : 0, "", NaN, null , undefined
//semua nilai falsy yang ada di boolean dianggap false

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean("panjul"));

const uangNopal = undefined;

if (uangNopal) {
  console.log("nopal orang sukses"); //harus kondisi true
} else console.log("nopal lagi bokek");
