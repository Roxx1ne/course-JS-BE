//MAP

/*jika data di hapus maka data akan tetap ada karena hanya 
menghapus referensi ke objek tersebut, bukan objek itu sendiri, jadi 
data tersebut masih ada di memori*/

const visitsCountMap = new Map(); // Menyimpan daftar user

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas); // Menambahkan user "Jonas"

let ahmad = { name: "ahmad" };
countUser(ahmad);

jonas = null; // Data object "Jonas" dihapus
ahmad = null;

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function () {
  console.log(visitsCountMap);
}, 10000);
console.log(visitsCountMap.get(jonas)); // Hasilnya akan tetap ada (1)

console.log(" ");

//WEAKMAP
//jika nilai jonas di hps maka otomatis akan menghapus memori

// Menggunakan WeakMap untuk menghitung jumlah kunjungan pengguna
// const visitsCountWeakMap = new WeakMap(); // Menyimpan daftar user

// function countUser(user) {
//   let count = visitsCountWeakMap.get(user) || 0;
//   visitsCountWeakMap.set(user, count + 1);
// }

// let jonas = { name: "Jonas" };
// countUser(jonas); // Menambahkan user "Jonas"

// jonas = null; // Data object "Jonas" dihapus

// // delay dibutuhkan untuk menunggu garbage collector bekerja
// setTimeout(function () {
//   // Setelah garbage collector bekerja, objek "Jonas" akan dihapus dari WeakMap
//   console.log(visitsCountWeakMap);
// }, 10000);

// console.log(visitsCountWeakMap.get(jonas)); // Hasilnya akan undefined

// Hasil output:
// WeakMap {  }
