import everything from './utils/generalFunction.js';

import getRandomNumber from './utils/randomNumber.js';

import getUserInfo from './utils/getUserInfo.js';

const detailsOne = (argument, index) => {
  const number = getRandomNumber();
  const question = `Question: ${number}`;
  const inquiry = number % 2 === 0 ? 'yes' : 'no';
  const exit = getUserInfo(argument, inquiry, index, question);
  return exit;
};

const victory = () => {
  everything(detailsOne, 'Answer "yes" if the number is even, otherwise answer "no".');
};
export default victory;
