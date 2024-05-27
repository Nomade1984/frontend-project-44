import hello from './utils/hello.js';

import getRandomNumber from './utils/randomNumber.js';

import getUserInfo from './utils/getUserInfo.js';

const victory = () => {
  const user = hello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const inquiry = number % 2 === 0 ? 'yes' : 'no';
    const exit = getUserInfo(user, inquiry, i);
    if (exit === 3) {
      break;
    }
  }
};
export default victory;
