const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        // "this" refers to the current context of the `user` object
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
};

// Testing the function and changing the context
// user.welcomeMessage(); // Logs the user object context
// user.username = "sam"; // Changes the value of `username`
// user.welcomeMessage(); // Logs updated context with new username

// console.log(this); // Logs the global context

/*

    In this Example : when we have tried to run the "console.log(this)" insde the "const user" :
    
    we were getting the complete context/information about the "const user" as this :

    hitesh , welcome to website
    {
    username: 'hitesh',
    price: 999,
    welcomeMessage: [Function: welcomeMessage]
    }

    But in the same case if we comment the "console.log(this)" inside the welcome message and write the ""console.log(this)"" outside the "const user" we get a different output :

    we get a empty context : output : {}

    why ? 

    becaue we are trying to console log a global variable which is empty which means globally we have not written anything but you think there is this function so why say we have not written globally ?

    Ans : All the information is inside the function and we cannot access the insides complete context/information from outside but we can access the information from inside by calling the function like the above exaplanation.

    But is there any example of global contect accessing from outside ?

    Ans : Yes there is but it is only possible in the javascript engine in the browser in which when we do the "console.log(this)" we get ""window"" as the global context.

    Browser ke andar wala object window object ha.

*/


function chai(){
  var username = "Bikash";
  console.log(this.username);
  
}
  // console.log(this);

// console.log("This is outside this : ");
// console.log(this); // we get {}

// chai()

/*
    When console.log(this) inside a empty function we get a lot of things :

    <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],       
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Getter/Setter],
  crypto: [Getter]


  // Condition : we wrote a let username inside a function and tried to access it using a this.username we 
  could not access it using this.usernmae ? why
  
  we get output as {} (i.e, undefined) , meaning "this" context is only insde onjects and does not work insdide functions , why?

}

*/

// ----------------------------------------------

// const newchai = function(){
//   var username = "Bikash";
//   console.log(this.username);
// }

// newchai()

// ----------------------------------------------

// created arrow function of the above
// [Function: newchai] here, newchai is the name of the arrow function 
const newchai = ()=>{
  // var username = "Bikash";
  // console.log(this.username);
  console.log(this);
  
}

// console.log(newchai)

// ----------------------------------------------


// Basic Arrow function
const addTwo = (num1,num2)=>{
  return num1 + num2;
}

// console.log(addTwo(1,2));



// Basic Arrow function with implicit return 
// removving the brackets and making the return statement go in the same line
// implicit returns means mai maan leta hu aur apko return keyword likhne ki zarurat nahi ha
const addTwo1 = (num1,num2)=> num1 + num2;
const addTwo2 = (num1,num2)=> (num1 + num2); // can also write kike this

// console.log(addTwo1(8,2));
// If we are using {} then we have to write `return` keyword but if we use () then we do not need to write the return keyword

const addTwo3 = (num1,num2)=> {username : "Bikash"}; // why we cannot return an object using {}  in implicit arrow function ?
// and Why do we have to use a () with a {} for it to return ?
const addTwo4 = (num1,num2)=> ({username : "Bikash"});

console.log(addTwo3(3,2));
