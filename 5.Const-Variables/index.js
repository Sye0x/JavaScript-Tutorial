//Const Variable can not br changed once initilized

let radius;
const PI = 3.141;
let Circumference;
document.getElementById("submit").onclick = function () {
  radius = document.getElementById("mytext").value;
  Circumference = 2 * PI * radius;
  document.getElementById(
    "Circumference"
  ).textContent = `Circumference ${Circumference}`;
};
