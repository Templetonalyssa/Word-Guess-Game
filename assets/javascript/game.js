


//Create a list of words
var wordArray = ["skeleton","haunted","corpse","spiderweb", "despair", "macabre", "bloodless","agony"];
var tempArray = [];
var computerWord = "";
var guesses = 12;

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

function gameStart(){

   guesses = 12;
   tempArray = [];
        
  computerWord = wordArray[Math.floor(Math.random()*wordArray.length)];
 
   console.log(computerWord);

   for (var i = 0; i<computerWord.length; i++) {
   tempArray.push("_")  
   }
   console.log(tempArray);

}


document.onkeyup = function(event){

  console.log(event.key)
  for (var i = 0; i<computerWord.length; i++) {
    if (event.key === computerWord[i])  {
      tempArray[i]=event.key
    }
    }
 console.log(tempArray);
};

gameStart ()

//var things = ['Rock', 'Paper', 'Scissor'];
//var thing = things[Math.floor(Math.random()*things.length)];
//alert('The computer chose:' + thing);

// //for (var i = 0; i<randomWord.length; i++){
//   if (lettersGuessed.includes(randomWord[i])) {
//     tempString += randomWord[i] + " ";
// } else {
// tempString += "_ ";
// }
// } 