let myarray = ["contoh array", 25, true, "wir"];

myarray.push("javascript"); //nambah data di akhir array
myarray.pop(); //menghapus data di akhir array

myarray.shift(); //menghapus data di awal array
myarray.unshift("data di ubah"); //nambah data di awal array

delete myarray[0]; //hanya menghapus data pada index yang ditentukan lalu membiarkan posisi tersebut kosong.
myarray.splice(2, 1); //menghapus indeks 2 sebanyak 1 element
console.log(myarray);

const month = ["January", "March", "April", "May"];
console.log("before splice: ", month);

month.splice(1, 0, "February"); //nambah indeks ke 1 dan 0 berati tidak ada data di hps
console.log("after splice: ", month);
