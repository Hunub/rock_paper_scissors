let message = "Let's play!";
console.log(message);

function getComputerChoice() {
    let int= Math.floor(Math.random()*3);
    return int ===0? 
        "rock":
        int === 1?
        "paper":
        "scissors";
}

let computerSelection = getComputerChoice();

let playerSelectionRaw = prompt("Please enter your choice");

let playerSelection = playerSelectionRaw.toLowerCase();

function capFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function playRound(a,b) {
    return a === b?
        "It's a tie!":
        (a==="rock"&&b==="paper"||a==="paper"&&b==="scissors"||a==="scissors"&&b==="rock")?
        `You won! ${capFirstLetter(b)} beats ${a}!`:
        `You lost! ${capFirstLetter(a)} beats ${b}!`;
}


if (!(playerSelection === "rock"||playerSelection === "scissors"||playerSelection === "paper")){
    alert("Wrong input! Please type rock, paper or scissors.");
} else {
    alert(playRound(computerSelection,playerSelection));
}
  