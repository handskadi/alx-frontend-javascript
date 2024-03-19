 // Importing Module:
 import { greet } from './model.js';

 // Exportin a function:
export function mkTask() {
  // Variables:
  var x = 5;
  let y = 6;
  const PI = 4.14;

  // Data Type:
  let string = 'Mkweb';
  let number = 10;
  let boolean = true;
  let array = [1, 2, 3];
  let object = {key: 'value'};
  let n = null;
  let u; // undefined
  

  // Loop:
  let result= []
  for (let i = 0; i < 5 ; i++ ){
    result.push(i);
  }

  // switch statment
  let day = 'Monday'
  switch (day) {
    case 'Friday':
       // return 'It\'s Monday!';
      break;
    default:
      // return 'It\'s another day.';
  }

  // Declarition Functions
  function add(x,y){
    return x + y;
  }
  // return add(5,4);

  // Function expression
  let sub = function(x, y){
    return x - y;
  }

  // Arroe Functions:
  let multiply = (a, b) => a * b;
  let name = (name) => "Myname is " + name;

  // return name("Mohamed KADI!");

  // Higher-order function
  function processNumbers(numbers, callback) {
    for (let i = 0; i < numbers.length; i++) {
        // Call the callback function for each number in the array
        callback(numbers[i]);
    }
  }

  // Callback function to double each number
  function doubleNumber(number) {
    console.log(number * 2);
  }

  // Array of numbers
  const numbers = [1, 2, 3, 4, 5];
  // accessing and modifying array elements:
  numbers.push(6);
  let firstelement = numbers[4]

  //return firstelement;

  // Array methods
  numbers.push(9);
  //numbers.forEach(num => console.log(num));
  let sqrnumbers = numbers.map(num => num * num);
  //return sqrnumbers;
  
  // Object:
  let person = {
    name: 'Mohamed',
    age: 36,
    profession: 'Software Engineer'
  };

  // adding object proprties:
  person.location = 'Marrakech';
  delete person.age;
  // Error handling
  try {
    throw new Error('Something went wrong');
  } catch (error) {
    // console.log(error.message);
  }

  function divide(a, b) {
    try {
      if (b==0) {
        throw new Error('Division by zero is not allowed');
      }
      return a / b;
    } catch (error){
      console.log('Error:', error.message);
    }
  }

  // DOM Manipulation
  // let button = document.getElementById('btn');
  // button.addEventListener('click', function() {
  //   document.getElementById('output').innerHTML = 'Button CLicked';
  // });


  // Asynchronous JS
  // Callbacks example 1:
   
  function fetchUserData(callback) {
    setTimeout(function(){
      // stimulate user data
      const userData = {
        id:1,
        username: 'example_user',
        email: 'user@example.com'
      };
      callback(userData);
    }, 1000)
  }

  function displayUserData(userData) {
    console.log('User Data Recieved:');
    console.log('ID:', userData.id);
    console.log('Username:', userData.username);
    console.log('Email:', userData.email);
  }

  // fetchUserData(displayUserData);

  // Promises
  // Function to simulate fetching user data asynchronously
  let fetchDataPromise = new Promise(function(resolve, reject) {
    // Simulate an error condition after 1 second
    setTimeout(function() {
        // Simulate a random boolean to represent success or failure
        const success = Math.random() < 0.5; // 50% chance of success
        
        if (success) {
            // Simulate successful data retrieval
            const userData = {
                id: 1,
                username: 'example_user',
                email: 'user@example.com'
            };
            // Resolve the promise with the user data
            resolve(userData);
        } else {
            // Simulate failure to retrieve data
            const errorMessage = 'Failed to fetch user data';
            // Reject the promise with an error message
            reject(errorMessage);
        }
    }, 1000);
  });

  // Use the then method to handle the resolved promise
  fetchDataPromise.then(function(userData) {
    console.log('User Data Received:');
    console.log('ID:', userData.id);
    console.log('Username:', userData.username);
    console.log('Email:', userData.email);
  }).catch(function(error) {
      console.error('Error:', error);
  });



 
  console.log(greet('MKweb'));

  
  
  //return divide(10,4);
  //return person.name + " is a " + person.location;

  // Process numbers with callback function
  // console.log("Doubling each number:");
  // processNumbers(numbers, doubleNumber);
  
  //return multiply(3,5)
  // return sub(10,3);

  // return result;
  // return object[Object.keys(object)[0]]; //value
  // return Object.keys(object)[0]; //key
  // return "Key: " + Object.keys(object)[0] + "\nValue: " + object[Object.keys(object)[0]]
  
}
