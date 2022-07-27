function randomInt(max) {
    return Math.floor(Math.random() * max);
}

export function getComputerChoise() {
    const choise = ['Rock', 'Paper', 'Scissors'];
    const max = choise.length;
    
    return choise[randomInt(max)];
}