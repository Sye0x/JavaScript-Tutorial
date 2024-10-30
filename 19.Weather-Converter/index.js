const input = document.getElementById("input");
const C = document.getElementById("C");
const F = document.getElementById("F");
const convertedText = document.getElementById("convertedTxt");

// Convert Fahrenheit to Celsius
C.onclick = function () {
  const fahrenheit = parseFloat(input.value);
  if (!isNaN(fahrenheit)) {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    convertedText.textContent = `${celsius.toFixed(2)} °C`;
  } else {
    convertedText.textContent = "Please enter a valid number";
  }
};

// Convert Celsius to Fahrenheit
F.onclick = function () {
  const celsius = parseFloat(input.value);
  if (!isNaN(celsius)) {
    const fahrenheit = (celsius * 9) / 5 + 32;
    convertedText.textContent = `${fahrenheit.toFixed(2)} °F`;
  } else {
    convertedText.textContent = "Please enter a valid number";
  }
};
