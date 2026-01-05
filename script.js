// The Plan
/*
Get Computer Choice -
--Generate a random number between 1 & 3 1 = Rock, 2 = Paper, 3 = Scissors.
--assign each number to respective variable.
*/



function getComputerChoice () {
  let num;
  num = Math.floor(Math.random() * 3 + 1)
  if (num === 1) {
    return 'rock'
  } else if ( num === 2) {
    return 'paper'
  } else {
    return 'scissors'
  }
}
console.log(getComputerChoice());

/* Use a prompt to recieve the humans choice. Asking them to type rock, paper or scissors.
take in the string and store it in the function getHuman Choice */

function getHumanChoice () {
  let weapon = prompt('Please enter your weapon of choice. rock, paper or scissors')
  console.log(choice);
}

getHumanChoice();

/* Keep scores, declare 2 variables to tally computer score and human score.*/

computerScore = 0;
humanScore = 0;

// A function to play a single round to determin the winner using if statements and then declaring a point for the winner inside the score variable

