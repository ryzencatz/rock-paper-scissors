const getComputerChoice = () => {
    n = Math.random();
    
    if (n < 0.33) {
        choice = 'rock';
    } else if (n < 0.66) {
        choice = 'paper';
    } else {choice = 'scissors'}
    
    return (choice);
}

const getHumanChoice = () => {
    choice = window.prompt("rock paper or scissors?");
    while (!(choice === 'rock' | choice === "paper" | choice === 'scissors')) {
        console.log('invalid input');
        choice = window.prompt("rock paper or scissors?");
    }
    
    return (choice);
}

let humanScore = 0;
let computerScore = 0;