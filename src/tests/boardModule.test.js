const boardModule = require('../boardModule');


test('checks if player won', () => {
  boardModule.cells = ['X', 'X', 'X', 'O', '', 'O', '', 'O', ''];
  expect(boardModule.checkWin()).toBe(true);
});