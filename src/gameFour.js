import readlineSync from 'readline-sync';

import { hello } from '../functions/hello.js';

import { getAnswer } from '../functions/getAnswer.js';

import { getRandomNumber } from '../functions/randomNumber.js';

export const progress = () => {
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
    let inquiry = String(stack[index]);
    stack[index] = '..';
    console.log('Question: ' + stack.join(' '));
    const result = getAnswer(inquiry);
    if (result === true) {
      console.log('Correct!');
    } else {
      console.log(
        "'" +
          result +
          "'" +
          ' is wrong answer ;(. Correct answer was ' +
          "'" +
          inquiry +
          "'" +
          '.'
      );
      console.log("Let's try again, " + user + '!');
      return;
    }
  }
  console.log('Congratulations, ' + user + '!');
};
