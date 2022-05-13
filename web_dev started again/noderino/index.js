//jshint esversion:6




// node index.js - in hyper
// node - enter node in hyper



const fs = require("fs");


fs.copyFileSync("file1.txt","file2.txt");


// external modules

var superheroes = require("superheroes"); // incomporates it into our file
const supervillains = require("supervillains");


var mySuperheroName = superheroes.random();
console.log(mySuperheroName)

var superVillains = require("supervillains");
var mySuperVillainName = supervillains.random();
console.log(mySuperVillainName);