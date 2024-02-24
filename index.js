class Animal {
  constructor(species) {
    this.species = species;
  }
  makeSound() {
    console.log("Some generic sound");
  }
}

class Dog extends Animal {
  constructor(species, name) {
    super(species);
    this.name = name;
  }
  wagTail() {
    console.log(`${this.name} is wagging its tail`);
  }
}

let myDog = new Dog("Canine", "Buddy");
console.log(myDog.species);
myDog.makeSound(); 
myDog.wagTail(); 
