const myMap = new Map([
  ["nama", "naufal"],
  [21, "umur"],
  [true, "college"],
]);

console.log(myMap.get("nama")); //mengambil key(nama)
console.log(myMap.set("kelamin", "laki")); //tambah value map, cek key value
console.log(myMap.has(21)); //cek key value
console.log(myMap.size); //mengecek panjang dari map
console.log(myMap.get("kelamin"));
console.log(myMap);
