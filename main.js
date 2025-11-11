const btnNewGame = document.querySelector(".btnNewGame");
const btnRollDice = document.querySelector(".btnRollDice");
const btnHoldDice = document.querySelector(".btnHoldDice");

const boxDice = document.querySelector(".game-dice");
const dice = document.querySelector(".game-dice-img");

const boxScoreTotal = document.querySelector(".game-scoreTotal");
const boxScoreMoves = document.querySelector(".game-scoreBoxMoves-input");
const boxScoreCurrent = document.querySelector(".game-scoreBoxCurrent-input");

let scoreTotal = 0;
let scoreMoves = 10;
let scoreCurrent = 0;
let hasRolled = false;

boxScoreMoves.innerHTML = "0";

btnNewGame.addEventListener("click", () => {
    scoreTotal = 0;
    boxScoreTotal.innerHTML = scoreTotal;
    scoreCurrent = 0;
    boxScoreCurrent.innerHTML = scoreCurrent;
    scoreMoves = 10;
    boxScoreMoves.innerHTML = scoreMoves;
    hasRolled = false;
    boxDice.classList.remove("active");
});

btnRollDice.addEventListener("click", () => {
    if (scoreMoves < 1) {
        alert("Nu mai ai mutari disponibile, incepe alta partida de joc!");
        boxDice.classList.remove("active");
    } else {
        boxDice.classList.add("active");
        const numberValue = Math.floor(Math.random() * 7);
        dice.style.background = `url(images/dice-${numberValue}.png) no-repeat center center/cover`;
        boxScoreMoves.innerHTML = scoreMoves;
        hasRolled = true;
        if (numberValue > 0) {
            scoreCurrent += numberValue;
            boxScoreCurrent.innerHTML = scoreCurrent;
        } else {
            scoreCurrent = 0;
            boxScoreCurrent.innerHTML = scoreCurrent;
            scoreMoves--;
            boxScoreMoves.innerHTML = scoreMoves;
            hasRolled = false;
        }
    }
});

btnHoldDice.addEventListener("click", () => {
    if (!hasRolled && scoreMoves > 0) {
        alert("Da mai intai cu zarul");
    } else if (scoreMoves < 1) {
        alert("Nu mai ai mutari disponibile, incepe alta partida de joc!");
        boxDice.classList.remove("active");
    } else {
        boxDice.classList.remove("active");
        scoreTotal += scoreCurrent;
        boxScoreTotal.innerHTML = scoreTotal;
        scoreCurrent = 0;
        boxScoreCurrent.innerHTML = scoreCurrent;
        scoreMoves--;
        boxScoreMoves.innerHTML = scoreMoves;
        hasRolled = false;
    }
});
