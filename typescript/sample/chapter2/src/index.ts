class Set_custom {
  has(value: number): boolean {
    return true
  }
  add(value: number): this {
    return this
  }
}

class MutableSet extends Set_custom {
  delete(value: number): boolean {
    return true
  }
}

type Food = {
  calories: number
  tasty: boolean
}

type Cake = Food & {
  sweet: boolean
}

type Sushi = Food & {
  salty: boolean
}

// same

interface Foods {
  calories: number
  tasty: boolean
}

interface Cakes extends Food {
  sweet: boolean
}

interface Sushis extends Food {
  salty: boolean
}

type A = number
type B = A | string

interface C {
  good(x: number): string
  bad(x: number): string
}

interface D extends C {
  good(x: string | number): string
  bad(x: number): string
}

// 99 page

interface Animal {
  readonly name: string
  eat(food: string): void
  sleep(hours: number): void
}

interface Feline {
  meow(): void
}

class Cat implements Animal {
  name = 'Whiskers'
  eat(food: string) {
    console.info('Ate some', food, '. Mmm!')
  }
  sleep(hours: number) {
    console.info('Slept for', hours, 'hours')
  } 
  meow() {
    console.info('Meow')
  }
}

new Cat().eat('Apple')

class Zebra {
  trot() {
    console.info('Zebra')
  }
}

class Poodle {
  trot() {
    console.info('Poodle')
  }
}

function ambleAround(animal: Zebra) {
  animal.trot()
}

let zebra = new Zebra
let poodle = new Poodle

ambleAround(zebra) // OK
ambleAround(poodle) // OK

type State = {
  [key: string]: string
}

interface StringDatabase {
  state: State
  get(key: string): string | null
  set(key: string, value: string): void
}

interface StringDatabaseConstructor {
  new(state?: State): StringDatabase
  from(state: State): StringDatabase
}

class StringDatabase {
  constructor(public state: State = {}) {}
  get(key: string): string | null {
    return key in this.state ? this.state[key] : null
  }
  set(key: string, value: string): void {
    this.state[key] = value
  } 
  static from(state: State) {
    let db = new StringDatabase
    for (let key in state) {
      db.set(key, state[key])
    }
    return db
  }
}

interface MyMap<K, V> {
  get(key: K): V
  set(key: K, value: V): void
}

class MyMap<K, V> {
  key: K
  value: V

  constructor(initialKey: K, initialValue: V) {
    this.key = initialKey
    this.value = initialValue
  }
  get(key: K): V {
    return this.value
  }
  set(key: K, value: V): void {
    this.key = key
    this.value = value
  }
}

