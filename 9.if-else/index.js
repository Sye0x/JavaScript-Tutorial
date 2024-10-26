const grade = document.getElementById("grade");
const inp = document.getElementById("marks");

inp.addEventListener("input", function () {
  const score = Number(inp.value);
  if (score > 85) {
    grade.textContent = "A";
  } else if (score > 75) {
    grade.textContent = "B";
  } else if (score > 65) {
    grade.textContent = "C";
  } else if (score > 55) {
    grade.textContent = "D";
  } else {
    grade.textContent = "F";
  }
});
