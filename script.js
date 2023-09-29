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


let playerSelectionRaw;

let playerSelection;

let computerSelection;

let totalScore=0;

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

function keepScore(a,b) {
        let c = playRound(a,b).charAt(4);
        switch(c){
            case "w":
                totalScore++;
                break;
            case "l":
                totalScore--;
        }
        console.log(totalScore);
        return playRound(a,b);
}


let i = 1
while (i <= 5) {
    playerSelectionRaw = prompt("Please enter your choice");

    playerSelection = playerSelectionRaw.toLowerCase();

    computerSelection = getComputerChoice();

    if (!(playerSelection === "rock"||playerSelection === "scissors"||playerSelection === "paper")){
        alert("Wrong input! Please type rock, paper or scissors.");
    } else {
        console.log(computerSelection);
        console.log(playerSelection);
        alert(keepScore(computerSelection,playerSelection));
        i++;
    }
}



// alert(multiRounds(5,computerSelection,playerSelection));
// alert(keepScore(computerSelection,playerSelection));
alert(totalScore);

  