import iteration from './utils/getIterator.js';

import hello from './utils/hello.js';

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
  console.log(`Question: ${number1} ${number2}`);
  let inquiry = calc(number1, number2);
  inquiry = String(inquiry);
  const exit = getUserInfo(argument, inquiry, i);
  if (exit === 3) {
    return 3;
  }
  return 1;
};

const divisor = () => {
  const user = hello();
  console.log('Find the greatest common divisor of given numbers.');
  iteration(detailsThree, user);
};
export default divisor;
