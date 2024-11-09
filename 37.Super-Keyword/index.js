class animals {
  constructor(name, legs, speed) {
    this.name = name;
    this.legs = legs;
    this.speed = speed;
  }
  max_speed() {
    console.log(`${this.name} have a max speed of ${this.speed}km/h`);
  }
}
class rabbits extends animals {
  constructor(name, ears_size, speed) {
    super(name, 4, speed);
    this.ears_size = ears_size;
  }
  ability() {
    console.log(`${this.name} can Hop`);
    super.max_speed();
  }
}

class ducks extends animals {
  constructor(name, wing_span, speed) {
    super(name, 2, speed);
    this.wing_span = wing_span;
  }
  ability() {
    console.log(`${this.name} can fly`);
    super.max_speed();
  }
}

const rabbit1 = new rabbits("Lola", 10, 25);
const duck1 = new ducks("Daffy", 3, 14);

console.log(`Name:${rabbit1.name}`);
console.log(`Legs:${rabbit1.legs}`);
console.log(`Ears Length:${rabbit1.ears_size}`);
rabbit1.ability();
