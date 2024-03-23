export function vars() {
  var a = 0
  a = 2
  let b = 'mk'
  b = 'mkweb'
  const c = [1, 2, 'tree', true]
  
  console.log(typeof(c));
  return a + b + c[2];
}

export function arrowFunc(){
  // old 
  const myFunction = function() {
    console.log("This comes from old func")
  }

  // New version 1
  const myNewFunction = () => "This is new function"
  
  // New version 2
  const myNewFunction2 = (a,b) => ({sum:a+b}) 

  // Calling the functions
  // old
  myFunction()
  // new - no parameters
  console.log(myNewFunction())
  // new - with parameters
  let res = myNewFunction2(4,5)
  let keys = Object.keys(res)
  console.log(keys[0])
  console.log(myNewFunction2(4,5).sum)
}

export function spread(){

  // Spread for arrays
  const arrayA = [1,2,3]
  const arrayB = [...arrayA,4,5,6] // expend array using spread operator -> ...
  const arrayC = [...arrayB] // copy array to another


  // Spread for Object

  const obj1 = {
    name : 'Mohamed',
    age : 36
  }

  const obj2 = {
    ...obj1,
    job : 'web dev',
    website: 'www.mohamedkadi.com'
  }

  const obj3 = {...obj1.name}

  // passing arguments to func using Spread
  const add = (a,b,c) => a+b+c

  //printing
  console.log(arrayA)
  console.log(obj2)
  console.log(obj3)
  console.log(add(...arrayA))
}

export function rest() {
  
  const numbers = [1, 2, 3, 4, 5];
  let first, second, others;
  [first, second, ...others] = numbers;

  console.log(numbers)
  console.log(first)
  console.log(second)
  console.log(others)

  // Rest Parameter (...args in function parameters):
  const { fst, snd, ...oths} = {
    fst: 1,
    snd: 2, 
    thrd: 3,
    frth: 4,
    fth: 5
  }

  const items = [fst, snd, oths];

  console.log(items[2].frth)

  // Reduce: (sums total) usage (total, number)
  function sum2(...numbers) {
    //return numbers.reduce((total, num) => total + num, 0);
    return numbers.reduce((total, number) => total+number,0)
  }

  console.log(sum2(1,8,3,4))

  // join: for cancatenating
  function concat(...strings) {
    return strings.join(' ');
  }
  console.log(concat("Mohamed", "KADI"))

}

export function destructuring (){

  const person = {
    fname : 'mohamed',
    lname : 'Kadi',
    age : 35
  }

  const {fname : name, age: alter } = person
  console.log(alter)

  const arr = [1,2,3,4,5]
  const [first1 , second2,,,fifth5] = arr
  console.log(fifth5)
}

export function classes (){
  class Person {
    constructor(name){
      this._name =name
    }

    set name(value){
      this._name = value
    }

    get name(){
      return this._name
    }

    static definition(){
      return 'I am a class which handels person object'
    }

    hello() {
      return 'Hello, I am ' + this.name + "."
    }
  }
const person12 = new Person('Mohamed')
console.log(person12.hello())

class programmer extends Person {
  constructor(name,age){
    super(name);
    this.age = age
  }
  hello(){
    return super.hello() + ' I am a programmer and I am ' + this.age
  }
}

const person13 = new programmer('Mohamed', 35)
console.log(person13.hello())
console.log(Person.definition())

}