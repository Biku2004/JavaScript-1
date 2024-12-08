// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// Here the JS has automatically converted the string 2 to a number 2
// console.log("2" > 1); 
// console.log("02" > 1);



// -----------Avoid all these type of conversion----------

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0); // JS converts the null to 0 and now 0 >= 0 which is true.


//----- All output are false
// console.log(undefined == 0); 
// console.log(undefined > 0);
// console.log(undefined < 0);

// ---- 
// 
console.log("2" === 2); // Strict Checking (===), will return false but on (==) it will return true.