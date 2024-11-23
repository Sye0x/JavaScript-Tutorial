const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);

let date1 = new Date();
console.log(date1);

let date2 = new Date();
date2.setFullYear(2024);
date2.setMonth(0);
date2.setDate(1);
date2.setHours(2);
date2.setMinutes(3);
console.log(date2);
