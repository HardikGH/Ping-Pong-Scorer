# Ping Pong Score Keeper

This is a simple web-based Ping Pong Score Keeper application. It allows two players to keep track of their scores, define the winning score, and reset the game.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Usage](#usage)
- [Installation](#installation)
- [Code Overview](#code-overview)
- [Contributing](#contributing)

## Features

- **Increment Scores:** Each player can increment their score using dedicated buttons.
- **Define Winning Score:** The winning score can be selected from a dropdown menu.
- **Game Over Display:** Once a player reaches the winning score, the game is over and scores are highlighted in green (winner) and red (loser).
- **Reset Button:** A reset button is provided to start a new game.

## Technologies

- **HTML**: Structure of the page
- **CSS (Bulma Framework)**: Styling and layout
- **JavaScript**: Game logic and interactivity

## Usage

To use the Ping Pong Score Keeper:

1. Choose a winning score from the dropdown (default is 5).
2. Use the "Player 1" and "Player 2" buttons to increment the scores.
3. Once a player reaches the winning score, the game ends and the scores are highlighted.
4. Press the "Reset" button to restart the game.

## Installation
### Clone the repository

(bash)
git clone https://github.com/your-username/ping-pong-score-keeper.git
cd ping-pong-score-keeper

## Code Overview
### JavaScript (app.js)
Player Objects: Each player (Player 1 and Player 2) is represented by an object that contains their score, button, and display elements.

javascript
Copy code
const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display")
}
const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")
}
Game Logic: The updateScores function increments the score for the current player, checks if the winning score is reached, and disables further score changes if the game is over.

javascript
Copy code
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}
Event Listeners: The buttons for Player 1 and Player 2 trigger score updates, while the winning score dropdown and reset button allow the user to customize and reset the game.

javascript
Copy code
p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
});

p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
});

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
});

resetButton.addEventListener('click', reset);
Reset Function: The reset function restores the game to its initial state by resetting player scores and enabling the buttons.

javascript
Copy code
function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}

## Contributing
Feel free to fork the repository and make contributions to improve the game. Pull requests are welcome!
