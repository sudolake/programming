




$("h1").css("color","red") // setting the color
$("h1").css("font-size") // tells us how big the font is



$("h1").addClass("big-text margin") // added 2 classes
$("h1").removeClass("big-text"); // remove

$("h1").hasClass("big-text") // boolean


// changing text

$("h1").text("Bye") // change text to "Bye"

$("button.first-one").html("<strong>Hellllo</strong>")



$("img").attr("src") // get it
$("img").attr("href", "www.google.com") // set it


$("h1").click(function(){ // event listener

    $("h1").css("color", "black")


});


 // event listeners

$("button").click(function(){      // listens to ALL the buttons unlike vanilla javascript

    $("h1").css("color","purple");

})



// option 1
$(document).keydown(function(event){

    $("h1").html(event.key)

} )

// option 2
$("h1").on("click", function(){ // better I guess

$("h1").css("color","green")
})


// creating HTML elements through jQuery

$("h1").before("<p>you are going to shit yourself</p>") // adds it before "h1"
$("h1").after("<p>you are going to shit yourself</p>") // adds it after "h1"

$("h1").prepend("<p>prepended</p>") // adds it inside the "h1" element before the original text 
$("h1").append("<p>appended</p>") 

$("p").remove(); // remove it

// hide an element


$("button").click(function(){   

    $("h1").hide(); // hides it
    $("h1").show(); // shows it
    
    $("h1").toggle(); // hides / shows it (toggled) 

    $("h1").fadeIn(); 
    $("h1").fadeOut(); 
    $("h1").fadeToggle(); 

})

// ANIMATION
$("h1").slideUp();
$("h1").slideDown();

$("button").click(function(){

    $("h1").animate({opacity:0.5})

})