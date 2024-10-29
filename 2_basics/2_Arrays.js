const marvel_Heros = ["Ironman" , "Spiderman" , "Thor"]
const dc_Heros = ["Batman" , "Flash" , "batman"]


// Concat
const all_heros = marvel_Heros.concat(dc_Heros)
// console.log(`We use concat : ${all_heros}`)


// Spread Operator
const all_new_heros = [...marvel_Heros , ...dc_Heros]
// console.log(`All marvel and dc heros are (using spread Operator): ${all_new_heros}`);
// console.log(all_new_heros)

// console.log(Array.isArray([1,2,3])); //checks if arrays or not as true or false
// console.log(Array.from("Bikash"));  //Divides the charcter and make it a array of characters


const score1 = 100;
const score2 = 200;
const score3 = 200;

console.log(Array.of(score1 , score2 , score3));

// const ScoreAll = [...score1 , ...score2 , ...score3]
// console.log(ScoreAll);


