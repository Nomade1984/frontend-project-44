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

const checkSimple = () => {
  const user = hello();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let inquiry;
  for (let z = 0; z < 3; z += 1) {
    const number = getRandomNumber() + 2;
    inquiry = primeCalc(number);
    console.log(`Question: ${number}`);
    const exit = getUserInfo(user, inquiry, z);
    if (exit === 3) {
      break;
    }
  }
};
export default checkSimple;
