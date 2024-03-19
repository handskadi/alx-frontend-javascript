export function mkTask2() {

  
  // let & const
  let x = 5;
  const PI = 3.14;

  // arrow functions
  let add = (a, b) => (a + b);
  //return add(10,3);

  // Template Literals:
  let myname = 'Mohamed';
  //console.log(`I am ${myname}!`);

  // Function with Default parameter
  function greet(name = 'World'){
    //console.log(`Hello, ${name}`);
  }

  greet('Mkweb');

  // Destructuring Assignment:
    // array Destructuring
  const numbers = [1,2,3];
  const [a,b,c]= numbers;
  //console.log(b);
    
    // object Destructuring
  const person = {name: 'Mohamed', age: 36, city: 'Tinghr'};
  const {name, age, city} = person;
  //console.log(age)

  // Spread Syntax
      //arrays
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const combinedArray = [...arr1, ...arr2];
  const coppiedarray = [...arr1];
  //console.log(combinedArray);

       // object
  const personInfo = {name : 'alx', age: 36, city: 'madgascar'};
  const personJob = {job: 'web designer', job_ID: 1988};
  const combinedPerson = {...personInfo, ...personJob};
  //console.log(combinedPerson);

}

// Rest Parameters:
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3));


// short hand object:

function getBudject(income, gdp,capita){

  const budget = {
    income,
    gdp, 
    capita
  };

  return budget;
}

console.log(getBudject(400, 700, 900));