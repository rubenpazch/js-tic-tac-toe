let turn = "X";
let player1;
let player2;

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
  if((boardModule.cells.every(x => x != "")) && !checkWin())
    return true;
  else
    return false;
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
    let winMessage = document.getElementById("win-message");
    if (checkWin()){
      showElement("win-screen");
      if(turn == "X"){
        winMessage.innerHTML = `${player1.name} wins this round!`;
        player1.score += 1;
      } else {
        winMessage.innerHTML = `${player2.name} wins this round!`;
        player2.score += 1;
      }
      updateScores();
    } else if (checkDraw()){
      showElement("win-screen");
      winMessage.innerHTML = `It's a draw`;
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
  console.log("hiding " + elementId);
}

function showElement(elementId) {
  const form = document.getElementById(elementId);
  form.style.display = 'block';
  console.log("showing " + elementId);
}


window.onload = function() {
  hideElement("board");
  showElement("players");
};

function updateScores() {
  document.getElementById("score-player-1").innerHTML = "Score: " + player1.score;
  document.getElementById("score-player-2").innerHTML = "Score: " + player2.score;
}

function startGame(){
  showElement("board");

  let namePlayer1 = document.getElementById("PlayerName1");
  let namePlayer2 = document.getElementById("PlayerName2");
  player1 = Player(namePlayer1.value, 0);  
  player2 = Player(namePlayer2.value, 0);
  document.getElementById("name-player-1").innerHTML = player1.name;
  document.getElementById("name-player-2").innerHTML = player2.name;
  updateScores();

  hideElement("players");
}