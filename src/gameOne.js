import everything from './utils/generalFunction.js';

import getRandomNumber from './utils/randomNumber.js';

const detailsOne = () => {
  const number = getRandomNumber();
  const question = `Question: ${number}`;
  const inquiry = number % 2 === 0 ? 'yes' : 'no';
  return [question, inquiry];
};

const victory = () => {
  everything(detailsOne, 'Answer "yes" if the number is even, otherwise answer "no".');
};
export default victory;
