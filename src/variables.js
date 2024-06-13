// Variabel
let x = 10;
let y = 20;
let sum = x + y;

try {
  console.log(`x = ${x}, y = ${y}`);
} catch (error) {
  console.error("Error:", error.message);
}
console.log(`Sum = ${sum}`);

// Perbedaan antara var, let, dan const
var varVariable = "I'm a var variable";
if (true) {
  var varVariable = "I'm still a var variable"; //Output
}
console.log(varVariable);

let letVariable = "I'm a let variable";
if (true) {
  let letVariable = "I'm the new let variable";
  console.log(letVariable); //Output pertama
}
console.log(letVariable); //Output kedua

const constVariable = "I'm a const variable"; //Output
console.log(constVariable);

console.log(
  "Variabel yang menggunakan Keyword var dapat dideklarasikan ulang atau diperbarui. Variabel let juga dapat diperbarui tetapi tidak dapat dideklarasikan ulang. Sedangkan const tidak dapat diperbarui dan juga tidak dapat dideklarasikan ulang. Scope(cakupan) dari var adalah global scope atau function scope, jadi ketika mendeklarasikan variabel dengan mengunakan var, variabel ini dapat di akses dimanapun. Berbeda dengan var yang merupakan global atau function scope, const merupakan block scope, blok adalah potongan kode yang dibatasi oleh {}. Hoisting itu dimana deklarasi variable akan di angkat ke atas sebelum kode di eksekusi. Seperti var, const juga mendukung hoisting tetapi perbedaannya inisialisasi var adalah undefined sedangkan const belum ada inisialisasi jadi akan menyebabkan error. let merupakan block scope sama seperti const."
);

{
  let a = 40;
  {
    let b = 50;
    console.log(a); // Output: 40 (Dapat diakses di nested block)
    console.log(b); // Output: 50
  }
  console.log(a); // Output: 40
  try {
    console.log(b); // Error: b is not defined (b hanya dapat diakses di nested block)
  } catch (error) {
    console.error("Error:", error.message);
  }
}

if (true) {
  let c = 60;
  const d = 70;
  console.log(c); // Output: 60
  console.log(d); // Output: 70
}
try {
  console.log(c); // Error: c is not defined
} catch (error) {
  console.error("Error:", error.message);
}
try {
  console.log(d); // Error: d is not defined
} catch (error) {
  console.error("Error:", error.message);
}
