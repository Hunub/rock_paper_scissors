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

let totalScore = 0

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

function check(a,b) {
    if (!(b === "rock"||b === "scissors"||b === "paper")){
        return "Wrong input! Please type rock, paper or scissors.";
    } else {
        let c = playRound(a,b).charAt(4);
        
        switch(c){
            case "w":
                totalScore++;
                break;
            case "l":
                totalScore--;
        }
        
        return playRound(a,b);
    }
}

console.log(totalScore)
alert(check(computerSelection,playerSelection));


  