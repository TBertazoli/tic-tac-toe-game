/*----- constants -----*/
const PLAYERS = {
  1: "x",
  "-1": "O",
  null: "",
};

/*----- state variables -----*/
let board;
let turn;
let winner;

/*----- cached elements  -----*/
const message = document.querySelector("h1");
const resetButton = document.getElementById("btn");
const cells = document.querySelectorAll("#board > div");

/*----- event listeners -----*/

/*----- functions -----*/

init();

function init() {
  gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  winner = null;
  turn = 1;
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });
  render();
}
function render() {
  renderGame();
  renderMessage();
  renderReset();
}

function renderGame() {
  gameBoard.forEach((rowArr, rowId) => {
    rowArr.forEach((cellVal, colId) => {
      const cellId = `r${rowId}c${colId}`;
      const cellEl = document.getElementById(cellId);
      cellEl.rowId = rowId;
      cellEl.colId = colId;
      cellEl.addEventListener("click", handleClick);
    });
  });
}
function handleClick(event) {
  const col = event.target.colId;
  const row = event.target.rowId;
  if (gameBoard[row][col] !== null || winner) {
    return;
  }

  event.target.innerHTML = PLAYERS[turn];
  gameBoard[row][col] = PLAYERS[turn];

  const hasEnded = checkWinner() || checkTie();
  if (hasEnded) {
    winner = turn;
  } else {
    turn *= -1;
  }

  console.log(PLAYERS[turn]);
  renderMessage();
}

function checkTie() {
  for (let rowId = 0; rowId < gameBoard.length; rowId++) {
    for (let colId = 0; colId < gameBoard[rowId].length; colId++) {
      if (gameBoard[rowId][colId] === null) {
        return false;
      }
    }
  }
  turn = "T";
  return true;
}

function renderMessage() {
  if (winner === "T") {
    message.innerText = "Tie Game!!";
  } else if (winner) {
    message.innerHTML = `<span style="color:${PLAYERS[winner]}"> ${PLAYERS[winner]}</span> Wins!`;
  } else {
    message.innerHTML = `<span style="color:${PLAYERS[turn]}">${PLAYERS[turn]}</span>'s Turn!`;
  }
}
function checkWinner() {
  return checkHorizontal() || checkVertical() || checkDiagonal();
}

function checkVertical() {
  for (let colId = 0; colId < gameBoard.length; colId++) {
    if (
      gameBoard[0][colId] != null &&
      gameBoard[0][colId] === gameBoard[1][colId] &&
      gameBoard[0][colId] === gameBoard[2][colId]
    ) {
      console.log("vertical");
      return true;
    }
  }
}

function checkHorizontal() {
  for (let rowId = 0; rowId < gameBoard.length; rowId++) {
    if (
      gameBoard[rowId][0] != null &&
      gameBoard[rowId][0] === gameBoard[rowId][1] &&
      gameBoard[rowId][0] === gameBoard[rowId][2]
    ) {
      console.log("horizontal");
      return true;
    }
  }
}

function checkDiagonal() {
  if (
    (gameBoard[0][0] != null &&
      gameBoard[0][0] === gameBoard[1][1] &&
      gameBoard[0][0] === gameBoard[2][2]) ||
    (gameBoard[0][2] != null &&
      gameBoard[0][2] === gameBoard[1][1] &&
      gameBoard[0][2] === gameBoard[2][0])
  ) {
    console.log("diagonal");
    return true;
  }
}

function renderReset() {
  resetButton.addEventListener("click", init);
}
