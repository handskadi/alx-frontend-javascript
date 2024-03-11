import {hi, fruits} from './data-manipluation-workshop.js'
console.log(hi);

// Arrays:
console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]);
fruits[5] = "mango";
console.log(Object.keys(fruits));
console.log(fruits.length);
fruits.forEach((item, index) => {
    console.log(`${index}: ${item}`);
}) 

fruits.reverse();

const iterator =  fruits.keys();
console.log(iterator);
for (const key of iterator){
    console.log(`${key}: ${fruits[key]}`);
}