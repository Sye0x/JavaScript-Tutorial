let heroes = [
  { name: "Batman", identity: "Bruce Wane", power: "Money", age: 24 },
  {
    name: "Superman",
    identity: "Clark Kent",
    power: "Super Human Abilities",
    age: 22,
  },
  { name: "Flash", identity: "Barry Allen", power: "Fast", age: 20 },
  {
    name: "Wonder Woman",
    identity: "Diana of Themyscira",
    power: "Super Human Abilities",
    age: 120,
  },
];
const lbreak = "/n";
heroes.forEach((hero) =>
  console.log(
    `Name:${hero.name} \nSecret Identity:${hero.identity} \nPowers:${hero.power} \n`
  )
);

const identity = heroes.map((hero) => hero.identity);

identity.forEach((id) => console.log(id));

const superHuman = heroes.filter(
  (hero) => hero.power === "Super Human Abilities"
);
console.log("List of SuperHumans");
superHuman.forEach((superHuman) =>
  console.log(`Name:${superHuman.name}\nIdentity:${superHuman.identity}`)
);

const oldest = heroes.reduce((eldest, hero) =>
  eldest.age > hero.age ? eldest : hero
);

console.log(
  `Oldest Hero \nName: ${oldest.name} \nSecret Identity: ${oldest.identity} \nPowers: ${oldest.power} \nAge: ${oldest.age}`
);
