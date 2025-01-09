const myObject = {
    name : 'Bikash',
    age : 20,
    country : 'India',
    Email : 'bikash123@gmail.com'
}

// for accessing this object we can use for-in loop

for (const key in myObject) {
    // console.log(key); // This will print the key of the object

    // console.log(myObject[key]); // This will print the value of the object

    //console.log(`${key} and its value is ${myObject[key]}`); // we can also print the key and value of the object  
    
    
}

// But can we print a map using for in loop ? Lets See

const map = new Map();
map.set('IND',"India");
map.set('USA',"United States of America");
map.set('UK',"United Kingdom");

for (const key in map) {
    console.log(key); // The ouput we got is noting , no output. Why?
    // Becuase map is not iterable. So we can't use for in loop to print the map. 
}