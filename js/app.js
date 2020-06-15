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

function checkDraw(){
  return boardModule.cells.every(x => x != "");
}

const Player = (name, score) => {
  return { name, score };
};

function checkWin() {
  current_board = boardModule.cells;
  temp_array = [];
  temp_array.push( turn == current_board[0] && turn == current_board[1] && turn == current_board[2]);
  temp_array.push( turn == current_board[3] && turn == current_board[4] && turn == current_board[5]);
  temp_array.push( turn == current_board[6] && turn == current_board[7] && turn == current_board[8]);
  temp_array.push( turn == current_board[0] && turn == current_board[3] && turn == current_board[6]);
  temp_array.push( turn == current_board[1] && turn == current_board[4] && turn == current_board[7]);
  temp_array.push( turn == current_board[2] && turn == current_board[5] && turn == current_board[8]);  
  temp_array.push( turn == current_board[0] && turn == current_board[4] && turn == current_board[8]);  
  temp_array.push( turn == current_board[6] && turn == current_board[4] && turn == current_board[2]);  
  return temp_array.some( x => x == true );
}

function takeTurn(cellId, index) {

  cell = document.getElementById(cellId);
  let turnSuccess = fillBoardCell(index);
  
  if (turnSuccess != -1){
    if (checkWin()){
      console.log("there is a winner");
    } else if (checkDraw()){
      console.log("is a draw");
    }

    cell.innerHTML = `<img class='board-img' src='img/tictactoe${turn}.svg'>`;
    if (turn == "X") {
      turn = "O";
    } else {
      turn = "X";
    }
  }  
}

function resetGame(){
  boardModule.cells = ["", "", "", "", "", "", "", "", ""];
  cleanCells();
}

function cleanCells(){
  for(let i = 1; i<10; i+=1){
    let cellString = `cell-${i.toString()}`;
    cell = document.getElementById(cellString);      
    cell.innerHTML = "";
  }
}

function hideElement(elementId) {
  const form = document.getElementById(elementId);
  form.style.display = 'none';
}

function showElement(elementId) {
  const form = document.getElementById(elementId);
  form.style.display = 'block';
}


window.onload = function() {
  hideElement("board");
  showElement("players")
};

function startGame(){
  showElement("board");
  hideElement("players")
  let namePlayer1 = document.getElementById("namePlayer1");
  let namePlayer2 = document.getElementById("namePlayer2");
  player1 = Player(namePlayer1.value);  
  player2 = Player(namePlayer2.value);  

  
}