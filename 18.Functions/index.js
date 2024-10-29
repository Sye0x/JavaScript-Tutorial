function HelloWorld() {
  console.log("Hello World");
}
HelloWorld();
function HelloUser(user) {
  console.log(`Hello ${user}`);
}
HelloUser("Syed");

function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}
function iseven(x) {
  return x % 2 === 0 ? true : false;
}

console.log(add(5, 5));
console.log(sub(5, 5));
console.log(multiply(5, 5));
console.log(divide(5, 5));
let num = 5;
console.log(`Is ${num} even: ${iseven(5)}`);
