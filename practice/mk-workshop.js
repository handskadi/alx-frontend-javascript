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

  // Functions: 
  function add(x,y){
    return x + y;
  }
  // return add(5,4);

  let sub = function(x, y){
    return x - y;
  }
  //return sub(10,3);



  // return result;
  // return object[Object.keys(object)[0]]; //value
  // return Object.keys(object)[0]; //key
  // return "Key: " + Object.keys(object)[0] + "\nValue: " + object[Object.keys(object)[0]]
  
}
