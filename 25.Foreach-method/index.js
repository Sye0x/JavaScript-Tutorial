let nums = [1, 2, 3, 4, 5];

nums.forEach(timesTwo);
nums.forEach(display);

function timesTwo(element, index, array) {
  array[index] *= 2;
}

let names = ["raza", "mohaMiD", "waSi", "ahEmd"];

names.forEach(capitalizedFirstletter);
names.forEach(display);

function capitalizedFirstletter(element, index, array) {
  array[index] =
    element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}

function display(element) {
  console.log(element);
}
