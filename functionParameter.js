//object menggunakan functionParameter

const person = {
  name: "nopal",
  "born & date ": "Jakarta, 25-12-2002",
  gender: "man",
};

function biodata({
  name: nama,
  gender: kelamin,
  "born & date ": tempatTglLahir,
}) {
  console.log(`${nama} gender : ${kelamin} Tanggal lahir : ${tempatTglLahir}`);
}

//memanggil fungsi
biodata(person);

//defaultParameter
function exponentsFormula(baseNumber, exponent) {
  const result = baseNumber ** exponent;
  console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(3 /* basenumber*/, 2 /*exponent*/);

//rest parameter
function sum(...numbers) {
  let result = 0;
  for (let angka of numbers) {
    //iterasi dan inisialisasi angka dari variabel numbers
    result += angka;
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5));
