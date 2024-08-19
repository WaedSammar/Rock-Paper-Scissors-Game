let playerScore = 0;
let computerScore = 0;
let userChoice = '';

function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

function determineWinner(playerMove, computerMove) {
    if (playerMove === computerMove) return "tie";
    if (
        (playerMove === "rock" && computerMove === "scissors") ||
        (playerMove === "scissors" && computerMove === "paper") ||
        (playerMove === "paper" && computerMove === "rock")
    ) return "win";
    return "lose";
}

function updateScores(result) {
    if (result === "win") {
        playerScore++;
        document.getElementById("result").textContent = "You win this round!";
        document.getElementById("winSound").play();
    } else if (result === "lose") {
        computerScore++;
        document.getElementById("result").textContent = "Computer wins this round!";
        document.getElementById("loseSound").play();
    } else {
        document.getElementById("result").textContent = "It's a tie!";
        document.getElementById("loseSound").play();
    }
    document.getElementById("playerScore").textContent = `Player ${playerScore}`;
    document.getElementById("computerScore").textContent = `: ${computerScore} Computer`;
}

function animateHands() {
    const moves = ["rock", "paper", "scissors"];
    let index = 0;

    function updateHands() {
        if (index < moves.length) {
            document.getElementById("playerImage").src = `images/${moves[index]}.png`;
            document.getElementById("computerImage").src = `images/${moves[index]}(1).png`;
            index++;
            setTimeout(updateHands, 500);
        } else {
            const computerChoice = getComputerChoice();
            document.getElementById("playerImage").src = `images/${userChoice}.png`;
            document.getElementById("computerImage").src = `images/${computerChoice}(1).png`;
            const result = determineWinner(userChoice, computerChoice);
            updateScores(result);
        }
    }

    updateHands();
}

function selectMove(choice) {
    userChoice = choice;

    document.getElementById("result").textContent = "Game in progress...";
    animateHands();
}