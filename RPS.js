// Step 1
console.log("Hello World!")

// Step 2
function getComputerChoice() {
    let a = Math.floor(Math.random() * 3); 
    if (a === 0){
        return "rock";
    }
    else if (a === 1){
        return "paper";
    }
    else{
        return "scissors";
    }}


// Step 3

function getHumanChoice() {
    return prompt("Choose rock, paper or scissors: ")
}


// Step 4
/*humanScore = 0
computerScore = 0


// Step 5
function playRound(humanChoice, computerChoice) {
    if (computerChoice ===  humanChoice){
        console.log("It's a tie ");}
    else if (computerChoice === "paper" && humanChoice ==="rock"){
        console.log("You lose! Paper beats rock")
        computerScore =  computerScore + 1;}
    else if (computerChoice === "paper" && humanChoice ==="scissors") {
        console.log("You win! Scissors beat paper ");
        humanScore =  humanScore + 1;}
    else if (computerChoice === "rock" && humanChoice ==="scissors"){
        console.log("You lose! Rock beats scissors ");
        computerScore =  computerScore + 1;}
    else if (computerChoice === "rock" && humanChoice ==="paper"){
        console.log("You win! Paper beats rock ");
        humanScore =  humanScore + 1;}
    else if (computerChoice === "scissors" && humanChoice ==="paper"){
        console.log("You lose! Scissors beat paper");
        computerScore =  computerScore + 1;}
    else if (computerChoice === "scissors" && humanChoice ==="rock"){
        console.log("You win! Rock beats scissors ");
        humanScore =  humanScore + 1;}        
    }
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection); */

// Step 6 

function playGame () {
        function playRound(humanChoice, computerChoice) {
            if (computerChoice === "paper" && humanChoice ==="rock"){
                console.log("You lose! Paper beats rock")
                computerScore =  computerScore + 1;}
            else if (computerChoice === "paper" && humanChoice ==="scissors") {
                console.log("You win! Scissors beat paper ");
                humanScore =  humanScore + 1;}
            else if (computerChoice === "rock" && humanChoice ==="scissors"){
                console.log("You lose! Rock beats scissors ");
                computerScore =  computerScore + 1;}
            else if (computerChoice === "rock" && humanChoice ==="paper"){
                console.log("You win! Paper beats rock ");
                humanScore =  humanScore + 1;}
            else if (computerChoice === "scissors" && humanChoice ==="paper"){
                console.log("You lose! Scissors beat paper");
                computerScore =  computerScore + 1;}
            else if (computerChoice === "scissors" && humanChoice ==="rock"){
                console.log("You win! Rock beats scissors ");
                humanScore =  humanScore + 1;}
            else if (computerChoice ===  humanChoice){
                console.log("It's a tie ")}
                
            }
        humanScore = 0
        computerScore = 0
        for (i = 0;  i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }
       return `Final Score: Human ${humanScore} - Computer ${computerScore}`
}
console.log(playGame());

