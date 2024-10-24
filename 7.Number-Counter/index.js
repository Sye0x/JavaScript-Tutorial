let num = 0;
document.getElementById("Number").textContent = num;

document.getElementById("add").onclick = function () {
  num += 1;
  document.getElementById("Number").textContent = num;
};

document.getElementById("minus").onclick = function () {
  num -= 1;
  document.getElementById("Number").textContent = num;
};

document.getElementById("reset").onclick = function () {
  num = 0;
  document.getElementById("Number").textContent = num;
};
