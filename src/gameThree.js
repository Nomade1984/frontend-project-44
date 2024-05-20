import { hello } from '../functions/hello.js';

import { getAnswer } from '../functions/getAnswer.js';

import { getRandomNumber } from '../functions/randomNumber.js';

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

export const divisor = () => {
  const user = hello();
  console.log('Find the greatest common divisor of given numbers.');
  for (let z = 0; z < 3; z += 1) {
    const number1 = getRandomNumber() + 1;
    const number2 = getRandomNumber() + 1;
    console.log(`Question: ${number1} ${number2}`);
    let inquiry = calc(number1, number2);
    inquiry = String(inquiry);
    const result = getAnswer(inquiry);
    if (result === true) {
      console.log('Correct!');
    } else {
      console.log(`'${result}' is wrong answer ;(. Correct answer was '${inquiry}'.`);
      console.log(`Let's try again, ${user}!`);
      return;
    }
  }
  console.log(`Congratulations, ${user}!`);
};
