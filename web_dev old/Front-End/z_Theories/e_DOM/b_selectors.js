

/////////////////////////////////////////////
// selecting more elements (returns ARRAY) //
/////////////////////////////////////////////

document.getElementsByTagName("p") // finds all "p" tags, outputs them as an ARRAY, so we can do something like .length to see how many <p> it has
document.getElementsByTagName("p")[0] // selects the first item fron the Array

document.getElementsByClassName("a_class") // same as above, but with classes, also returs an ARRAY


//////////////////////////////////
// selecting a specific element //
//////////////////////////////////

document.getElementById("specific_id") // select a spec. ID, an ID is unique      - most used

// querySelector //
document.querySelector("li a") // finds an "a" tag in a "li" tag. very useful
document.querySelector("li.example") // finds an "li" tag with a .example class
// querySelector returs only the first one that it finds, to find all of them, use querySelectorAll
document.querySelectorAll("li") // finds all tags with "li", returns an ARRAY




 // THIS IS TRASH, BUT YOU MIGHT FIND THEM //
var ex = document.firstElementChild.lastElementChild.firstElementChild // pathing, first goes in <html>, then to <body>, then to <h1>


