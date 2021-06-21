class Animal {}
class Bird extends Animal {
  chirp() {}
}
class Crow extends Bird {
  caw() {}
}

function chirp(bird: Bird): Bird {
  bird.chirp()
  return bird
}

// chirp(new Animal) // NG
chirp(new Bird)
chirp(new Crow)

function clone(f: (b: Bird) => Bird): void {
  let parent = new Bird
  let babyBird = f(parent)
  babyBird.chirp()
}

function birdToBird(b: Bird): Bird {
  return new Bird
}
clone(birdToBird) // OK

function birdToCrow(d: Bird): Crow {
  return new Crow
}
clone(birdToCrow) //

function birdToAnimal(d: Bird): Animal {
  return new Animal
}
// clone(birdToAnimal) // NG

function animalToBird(a: Animal): Bird {
  return new Bird
}
clone(animalToBird) //OK

function crowToBird(c: Crow): Bird {
  c.caw()
  return new Bird
}
// clone(crowToBird) // NG
