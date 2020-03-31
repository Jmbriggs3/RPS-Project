let userScore = 0; 
let computerScore = 0; 
const userScore_span = document.getElementById("user-score"); 
const computerScore_span = document.getElementById("computer-score"); 
const scoreBoard_div = document.querySelector(".scoreboard"); 
const result_p = document.querySelector(".result > p"); 
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p"); 
const scissors_div = document.getElementById("s"); 

function getComputerChoice() { 
    const choices = ['r','p','s']; 
    const randomNumber = Math.floor(Math.random() * 3); 
    return choices[randomNumber];
}  

function convertToChoice(letter) { 
    if (letter === "r") return "Rock"; 
    if (letter === "p") return "Paper"; 
    return "scissors";

}

function win(userChoice, computerChoice) { 
    userScore++;
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore; 
    result_p.innerHTML = `${convertToChoice(userChoice)} beats ${convertToChoice(computerChoice)}. You Win!`; //practice ES6 backtick
    document.getElementById(userChoice).classList.add('green-glow'); 
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 300); //ES5 here would use arrow for ES6
} 

function lose(userChoice, computerChoice) { 
    computerScore++; 
    computerScore_span.innerHTML = computerScore; 
    userScore_span.innerHTML = userScore; 
    result_p.innerHTML = `${convertToChoice(computerChoice)} beats ${convertToChoice(userChoice)}. Sorry, you lose!`;
    document.getElementById(userChoice).classList.add('red-glow'); 
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 300);
} 

function draw(userChoice, computerChoice) { 
    if (userChoice === computerChoice)  
    document.getElementById(userChoice).classList.add('purple-glow'); 
    setTimeout(function() {document.getElementById(userChoice).classList.remove('purple-glow')}, 300);
    return result_p.innerHTML = "It's a draw!"; 
}

function game(userChoice) { 
    const computerChoice = getComputerChoice(); 
    switch (userChoice + computerChoice) { 
        case "rs": 
        case "pr": 
        case "sp":
            win(userChoice,computerChoice); 
            break; 
        case "rp": 
        case "ps": 
        case "sr": 
            lose(userChoice,computerChoice); 
            break;
        case "rr": 
        case "pp": 
        case "ss": 
            draw(userChoice,computerChoice); 
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() { 
        game("r");
    }) 

    paper_div.addEventListener('click', function() { 
        game("p");
    }) 

    scissors_div.addEventListener('click', function() { 
        game("s");
    })
} 

main();


