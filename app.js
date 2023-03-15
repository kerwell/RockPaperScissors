console.log('Welcome to Rock, Paper, Scissors! Choose your weapon...')

const getComputerChoice = () =>{
    const RPS = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    //using *3 because 3 is exclusive since it's a range that starts at 0
    return (RPS[randomNum]);
}

// const playerSelection = (choice) => {
//   choice = choice.toLowerCase();
//   //makes player input lowercase
//   if (typeof choice !== 'string' || !['rock', 'paper', 'scissors'].includes(choice)) {
//     console.log("Please enter Rock, Paper, or Scissors!");
//     return false;
//   }
//   return choice;
// }

const playRound = (playerSelection, computerSelection)=>{
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'You win! Rock beats Scissors!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return 'You win! Paper beats Rock!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'You win! Scissors beats Paper!';
    } else {
        return `${playerSelection} beats ${computerSelection}... You lose.`
    }
}