import iteration from './utils/getIterator.js';

import hello from './utils/hello.js';

import getRandomNumber from './utils/randomNumber.js';

import getUserInfo from './utils/getUserInfo.js';

const detailsFour = (argument, i) => {
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
  console.log(`Question: ${stack.join(' ')}`);
  const exit = getUserInfo(argument, inquiry, i);
  if (exit === 3) {
    return 3;
  }
  return 1;
};

const progress = () => {
  const user = hello();
  console.log('What number is missing in the progression?');
  iteration(detailsFour, user);
};
export default progress;
