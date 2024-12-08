let score = "33"
// let score = undefined

//console.log(typeof score); //string 
//console.log(typeof (score)); //string

let convertStringToNumber = Number(score); //converting the string into number datatype

//console.log(typeof convertStringToNumber); //checking the type after converting from string to number
//console.log(convertStringToNumber); // checking the output as weather the conversion is correct or not

/*
    Case 1 : let score = "33"

    Output : 
        string
        string
        number
        3

    Case 2 : let score = "33aa" ==> input as number and some character , to see result what will happen in conversion?

    Output :
        string
        string
        number
        NaN

    case 3 : let score = null

    output : 
        object
        object
        number
        0

    case 4 : let score = undefined

    output : 
        undefined
        undefined
        number
        NaN

    case 5 : let score = 33

    output : 
        string
        string
        number
        33

    Note : While conversion of "33aa" we saw that its output comes as NaN and the tyoeOf NaN is number.

    

*/

let isLooggedIn = 1;
let convertBooleanToNumber = Boolean(isLooggedIn); //converting the boolean into number datatype
// console.log(typeof convertBooleanToNumber); //checking the type after converting from boolean to number
// console.log(convertBooleanToNumber); // checking the output as weather the conversion is correct or not

/*
    Case 1 : let isLooggedIn = 1

    Output : 
        boolean
        true

    Case 2 : let isLooggedIn = 0

    Output : 
        boolean
        false

    Case 3 : let isLooggedIn = null

    Output : 
        boolean
        false

    Case 4 : let isLooggedIn = undefined

    Output : 
        boolean
        false

    Case 5 : let isLooggedIn = "Bikash"

    Output : 
        boolean
        true

    Case 6 : let isLooggedIn = ""

    Output : 
        boolean
        false

    Note : While conversion of "Bikash" we saw that its output comes as true and the tyoeOf true is boolean.
*/

let isString = 123;
let convertStringToString = String(isString); //converting the string into boolean datatype\
console.log(typeof convertStringToString); //checking the type after converting from string to boolean
console.log(convertStringToString); // checking the output as weather the conversion is correct or not

/*
    Note : Converting the Number to String and then checking the change
// */