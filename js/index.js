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
    switch (playRound_helper(playerSelection, computerSelection)) {
        case 'win':
            score['player']++;
            return `You win! ${capitilizeFirstLetter(playerSelection)} beats ${computerSelection}.`
            break;

        case 'loss':
            score['computer']++;
            return `You lose! ${capitilizeFirstLetter(computerSelection)} beats ${playerSelection}.`
            break;

        case 'tie':
            return `Tie!`
            break;
    }
};

function handleClick(playerSelection) {
    if (playerSelection === 'restart') {
        restartGame()

    } else if (isGameOver() == true) {
        console.log("GAME OVER!")

    } else {
        const computerSelection = getComputerChoise();
        playRound(playerSelection, computerSelection);
        console.log(score);
    }
}

function restartGame() {
    console.log("RESTARTING GAME...")
    score['player'] = 0;
    score['computer'] = 0;
}

function isGameOver() {
    if (score['player'] == 5 || score['computer'] == 5) {
        return true;
        
    } else {
        return false;
    };
}

var score = {'player': 0, 'computer': 0};

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => handleClick(button.innerText.toLocaleLowerCase())))