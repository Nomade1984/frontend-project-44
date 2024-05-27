import hello from './utils/hello.js';

import getRandomNumber from './utils/randomNumber.js';

import getUserInfo from './utils/getUserInfo.js';

const calculator = () => {
  const user = hello();
  console.log('What is the result of the expression? ');
  const mathSymbol = ['+', '-', '*'];
  let inquiry;
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const randomIndex = Math.floor(Math.random() * mathSymbol.length);
    const getSymbol = mathSymbol[randomIndex];
    if (getSymbol === '+') {
      inquiry = number1 + number2;
      console.log(`Question: ${number1} + ${number2}`);
    } else if (getSymbol === '-') {
      inquiry = number1 - number2;
      console.log(`Question: ${number1} - ${number2}`);
    } else {
      inquiry = number1 * number2;
      console.log(`Question: ${number1} * ${number2}`);
    }
    inquiry = String(inquiry);
    const exit = getUserInfo(user, inquiry, i);
    if (exit === 3) {
      break;
    }
  }
};
export default calculator;
