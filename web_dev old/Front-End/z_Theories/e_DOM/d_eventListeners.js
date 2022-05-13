

function exampleFunction(){
    alert("u pressed a key")
    
}

document.querySelector("button").addEventListener("click", exampleFunction) // when a user "clicks on it", exampleFunction happens
                                                // functions dont have () after them, they would execute when loaded if they had ()




    document.querySelector("button").addEventListener("click",function() { // we can make a function (what should happen)
                                                                                // right inside like this
        alert("pressed a key")
    })