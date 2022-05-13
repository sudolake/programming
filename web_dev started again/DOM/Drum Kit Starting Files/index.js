


// detect button press
for (i=0;i< document.querySelectorAll('button').length; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){


        var buttonInnerHTML = this.innerHTML
     

        makeSound(buttonInnerHTML)
        animation(buttonInnerHTML)
    });
}

// detect keyboard press

document.addEventListener("keydown", function(tlacitko){


    makeSound(tlacitko.key)
    animation(tlacitko.key)




})

 // make Sound
function makeSound(key){

    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
            
        case "a":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;

        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
                break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
                break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
                break;
                             
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
                break;
            case "l":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;





    
        default:
            break;
    }




}







// add animation

function animation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("button-pressed");
    setTimeout(function(){activeButton.classList.remove("button-pressed")},100)
    
}





// var man1 = {
//     name:"matej",
//     age: 17
// }
// console.log(man1.age)



// function bellboy (age,name,hasWorkPermit){
//     this.name = name;
//     this.age = age;
//     this.hasWorkPermit = hasWorkPermit;
// };
// var bellBoy1 = new bellboy(142,"matej",true)

