import {globals} from './globals';
import {Player} from './playerFactory';
import {displayModule} from './displayModule';

export const boardModule = (() => {
  let cells = ['', '', '', '', '', '', '', '', ''];
  const checkWin = () => {
    const tempArray = [];
    tempArray.push(globals.turn === cells[0] && globals.turn === cells[1] && globals.turn === cells[2]);
    tempArray.push(globals.turn === cells[3] && globals.turn === cells[4] && globals.turn === cells[5]);
    tempArray.push(globals.turn === cells[6] && globals.turn === cells[7] && globals.turn === cells[8]);
    tempArray.push(globals.turn === cells[0] && globals.turn === cells[3] && globals.turn === cells[6]);
    tempArray.push(globals.turn === cells[1] && globals.turn === cells[4] && globals.turn === cells[7]);
    tempArray.push(globals.turn === cells[2] && globals.turn === cells[5] && globals.turn === cells[8]);
    tempArray.push(globals.turn === cells[0] && globals.turn === cells[4] && globals.turn === cells[8]);
    tempArray.push(globals.turn === cells[6] && globals.turn === cells[4] && globals.turn === cells[2]);
    return tempArray.some(x => x === true);
  };

  const checkDraw = () => {
    if ((cells.every(x => x !== '')) && !checkWin()) return true;
    return false;
  };

  const fillBoardCell = (index) => {
    if (cells[index - 1] === '') {
      cells[index - 1] = globals.turn;
      return index;
    }
    return -1;
  };

  const resetGame = () => {
    cells = ['', '', '', '', '', '', '', '', ''];
    displayModule.cleanCells();
    globals.continueGame = true;
    displayModule.hideElement('win-screen');
  };

  const newGame = () => {
    displayModule.cleanCells();
    displayModule.hideElement('board');
    displayModule.showElement('players');
    displayModule.cleanForm();
    globals.continueGame = true;
  };

  const startGame = () => {
    displayModule.showElement('board');
    displayModule.initializeBoardButtons();
    displayModule.showElement('reset-top-button');
    const namePlayer1 = document.getElementById('PlayerName1');
    const namePlayer2 = document.getElementById('PlayerName2');
    const symbol = document.getElementById('inputSymbolGame');


    if (namePlayer1.value === '') {
      globals.player1 = Player('player-1', 'X');
      globals.player2 = Player('player-2', 'O');
    } else {
      globals.player1 = Player(namePlayer1.value);
      globals.player2 = Player(namePlayer2.value);
    }

    if (symbol.value === 1) {
      globals.player1.symbol = 'X';
      globals.player2.symbol = 'O';
    } else {
      globals.player1.symbol = 'O';
      globals.player2.symbol = 'X';
    }


    document.getElementById('show-symbol-player-1').innerHTML = globals.player1.symbol;
    document.getElementById('show-symbol-player-2').innerHTML = globals.player2.symbol;

    document.getElementById('name-player-1').innerHTML = globals.player1.name;
    document.getElementById('name-player-2').innerHTML = globals.player2.name;
    displayModule.updateScores();

    displayModule.hideElement('players');
  };

  const showMessageWinner = () => {
    const winMessage = document.getElementById('win-message');
    if (globals.turn === globals.player1.symbol) {
      winMessage.innerHTML = `${globals.player1.name} wins this round!`;
      globals.player1.increaseScore();
    }
    if (globals.turn === globals.player2.symbol) {
      winMessage.innerHTML = `${globals.player2.name} wins this round!`;
      globals.player2.increaseScore();
    }
  };

  const takeTurn = (cellId, index) => {
    if (globals.continueGame) {
      const cell = document.getElementById(cellId);
      const turnSuccess = fillBoardCell(index);
      if (turnSuccess !== -1) {
        displayModule.fadeIn(cell);
        if (checkWin()) {
          displayModule.showElement('win-screen');
          showMessageWinner();
          displayModule.updateScores();
          globals.continueGame = false;
        }
        if (checkDraw()) {
          displayModule.showElement('win-screen');
          displayModule.showMessageDraw();
          globals.continueGame = false;
        }
        cell.innerHTML = `<img class='board-img' src='../img/tictactoe${globals.turn}.svg'>`;
        if (globals.turn === 'X') {
          globals.turn = 'O';
        } else {
          globals.turn = 'X';
        }
      }
    }
  };

  return {
    checkWin, fillBoardCell, checkDraw, resetGame, newGame, startGame, showMessageWinner, takeTurn,
  };
})();