function addition(number1,number2){
    let result = number1 + number2;

    // console.log(result);
    
    // return result;
}

let result = addition(5,10);
// console.log(result);



// Giving default values : By adding username = 'Bikash' in the parameters it becomes default
function UserLoggedIn(username = "Bikash"){
    if(username === undefined || username == ""){
        console.log("Please Enter you name");
        return;
    }
    return(`${username} is LoggedIn`);
}

// console.log(UserLoggedIn("Durga"))


// rest and spread in JS--------------------


// Passing a Object into an Array

let UserDetails = ({
    username : 'Bikash',
    price : '100'
})

function passingObjectInFnction(anyObject){
    console.log(`This is my name ${anyObject.username} and this is my price ${anyObject.price}`);
}

passingObjectInFnction(UserDetails)
