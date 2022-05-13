

// JS uses camelCase instead of dashes ("-")
//ex. in css: font-size , in JS: "fontSize = 5 rem"
// JS overrides even in-line style


document.getElementsByTagName("h1")[0].style.color = "blue"; // selects <h1> and changes color to blue
document.getElementsByTagName("h1")[0].style.backgroundColor = "red"; // selects <h1> and changes bg color to red


// adding / removing classes from an element

document.querySelector("h1").classList.add("example"); // adds a class 
document.querySelector("h1").classList.remove("example"); // removes a class 
document.querySelector("h1").classList.toggle("example"); // removes if it has the class, adds if it doesent



// 
document.querySelector("h1").innerHTML = "<em>goodbye</em>"; // changes everything inside the <h1></h1> tags, so you can do <em>
document.querySelector("h1").textContent = "goodbye"; // changes the inner text, nothing else like <em>


document.querySelector("a").setAttribute("href", "https://google.com")   // finds all the attributes of the element and changes
// It takes arguments: (what_attribute_to_change, what_to_change_it_to)































