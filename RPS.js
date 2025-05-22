
function getComputerChoice() {
    const choices = ["rock","paper","scissors"]
    let choice = Math.floor(Math.random() * choices.length); 
    if (choice === 0){
        return "rock";
    }
    else if (choice === 1){
        return "paper";
    }
    else{
        return "scissors";
    }}


function handleClick(e) {
    const humanChoice = e.target.textContent.toLowerCase()
    const compChoice = getComputerChoice()
    playRound(humanChoice,compChoice);}


let humanScore = 0
let computerScore = 0
function playRound(humanChoice, computerChoice) {
    let message = "";


    if (computerChoice ===  humanChoice){
        message = "It's a tie ";
    } else if (computerChoice === "paper" && humanChoice ==="rock") {
        message = "You lose! Paper beats rock";
        computerScore =  computerScore + 1;
    } else if (computerChoice === "paper" && humanChoice ==="scissors") {
        message = "You win! Scissors beat paper ";
        humanScore =  humanScore + 1;
    } else if (computerChoice === "rock" && humanChoice ==="scissors") {
        message = "You lose! Rock beats scissors ";
        computerScore =  computerScore + 1;
    } else if (computerChoice === "rock" && humanChoice ==="paper") {
        message = "You win! Paper beats rock ";
        humanScore =  humanScore + 1;
    } else if (computerChoice === "scissors" && humanChoice ==="paper"){
        message = "You lose! Scissors beat paper";
        computerScore =  computerScore + 1;
    } else if (computerChoice === "scissors" && humanChoice ==="rock"){
        message = "You win! Rock beats scissors ";
        humanScore =  humanScore + 1;
    } 
    if (humanScore ===5) {
        message = "You won the game!";
        rock.removeEventListener("click", handleClick);
        scissors.removeEventListener("click", handleClick);
        paper.removeEventListener("click", handleClick);
    } else if (computerScore === 5) {
        message = "Computer won the game!";
        rock.removeEventListener("click", handleClick);
        scissors.removeEventListener("click", handleClick);
        paper.removeEventListener("click", handleClick);
    }


    results.textContent = `${message} 
    Score - Human: ${humanScore}, Computer: ${computerScore}.`
    }



const scissors = document.createElement("button")
scissors.textContent= "Scissors"

const paper = document.createElement("button")
paper.textContent= "Paper"

const rock = document.createElement("button")
rock.textContent= "Rock"


scissors.addEventListener("click", handleClick); 
paper.addEventListener("click", handleClick) ;
rock.addEventListener("click", handleClick);



document.body.appendChild(scissors)
document.body.appendChild(rock)
document.body.appendChild(paper)


const results = document.createElement("div")
document.body.appendChild(results)

