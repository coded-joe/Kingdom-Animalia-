// Define a base class for animals
class Animal {
  constructor(warmBlooded, coldBlooded) {
    this.warmBlooded = warmBlooded;
    this.coldBlooded = coldBlooded;
  }
}

// Define a class for invertebrates that inherits from the Animal class
class Invertebrate extends Animal {
  constructor() {
    super(false, true);
  }
}

// Define a class for arthropods that inherits from the Invertebrate class
class Arthropod extends Invertebrate {
  constructor() {
    super();
  }
}

// Define a class for vertebrates that inherits from the Animal class
class Vertebrate extends Animal {
  constructor() {
    super(true, false);
  }
}


// Define classes for different types of vertebrates that inherit from the Vertebrate class
class Fish extends Vertebrate {
  constructor() {
    super();
  }
}

class Amphibian extends Vertebrate {
  constructor() {
    super();
  }
}

class Reptile extends Vertebrate {
  constructor() {
    super();
  }
}


// Aves and mammals are warm-blooded, so they would not have the cold-blooded property
class Aves extends Vertebrate {
  constructor() {
    super();
    delete this.coldBlooded;
  }
}

class Mammal extends Vertebrate {
  constructor() {
    super();
    delete this.coldBlooded;
  }
}

// To instantiate objects out of some of the classes...
const ant = new Arthropod();
const salmon = new Fish();
const frog = new Amphibian();
const lizard = new Reptile();
const eagle = new Aves();
const lion = new Mammal();


console.log(ant.warmBlooded); // false
console.log(ant.coldBlooded); // true
console.log(salmon.warmBlooded); // false
console.log(salmon.coldBlooded); // true
console.log(frog.warmBlooded); // false
console.log(frog.coldBlooded); // true
console.log(lizard.warmBlooded); // false
console.log(lizard.coldBlooded); // true
console.log(eagle.warmBlooded); // true
console.log(lion.warmBlooded); // true