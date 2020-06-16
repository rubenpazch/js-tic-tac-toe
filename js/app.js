let turn = 'X';
let player1;
let player2;
let continueGame = true;

const boardModule = (() => {
  const cells = ['', '', '', '', '', '', '', '', ''];
  return { cells };
})();

function fillBoardCell(index) {
  if (boardModule.cells[index - 1] === '') {
    boardModule.cells[index - 1] = turn;
    return index;
  }
  return -1;
}

function checkWin() {
  const currentBoard = boardModule.cells;
  const tempArray = [];
  tempArray.push(turn === currentBoard[0] && turn === currentBoard[1] && turn === currentBoard[2]);
  tempArray.push(turn === currentBoard[3] && turn === currentBoard[4] && turn === currentBoard[5]);
  tempArray.push(turn === currentBoard[6] && turn === currentBoard[7] && turn === currentBoard[8]);
  tempArray.push(turn === currentBoard[0] && turn === currentBoard[3] && turn === currentBoard[6]);
  tempArray.push(turn === currentBoard[1] && turn === currentBoard[4] && turn === currentBoard[7]);
  tempArray.push(turn === currentBoard[2] && turn === currentBoard[5] && turn === currentBoard[8]);
  tempArray.push(turn === currentBoard[0] && turn === currentBoard[4] && turn === currentBoard[8]);
  tempArray.push(turn === currentBoard[6] && turn === currentBoard[4] && turn === currentBoard[2]);
  return tempArray.some(x => x === true);
}

function checkDraw() {
  if ((boardModule.cells.every(x => x !== '')) && !checkWin()) return true;
  return false;
}

const Player = (name, score, symbol) => ({ name, score, symbol });

function showMessageWinner() {
  const winMessage = document.getElementById('win-message');
  if (turn === player1.symbol) {
    winMessage.innerHTML = `${player1.name} wins this round!`;
    player1.score += 1;
  }
  if (turn === player2.symbol) {
    winMessage.innerHTML = `${player2.name} wins this round!`;
    player2.score += 1;
  }
}

function showMessageDraw() {
  const winMessage = document.getElementById('win-message');
  winMessage.innerHTML = 'It\'s a draw';
}

function showElement(elementId) {
  const form = document.getElementById(elementId);
  form.style.display = 'block';
}

function updateScores() {
  document.getElementById('score-player-1').innerHTML = player1.score;
  document.getElementById('score-player-2').innerHTML = player2.score;
}

function takeTurn(cellId, index) {
  if (continueGame) {
    const cell = document.getElementById(cellId);
    const turnSuccess = fillBoardCell(index);
    if (turnSuccess !== -1) {
      if (checkWin()) {
        showElement('win-screen');
        showMessageWinner();
        updateScores();
        continueGame = false;
      }
      if (checkDraw()) {
        showElement('win-screen');
        showMessageDraw();
        continueGame = false;
      }
      cell.innerHTML = `<img class='board-img' src='img/tictactoe${turn}.svg'>`;
      if (turn === 'X') {
        turn = 'O';
      } else {
        turn = 'X';
      }
    }
  }
}

function cleanCells() {
  for (let i = 1; i < 10; i += 1) {
    const cellString = `cell-${i.toString()}`;
    const cell = document.getElementById(cellString);
    cell.innerHTML = '';
  }
}

function resetGame() {
  boardModule.cells = ['', '', '', '', '', '', '', '', ''];
  cleanCells();
  continueGame = true;
}

function hideElement(elementId) {
  const form = document.getElementById(elementId);
  form.style.display = 'none';
}

function cleanForm() {
  document.getElementById('PlayerName1').value = '';
  document.getElementById('PlayerName2').value = '';
  document.getElementById('name-player-1').innerHTML = '[name]';
  document.getElementById('name-player-2').innerHTML = '[name]';
  document.getElementById('score-player-1').innerHTML = '[score]';
  document.getElementById('score-player-2').innerHTML = '[score]';
  document.getElementById('show-symbol-player-1').innerHTML = '[symbol]';
  document.getElementById('show-symbol-player-2').innerHTML = '[symbol]';
}

function newGame() {
  cleanCells();
  hideElement('board');
  showElement('players');
  cleanForm();
  continueGame = true;
}

function addOnClickEvent(element, action) {
  element.onclick = action;
}

function startGame() {
  showElement('board');
  showElement('reset-top-button');
  const namePlayer1 = document.getElementById('PlayerName1');
  const namePlayer2 = document.getElementById('PlayerName2');
  const symbol = document.getElementById('inputSymbolGame');


  if (namePlayer1.value === '') {
    player1 = Player('player-1', 0);
    player2 = Player('player-2', 0);
  } else {
    player1 = Player(namePlayer1.value, 0);
    player2 = Player(namePlayer2.value, 0);
  }

  if (symbol.value === 1) {
    player1.symbol = 'X';
    player2.symbol = 'O';
  } else {
    player1.symbol = 'O';
    player2.symbol = 'X';
  }


  document.getElementById('show-symbol-player-1').innerHTML = player1.symbol;
  document.getElementById('show-symbol-player-2').innerHTML = player2.symbol;

  document.getElementById('name-player-1').innerHTML = player1.name;
  document.getElementById('name-player-2').innerHTML = player2.name;
  updateScores();

  hideElement('players');
}

window.onload = function () {
  hideElement('board');
  showElement('players');
  hideElement('reset-top-button');

  const newGameButton = document.getElementById('new-game-button');
  addOnClickEvent(newGameButton, newGame);
  const startGameButton = document.getElementById('start-game-button');
  addOnClickEvent(startGameButton, startGame);
};