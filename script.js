function getComputerChoice() {
    let int= Math.floor(Math.random()*3);
    return int ===0? 
        "rock":
        int === 1?
        "paper":
        "scissors";
}

function capFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(a,b) {
    if(a === b){
        return "It's a tie!";        
    }else if(a==="rock"&&b==="paper"||a==="paper"&&b==="scissors"||a==="scissors"&&b==="rock"){
        playerScore++;
        return `You won! ${capFirstLetter(b)} beats ${a}!`;
    }else {
        computerScore++;
        return `You lost! ${capFirstLetter(a)} beats ${b}!`;
    }
}

function play(){
    computerSelection = getComputerChoice(); 
    console.log(playRound(computerSelection,playerSelection));
    console.log(playerScore);
    console.log(computerScore);
    if(playerScore === 5 ||computerScore === 5){
        if(playerScore > computerScore){
            alert('Yay you won!');
        }else{
            alert('You lost :(');
        }
    }
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');



let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0; 

console.log(rockBtn);

rockBtn.addEventListener('click',() => {
    playerSelection = 'rock';
    play();
    });
paperBtn.addEventListener('click',() => {
    playerSelection = 'paper';
    play();
    })
scissorsBtn.addEventListener('click',() => {
    playerSelection = 'scissors';
    play();
    })