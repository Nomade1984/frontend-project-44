import readlineSync from 'readline-sync';

import { hello } from '../functions/hello.js';

import { getAnswer } from '../functions/getAnswer.js';

import { getRandomNumber } from '../functions/randomNumber.js';

const calc = (num1, num2) => {
  if (num2 > num1) {
    const temp = num1;
    num1 = num2;
    num2 = temp;
  }
  let result = num1 % num2;
  while (result !== 0) {
    num1 = num2;
    num2 = result;
    result = num1 % num2;
  }
  return num2;
};

export const divisor = () => {
  const user = hello();
  console.log('Find the greatest common divisor of given numbers.');
  for (let z = 0; z < 3; z += 1) {
    const number1 = getRandomNumber() + 1;
    const number2 = getRandomNumber() + 1;
    console.log('Question: ' + number1 + ' ' + number2);
    const inquiry = calc(number1, number2);
    inquiry = String(inquiry);
    const result = getAnswer(inquiry);
    if (result === true) {
      console.log('Correct!');
    } else {
      console.log("'" + result + "'" + ' is wrong answer ;(. Correct answer was ' + "'" + inquiry + "'" + '.');
      console.log("Let's try again, " + user + '!');
      return;
    }
  }
  console.log('Congratulations, ' + user + '!');
};
