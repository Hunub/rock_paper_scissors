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
        announce.textContent = "It's a tie!";
        return "It's a tie!";        
    }else if(a==="rock"&&b==="paper"||a==="paper"&&b==="scissors"||a==="scissors"&&b==="rock"){
        playerScore++;
        announce.textContent = `You won! ${capFirstLetter(b)} beats ${a}!`;
        return `You won! ${capFirstLetter(b)} beats ${a}!`;
    }else {
        computerScore++;
        document.querySelector('#result').textContent = `You lost! ${capFirstLetter(a)} beats ${b}!`;
        return `You lost! ${capFirstLetter(a)} beats ${b}!`;
    }
}

function play(){
    computerSelection = getComputerChoice(); 
    console.log(playRound(computerSelection,playerSelection));
    document.querySelector('.player').textContent = playerSelection;
    document.querySelector('.bot').textContent = computerSelection;

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

const announce = document.querySelector('#result');
announce.style.margin = "auto";
announce.style.width = "400px";

const show = document.querySelector('#show');

const playerBoard = document.createElement('div');
playerBoard.setAttribute("class", "player vertical");
const botBoard =  document.createElement('div');
botBoard.setAttribute("class", "bot vertical");
const playerName = document.createElement('h4');
playerName.setAttribute("class", "name");
const botName = document.createElement('h4');
botName.setAttribute("class", "name");
const playerPic = document.createElement('div');
const botPic = document.createElement('div');

playerBoard.appendChild(playerName);
playerBoard.appendChild(playerPic);

botBoard.appendChild(botName);
botBoard.appendChild(botPic);


function setUp(){
    show.appendChild(playerBoard);
    show.appendChild(botBoard);
    return;
}




let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0; 



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