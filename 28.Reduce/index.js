// .reduce() = reduce the elements of an array
//
// to a single value
const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(`Max Grade:${maximum}`); // 95
console.log(`Min Grade:${minimum}`); // 50

function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
  return Math.min(accumulator, element);
}
