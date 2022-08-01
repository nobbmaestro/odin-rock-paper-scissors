// getComputerChoise + helper
function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoise() {
    const choise = ['Rock', 'Paper', 'Scissors'];
    const max = choise.length;
    
    return choise[randomInt(max)];
}

// playRound + helper
function capitilizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1)
};
function playRound_helper(playerSelection, computerSelection) {
    const outcome_dict = {
        'rock': {
            'rock': 'tie',
            'paper': 'loss',
            'scissors': 'win'
        },
        'paper': {
            'rock': 'win',
            'paper': 'tie',
            'scissors': 'loss'
        },
        'scissors': {
            'rock': 'loss',
            'paper': 'win',
            'scissors': 'tie'
        },
    }
    return outcome_dict[playerSelection][computerSelection]
};
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    switch (playRound_helper(playerSelection, computerSelection)) {
        case 'win':
            return `You win! ${capitilizeFirstLetter(playerSelection)} beats ${computerSelection}.`
            break;

        case 'loss':
            return `You lose! ${capitilizeFirstLetter(computerSelection)} beats ${playerSelection}.`
            break;

        case 'tie':
            return `Tie!`
            break;
    }
};

// playerSelection
function playerSelection() {
    // const playerSelection = prompt("Choose: \n\tr for rock,\n\tp for paper or\n\ts for scissors");
    
    prompt("Choose: \n\tr for rock,\n\tp for paper or\n\ts for scissors");
};

function game () {
    for (let i = 0; i < 5; i++) {
        
    };
};

function main() {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoise();

    console.log(playRound(playerSelection, computerSelection));
};

main();