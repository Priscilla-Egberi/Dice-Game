// we are going to create a variable and then create a way of getting images at random from our folder
// this will be easy because the name of our images are the same except for the numbers in the names,
// we can manipulate these numbers to pick images at random. LET'S DO THIS

// FOR THE FIRST IMAGE
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var imageAtRandom1= "images/dice" + randomNumber1 + ".png"
var image1=document.querySelectorAll("img")[0]
image1.setAttribute("src", imageAtRandom1)

// FOR THE SECOND IMAGE
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageAtRandom2= "images/dice" + randomNumber2 + ".png"
var image2=document.querySelectorAll("img")[1]
image2.setAttribute("src", imageAtRandom2)

////////////// TO CHANGE THE TITLE OF THE GAME //////////////////////
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins."
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins."
}
else if (randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML="Draw."
}

