console.log('Welcome to Rock, Paper, Scissors! Choose your weapon...')

const getComputerChoice = () =>{
    const RPS = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    //using *3 because 3 is exclusive since it's a range that starts at 0
    return (RPS[randomNum]);
}

const playerSelection = (choice) => {
  choice = choice.toLowerCase();
  //makes player input lowercase
  if (typeof choice !== 'string' || !['rock', 'paper', 'scissors'].includes(choice)) {
    console.log("Please enter Rock, Paper, or Scissors!");
    return false;
  }
  return choice;
}

