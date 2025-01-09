if(2 === "2"){
    // console.log("true");
}
else{
    // console.log("false");
}

//-------------------------------------------------------------------------------------------

const isTemperature =  40;
if(isTemperature > "40"){
    // console.log("Tmperatur is 40");
}
else{
    // console.log("Temperature is greature than 40");
}

//-------------------------------------------------------------------------------------------
// Nullish Coalescing Operator (??) null undefined

let val1;

val1 = 5 ?? 10
// console.log(val1);

/*----------------------------------------------------------------------------------------*/

// Scope in Flow statements

const score = 400;

if(score == 400){

    // var power = "fly";
    let power = "fly";
    // console.log(`Power is ${power} , Inside the if block`);
    
}

// Here till now we can access the power variable becuase the access is inside its scope but if we try to access the power variable outside the if block then it 
// will give an error.

// console.log(`Power is ${power} , Outside the if block`); // uncomment this line to see the error

/*

This error of power not defined we got is good becuase this is what should have happened , when we are trying to access the variable outside its scope.
But if we use var instead of let then we can access the variable outside the scope also.Which is not a good practice.

*/


// -------------------------------------------------------------------------------------------

// Implicit Scope in Flow Statements

const balance = 5000;

// if(balance > 2000) console.log("Balance is greater than 2000");

// we can also write multiple lines using one-line implicit scope but this practise and above single line scope is not a good practice.

// if(balance > 1000) console.log("Line -1 "),console.log("line -2"); // single line multi statement if scope

// By using the comma we can write it in the same line or also write it in multiple line but this is not a good practise.



// -------------------------------------------------------------------------------------------



