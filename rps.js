function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.target.getAttribute("data-action");
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

const output = document.querySelector('.output');
const buttons = document.querySelectorAll('.input');
console.log(buttons);
buttons.forEach(button => button.addEventListener('click', play));


let playerpoints = 0, computerpoints = 0;
function play(e){

    let result  = playRound(e, getComputerChoice());
    if (result[1] === 1){
        playerpoints++;
    }
    else if ( result[1] === 0){
        computerpoints++;
    }
    let concatString = result[0] + "\nThe Player is at:" + playerpoints + " points and the computer is at: " + computerpoints + "points";
    output.innerText = concatString;

    if (playerpoints > computerpoints && playerpoints >= 5){
        output.innerText =  ("Player has won with 5 points and the computer at:" + computerpoints + " points");
    }
    else if (computerpoints >= 5) {
        output.innerText = ("Computer has won with 5 points and the player at:" + playerpoints + " points")
    }
}

