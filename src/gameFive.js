import hello from '../functions/hello.js';

import getAnswer from '../functions/getAnswer.js';

import getRandomNumber from '../functions/randomNumber.js';

const primeCalc = (num) => {
  if (num === 2) {
    return 'yes';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const checkSimple = () => {
  const user = hello();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let inquiry;
  for (let z = 0; z < 3; z += 1) {
    const number = getRandomNumber() + 2;
    inquiry = primeCalc(number);
    console.log(`Question: ${number}`);
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
export default checkSimple;
