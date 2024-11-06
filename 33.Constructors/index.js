// Constructor function for creating a Car object
// The constructor defines the properties and methods for Car objects
function Car(make, model, year, color) {
  this.make = make; // Property for the car's make (e.g., "Ford")
  this.model = model; // Property for the car's model (e.g., "Mustang")
  this.year = year; // Property for the car's manufacturing year (e.g., 2024)
  this.color = color; // Property for the car's color (e.g., "red")

  // Method that simulates driving the car
  this.drive = function () {
    console.log(`You are driving ${make} ${model}`); // Logs a message when driving
  };
}

// Create three Car objects with different properties
const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
const car3 = new Car("Dodge", "Charger", 2026, "silver");

// Access and log the properties of car1
console.log(car1.make); // Output: Ford
console.log(car1.model); // Output: Mustang
console.log(car1.year); // Output: 2024
console.log(car1.color); // Output: red
car1.drive(); // Output: You are driving Ford Mustang

// Access and log the properties of car2
console.log(car2.make); // Output: Chevrolet
console.log(car2.model); // Output: Camaro
console.log(car2.year); // Output: 2025
console.log(car2.color); // Output: blue
car2.drive(); // Output: You are driving Chevrolet Camaro

// Access and log the properties of car3
console.log(car3.make); // Output: Dodge
console.log(car3.model); // Output: Charger
console.log(car3.year); // Output: 2026
console.log(car3.color); // Output: silver
car3.drive(); // Output: You are driving Dodge Charger
