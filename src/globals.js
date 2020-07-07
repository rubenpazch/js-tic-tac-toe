export const globals = (() => {
  let turn = 'X';
  let player1;
  let player2;
  let continueGame = true;

  return {
    turn,
    player1,
    player2,
    continueGame,
  };
})();

export default globals;