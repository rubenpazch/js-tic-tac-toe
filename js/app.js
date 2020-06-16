let turn = "X";
let player1;
let player2;
let continueGame = true;

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

const Player = (name, score, simbol) => {
  return { name, score, simbol };
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

function showMessageWinner(){
  let winMessage = document.getElementById("win-message");
  if (turn == "X"){
    winMessage.innerHTML = `${player1.name} wins this round!`;
    player1.score += 1;
  } 
  if (turn == "O"){
    winMessage.innerHTML = `${player2.name} wins this round!`;
    player2.score += 1;
  }
} 

function showMessageDraw(){
  let winMessage = document.getElementById("win-message");
  winMessage.innerHTML = `It's a draw`;
}

function takeTurn(cellId, index) {
  if (continueGame){
    cell = document.getElementById(cellId);
    let turnSuccess = fillBoardCell(index);
    if (turnSuccess != -1){
      if (checkWin()){
        showElement("win-screen");
        showMessageWinner();
        updateScores();
        continueGame = false;
      }
      if (checkDraw()){
        showElement("win-screen");
        showMessageDraw();
        continueGame = false;
      }
      cell.innerHTML = `<img class='board-img' src='img/tictactoe${turn}.svg'>`;
      if (turn == "X") {
        turn = "O";
      } else {
        turn = "X";
      }
    }  
  }  
}

function resetGame(){
  boardModule.cells = ["", "", "", "", "", "", "", "", ""];
  cleanCells();
  continueGame = true;
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
  hideElement("reset-top-button");
};

function updateScores() {
  document.getElementById("score-player-1").innerHTML =  player1.score;
  document.getElementById("score-player-2").innerHTML =  player2.score;
}

function startGame(){
  showElement("board");
  showElement("reset-top-button");
  let namePlayer1 = document.getElementById("PlayerName1");
  let namePlayer2 = document.getElementById("PlayerName2");
  let symbol = document.getElementById("inputSymbolGame");

  

  if (namePlayer1.value ==""){
    player1 = Player("player-1", 0);  
    player2 = Player("player-2", 0);
  }else {
    player1 = Player(namePlayer1.value, 0);  
    player2 = Player(namePlayer2.value, 0);
  }

  if (symbol.value == 1)
  {
    player1.symbol = "X";
    player2.symbol = "O";
  }
  else{
    player1.symbol = "O";
    player2.symbol = "X";
  }
  console.log(player1);
  console.log(player2);

  document.getElementById("name-player-1").innerHTML = player1.name;
  document.getElementById("name-player-2").innerHTML = player2.name;
  updateScores();

  hideElement("players");
}

function newGame(){
  cleanCells();
  hideElement("board");
  showElement("players");
  cleanForm();
  continueGame = true; 
}

function cleanForm(){
  document.getElementById("PlayerName1").value ="";
  document.getElementById("PlayerName2").value ="";
  document.getElementById("name-player-1").innerHTML = "[name]";
  document.getElementById("name-player-2").innerHTML = "[name]";
  document.getElementById("score-player-1").innerHTML = "[score]";
  document.getElementById("score-player-2").innerHTML = "[score]";
}