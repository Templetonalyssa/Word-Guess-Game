var wordArray = ["skeleton", "haunted", "corpse", "spiderweb", "despair", "macabre", "bloodless", "agony"];
var tempArray = [];
var computerWord = document.getElementById("randomword");
var maxGuesses = 10;
var remainingGuesses = 0;


//ON THE PAGE (HOW IT LOOKS)
//"Press any key to get started"
//dish dots for the blank word
//slow reveal of the word guessed
//"Number of Guesses Remaining": (# of guesses remaining for the user).
//"Letters Already Guessed": (Letters the user has guessed, displayed like L Z Y H).


//WHAT THE PAGE DOES WHEN YOU START PRESSING THINGS
//displays the dish dot dash of a random word
//records the key pressed and displays it in the dish dot
//records the keys pressed
//gives you a finite number of guesses



//what happens when you load the page

function gameStart() {


  computerWord = wordArray[Math.floor(Math.random() * wordArray.length)];
  console.log(computerWord);

  for (var i = 0; i < computerWord.length; i++) {
    tempArray.push("_");
  }
  console.log(tempArray);


}

//what happens when you press a key-the random word is indexed and shown on the display.
//when the correct letter is guessed, it appears in the blank word.

document.onkeyup = function (event) {


  console.log(event.key)
  for (var i = 0; i < computerWord.length; i++) {
    if (event.key === computerWord[i]) {
      tempArray[i] = event.key;
    }

    document.getElementById("randomword").innerHTML = tempArray;
  }
  console.log(tempArray);
};

//the gameStart(); below is not a superfluous mistake, the page doesn't work when you remove it

gameStart();

//Cannot figure out how to restart the game after a certain number of tries, used a restart button instead

function myFunction() {
  location.reload();
}