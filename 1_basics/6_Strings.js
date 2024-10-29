const name = "Bikash";
const repoName = 50;

// console.log(name + repoName + " Value");

console.log(`Hello my name is ${name} and my repoCount is ${repoName}`);

// Declaration of object another method :

const gameName = new String ("Bikash"); // put this line on chrome developer mode

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt('2'));
// console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,4); //last character is not included
// console.log(newString);

const anotherString = gameName.slice(-2,4);
console.log(anotherString);