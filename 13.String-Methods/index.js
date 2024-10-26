// String Methods

let str = "mohamid";

let result = str.charAt(0);
console.log(`char at 0 index: ${result}`);

result = str.indexOf("m");
console.log(`first index of m: ${result}`);

result = str.lastIndexOf("m");
console.log(`last index of m: ${result}`);

result = str.length;
console.log(`length of the string "${str}" is ${result}`);

let str2 = "  RAZA  ";
result = str2.trim();
console.log(result);

result = str.toUpperCase();
console.log(result);

result = str2.toLowerCase();
console.log(result);

result = str.repeat(3);
console.log(result);

result = str.replaceAll("m", "x");
console.log(result);

//slicing
let fullname = "Mohamid Raza";
let firstname = fullname.slice(0, fullname.indexOf(" "));
let lastname = fullname.slice(fullname.indexOf(" ") + 1);

console.log(firstname);
console.log(lastname);
