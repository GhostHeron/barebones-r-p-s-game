
const playerInput = prompt('choose rock, paper, or scissors.');

const computerChoice = Math.floor(Math.random() * 3); //finds random integer from zero to two

let choiceDisplay = choiceDisplayInput(); //variable to store output of choiceDisplayInput()

// converts computer choice into strings
function choiceDisplayInput() {
if (computerChoice == 0) {
    return 'rock';
} else if (computerChoice == 1){
    return 'paper';
} else if (computerChoice == 2){
    return 'scissors';
} else {
    return 'error';
}
}

//sets the whole string inputted by the player to lowercase so it works in playerChoiceConver()
let lowercasePlayerInput = playerInput;
lowercasePlayerInput = lowercasePlayerInput.toLowerCase()

let playerChoice = playerChoiceConvert()

//converts player's choice into a number so it can be compared
function playerChoiceConvert() {
    if (lowercasePlayerInput == 'rock') {
        return 0;
    } else if (lowercasePlayerInput == 'paper') {
        return 1;
    } else if (lowercasePlayerInput == 'scissors') {
        return 2;
    }
}

//variables for different game outcomes
const win = `the computer chose ${choiceDisplay}. You won!`;
const tie = `the computer chose ${choiceDisplay}. A tie! wow.`;
const loss = `the computer chose ${choiceDisplay}. You lost. Better luck next time!`;

//if else block that determines game outcome.
if (playerChoice == computerChoice) {
    output = tie;
} else if (playerChoice == 0 && computerChoice == 1){
    output = loss;
} else if (playerChoice == 0 && computerChoice == 2) {
    output = win;
} else if (playerChoice == 1 && computerChoice == 0) {
    output = win;
} else if (playerChoice == 1 && computerChoice == 2) {
    output = loss
} else if (playerChoice == 2 && computerChoice == 0) {
    output = loss;
} else if (playerChoice == 2 && computerChoice == 1) {
    output = win;
}else {
    output = "something went wrong.";
}



console.log(output);