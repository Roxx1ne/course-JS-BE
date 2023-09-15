const customer = {
  firstname: " nopal ",
  middlename: "aulio ",
  lastname: "sopian",
  age: 21,
};

console.log(
  `haloo nama saya ${customer.firstname} ${customer.middlename} ${customer.lastname} dan berumur ${customer.age} tahun`
);

//bracket
const tempattinggal = {
  "kota asal": "Kab. Tangerang", //contoh bracket
  provisi: "banten",
  kecamatan: " panongan ",
};

console.log(
  `asal daerah : ${tempattinggal["kota asal"]} ${tempattinggal.provisi} ${tempattinggal.kecamatan}`
);

//ubah value

const kucing = {
  warna: "oren",
  kelamin: " laki - laki ",
  ras: "liar",
};

kucing.kelamin = "perempuan";
kucing.warna = "abu";
kucing.corak = " belang";

delete kucing.warna;

console.log(kucing);
