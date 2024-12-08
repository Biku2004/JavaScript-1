const regularUSer = {
    email : "bikash@gmail.com",
    userLoggedIn : false,
    userDetails : {
        fullName : 'Bikash Behera',
        age : 12,
        home : {
            city : 'Jamshedpur',
            state : 'jharkhand'
        }
    },
    Parent: {
        name : 'Chhabilata Behera',
    }
}

// console.log(regularUSer.userDetals.home.state);

// ------------------------------------------------------------
const s1 = {1 : 'Cake' , 2 : 'Chocolate'}
const s2 = {3 : 'Car' , 4 : 'Bike'}

const obj = Object.assign({},s1 , s2)
// console.log(obj);


// ------------------------------------------------------------

// Object in Array

const ObjArray = [
    {
        username : 'Biku@112',
        password : false,

        userDetails : {
            isLoggedIn : false
        }
    },
    {
        price : 123456
    }
]

// console.log(ObjArray[1].password)
// console.log(Object.keys(ObjArray[0]))
// console.log(Object.entries(regularUSer)) // gives key values output in array type


// to check if property exist in the object or not
// console.log(regularUSer.hasOwnProperty('userDetails'))



// ------------------------------------------------------------
// Destructuring of the Object

const course = {
    courseName : 'JavaScript',
    courseInstructor : 'Bikash',
    price : '2 weeks'
}

// const {courseName} = course 
/* mostly used and in accessing elements inside for easy and indide this {} 
we fill the keys which we want to access and we do not always have to write course.courseName
*/

// console.log(courseName);  //output : JavaScript

/*
 we can also assign names to elemets inside {} for example :  I am assigning "nameIn" to courseName 
 const {courseName : nameIn} = course 
*/

const {courseName : nameIn} = course 

console.log(nameIn);
