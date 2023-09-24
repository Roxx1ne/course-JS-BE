//regular function

// function declaration
function Hello(greet) {
  console.log(`${greet}!`);
}
Hello("selamat datang");

// function expression
const sayName = function (name) {
  console.log(`Nama saya ${name}`);
};
sayName("nopal");

//arrow function
const sayHello = (greet) => {
  console.log(`${greet}!`);
};
sayHello("apa kabar ");

//versi singkat
const testArrow = (test) => console.log(`nama saya ${test}`);
testArrow("aulio");

const sayNama = (name) => {
  console.log(`Nama saya ${name}`);
};
sayNama("panjul");

const multiply = (a, b, c) => (a * b) / c;
console.log(multiply(3, 4, 10));
