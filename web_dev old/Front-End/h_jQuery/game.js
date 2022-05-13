$(document).ready(function(){
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = []; 
var userClickedPattern = []; 
var started = false; 
var level = 0; 



$("#restart-button").on("click", function(){
  if (!started) {
    $("#level-title").text("Level " + level); 
    nextSequence();
    started = true;
    $("#restart-button").attr("src", "")
    $(".btn").show()

  }
});



$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour); 

  playSound(userChosenColour);
  animatePress(userChosenColour);


  checkAnswer(userClickedPattern.length-1); 
});



function checkAnswer(currentLevel) {


    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if (userClickedPattern.length === gamePattern.length){

        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {

      var wrongSound = new Audio("sounds/wrong.mp3")
      wrongSound.play(wrongSound)
      $(".btn").hide()
      $("body").addClass("game-over")
      $("h1").text("Wrong, press the restart button to play again")
      $("#restart-button").attr("src", "restart.png")


      
      setTimeout(function(){
        $("body").removeClass("game-over")
      },200)
      startover()




    }

}

function nextSequence() {

  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function startover(){
  level = 0;
  gamePattern = []
  started = false;
}


})