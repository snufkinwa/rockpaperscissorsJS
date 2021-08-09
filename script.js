/*Intializing variables, caching the DOM */
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_p= document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div= document.getElementById("p");
const scissors_div= document.getElementById("s");


function computerPlay(){
    /*Random choices from computer */
    const choices = ['r', 'p', 's'];
    const randNumber = Math.floor(Math.random() * 3);
    return choices [randNumber];
}

function convertToWord(choice) {
    /*Convert letter choice to results */
    if (choice === "r") return "Rock";
    if (choice === "p") return "Paper";
    if (choice === "s") return "Scissors";
}

function win(userSelection, computerSelection){
    /*Changes scoreboard for player*/
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userSelection)} beats ${convertToWord(computerSelection)} You Win! 💮`;
    
}
function loss(userSelection, computerSelection){
    /*Changes scoreboard for computer*/
    compScore ++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(computerSelection)} beats ${convertToWord(userSelection)}. You Lose! 💀`;

}
function draw(userSelection, computerSelection){
    /*Informs player of a draw*/
    result_p.innerHTML = `${convertToWord(userSelection)} is equal to ${convertToWord(computerSelection)}. It's a Tie!🪢`;    
}

function game(userSelection){
    /*Choices from computer*/
    const computerSelection = computerPlay();
    /*Switch case to calculate win, loss or draw*/
    switch (userSelection + computerSelection){
        case "rs":
        case "pr":
        case "sp":
            win(userSelection, computerSelection);
            break;
        case "rp":
        case "ps":
        case "sr":
            loss(userSelection, computerSelection);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userSelection, computerSelection);
        }
    }   

function main(){
    /*Collects player selection */
    rock_div.addEventListener('click', function(){
        game("r");
    })

    paper_div.addEventListener('click', function(){
        game("p");
    })

    scissors_div.addEventListener('click', function(){
        game("s");
    })
}

main();
