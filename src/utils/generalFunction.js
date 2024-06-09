import readlineSync from 'readline-sync';

const everything = (func, str) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(str);
  for (let i = 0; i < 3; i += 1) {
    const end = func(userName, i);
    if (end === 3) {
      break;
    }
  }
};

export default everything;
