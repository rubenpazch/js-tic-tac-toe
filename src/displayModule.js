import {globals} from './globals';
import {boardModule} from './boardModule';

export const displayModule = (() => {
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
    document.getElementById('score-player-1').innerHTML = globals.player1.getScore();
    document.getElementById('score-player-2').innerHTML = globals.globals.player2.getScore();
  };

  const cleanCells = () => {
    for (let i = 1; i < 10; i += 1) {
      const cellString = `cell-${i.toString()}`;
      const cell = document.getElementById(cellString);
      cell.style.opacity = 0;
      cell.innerHTML = '';
    }
  };


  const cleanForm = () => {
    document.getElementById('PlayerName1').value = '';
    document.getElementById('PlayerName2').value = '';
    document.getElementById('name-player-1').innerHTML = '[name]';
    document.getElementById('name-player-2').innerHTML = '[name]';
    document.getElementById('score-player-1').innerHTML = '[score]';
    document.getElementById('score-player-2').innerHTML = '[score]';
    document.getElementById('show-symbol-player-1').innerHTML = '[symbol]';
    document.getElementById('show-symbol-player-2').innerHTML = '[symbol]';
  };

  const addOnClickEvent = (element, action) => {
    element.onclick = action;
  };

  const fadeIn = (element) => {
    let op = 0.1; // initial opacity
    element.style.display = 'block';
    const timer = setInterval(() => {
      if (op >= 1) {
        clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = `alpha(opacity=${op * 100})`;
      op += op * 0.1;
    }, 10);
  };

  const initializeBoardButtons = () => {
    for(let i = 0; i < 9; i+=1){
      document.getElementById(`cell-${i}`).addEventListener("click", function() {
        boardModule.takeTurn(`cell-${i}`, i);
      });
    }
  };
  

  return {
    showMessageDraw,
    showElement,
    updateScores,
    cleanCells,
    hideElement,
    cleanForm,
    addOnClickEvent,
    fadeIn,
    initializeBoardButtons
  };
})();