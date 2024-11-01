const gen = document.getElementById("gen");
let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let small = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let symbols = "~`/?.>,<:;{[]}()&$#@!%^*";

gen.onclick = function () {
  // Call generate and set the result as the password
  const password = generate();
  document.getElementById("pass").textContent = password;
};

function generate() {
  const sym = document.getElementById("sym").checked;
  const num = document.getElementById("num").checked;
  const cap = document.getElementById("cap").checked;

  // Reset the str array each time the button is clicked
  let str = new Array(12).fill("");
  let filled = new Set();

  let check = 3;
  while (check > 0 && cap) {
    let i = Math.floor(Math.random() * 12);
    let j = Math.floor(Math.random() * capital.length);
    if (!filled.has(i)) {
      str[i] = capital[j];
      filled.add(i);
      check--;
    }
  }

  check = 3;
  while (check > 0 && num) {
    let i = Math.floor(Math.random() * 12);
    let j = Math.floor(Math.random() * numbers.length);
    if (!filled.has(i)) {
      str[i] = numbers[j];
      filled.add(i);
      check--;
    }
  }

  check = 2;
  while (check > 0 && sym) {
    let i = Math.floor(Math.random() * 12);
    let j = Math.floor(Math.random() * symbols.length);
    if (!filled.has(i)) {
      str[i] = symbols[j];
      filled.add(i);
      check--;
    }
  }

  check = 4;
  while (check > 0) {
    let i = Math.floor(Math.random() * 12);
    let j = Math.floor(Math.random() * small.length);
    if (!filled.has(i)) {
      str[i] = small[j];
      filled.add(i);
      check--;
    }
  }

  // Final pass to fill any remaining empty indices with random lowercase letters
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "") {
      let j = Math.floor(Math.random() * small.length);
      str[i] = small[j];
    }
  }

  // Join the array into a string and return it as the password
  return str.join("");
}
