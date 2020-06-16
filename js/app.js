let turn = 'X';
let player1;
let player2;
let continueGame = true;

const displayModule = (() => {
  const showMessageDraw = () => {
    const winMessage = document.getElementById('win-message');
    winMessage.innerHTML = 'It\'s a draw';
  };
  
  const showElement = (elementId) => {
    const form = document.getElementById(elementId);
    form.style.display = 'block';
  };
  
  const hideElement = (elementId) => {
    const form = document.getElementById(elementId);
    form.style.display = 'none';
  };
  

  const updateScores = () => {
    document.getElementById('score-player-1').innerHTML = player1.score;
    document.getElementById('score-player-2').innerHTML = player2.score;
  };

  const cleanCells = () => {
    for (let i = 1; i < 10; i += 1) {
      const cellString = `cell-${i.toString()}`;
      const cell = document.getElementById(cellString);
      cell.innerHTML = '';
    }
  };

  return { showMessageDraw, showElement, updateScores, cleanCells, hideElement }
})();

const boardModule = (() => {
  const cells = ['', '', '', '', '', '', '', '', ''];
  const checkWin = () => {
    const tempArray = [];
    tempArray.push(turn === cells[0] && turn === cells[1] && turn === cells[2]);
    tempArray.push(turn === cells[3] && turn === cells[4] && turn === cells[5]);
    tempArray.push(turn === cells[6] && turn === cells[7] && turn === cells[8]);
    tempArray.push(turn === cells[0] && turn === cells[3] && turn === cells[6]);
    tempArray.push(turn === cells[1] && turn === cells[4] && turn === cells[7]);
    tempArray.push(turn === cells[2] && turn === cells[5] && turn === cells[8]);
    tempArray.push(turn === cells[0] && turn === cells[4] && turn === cells[8]);
    tempArray.push(turn === cells[6] && turn === cells[4] && turn === cells[2]);
    return tempArray.some(x => x === true);
  };

  const checkDraw = () => {
    if ((cells.every(x => x !== '')) && !checkWin()) return true;
    return false;
  };

  const fillBoardCell = (index) => {
    if (cells[index - 1] === '') {
      cells[index - 1] = turn;
      return index;
    }
    return -1;
  };

  const resetGame = () => {
    boardModule.cells = ['', '', '', '', '', '', '', '', ''];
    displayModule.cleanCells;
    continueGame = true;
  };

  

  return { cells, checkWin, fillBoardCell, checkDraw, resetGame };
})();

const Player = (name, symbol) => { 
  let _score = 0;
  const getScore = () =>{
    return _score;
  };
  const increaseScore = () => {
    _score += 1;
  };
  return {name, symbol, increaseScore, getScore}
};

function showMessageWinner() {
  const winMessage = document.getElementById('win-message');
  if (turn === player1.symbol) {
    winMessage.innerHTML = `${player1.name} wins this round!`;
    player1.increaseScore;
  }
  if (turn === player2.symbol) {
    winMessage.innerHTML = `${player2.name} wins this round!`;
    player2.increaseScore;
  }
}

function takeTurn(cellId, index) {
  if (continueGame) {
    const cell = document.getElementById(cellId);
    const turnSuccess = boardModule.fillBoardCell(index);
    if (turnSuccess !== -1) {
      if (boardModule.checkWin()) {
        displayModule.showElement('win-screen');
        showMessageWinner();
        displayModule.updateScores();
        continueGame = false;
      }
      if (boardModule.checkDraw()) {
        displayModule.showElement('win-screen');
        displayModule.showMessageDraw();
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
  displayModule.cleanCells;
  displayModule.hideElement('board');
  displayModule.showElement('players');
  cleanForm();
  continueGame = true;
}

function addOnClickEvent(element, action) {
  element.onclick = action;
}

function startGame() {
  displayModule.showElement('board');
  displayModule.showElement('reset-top-button');
  const namePlayer1 = document.getElementById('PlayerName1');
  const namePlayer2 = document.getElementById('PlayerName2');
  const symbol = document.getElementById('inputSymbolGame');


  if (namePlayer1.value === '') {
    player1 = Player('player-1', "X");
    player2 = Player('player-2', "O");
  } else {
    player1 = Player(namePlayer1.value);
    player2 = Player(namePlayer2.value);
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
  displayModule.updateScores();

  displayModule.hideElement('players');
}

window.onload = function () {
  displayModule.hideElement('board');
  displayModule.showElement('players');
  displayModule.hideElement('reset-top-button');

  const newGameButton = document.getElementById('new-game-button');
  addOnClickEvent(newGameButton, newGame);
  const startGameButton = document.getElementById('start-game-button');
  addOnClickEvent(startGameButton, startGame);
  const resetGameButton = document.getElementById('reset-top-button');
  addOnClickEvent(resetGameButton, boardModule.resetGame);
};