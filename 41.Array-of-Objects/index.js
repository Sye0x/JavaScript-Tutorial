// Array of hero objects with their details
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

// Variable for line break (not currently used in the code)
const lbreak = "/n";

// Loop through each hero and log their details
heroes.forEach((hero) =>
  console.log(
    `Name:${hero.name} \nSecret Identity:${hero.identity} \nPowers:${hero.power} \n`
  )
);

// Extract the secret identities of all heroes into an array
const identity = heroes.map((hero) => hero.identity);

// Log each secret identity
identity.forEach((id) => console.log(id));

// Filter the heroes to find those with "Super Human Abilities" as their power
const superHuman = heroes.filter(
  (hero) => hero.power === "Super Human Abilities"
);

// Log the list of heroes with superhuman abilities
console.log("List of SuperHumans");
superHuman.forEach((superHuman) =>
  console.log(`Name:${superHuman.name}\nIdentity:${superHuman.identity}`)
);

// Find the oldest hero using reduce
const oldest = heroes.reduce((eldest, hero) =>
  eldest.age > hero.age ? eldest : hero
);

// Log the details of the oldest hero
console.log(
  `Oldest Hero \nName: ${oldest.name} \nSecret Identity: ${oldest.identity} \nPowers: ${oldest.power} \nAge: ${oldest.age}`
);
