const pikachu = {
  name: "Pikachu", // Name of the character
  type: "Electric", // Type of the character
  food: "Strawberry",
  usethunderbolt: () => {
    console.log("Pikachuuuu"); // Method that prints "Pikachuuuu" to the console
  },
  favFood: function () {
    console.log(`Pikachu likes to eat ${this.food}`);
  },
};

pikachu.favFood(); // This will now work correctly
