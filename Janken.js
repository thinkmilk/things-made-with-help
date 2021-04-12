// please type your choice in the quotations
const yourInputHere = 'rock';



// player hand input function. Passes a player choice from the "yourInputHere" variable

const playerHand = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        return "laser sword";
    }
};



// generates a random integer number for computer's hand

const computerHand = () => {
    return Math.floor(Math.random() * 3);
};

// converts computer's random integer into a choice
function rockPaperScissors(computer) {
    if (computer === 0) {
        return "rock";
    };
    if (computer === 1) {
        return "paper";
    };
    if (computer === 2) {
        return "scissors";
    };
};


// determines whether the player or computer won

function determineWinner(playerHand, computerHand) {
    if (playerHand === computerHand) {
        return "The game was a tie!";
    };

    if (playerHand === "rock") {
        if (computerHand === "paper") {
            return "You lost!";
        } else {
            return "You won!"
        }
    };

    if (playerHand === "paper") {
        if (computerHand === "scissors") {
            return "You lost!";
        } else {
            return "You won!";
        }
    };

    if (playerHand === "scissors") {
        if (computerHand === "rock") {
            return "You Lost";
        } else {
            return "You won!";
        }
    };

    if (playerHand != ("rock" || "paper" || "scissors")) {
        return "Laser sword beats everything!"
    };

};


// displays the results of the game

function playGame() {

    const y = rockPaperScissors(computerHand());
    const x = playerHand(yourInputHere);

    console.log("Computer plays: " + y + '   You play: ' + x);
    console.log(determineWinner(x, y));

};

// playGame() function call. Starts the game
playGame();