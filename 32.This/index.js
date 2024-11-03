// arrow functions a concise way to write function expressions
//
//
// good for simple functions that you use only once
// (parameters) => some code
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map((element) => Math.pow(element, 2));
console.log(`Squares:${squares}`);
const cubes = numbers.map((element) => Math.pow(element, 3));
console.log(`Cubes:${cubes}`);
const evenNums = numbers.filter((element) => element % 2 === 0);
console.log(`Even:${evenNums}`);
const oddNums = numbers.filter((element) => element % 2 !== 0);
console.log(`Odd:${oddNums}`);
const total = numbers.reduce((accumulator, element) => accumulator + element);
console.log(`Total:${total}`);
