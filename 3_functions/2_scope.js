// gobal scope is different in case of console and in node environment

// if function call is before a normal function declatation then it will work and print the console
// But it function declation is assigned to another variable like const new = function(){} , then if function call is before it it will show error


// Explicit return
const addTwo = (num1,num2) => {
    return num1+num2;
}
// console.log(addTwo(3,4));

const subtractTwo = (num1,num2) => (num1 - num2) // Inplicit return
// console.log(subtractTwo(2,1))




// To stop and solve the issue of global scope pollution we use IFEE
// meaning we have to make the function run as soon as it is created

// for example :

function chai(){
    console.log("DB is connected");
}
// chai()

// This is good but the problem is still not solved as we are not just running it directly and going to the next line but it 
// will  be solved if executed as soon as written

// for example :

(function chai1(){
    console.log("DB is connected");
})();

// Arrow function : 'function' 'function_name' became "=>"
( () => {
    console.log('This is DB connection');
    
})();

