export function playRound_helper(playerSelection, computerSelection) {
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