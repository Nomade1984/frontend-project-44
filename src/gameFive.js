import startQuiz from './utils/generalFunction.js';

import getRandomNumber from './utils/randomNumber.js';

const primeCalc = (num) => {
  if (num === 2) {
    return 'yes';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const startGamePrime = () => {
  const number = getRandomNumber() + 2;
  const inquiry = primeCalc(number);
  const question = `Question: ${number}`;
  return [question, inquiry];
};

const getGameDataFive = () => {
  startQuiz(startGamePrime, 'Answer "yes" if given number is prime. Otherwise answer "no".');
};
export default getGameDataFive;
