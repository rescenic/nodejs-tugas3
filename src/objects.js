// Object
console.log("Object: person");
let person = {
  name: "John",
  age: 30,
};
person.occupation = "Developer";
console.log(person); // Output: {name: "John", age: 30, occupation: "Developer"}

// Object Array
console.log("Object Array: people with age > 25");
let people = [
  { name: "Alice", age: 28 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 32 },
];
let adults = people.filter((person) => person.age > 25);
console.log(adults);
// Output: [{ name: "Alice", age: 28 }, { name: "Charlie", age: 32 }]
