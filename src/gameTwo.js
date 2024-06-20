import everything from './utils/generalFunction.js';

import getRandomNumber from './utils/randomNumber.js';

const detailsTwo = () => {
  const mathSymbol = ['+', '-', '*'];
  let inquiry;
  let question;
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const randomIndex = Math.floor(Math.random() * mathSymbol.length);
  const getSymbol = mathSymbol[randomIndex];
  if (getSymbol === '+') {
    inquiry = number1 + number2;
    question = `Question: ${number1} + ${number2}`;
  } else if (getSymbol === '-') {
    inquiry = number1 - number2;
    question = `Question: ${number1} - ${number2}`;
  } else {
    inquiry = number1 * number2;
    question = `Question: ${number1} * ${number2}`;
  }
  inquiry = String(inquiry);
  return [question, inquiry];
};

const calculator = () => {
  everything(detailsTwo, 'What is the result of the expression? ');
};
export default calculator;
