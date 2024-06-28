import startQuiz from './utils/generalFunction.js';

import getRandomNumber from './utils/randomNumber.js';

const calc = (num1, num2) => {
  let numOne = num1;
  let numTwo = num2;
  if (numTwo > numOne) {
    const temp = numOne;
    numOne = numTwo;
    numTwo = temp;
  }
  let result = numOne % numTwo;
  while (result !== 0) {
    numOne = numTwo;
    numTwo = result;
    result = numOne % numTwo;
  }
  return numTwo;
};

const startGameDivisor = () => {
  const number1 = getRandomNumber() + 1;
  const number2 = getRandomNumber() + 1;
  const question = `Question: ${number1} ${number2}`;
  let inquiry = calc(number1, number2);
  inquiry = String(inquiry);
  return [question, inquiry];
};

const getGameDataThree = () => {
  startQuiz(startGameDivisor, 'Find the greatest common divisor of given numbers.');
};
export default getGameDataThree;
