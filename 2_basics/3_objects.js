// We declare objects using 2 types : first is literal and other is constructor , singleton
// any while using literals the singleton is created and not when constructor


// Object literals

const mySymbol = Symbol("key1")

const JsUser = {
    name : 'Bikash',
    email : 'bikash@gmail.com',
    "full name" : "Bikash Behera",
    lastLoginDAys : ['Monday','TuesDay'],
    [mySymbol] : ['Symbol1'] , //Asscessing a Symbol use []
}

// console.log(JsUser['name']);
// console.log(JsUser['email']);
// console.log(JsUser[mySymbol]);
// console.log(JsUser.name);
// console.log(JsUser.email);


// How to change values in the Obj
// JsUser.email = 'newemail@gmail.com'
// console.log(JsUser);

// Freeze the object for no chnage
// Object.freeze(JsUser)
// JsUser.email = 'freeze@gmail.com'
// console.log(JsUser);








