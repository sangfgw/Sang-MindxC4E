// Define DOM
const $$ = document.querySelectorAll.bind(document);

// Answers
const ANSWERS = [
    {
        words: "Test1",
        hint: "Test1"
    },
    {
        words: "Test22",
        hint: "Test22"
    },
    {
        words: "Test333333333",
        hint: "Test333333333"
    },
];

// Timer Key
let timerKey = 0;

// Guess Remaining (default = 3)
let guessRemaining = 3;
const domUserGuessRemainSpan = $$("#user_guess_remain");

// Initialize Guess Remain Into UI
domUserGuessRemainSpan[0].innerText = guessRemaining;

// Time Remaining (default = 60s)
let timeRemaining = 60;
const domTimeLeftSpan = $$("#time_left");

// Initialize Time Remaining Into UI
domTimeLeftSpan[0].innerText = timeRemaining;

// Function: Generate Random Answer Obj => Return: Object
function generateRandomAnswer(answers) {
    const randomAnswerIndex = Math.floor(Math.random() * answers.length);

    if (answers && Array.isArray(answers) && answers.length > 0) {
        // console.log(randomAnswerIndex);
        // console.log(answers[randomAnswerIndex]);
        return answers[randomAnswerIndex];
    }

    return {};
}

// Call Function Once Web Respone
const answerObj = generateRandomAnswer(ANSWERS);

const domAnswerBlocksDiv = $$("#answer_blocks");
const domAnswerHintContentEm = $$("#answer_hint_content");

if (answerObj && answerObj.hint) {
    domAnswerHintContentEm[0].innerHTML = `Hint: ${answerObj.hint}`;
}

// Generate Answer Block Based On Word Length
if (answerObj && answerObj.words) {
    for (let word of answerObj.words) {
        // Assign HTML Element
        domAnswerBlocksDiv[0].innerHTML += `<span class="answer__input__block answer__input__word">*</span>`;
        // console.log(word);
    };
}


// Form Action
const domGuessForm = $$("#guess_form");
const domUserGuessInput = $$("#user_guess_input");
const domGuessResultDiv = $$("#guess_result");
const domAnswerInputsWord = $$(".answer__input__word");
const skipPositions = [];

domGuessForm[0].addEventListener("submit", (ev) => {
    ev.preventDefault();
    if (isCorrectWord(domUserGuessInput[0].value, answerObj.words) && guessRemaining >= 1) {
        // console.log(`Reveal Word ${domUserGuessInput[0].value} at position ${searchWordPosition(domUserGuessInput[0].value, answerObj.words)}`);

        // Reveal Part of Answer
        for (let position of searchWordPosition(domUserGuessInput[0].value, answerObj.words)) {
            domAnswerInputsWord[position].innerText = answerObj.words[position];
        }

        // Reveal Result
        domGuessResultDiv[0].innerHTML = `<span style="color: green;">Reveal Word ${domUserGuessInput[0].value} at position ${searchWordPosition(domUserGuessInput[0].value, answerObj.words)}</span>`;

        // Add Search Positions Into Skip Positions Array
        skipPositions.push(...searchWordPosition(domUserGuessInput[0].value, answerObj.words));
    } else if (!isCorrectWord(domUserGuessInput[0].value, answerObj.words) && guessRemaining >= 1) {
        --guessRemaining;
        // console.log(`Remain Trial: ${guessRemaining}`);

        // Update UI Element
        domUserGuessRemainSpan[0].innerText = guessRemaining;

        domGuessResultDiv[0].innerHTML = `<span style="color: red;">Wrong Word, Trial Remaining: <b>${guessRemaining}</b></span>`
    }

    // Game Consider
    gameConsider();
});

// Function: Check Correct User Word Input
function isCorrectWord(word, words) {
    let isCorrect = false;

    if (typeof word === "string" && typeof words === "string") {
        for (let position = 0; position < words.length; position++) {
            if (!isSkippedPosition(position, skipPositions) && word.toUpperCase() === words[position].toUpperCase()) {
                isCorrect = true;
                break;
            }
        }
    }

    return isCorrect;
}

// Function: Find All Word Position And Return Array of Position Found => Return: Array
function searchWordPosition(word, words) {
    let positions = [];

    if (typeof word === "string" && typeof words === "string") {

        for (let position = 0; position < words.length; position++) {
            if (words[position].toUpperCase() === word.toUpperCase()) {
                positions.push(position);
            }
        }
    }

    return positions;
}

// Function: Check Whether Index Number Is Skipped Or Not
function isSkippedPosition(considerNum, skipArr) {
    let isSkip = false;

    for (let position of skipArr) {
        if (typeof position === "number" && typeof considerNum === "number" && position === considerNum) {
            isSkip = true;
        }
    }

    return isSkip;
}

// Function: Consider User Winner Or Looser
function gameConsider() {
    // Continue
    if (guessRemaining >= 1) {
        if (!isUserWin()) {
            // Reset Timer By Update Game Function
            updateGame();
        } else {
            gameWinner();
        }
    } else if (guessRemaining === 0) {
        gameLose();
    }
}

// Function: Consider Is Winning Or Continue
function isUserWin() {
    let isWinner = false;

    if (skipPositions.length === answerObj.words.length) {
        isWinner = true;
    }

    return isWinner;
}

// Function: Update Game
function updateGame() {
    // console.log("Update Game");
}

// Function: Winner Game
function gameWinner() {
    // Clear Previous Timer
    window.clearInterval(timerKey);

    // Update UI
    domGuessResultDiv[0].innerHTML = `
        <span style="color: green;">You Win! The Answer Is: ${answerObj.words}</span>
        <br>
        <span style="color: green;">Time Remaining: ${timeRemaining} second(s)</span>
    `;

    if (confirm(`
    You Win! The Answer Is: ${answerObj.words}
    Do You Want To Play Again?`)) {
        window.location.href = "/";
    }
}

// Function: Lose Game
function gameLose() {
    // Clear Previous Timer
    window.clearInterval(timerKey);

    // Show Confirm Box
    if(confirm(`Game Over! Do you want to restart the game?`)) {
        window.location.href = "/";
    };
}

// Timer Each 1 Second
const Timer = () => {
    return window.setInterval(() => {
        --timeRemaining;

        // Update Time Remaining For UI
        domTimeLeftSpan[0].innerText = timeRemaining;

        // Clear Timer When It Reached To 0
        if (timeRemaining === 0) {
    
            window.clearInterval(timerKey);
    
            guessRemaining = 0;
    
            gameConsider();
        }
    }, 1000);
}

// Function: Start Game
function startGame () {
    timerKey = Timer();
}

// Start Game
alert(`Press OK to start the game!`);
startGame();