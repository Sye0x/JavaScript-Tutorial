// destructuring = extract values from arrays and objects,
// then assign them to variables in a convenient way
// [] = to perform array destructuring
// {} = to perform object destructuring

// -------- EXAMPLE 1 --------
// Swap Values of two variable

let a = 2;
let b = 1;

[a, b] = [b, a];

console.log(a);
console.log(b);

// -------- EXAMPLE 2 --------
// Swap 2 Element in Array

let colors = ["Red", "Green", "Blue", "White", "Black"];

[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);

// -------- EXAMPLE 3 --------
// Assigning Array Element to Variables

[color1, color2, color3, ...extracolor] = colors;

console.log(color1);
console.log(color2);
console.log(color3);
console.log(extracolor);

// -------- EXAMPLE 5 --------
// Extract Value from Object

const person1 = {
  name: "SpongeBob",
  age: 21,
  job: "FryCook",
};

const person2 = {
  name: "PatricStar",
  age: 21,
};

const { name, age, job = "unemployed" } = person2;

console.log(name);
console.log(age);
console.log(job);

// EXAMPLE 5
// DESTRUCTURE IN FUNCTION PARAMETERS
function displayPerson({ name, age, job = "unemployed" }) {
  console.log(`name: ${name}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}

displayPerson(person1);
