import  Promises from './mk-promises.js';
console.log(`${Promises.sayHi()}`);

let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
       resolve("success");
    } else {
    reject("Failed");
    }
});

p.then((message) => {
    console.log('This is in the then ' + message);
}).catch((message) => {
    console.log('Thi is in the Catch ' + message);
})
console.log(p);