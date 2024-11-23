// sort() = method used to sort elements of an array in place.
// Sorts elements as strings in lexicographic order, not alphabetical
// lexicographic = (alphabet + numbers + symbols) as strings
const people = [
  { name: "Spongebob", age: 30, gpa: 3.0 },
  { name: "Patrick", age: 37, gpa: 1.5 },
  { name: "Squidward", age: 51, gpa: 2.5 },
  { name: "Sandy", age: 27, gpa: 4.0 },
];
people.sort((a, b) => b.name.localeCompare(a.name));
console.log(people);
people.sort((a, b) => a.age - b.age);
console.log(people);
