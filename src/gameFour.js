import hello from './utils/hello.js';

import getRandomNumber from './utils/randomNumber.js';

import getUserInfo from './utils/getUserInfo.js';

const progress = () => {
  const user = hello();
  console.log('What number is missing in the progression?');
  for (let z = 0; z < 3; z += 1) {
    const number = getRandomNumber();
    const stack = [];
    stack[0] = number;
    const randomAdd = getRandomNumber();
    for (let i = 1; i <= 9; i += 1) {
      stack[i] = stack[i - 1] + randomAdd;
    }
    const index = Math.round(Math.random() * (stack.length - 1));
    const inquiry = String(stack[index]);
    stack[index] = '..';
    console.log(`Question: ${stack.join(' ')}`);
    const exit = getUserInfo(user, inquiry, z);
    if (exit === 3) {
      break;
    }
  }
};
export default progress;
