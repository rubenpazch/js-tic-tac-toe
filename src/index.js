import '../style/style.css';
import {displayModule} from './displayModule';
import {boardModule} from './boardModule';


window.onload = function loadGame() {
  displayModule.hideElement('board');
  displayModule.showElement('players');
  displayModule.hideElement('reset-top-button');

  const newGameButton = document.getElementById('new-game-button');
  displayModule.addOnClickEvent(newGameButton, boardModule.newGame);
  
  const startGameButton = document.getElementById('start-game-button');
  displayModule.addOnClickEvent(startGameButton, boardModule.startGame);

  const resetGameButton = document.getElementById('reset-top-button');
  displayModule.addOnClickEvent(resetGameButton, boardModule.resetGame);
  const resetBottomButton = document.getElementById('reset-bottom-button');
  displayModule.addOnClickEvent(resetBottomButton, boardModule.resetGame);

};