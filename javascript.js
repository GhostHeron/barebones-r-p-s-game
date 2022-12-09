
const playerChoice = prompt('input 0 for rock, 1 for paper, and 2 for scissors.');

const computerChoice = Math.floor(Math.random() * 3);

let choiceDisplay = choiceDisplayInput();

function choiceDisplayInput() {
if (computerChoice == '0') {
    return 'rock';
} else if (computerChoice == 1){
    return 'paper';
} else if (computerChoice == 2){
    return 'scissors';
} else {
    return 'error';
}
}


if (playerChoice == 0 && computerChoice == 0) {
    output = `the computer chose ${choiceDisplay}. A tie! wow.`;
} else if (playerChoice == 0 && computerChoice == 1){
    output = `the computer chose ${choiceDisplay}. You lost. Better luck next time!`;
} else if (playerChoice == 0 && computerChoice == 2) {
    output = `the computer chose ${choiceDisplay}. You won!`;
} else if (playerChoice == 1 && computerChoice == 0) {
    output = `the computer chose ${choiceDisplay}. You won!`;
} else if (playerChoice == 1 && computerChoice == 1) {
    output = `the computer chose ${choiceDisplay}. A tie! wow.`;
} else if (playerChoice == 1 && computerChoice == 2) {
    output = `the computer chose ${choiceDisplay}. You lost. Better luck next time!`;
} else if (playerChoice == 2 && computerChoice == 0) {
    output = `the computer chose ${choiceDisplay}. You lost. Better luck next time!`;
} else if (playerChoice == 2 && computerChoice == 1) {
    output = `the computer chose ${choiceDisplay}. You won!`;
} else if (playerChoice == 2 && computerChoice == 2) {
    output = `the computer chose ${choiceDisplay}. A tie! wow.`;
}else {
    output = "something went wrong.";
}



console.log(output);