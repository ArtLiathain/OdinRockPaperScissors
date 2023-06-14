function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        return ["It's a tie try again!", 2];
    }
    if(playerSelection === "rock"){
        if(computerSelection == "paper"){
            return ["Paper beats rock you lose!" , 0];
        }
        return ["Rock beats scissors you win!", 1];
    }

    else if (playerSelection === "paper"){
        if(computerSelection == "rock"){
            return ["Rock beats paper you win!", 1];
        }
        return ["Scissors beats paper you lose!", 0];
    }
    else if (playerSelection === "scissors") {
        if(computerSelection == "paper"){
            return ["Scissors beats paper you win!", 1];
        }
        return ["Rock beats scissors you lose!", 0];
    }
    return ["Not a valid input", 2];
  }
   
function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)
    if(choice === 0){
        return "rock"
    }
    else if(choice === 1){
        return "paper"
    }
    return "scissors"
}


let playerpoints = 0, computerpoints = 0;
while(playerpoints < 5 && computerpoints < 5){
    let playerSelection = prompt("What would you like to use Rock, Paper or Scissors?");
    let computerSelection = getComputerChoice();
    let result  = playRound(playerSelection, computerSelection);
    if (result[1] === 1){
        playerpoints++;
    }
    else if ( result[1] === 0){
        computerpoints++;
    }
    console.log(result[0]);
    console.log("The score is Player at:" + playerpoints + " points and the computer at: " + computerpoints);
}

if (playerpoints > computerpoints){
    console.log("Player has won with 5 points and the computer at:" + computerpoints + " points");
}
else {
    console.log("Computer has won with 5 points and the player at:" + playerpoints + " points")
}