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
    
    playerPic.textContent = playerSelection;
    botPic.textContent = computerSelection;

    let itemContent = playRound(computerSelection,playerSelection);
    announce.textContent = itemContent;

    const historyItem = document.createElement('li');
    historyItem.textContent = itemContent;
    console.log(historyItem);
    history.appendChild(historyItem);

    console.log(playerScore);
    console.log(computerScore);
    if(playerScore === 5 ||computerScore === 5){
        if(playerScore > computerScore){
            show.textContent = 'Yay you won!';
        }else{
            show.textContent = 'You lost :(';
        };
        finishGame();

    }

}

function setUp(){
    document.querySelector("#result").textContent = "Click a button to play!"
    show.appendChild(playerBoard);
    show.appendChild(botBoard);
    buttons.appendChild(rockBtn);
    buttons.appendChild(paperBtn);
    buttons.appendChild(scissorsBtn);
}

function finishGame(){
    buttons.removeChild(rockBtn);
    buttons.removeChild(paperBtn);
    buttons.removeChild(scissorsBtn);
    buttons.appendChild(retryBtn);
    announce.textContent = "";
    playerScore = 0;
    computerScore = 0; 
    
}



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
playerName.textContent = "Your choice:";
const botName = document.createElement('h4');
botName.setAttribute("class", "name");
botName.textContent = "Bot's choice:";
const playerPic = document.createElement('div');
playerPic.setAttribute("id", "playerpic")
const botPic = document.createElement('div');
botPic.setAttribute("id","bpic");

playerBoard.appendChild(playerName);
playerBoard.appendChild(playerPic);

botBoard.appendChild(botName);
botBoard.appendChild(botPic);


const buttons = document.querySelector('#buttons');

const rockBtn = document.createElement('button');
rockBtn.setAttribute('id', 'rock');
rockBtn.textContent = "Rock";
const paperBtn = document.createElement('button');
paperBtn.setAttribute('id', 'paper');
paperBtn.textContent = "Paper";
const scissorsBtn = document.createElement('button');
scissorsBtn.setAttribute('id', 'scissors');
scissorsBtn.textContent = "Scissors";

const retryBtn = document.createElement('button');
retryBtn.textContent = "Play again";

const history = document.querySelector('#history');






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

retryBtn.addEventListener('click', () => {
    buttons.removeChild(retryBtn);
    show.textContent = '';
    setUp();
    history.textContent = "";
});