export const Player = (name, symbol) => {
  let score = 0;
  const getScore = () => score;
  const increaseScore = () => {
    score += 1;
  };
  return {
    name, symbol, increaseScore, getScore,
  };
};