var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomDiceImage = "images/dice"+randomNumber1+".png";
var imagesource = document.querySelectorAll("img")[0];
imagesource.setAttribute("src",randomDiceImage);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImages = "images/dice"+randomNumber2+".png";
var imagessource2 = document.querySelectorAll("img")[1];
imagessource2.setAttribute("src",randomDiceImages);

if(randomNumber1>randomNumber2)
{ 
document.querySelector("h1").innerHTML= "Player-1 Wins!!";
}
else if(randomNumber1<randomNumber2)
{
document.querySelector("h1").innerHTML= "Player-2 Wins!!";
}