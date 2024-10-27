// Get the HTML element for displaying the grade
const grade = document.getElementById("grade");
// Get the input element where the user enters their marks
const inp = document.getElementById("marks");

// Add an event listener to the input element that triggers on input events
inp.addEventListener("input", function () {
  // Convert the input value to a number
  const score = Number(inp.value);

  // Determine the grade based on the score and update the grade text content
  if (score > 85) {
    grade.textContent = "A"; // Grade A for scores above 85
  } else if (score > 75) {
    grade.textContent = "B"; // Grade B for scores above 75
  } else if (score > 65) {
    grade.textContent = "C"; // Grade C for scores above 65
  } else if (score > 55) {
    grade.textContent = "D"; // Grade D for scores above 55
  } else {
    grade.textContent = "F"; // Grade F for scores 55 and below
  }
});
