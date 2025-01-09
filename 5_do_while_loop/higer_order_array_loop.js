
// for of : in the normal for loop we needed value[i] to get the value of the array. 
// But in for of loop we can directly get the value of the array.

const object = [4,5,6,7,8,9];
const arrayNames = ['Rahul', 'Rohit', 'Rajesh', 'Ramesh', 'Raj', 'Ravi'];
const getEachCharacter = "Bikash Behera"
// Here , value-> the index of the array
// object -> the array
for (const value of getEachCharacter) {
    // console.log(value);
}


// Maps
const map = new Map();
map.set('IND',"India");
map.set('USA',"United States of America");
map.set('UK',"United Kingdom");
// map.set('IND',"India"); // here we tried to save the IND again but it will not be saved as it is already saved.
// and also maps are know for there unique key value pair.
// along with the same order in which we have weritten them

// console.log(map);

// How to print the map value using for of loop
for (const [key, value] of map) {
    // console.log(key,":-", value);
}


// But can we print a object using for of loop ? 

const ExampleObject = {
    name: "Bikash",
    age: 20
}

for (const [key,value] of ExampleObject) {
    console.log(key,":-", value);
    
}
// Error from above code : TypeError: ExampleObject is not iterable

// No, we can't print the object using for of loop.

// But we need to know how to print the object using for loop. See "objects_loop.js" file for that.