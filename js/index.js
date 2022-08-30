// getComputerChoise + helper
function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoise() {
    const choise = ['Rock', 'Paper', 'Scissors'];
    const max = choise.length;
    
    return choise[randomInt(max)].toLocaleLowerCase();
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
function getPlayerSelection() {
    const selection_dict = {
        'r': 'Rock',
        'p': 'Paper',
        's': 'Scissors'
    };

    const playerSelection = prompt("Choose 'r' for rock, 'p' for paper or 's' for scissors:").toLowerCase();

    if (['r', 'p', 's'].includes(playerSelection)) {
        return selection_dict[playerSelection]
    };
};

// function game() {
//     let score = 0; 
//     let round = 5;
// 
//     for (let i = 0; i < round; i++) {
//         const playerSelection = getPlayerSelection();
//         const computerSelection = getComputerChoise();
// 
//         const roundResult = playRound(playerSelection, computerSelection);
//         console.log(roundResult)
// 
//         if ( roundResult.includes('win') ) {
//             score++;
//         }
//     };
//     console.log(`You\'ve won ${score} out of ${round} rounds!`)
// };
// 
// game();

function handleClick(playerSelection) {
    
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => handleClick(button.innerText.toLocaleLowerCase())))