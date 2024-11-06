class Animal {
  static Alive = true;
}

class Dog extends Animal {
  static Bark() {
    console.log(`${this.name} Speak: Awoooooooo`);
  }
}

// The static Var Alive got inherited by the Dog
console.log(`Are Animals Alive:${Animal.Alive}`);
console.log(`Dog is Alive:${Dog.Alive}`);
Dog.Alive = false;
console.log(`Are Animals Alive:${Animal.Alive}`);
console.log(`Dog is Alive:${Dog.Alive}`);

class Husky extends Dog {
  constructor(name) {
    super(); // Call to parent class constructor
    this.name = name;
  }
}

const Husker = new Husky("Leo");

// Bark() should be called using the class, not the instance
Dog.Bark.call(Husker); // Output: Leo Speak
