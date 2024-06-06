import readlineSync from 'readline-sync';

import iteration from './getIterator.js';

const everything = (func, str) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(str);
  iteration(func, userName);
};
export default everything;
