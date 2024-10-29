let randnum = Math.floor(Math.random() * 100) + 1;
let tries = 0;
const moreless = document.getElementById("moreless");
const tryDisplay = document.getElementById("try");
const ans = document.getElementById("ans");
const guessInput = document.getElementById("guessInput");

document.getElementById("btn").onclick = function () {
  let guess = Math.floor(guessInput.value); // Get the user's input and convert to integer

  // Reset if the answer is already shown
  if (ans.textContent !== "?") {
    moreless.textContent = "";
    ans.textContent = "?";
    tries = 0;
  }

  // Ensure guess is within valid range
  if (guess > 0 && guess <= 100) {
    tries++; // Increment tries each valid attempt

    if (guess === randnum) {
      moreless.textContent = "=";
      ans.textContent = randnum;
      tryDisplay.textContent = guess;
      // Reset for a new game
      randnum = Math.floor(Math.random() * 100) + 1;
      guessInput.value = ""; // Clear input for a new game
    } else if (guess > randnum) {
      moreless.textContent = ">";
      tryDisplay.textContent = guess;
    } else if (guess < randnum) {
      moreless.textContent = "<";
      tryDisplay.textContent = guess;
    }
  } else {
    alert("Please enter a number between 1 and 100.");
  }
};
