
var buttonColours = ["red", "blue", "green", "yellow"];
var started = false;
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id"); // tells us what color was printed
  userClickedPattern.push(userChosenColour); // adds it to an 'userclickedpattern'

  playSound(userChosenColour); // plays the sounds

  animatePress(userChosenColour); // plays the animation
});

function nextSequence() {
level += 1;
  var randomNumber = Math.floor(Math.random() * 4); // generates random number
  var randomChosenColour = buttonColours[randomNumber]; // generates random color to be shined
  gamePattern.push(randomChosenColour); // tells the game what color should be clicked

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); // animatesx it 

  playSound(randomChosenColour); // plays sound
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


var level = 0;
$(document).on("keydown",function(){
    nextSequence();
    $("h1").html("Level "+level);

})




//1. Create a new function called animatePress(), it should take a single input parameter called currentColour.
function animatePress(currentColor) {

  //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
  $("#" + currentColor).addClass("pressed");

  //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}



