//Global Variables//

//random # must be between 19-20//
//characters must have a value between 1-12//
$(document).ready(function(){

// var gameButton = $("#startGame");
var button = $("button");

var wins = 0;
var losses = 0;
var randomNumber = Math.floor((Math.random()*120) + 19);
var playerScore = 0;
var displayScore= [];

var imageClicked;

var dany = $(".dany");
// var dany = Math.floor((Math.random()*12) + 1);
var jaime = $(".jaime");
// var jaime = Math.floor((Math.random()*12) + 1);
var tyrion = $(".tyrion");
// var tyrion = Math.floor((Math.random()*12) + 1);
var jonSnow = $(".jonSnow");
// var jonSnow = Math.floor((Math.random()*12) + 1);



//Functions//

button.on("click", function(){

  if($(this).hasClass("btn-primary")){
    $("#currentScore").text(0);
    $("#randomNumber").text(randomNumber);
    $("#wins").text(0);
    $("#losses").text(0);
    generateCharacterValues();
    console.log(randomNumber);
    console.log("The value of jonSNow:" + jonSnow);
    console.log("The value of jaime:" + jaime);
    console.log("The value of dany:" + dany);
    console.log("The value of tyrion:" + tyrion);
    }

  else if($(this).hasClass("clickImage")){
    imageClicked = $(this).val();
    playerScore = 0;

      if(imageClicked === "danyPic"){
      displayScore.push(dany);
      addingArray();
      determineWinOrLoss();
      console.log(displayScore);
      }

      if(imageClicked === "jaimePic"){
      displayScore.push(jaime);
      addingArray();
      determineWinOrLoss();
      console.log(displayScore);
      }

      if(imageClicked === "jonSnowPic"){
      displayScore.push(jonSnow);
      addingArray();
      determineWinOrLoss();
      console.log(displayScore);
      }

      if(imageClicked === "tyrionPic"){
      displayScore.push(tyrion);
      addingArray();
      determineWinOrLoss();
      console.log(displayScore);
      }

  // addingArray();
  console.log(imageClicked);

}

// determineWinOrLoss();

});




function generateCharacterValues(){
  dany = Math.floor((Math.random()*12) + 1);
  jaime = Math.floor((Math.random()*12) + 1);
  tyrion = Math.floor((Math.random()*12) + 1);
  jonSnow = Math.floor((Math.random()*12) + 1);
}

//When an image is clicked, the value tied to the variable associated with the image needs to be captured. The value then needs to be pushed the screen.

function addingArray(){
  for(var i = 0, l= displayScore.length; i<l; i++){
    playerScore += displayScore[i];
    $("#currentScore").text(playerScore);
    console.log(playerScore);
  }

}

function determineWinOrLoss(){
  if (playerScore === randomNumber){
    alert("You win!");
    wins++;
    $("#wins").text(wins);
    resetGame();
  }
  else if(playerScore > randomNumber){
    alert("You lose!");
    losses++;
    $("#losses").text(losses);
    resetGame();
  }

}

function resetGame(){
  randomNumber = Math.floor((Math.random()*120) + 19);
  playerScore = 0;
  displayScore= [];
  generateCharacterValues();
  $("#currentScore").text(0);
  $("#randomNumber").text(randomNumber);
  console.log(displayScore);

}

//
});
