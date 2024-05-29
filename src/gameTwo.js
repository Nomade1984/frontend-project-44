import iteration from './utils/getIterator.js';

import hello from './utils/hello.js';

import getRandomNumber from './utils/randomNumber.js';

import getUserInfo from './utils/getUserInfo.js';

const detailsTwo = (argument, i) => {
  const mathSymbol = ['+', '-', '*'];
  let inquiry;
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
  const exit = getUserInfo(argument, inquiry, i);
  if (exit === 3) {
    return 3;
  }
  return 1;
};

const calculator = () => {
  const user = hello();
  console.log('What is the result of the expression? ');
  iteration(detailsTwo, user);
};
export default calculator;
