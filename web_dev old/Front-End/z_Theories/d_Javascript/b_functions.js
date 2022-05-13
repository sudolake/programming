var i = 5;

function example(){ // creating it
    name += "is gay"
    
    i++
    console.log(i);
    console.log(i + 4);
    console.log(i + 1);
};
example(); // calling it
example("Erik"); // calling it again, why fucking not...



// passing in a value
var name;
function withValue(name){ // creating it
    
    name += " is gay"
    console.log(name)


};
withValue("Matej"); // calling it
withValue("Erik"); // calling it again, why fucking not...



// RETURN //

function examplarrik(shit, other){
    return shit * other
}

console.log(examplarrik(5, 0))



// calling a function in a function //

function add(num1,num2) {
    
    return(num1 + num2)
}

function substract(num1,num2) {

    return(num1 - num2)
}
// main one
function calculator(num1,num2,operator){
    
    return operator(num1,num2);
}

console.log(calculator(5,2,add))