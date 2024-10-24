// Type Conversion
// String , Numbers , Booleans

let x = "1";
let y = "1";
let z = "1";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

console.log("If string defined");
let s = ""; // if a string is empty converting it into bolean will return false
s = Boolean(s);
console.log(s, typeof s);

// if not defined
console.log("If not defined");
let a;
let b;
let c;

a = Number(a);
b = String(b);
c = Boolean(c);

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
