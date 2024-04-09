require('dotenv').config();
// The above is equivalent to the next two lines:
// const dotenv = require('dotenv');
// dotenv.config();

console.log(process.env.ENVIRONMENT_MESSAGE);


console.log("Terminal app is running!");

const pokemon = require('pokemon');

let randomPokemon = pokemon.random();
console.log(`Today's lucky Pokemon is ${randomPokemon}`);

console.log("Bye bye, terminal app finished!")

