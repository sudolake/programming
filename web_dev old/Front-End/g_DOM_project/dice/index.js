// random number
var ranNum = Math.floor(Math.random() * 6 + 1);

var ranNum2 = Math.floor(Math.random() * 6 + 1);
console.log(ranNum2);

var randomImage = "images/dice" + ranNum + ".png";
var randomImage2 = "images/dice" + ranNum2 + ".png";

document.getElementById("img1").setAttribute("src", randomImage);
document.getElementById("img2").setAttribute("src", randomImage2);

if (ranNum > ranNum2) {
  document.getElementById("wins").textContent = "Player 1 Wins !";
} else if (ranNum < ranNum2) {
  document.getElementById("wins").textContent = "Player 2 Wins !";
} else {
  document.getElementById("wins").textContent = "It's a tie !";
}




