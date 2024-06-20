import everything from './utils/generalFunction.js';

import getRandomNumber from './utils/randomNumber.js';

const detailsFour = () => {
  const number = getRandomNumber();
  const stack = [];
  stack[0] = number;
  const randomAdd = getRandomNumber();
  for (let z = 1; z <= 9; z += 1) {
    stack[z] = stack[z - 1] + randomAdd;
  }
  const index = Math.round(Math.random() * (stack.length - 1));
  const inquiry = String(stack[index]);
  stack[index] = '..';
  const question = `Question: ${stack.join(' ')}`;
  return [question, inquiry];
};

const progress = () => {
  everything(detailsFour, 'What number is missing in the progression?');
};
export default progress;
