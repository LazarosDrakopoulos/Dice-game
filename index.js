
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomDice ="images/dice" + randomNumber1 + ".png"
img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomDice);
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomDice2 ="images/dice" + randomNumber2 + ".png"
img2 = document.querySelectorAll("img")[0,1];
img2.setAttribute("src", randomDice2);
    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 wins!"
    }else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!"
}else{
    document.querySelector("h1").innerHTML = "Player 2 wins!"
}
