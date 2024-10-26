let username = window.prompt("Enter Your Username(No Method Chaining)");

//NO MATHOD CHAINING

username = username.trim();
let firstLetter = username.charAt(0);
firstLetter = firstLetter.toUpperCase();
let extraLetter = username.slice(1);
extraLetter = extraLetter.toLowerCase();
username = firstLetter + extraLetter;

console.log(username);
let username2 = window.prompt("Enter Your Username(Method Chaining)");

username2 =
  username2.trim().charAt(0).toUpperCase() + // Capitalize the first letter
  username2.trim().slice(1).toLowerCase();
console.log(username2);
