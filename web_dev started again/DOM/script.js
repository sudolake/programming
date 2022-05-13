

// DIFFERENT TYPES OF SELECTORS
x = document.querySelector("ul").lastElementChild;
document.querySelector("#someid");
document.querySelector("h1");
document.querySelector("li a"); // targets the element ahref inside of li
document.querySelector("li.itemidk"); // targets the element thats "li type" with the class of itemidk 
document.querySelectorAll("h1");
var sampleButton = document.getElementsByTagName("button")[0];


// CHANGING THE HTML / STYLE THROUGH JS
x.innerHTM;
x.textContent;  
x.style.color = "red";
sampleButton = sampleButton.style.backgroundColor = "yellow";



// ADDING AND REMOVING CLASSES
var sampleButton = document.getElementsByTagName("button")[0];
sampleButton.classList.add("enlarge");
sampleButton.classList.remove("enlarge");
sampleButton.classList.toggle("enlarge"); // if its applied, it removes it, if its not, it adds it (toggles it)
sampleButton.classList.add("enlarge")

// manipulating attributes

document.querySelector("a").attributes; // see an elements attributes
document.querySelector("a").getAttribute("href"); // we see that its google
document.querySelector("a").setAttribute("href", "https://www.bing.com"); // we change it to bing


// higher order functions

function add(num1, num2){
    return num1+num2
};
function multiply(num1, num2){
    return num1*num2
};

function calc(num1, num2, operator){
    return operator(num1,num2)
};
alert(calc(20,5,multiply))

var man1 = {
    name:"matej",
    age: 17
}
console.log(man1.age)



function bellboy (age,name,hasWorkPermit){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;


    this.clean = function(){
        alert("cleaning...")
    }

};
var bellBoy1 = new bellboy(142,"matej",true)



var bellboy2 = new bellboy(14,"matejko",true);