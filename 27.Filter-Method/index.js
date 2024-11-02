// .filter() = creates a new array by filtering
// out elements
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNums = nums.filter(isEven);
console.log(evenNums);
function isEven(element) {
  return element % 2 === 0;
}
let oddNums = nums.filter(isOdd);
console.log(oddNums);
function isOdd(element) {
  return element % 2 !== 0;
}

const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);
console.log(shortWords);
console.log(longWords);

function getShortWords(element) {
  return element.length <= 6;
}

function getLongWords(element) {
  return element.length > 6;
}
