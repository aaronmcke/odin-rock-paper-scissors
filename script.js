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
// getComputerChoice();rock

/* Use a prompt to recieve the humans choice. Asking them to type rock, paper or scissors.
take in the string and store it in the function getHuman Choice */

function getHumanChoice () {
  let weapon = prompt('Please enter your weapon of choice. rock, paper or scissors')
  return weapon.toLowerCase();
}

// getHumanChoice();

/* Keep scores, declare 2 variables to tally computer score and human score.*/

let computerScore = 0;
let humanScore = 0;

// A function to play a single round to determin the winner using if statements and then declaring a point for the winner inside the score variable

function playRound (computerChoice, humanChoice) {
  humanChoice.toLowerCase;
  if (computerChoice === humanChoice) {
    humanScore ++; computerScore++;
    return console.log(`The computer chose ${computerChoice} and you chose ${humanChoice}! That is a tie!`);
  } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
    computerScore ++;
    return console.log(`The computer chose ${computerChoice} and you chose ${humanChoice}! Computer wins!`);
  } else if (computerChoice === 'rock' && humanChoice === 'paper') {
    humanScore ++;
    return console.log(`The computer chose ${computerChoice} and you chose ${humanChoice}! You win!`);
  } else if (computerChoice === 'paper' && humanChoice === 'rock') {
    computerScore ++;
    return console.log(`The computer chose ${computerChoice} and you chose ${humanChoice}! Computer wins!`);
  } else if (computerChoice === 'paper' && humanChoice === 'scissors') {
    humanScore ++;
    return console.log(`The computer chose ${computerChoice} and you chose ${humanChoice}! You win!`);
  } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
    computerScore ++;
    return console.log(`The computer chose ${computerChoice} and you chose ${humanChoice}! The computer wins!`);
  } else if (computerChoice === 'scissors' && humanChoice === 'rock') {
    humanScore ++;
    return console.log(`The computer chose ${computerChoice} and you chose ${humanChoice}! You win!`);
  } else 
    return console.log('Something went wrong, please try again! Thanks')
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(computerSelection, humanSelection); 


console.log(computerSelection, humanSelection);
console.log(computerScore, humanScore);