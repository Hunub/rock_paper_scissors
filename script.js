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

let compChoice = getComputerChoice();

let playerChoiceRaw = prompt("Please enter your choice");

let playerChoice = playerChoiceRaw.toLowerCase();

console.log(`Computer gives: ${compChoice}`);
console.log(`Your choice is: ${playerChoice}`);

function capFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function compareChoices(a,b) {
    return a === b?
        "It's a tie!":
        (a==="rock"&&b==="paper"||a==="paper"&&b==="scissors"||a==="scissors"&&b==="rock")?
        `You won! ${capFirstLetter(b)} beats ${a}!`:
        `You lost! ${capFirstLetter(a)} beats ${b}!`;
}


if (!(playerChoice === "rock"||playerChoice === "scissors"||playerChoice === "paper")){
    alert("Error");
} else {
    alert(compareChoices(compChoice,playerChoice));
}
  