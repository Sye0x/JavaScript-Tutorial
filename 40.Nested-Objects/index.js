class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
  display() {
    console.log(`Name:${this.name}`);
    console.log(`Age:${this.age}`);
    for (const loc in this.address) {
      console.log(this.address[loc]);
    }
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person(
  "Spongebob",
  30,
  "124 Conch St.",
  "Bikini Bottom",
  "Int. Waters"
);

person1.display();

const person2 = {
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

for (const property in person2.address) {
  console.log(person2.address[property]);
}
