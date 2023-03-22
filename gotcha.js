//Variables created without a const, let, or var keyword are always globally-scoped,
// regardless of where they sit in your code. If you create one inside of a block, it's still available globally:




if(true){


    firstname = "tommi";
}

console.log(firstname);


function bankAcount(){


    secretPassword = "il0v3pupp135";

    return "bankAccount() function invoked!";


}

console.log(bankAcount());

console.log(secretPassword);