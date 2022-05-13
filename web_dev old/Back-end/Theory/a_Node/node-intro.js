
// run node programs by typing: node node-intro.js in the hyper terminal


// importing an internal library
const fs = require("fs") // imports the FileSystem library

fs.copyFileSync("a_file.txt", "a_second_file.txt") // arguments = (what_to_copy, copy_name)



// external npm packages
// first create a package storage by typing: npm init in the hyper terminal
// search for a package
// type: npm i package_name in terminal
// profit

// npm i superheroes
// npm i supervillains

const superheroes = require("superheroes") // importing it
const supervillains = require("supervillains") // importing it

console.log(superheroes.random() + " are better than " + supervillains.random())


