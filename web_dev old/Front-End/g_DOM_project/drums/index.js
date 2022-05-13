// detecting button press
for (let i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// detecting keyboard press
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

function playSound(key) {
  switch (key) {
    case "a":
      var tom1 = new Audio("sounds/a.mp3");
      tom1.play();
      break;

    case "s":
      var tom2 = new Audio("sounds/s.mp3");
      tom2.play();
      break;

    case "d":
      var tom3 = new Audio("sounds/d.mp3");
      tom3.play();
      break;

    case "f":
      var tom4 = new Audio("sounds/f.mp3");
      tom4.play();
      break;

    case "g":
      var tom5 = new Audio("sounds/g.mp3");
      tom5.play();
      break;

    case "h":
      var tom6 = new Audio("sounds/h.mp3");
      tom6.play();
      break;

    case "j":
      var tom7 = new Audio("sounds/j.mp3");
      tom7.play();
      break;

    default:
      console.log("idk");
  }
}
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
