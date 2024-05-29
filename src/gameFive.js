import iteration from './utils/getIterator.js';

import hello from './utils/hello.js';

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
  console.log(`Question: ${number}`);
  const exit = getUserInfo(argument, inquiry, i);
  if (exit === 3) {
    return 3;
  }
  return 1;
};

const checkSimple = () => {
  const user = hello();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  iteration(detailsFive, user);
};
export default checkSimple;
