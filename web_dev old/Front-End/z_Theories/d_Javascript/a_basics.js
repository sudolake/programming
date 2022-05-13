// npm audit

// in browser
var myName = "Matej"
let e = 0 // let is a replacement of "var" it has a local scope, if I use it in an ex. loop, i cant work with it ouside the loop 

var yourName = prompt("Please enter your name: ") // same as alert but theres a field you can type in

alert("Hey " + yourName + " Im " + myName) // alert

var count = yourName.length // how many chars it have

var exampleString = "hello im matej"

var greeting = exampleString.slice(0,5) // cutting Strings, prints "hello"


greeting = greeting.toLowerCase()
greeting = greeting.toUpperCase()
var k = 2;
var i = 8;
i++;
i += k;


// Math.random //

var number = Math.random() // random num between 0 - 0.99999999
var change = number * 6 // between 0 - 5.898989
var change2 = Math.floor(change) // rounds it down so its 0 - 5
var changefinal = change2 + 1 // so its 0 - 6

