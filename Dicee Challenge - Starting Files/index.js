var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImag1 = "dice" + randomNumber1 + ".png";
var randomImgSour1 = "images/" + randomDiceImag1;

var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", randomImgSour1);


var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;

var randomDiceImag2 = "dice" + randomNumber2 +".png";
var randomImgSour2 = "images/" + randomDiceImag2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgSour2);




//If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }