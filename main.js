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
  render();
}
function render() {
  renderGame();
  renderMessage();
}

function renderGame() {
  gameBoard.forEach((colArr, colId) => {
    colArr.forEach((cellVal, rowId) => {
      const cellId = `c${colId}r${rowId}`;
      const cellEl = document.getElementById(cellId);
      cellEl.addEventListener("click", handleClick);
    });
  });
}

function handleClick(event) {
  event.target.innerHTML = PLAYERS[turn];
  turn *= -1;
  renderMessage();
  //   winner = checkWinner();
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

//   4.2) Render those values to the page
//   4.3) Wait for the user to click a square

// 5) Handle a player clicking a square

// 6) Handle a player clicking the replay button
