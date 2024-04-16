// Define a global variable for scores
let scores = 4;

// Function to increment scores
function add() {
    updateScore();
}

// Function to decrement scores
function subtract() {
    scores -= 1;
    updateScore();
}

// Function to update the score display
function updateScore() {
    console.log("Current Score:" + scores);
    const scoreDisplay = document.getElementById('scoreValue');
    if (scoreDisplay){
      scoreDisplay.textContent = scores;
    }
}
