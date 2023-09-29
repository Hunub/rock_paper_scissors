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
let totalScore=0; //must give a numeric value or else totalScore++ would be NaN

function capFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(a,b) {
    // compare a pair of selections and give a relative result 
    return a === b?
        "It's a tie!":
        (a==="rock"&&b==="paper"||a==="paper"&&b==="scissors"||a==="scissors"&&b==="rock")?
        `You won! ${capFirstLetter(b)} beats ${a}!`:
        `You lost! ${capFirstLetter(a)} beats ${b}!`;
}

function keepScore(a,b) {
    // give score based on the fifth letter of the string from playRound;
    //might combine this with playRound using if conditionals?
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

//how to pack this loop into a function?
let i = 1 
while (i <= 5) {
    playerSelectionRaw = prompt("Please enter your choice");

    playerSelection = playerSelectionRaw.toLowerCase();

    computerSelection = getComputerChoice(); // random selection needs to be called in each loop

    if (!(playerSelection === "rock"||playerSelection === "scissors"||playerSelection === "paper")){
        alert("Wrong input! Please type rock, paper or scissors."); //make sure input is valid each time
    } else {
        console.log(computerSelection);
        console.log(playerSelection);
        alert(keepScore(computerSelection,playerSelection));
        i++;
    }
}

function announce(n){
    return n>0 ?
    "Yay you won!":
    n<0 ?
    "You are unlucky!":
    "It's still a tie!";
}

alert(announce(totalScore));

  