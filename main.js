/*----- constants -----*/
const PLAYERS = {
  1: "x",
  "-1": "O",
  null: "teste",
};

/*----- state variables -----*/
let board;
let turn;
let winner;

/*----- cached elements  -----*/

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
}

function renderGame() {
  gameBoard.forEach((colArr, colId) => {
    colArr.forEach((cellVal, rowId) => {
      const cellId = `c${colId}r${rowId}`;
      const cellEl = document.getElementById(cellId);
      cellEl.textContent = PLAYERS[cellVal];
    });
  });
}

//   4.2) Render those values to the page
//   4.3) Wait for the user to click a square

// 5) Handle a player clicking a square

// 6) Handle a player clicking the replay button
