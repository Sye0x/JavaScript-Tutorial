// Random Number Generator
// checking the logic
//let max = 10;
//let min = 5;
//let num = Math.round(Math.random() * (max - min)) + min;
//console.log(num);

// Get the HTML element where the random number (dice result) will be displayed
const number = document.getElementById("dice");
// Get the HTML button element that will trigger the random number generation
const rollbtn = document.getElementById("rollbtn");

// Add an event listener for the button click event
rollbtn.onclick = function () {
  // Generate a random number between 1 and 6 (inclusive)
  let num = Math.round(Math.random() * 5) + 1; // Math.random() generates a number between 0 (inclusive) and 1 (exclusive)

  // Display the generated number in the specified HTML element
  number.textContent = num; // Update the text content of the number element with the generated random number
};
