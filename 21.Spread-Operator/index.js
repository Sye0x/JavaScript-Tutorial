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
