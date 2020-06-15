let turn = "X";

const boardModule = (() => {
  const cells = ["", "", "", "", "", "", "", "", ""];
  return { cells };
})();

function fillBoardCell(index) {
  if (boardModule.cells[index - 1] == "") {
    boardModule.cells[index - 1] = turn;
  } else {
    console.log("already used")
    return -1;
  }
}

const Player = (name, score) => {
  return { name, score };
};

function checkWin(board_array) {
  
}

function takeTurn(cellId, index) {
  cell = document.getElementById(cellId);
  let turnSuccess = fillBoardCell(index);
  if (turnSuccess != -1){
    cell.innerHTML = `<img class='board-img' src='img/tictactoe${turn}.svg'>`;
    if (turn == "X") {
      turn = "O";
    } else {
      turn = "X";
    }
  }
  console.log(boardModule.cells);
  console.log(turn);
}
