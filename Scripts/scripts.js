const buttons = document.querySelectorAll('button');

let playerScore = 0;
let compScore = 0;

function computerPlay(){
    let decisions = ['rock', 'paper', 'scissors'];
    return decisions[Math.floor(Math.random()*decisions.length)];
}

function checkScore(){
    const score = document.createElement("div");
    score.innerHTML = "Player score: "+ playerScore + " and computer score: " + compScore;

    document.body.appendChild(score);
    if (playerScore == 5 || compScore == 5){
        buttons.forEach(elem => {
            elem.disabled = true
        })
        if (playerScore == 5){
            score.innerHTML = "You won! To play again, please reload the page!";
        }
        else{
            score.innerHTML = "Computer won! To play again, please reload the page!";
        }
    }
}

function playRound(playerSelection, computerSelection){

        checkScore();

        if (playerSelection.toLowerCase() === computerSelection) return "Draw!";
        else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors"){
            ++playerScore;
            return "You win!";
        }
        else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock"){
            ++playerScore;
            return "You win!";
        }
        else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"){
            ++playerScore;
            return "You win!";
        }
        else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper"){
            ++compScore;
            return "You lose!";
        }
        else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors"){
            ++compScore;
            return "You lose!";
        }
        else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock"){
            ++compScore;
            return "You lose!";
        }
        else return "Wrong input. Try again.";
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        let computerSelection = computerPlay();
        playRound(button.innerHTML, computerSelection)
    })
})