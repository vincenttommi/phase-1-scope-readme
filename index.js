//Global execution context
//'myFunc' is declared in the global scope and available everywhere in your code:
function  myFunc(){

return 42;

}

// 'myVar' is able to reference and invoke 'myFunc' because both are declared in
// the same scope (the global execution context)
const   myVar = myFunc()*2;

console.log(myVar);
// If a variable or function is not declared inside a function or block, 
//it's in the global execution context.