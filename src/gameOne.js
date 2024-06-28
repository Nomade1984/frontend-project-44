import startQuiz from './utils/generalFunction.js';

import getRandomNumber from './utils/randomNumber.js';

const startGameCheckEven = () => {
  const number = getRandomNumber();
  const question = `Question: ${number}`;
  const inquiry = number % 2 === 0 ? 'yes' : 'no';
  return [question, inquiry];
};

const getGameDataOne = () => {
  startQuiz(startGameCheckEven, 'Answer "yes" if the number is even, otherwise answer "no".');
};
export default getGameDataOne;
