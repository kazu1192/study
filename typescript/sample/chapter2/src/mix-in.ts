// mix-in
// class User {
//   static debug(): void {}
// }
// 
// User.debug() // 'User({"id": 3, "name": "Emma Gluzman"})'

// any Constructor
type ClassConstructor<T> = new(...args: any[]) => T

// withEZDebug mix-in
function withEZDebug<C extends ClassConstructor<{
  getDebugValue(): object
}>>(Class: C) {
  return class extends Class {
    constructor(...args: any[]) {
      super(...args)
    }
    debug() {
      let Name = this.constructor.name
      let value = this.getDebugValue() // JSON value
      return Name + '(' + JSON.stringify(value) + ')'
    }
  }
}

class HardToDebugUser {
  constructor(
    private id: number,
    private firstName: string,
    private lastName: string
  ) {}
  getDebugValue() {
    return {
      id: this.id,
      name: this.firstName + ' ' + this.lastName
    }
  }
}

let User = withEZDebug(HardToDebugUser)
let user = new User(3, 'Emma', 'Gluzman')
console.log(user.debug())

