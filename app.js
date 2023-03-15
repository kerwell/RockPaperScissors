console.log('Welcome to Rock, Paper, Scissors! Choose your weapon...')
let playerScore = 0
let cpuScore = 0

const getComputerChoice = () =>{
    const RPS = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    //using *3 because 3 is exclusive since it's a range that starts at 0
    return (RPS[randomNum]);
}

const playRound = (playerSelection)=>{
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = getComputerChoice();
    if (playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++
        return 'You win! Rock beats Scissors!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++
        return 'You win! Paper beats Rock!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++
        return 'You win! Scissors beats Paper!';
    } else if (playerSelection === computerSelection){
        return "It's a tie!"
    } else {
        cpuScore++
        return `${playerSelection} beats ${computerSelection}... You lose.`
    }
}

const game = ()=>{
    for (let i=0; i<5;i++){
        const playerSelection = prompt('Enter your weapon of choice...Will it be Rock? Paper perhaps? Daring for Scissors?')
        const result = playRound(playerSelection);
        console.log(result);
    }
    console.log(`Your score: ${playerScore}`);
    console.log(`CPU's score: ${cpuScore}`);
}