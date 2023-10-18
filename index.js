var randomNumber1 = Math.floor(Math.random() * 6) + 1; //gives random no between 1 and 6
var randomDicedImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDicedImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
