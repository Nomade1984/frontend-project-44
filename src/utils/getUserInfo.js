import getAnswer from '../utils/getAnswer.js';

const getUserInfo = (name, arg, index) => {
  const result = getAnswer(arg);
  if (result === true) {
    console.log('Correct!');
  } else {
    console.log(`'${result}' is wrong answer ;(. Correct answer was '${arg}'.`);
    console.log(`Let's try again, ${name}!`);
    index = 3;
    return index;
  }
  if (index === 2) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default getUserInfo;
