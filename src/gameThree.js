import everything from './utils/generalFunction.js';

import getRandomNumber from './utils/randomNumber.js';

import getUserInfo from './utils/getUserInfo.js';

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

const detailsThree = (argument, i) => {
  const number1 = getRandomNumber() + 1;
  const number2 = getRandomNumber() + 1;
  const question = `Question: ${number1} ${number2}`;
  let inquiry = calc(number1, number2);
  inquiry = String(inquiry);
  const exit = getUserInfo(argument, inquiry, i, question);
  return exit;
};

const divisor = () => {
  everything(detailsThree, 'Find the greatest common divisor of given numbers.');
};
export default divisor;
