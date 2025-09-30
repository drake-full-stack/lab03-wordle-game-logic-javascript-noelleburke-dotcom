// ===== GAME STATE VARIABLES =====
const TARGET_WORD = "WORDS";  // Our secret word for testing
let currentRow = 0;           // Which row we're filling (0-5)
let currentTile = 0;          // Which tile in the row (0-4)
let gameOver = false;         // Is the game finished?

// DOM element references (set up on page load)
let gameBoard, rows, debugOutput;

// ===== HELPER FUNCTIONS (PROVIDED) =====

// Debug/Testing Functions
function logDebug(message, type = 'info') {
    // Log to browser console
    console.log(message);
    
    // Also log to visual testing area
    if (!debugOutput) {
        debugOutput = document.getElementById('debug-output');
    }
    
    if (debugOutput) {
        const entry = document.createElement('div');
        entry.className = `debug-entry ${type}`;
        entry.innerHTML = `
            <span style="color: #666; font-size: 12px;">${new Date().toLocaleTimeString()}</span> - 
            ${message}
        `;
        
        // Add to top of debug output
        debugOutput.insertBefore(entry, debugOutput.firstChild);
        
        // Keep only last 20 entries for performance
        const entries = debugOutput.querySelectorAll('.debug-entry');
        if (entries.length > 20) {
            entries[entries.length - 1].remove();
        }
    }
}

function clearDebug() {
    const debugOutput = document.getElementById('debug-output');
    if (debugOutput) {
        debugOutput.innerHTML = '<p style="text-align: center; color: #999; font-style: italic;">Debug output cleared - ready for new messages...</p>';
    }
}

// Helper function to get current word being typed
function getCurrentWord() {
    const currentRowElement = rows[currentRow];
    const tiles = currentRowElement.querySelectorAll('.tile');
    let word = '';
    tiles.forEach(tile => word += tile.textContent);
    return word;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    gameBoard = document.querySelector('.game-board');
    rows = document.querySelectorAll('.row');
    debugOutput = document.getElementById('debug-output');
    
    logDebug("🎮 Game initialized successfully!", 'success');
    logDebug(`🎯 Target word: ${TARGET_WORD}`, 'info');
    logDebug("💡 Try typing letters, pressing Backspace, or Enter", 'info');
});

// ===== YOUR CHALLENGE: IMPLEMENT THESE FUNCTIONS =====

// TODO: Add keyboard event listener
document.addEventListener("keydown", (event) => {
    let key = event.key
    const uppercase = key.toUpperCase();
    //logDebug(key);
    //if (gameOver=== false){

    if (uppercase === "BACKSPACE") {
        deleteLetter();
        logDebug(uppercase);
        } 
    if (/^[A-Z]$/i.test(uppercase)) {
        logDebug(uppercase);
            addLetter(uppercase);
    
    }
    else if (uppercase === "ENTER") {
        logDebug(uppercase)
        //submitGuess();
    }

    }
)
//     // Your code here!
// });

function addLetter(letter) {
    logDebug(`🎯 addLetter("${letter}") called`, 'info');
    
    // TODO: Check if current row is full (currentTile >= 5)
        if (currentTile >= 5){
            logDebug("Row is full");
        }
        else{
        tiles= rows[currentRow].querySelectorAll('.tile');
        tile= tiles[currentTile];
        tile.textContent=letter;
        tile.classList.add('filled');
        currentTile++;
        }
}
function deleteLetter() {
    logDebug(`🗑️ deleteLetter() called`, 'info');
        if (currentTile <= 0){
            return;
        }
        else{
            currentTile--;
            tiles= rows[currentRow].querySelectorAll('.tile');
            tile.textContent=letter;
            tile= tiles[currentTile];
            tile.textContent='';
            tile.classList.remove('filled');
            logDebug(letter + currentTile);
            
        }
    // TODO: Check if there are letters to delete (currentTile <= 0)
    // TODO: If no letters, log error message and return early
    // TODO: Decrement currentTile FIRST (currentTile--)
    // TODO: Get the current row element using rows[currentRow]
    // TODO: Get all tiles in that row using querySelectorAll('.tile')
    // TODO: Get the specific tile to clear using tiles[currentTile]
    // TODO: Store the letter being deleted for logging (tile.textContent)
    // TODO: Clear the tile's textContent (set to empty string '')
    // TODO: Remove the 'filled' class from the tile
    // TODO: Log what was deleted and from which position
    // TODO: Log current word status using getCurrentWord()
}



// TODO: Implement submitGuess function
// function submitGuess() {
//     // Your code here!
// }

// TODO: Implement checkGuess function (the hardest part!)
// function checkGuess(guess, tiles) {
//     // Your code here!
//     // Remember: handle duplicate letters correctly
//     // Return the result array
