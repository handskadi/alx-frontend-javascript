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
  numbers.forEach(num => console.log(num));
  
  // Object: TODO

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
