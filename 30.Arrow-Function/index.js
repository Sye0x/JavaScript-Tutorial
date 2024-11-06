// Arrow functions provide a concise syntax for function expressions
// They are especially useful for short functions that are used only once

const numbers = [1, 2, 3, 4, 5, 6]; // Array of numbers

// Using map to calculate the square of each number
// The arrow function takes 'element' as the parameter and returns its square using Math.pow()
const squares = numbers.map((element) => Math.pow(element, 2));
console.log(`Squares: ${squares}`); // Output: Squares: [1, 4, 9, 16, 25, 36]

// Using map to calculate the cube of each number
// The arrow function takes 'element' as the parameter and returns its cube using Math.pow()
const cubes = numbers.map((element) => Math.pow(element, 3));
console.log(`Cubes: ${cubes}`); // Output: Cubes: [1, 8, 27, 64, 125, 216]

// Using filter to get all even numbers from the array
// The arrow function checks if an element is divisible by 2 (i.e., it's even)
const evenNums = numbers.filter((element) => element % 2 === 0);
console.log(`Even: ${evenNums}`); // Output: Even: [2, 4, 6]

// Using filter to get all odd numbers from the array
// The arrow function checks if an element is not divisible by 2 (i.e., it's odd)
const oddNums = numbers.filter((element) => element % 2 !== 0);
console.log(`Odd: ${oddNums}`); // Output: Odd: [1, 3, 5]

// Using reduce to calculate the sum of all numbers in the array
// The arrow function takes an accumulator and the current element, and adds the element to the accumulator
const total = numbers.reduce((accumulator, element) => accumulator + element);
console.log(`Total: ${total}`); // Output: Total: 21
