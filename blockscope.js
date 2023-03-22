// // variables declared with var are not block-scoped

// if(true){
// myVar = 42;



// }

// console.log(myVar);

// //variables declared with const and let are block-scoped


if(true){

const myVar = 45;

let myOtherVar = 34;



}

myVar;
myOtherVar;

