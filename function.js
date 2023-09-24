function contohFungsion() {
  console.log("helo");
}

contohFungsion(); //panggil func

//func kondisi if
function sayName(name, language) {
  if (language === "Indonesia") {
    console.log(`halo salam kenal ${name}`);
  } else if (language === "English") {
    console.log(`nice to meet you ${name}`);
  } else {
    console.log(`language not detection, sorry ${name}`);
  }
}

sayName("nopal", " ");

//func kondisi return
function penjumlahan(a, b, c) {
  return (a * b) / c;
}

let result = penjumlahan(20, 24, 10);
console.log(result);

function biodata(name, gender) {
  if (gender === "man") {
    return `anda saat ini gender ${gender} `;
  } else if (gender === "woman") {
    return `anda satt ini gender ${gender}`;
  } else {
    return `sebaiknya anda tobat ${name}`;
  }
}

let putBiodata = biodata("nopal", "man");
console.log(putBiodata);

//Expression Function (function di masukan ke variabel)
const ExpressionFunction = function (name, ucapankabar) {
  if (ucapankabar === "selamat datang gimana kabarnya ? ") {
    console.log(`${name} berasal dari Indonesia`);
  } else if (ucapankabar === " How are you ?") {
    console.log(`${name} berasal dari Inggris`);
  } else {
    console.log(`mohon maaf ${name} tidak dapat mendeteksi negara`);
  }
};

ExpressionFunction("nopal", "selamat datang gimana kabarnya ? ");
