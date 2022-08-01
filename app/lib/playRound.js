import { capitilizeFirstLetter } from '../lib/capitilizeFirstLetter.js';
import { playRound_helper } from '../lib/playRound_helper.js'

export function playRound(playerSelection, computerSelection) {
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