const roll = document.getElementById("roll");

roll.onclick = function () {
  const input = Math.floor(document.getElementById("noDice").value);
  if (input > 0 && input < 13) {
    const score = document.getElementById("score");
    const diceimages = document.getElementById("diceimages");
    const values = [];
    const images = [];
    let total = 0;

    for (let i = 0; i < input; i++) {
      const value = Math.floor(Math.random() * 6) + 1; // Generates a value from 1 to 6
      values.push(value);
      total += value;
      images.push(`<img src="./images/${value}.png">`); // Adjusts image path based on the value
    }

    score.textContent = `Score: ${total}`;
    diceimages.innerHTML = images.join(" ");
  }
};
