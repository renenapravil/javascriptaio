/*
Gamelet: a starting point for writing games
Author: Rene Napravil
Version: 1.0

Instructions:
Include gamelet.js in an HTML document containing an element with an id of 'ball'.
The script will detect when any of the arrow keys are pressed and will move the ball element accordingly.

*/
const ball = document.getElementById('ball'); // get the ball

document.addEventListener('keydown', handleKeyPress); // listen for keys

let horizontalPosition = window.innerWidth / 2; // set the initial position horizontally
let verticalPosition = window.innerHeight / 2; // set the initial position vertically

/*
handleKeyPress 
responds to certain key presses by updating position
*/

function handleKeyPress(e) {
    if (e.code === 'ArrowLeft') {
        horizontalPosition -= 10;
    }
    if (e.code === 'ArrowRight') {
        horizontalPosition += 10;
    }
    if (e.code === 'ArrowUp') {
        verticalPosition -= 10;
    }
    if (e.code === 'ArrowDown') {
        verticalPosition += 10;
    }
    // Prevent moving off to the left or top
    if (horizontalPosition < 0) {
        horizontalPosition = 0;
    }
    if (verticalPosition < 0) {
        verticalPosition = 0;
    }
    refresh();
}

/*
Refresh
changes the position of the ball
*/

function refresh() {
    ball.style.left = horizontalPosition + 'px';
    ball.style.top = verticalPosition + 'px';
}

// On load, adjust the position to the center of the screen
window.onload = function() {
    refresh();
}