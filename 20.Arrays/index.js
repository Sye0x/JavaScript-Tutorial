let fruits = ["Apple", "Banana", "Coconut", "Dragon-Fruit"];
fruits.unshift("MANGO");
fruits.push("grape");
fruits.shift();
fruits.pop();
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log(fruits.indexOf("Apple"));

for (let fruit of fruits) {
  console.log(fruit);
}
