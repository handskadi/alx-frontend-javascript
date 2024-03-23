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

export function restSpread(){

}