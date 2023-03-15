const RPS = ['Rock', 'Paper', 'Scissors']
const getComputerChoice = () =>{
    const randomNum = Math.floor(Math.random() * 3)
    //using *3 because 3 is exclusive since it's a range that starts at 0
    console.log(RPS[randomNum])
}

const playerSelection = (choice)=>{
    while (typeof choice !== 'string' ){
        console.log("Please enter Rock, Paper, or Scissors!")
        return false;
    }
}