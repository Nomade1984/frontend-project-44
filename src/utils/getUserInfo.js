import getAnswer from './getAnswer.js';

const getUserInfo = (name, arg, index, ask) => {
  console.log(ask);
  let inside = index;
  const result = getAnswer(arg);
  if (result === true) {
    console.log('Correct!');
  } else {
    console.log(`'${result}' is wrong answer ;(. Correct answer was '${arg}'.`);
    console.log(`Let's try again, ${name}!`);
    inside = 3;
    return inside;
  }
  if (inside === 2) {
    console.log(`Congratulations, ${name}!`);
  }
  return inside;
};

export default getUserInfo;
