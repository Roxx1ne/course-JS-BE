//assignment operator

let a = 20;
let b = 10;

console.log((a += b)); //atau x = a +b

//comparison operator

let nilai1 = 10;
let nilai2 = 10;

// === ngebandingin nilai dan tipe data apakah sama
// !== ngebandingin nilai dan tipe data apakah tidak sama

if (nilai1 === nilai2) {
  console.log("nilai dan tipe data sesuai");
} else {
  console.log("tipe data dan nilai tidak sama ");
}

//logical operator

//KKM
let nilaiUjian = 80; //true
let nilaiAbsensi = 75; //true

let persyaratanLulus = nilaiUjian >= 80 && nilaiAbsensi >= 75;

console.log(persyaratanLulus);

//not operator
console.log(!(nilaiUjian < 80)); //false -> true (kebalikan)
