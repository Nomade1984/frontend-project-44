import everything from './utils/generalFunction.js';

import getRandomNumber from './utils/randomNumber.js';

import getUserInfo from './utils/getUserInfo.js';

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

const detailsFive = (argument, i) => {
  const number = getRandomNumber() + 2;
  const inquiry = primeCalc(number);
  const question = `Question: ${number}`;
  const exit = getUserInfo(argument, inquiry, i, question);
  return exit;
};

const checkSimple = () => {
  everything(detailsFive, 'Answer "yes" if given number is prime. Otherwise answer "no".');
};
export default checkSimple;
