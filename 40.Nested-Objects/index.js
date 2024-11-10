const person = {
  fullName: "Spongebob Squarepants",
  age: 30,
  isStudent: true,
  hobbies: ["karate", "jellyfishing", "cooking"],
  address: {
    street: "124 Conch St.",
    city: "Bikini Bottom",
    country: "Int. Water",
  },
};

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
for (const hobby in person.hobbies) {
  console.log(person.hobbies[hobby]);
}
for (const property in person.address) {
  console.log(person.address[property]);
}
