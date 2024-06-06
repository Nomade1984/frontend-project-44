import everything from './utils/generalFunction.js';

import getRandomNumber from './utils/randomNumber.js';

import getUserInfo from './utils/getUserInfo.js';

const detailsOne = (argument, i) => {
  const number = getRandomNumber();
  console.log(`Question: ${number}`);
  const inquiry = number % 2 === 0 ? 'yes' : 'no';
  const exit = getUserInfo(argument, inquiry, i);
  if (exit === 3) {
    return 3;
  }
  return 1;
};

const victory = () => {
  everything(detailsOne, 'Answer "yes" if the number is even, otherwise answer "no".');
};
export default victory;
