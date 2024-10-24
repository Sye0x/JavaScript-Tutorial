// Random Number Generator
// checking the logic
//let max = 10;
//let min = 5;
//let num = Math.round(Math.random() * (max - min)) + min;
//console.log(num);

const number = document.getElementById("dice");
const rollbtn = document.getElementById("rollbtn");

rollbtn.onclick = function () {
  let num = Math.round(Math.random() * 5) + 1;
  number.textContent = num;
};
