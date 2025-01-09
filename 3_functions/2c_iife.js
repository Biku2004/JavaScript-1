// Immediately Invoked Function Expression (IIFE)


// What we want to do is immediately call a function as soon as its been written

// In this scenario we ourselves are calling it
const chai = ()=> {
    console.log(`DB connected`);
}

// console.log(chai());

// The scenario in which we will put the function in a starting () and add another () for immediate calling ? why ?

(function chai(){
    console.log(`DB connected 1`);
})();

// In the above example : the youtuer told that we cannot directly only place the () right after function without putting
// the function in a () , if we did that it will show the error ?

// why after putting it in a () it is not showing the error ? 

// and in which future scenario or code scenario this type of coding/writing works.


/*
    Defination : Iffe is a function which is executed as soon as its been written
    and We also face with the pollution of Global Scope for many times , and we have used iffe to remove the pollution of variables or
    declarations in that global scope.

    Conclutions : We use iffe to remove the pollution of varaibles which are declared in the Global Scope

*/

// Here we saw that after one function immediate execution when going to second function it is showing error on execution, why?
// Ans : Beacuse the 1st function does not know when to end the execution which is interupting the second execution
// Solution : By adding a semicolon (;) after the execution bracket() will stop the 1st execution when the immediate execute the second execution

// This is arrow function 2nd execution
( ()=>{
    console.log(`DB connected 2`);
})();


// Passiing a argument in a immediate invoked function
// condition : what if the function needed a string to be passing as a parameter
// We have to see this as a normal function
( (name)=>{
    console.log(`This is passing immediate invoked function ${name}`);
} ) ("Bikash");

function new1(name1){
    console.log(`This is a normal function ${name1}`);
}

console.log(new1("bikash")); 

// Why a undefined is at the last of the output whenever I use the console log as the answer ?

