/*
    (1) Primitive (they are call by value)
        7 types : String , Number , Boolean , null , undefined , Symbol, BigInt

    (2) Reference Types (Non - Primitive)
        Array , Objects , Function

        Broweser WebEvents
*/
// 
const score = 100;
const scorevalue = 100.3;

const isLoogedIn = false;
const outsideTemp = null;

let userEmail; // its value will be undefined


// Symbol  :return value is not same

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 616n // n automamivcally make it big int 

const heros = ["shaktiman" , "naagraj" , "doga"]; // Array Example


let myobj = {
    // objects in curly braces in key value pair

    name : "Bikash",
    age: 20,
}


// Function : in a vairable

const myfunction = function(){
    console.log("Hello world");
}


// easy way to find the data type using  : typeof

console.log(typeof myfunction);

// Return of typeof of function is object function

// https://262.ecma-international.org/5.1/#sec-11.4.3:~:text=11.4.3-,The%20typeof%20Operator,-The%20production%20UnaryExpression


/*

Two types of Memory  :

Stack Memeory(Primitive) and Heap Memory(Non-Primitive)

when Stack we will get variables copy and in Heap we get reference ,i.e Original Value.

*/


// Stack Example
let myYoutubeChannelName = "BikashBehera"

let anotherName = myYoutubeChannelName;
anotherName = "KalingaKishore"

console.log(myYoutubeChannelName); //  output : BikashBehera
console.log(anotherName); // output : KalingaKishore

/*  As we know in stack we get the variables copy and if we change the variables of the copy variables it will not change in the
    main variable.
*/


// Heap Example : 

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
};

let userTwo = userOne;

userTwo.email = "bikash@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);