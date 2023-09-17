//SET
// Menggunakan Set untuk menyimpan daftar angka
const numberSet = new Set();

// Menambahkan angka ke Set
numberSet.add(1);
numberSet.add(2);
numberSet.add(3);

// Memeriksa apakah angka 2 ada dalam Set
console.log(numberSet.has(2)); // Output: true

// Menghapus angka 2 dari Set
numberSet.delete(2);

// Memeriksa kembali apakah angka 2 ada dalam Set setelah dihapus
console.log(numberSet.has(2)); // Output: false

//WEAKSET
// Menggunakan WeakSet untuk menyimpan objek
const objectWeakSet = new WeakSet();

let obj1 = { name: "Objek 1" };
let obj2 = { name: "Objek 2" };

// Menambahkan objek ke WeakSet
objectWeakSet.add(obj1);
objectWeakSet.add(obj2);

// Memeriksa apakah objek1 ada dalam WeakSet
console.log(objectWeakSet.has(obj1)); // Output: true

// Menghapus objek1 dari WeakSet
objectWeakSet.delete(obj1);

// Memeriksa kembali apakah objek1 ada dalam WeakSet setelah dihapus
console.log(objectWeakSet.has(obj1)); // Output: false
