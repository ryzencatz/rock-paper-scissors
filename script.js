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
    choice = window.prompt("rock paper or scissors?").toLowerCase();
    while (!(choice === 'rock' || choice === "paper" || choice === 'scissors')) {
        console.log('invalid input');
        choice = window.prompt("rock paper or scissors?").toLowerCase();
    }
    
    return (choice);
}

const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    const playRound = (humanChoice, computerChoice) => {
        if (humanChoice === 'rock' && computerChoice === 'scissors') {
            console.log("you win! rock beats scissors"); 
            humanScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log("you win! paper beats rock"); 
            humanScore++;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log("you win! scissors beats paper"); 
            humanScore++;
        } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
            console.log("you lose! rock beats scissors"); 
            computerScore++;
        } else if (computerChoice === 'paper' && humanChoice === 'rock') {
            console.log("you lose! paper beats rock"); 
            computerScore++;
        } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
            console.log("you lose! scissors beats paper"); 
            computerScore++;
        } else if (computerChoice === humanChoice) {
            console.log("you tied!");
        }
    }

    for (let i = 1; i < 6; i++) {
        console.log(`this is round ${i}`);

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        console.log(`your score is ${humanScore} and computer's is ${computerScore}`);
    }


}


playGame();