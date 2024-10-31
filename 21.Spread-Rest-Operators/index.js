// Spread = Unpaking
let arr = [1, 2, 3];
console.log(Math.max(...arr));
console.log(Math.min(...arr));

let str = "Mohamid";
console.log(...str);
let letters = [...str].join("-");
console.log(letters);

let fruit = ["Apple", "Banana", "Coconut"];
let vegetable = ["Ginger", "Onion", "Carrot"];

let food = [...fruit, ...vegetable, "Eggs", "Milk"];
console.log(food);

// Rest = Packing

function sum(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log(`Total:${sum(1, 2, 3, 4)}`);
