import readlineSync from 'readline-sync';

const everything = (func, str) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(str);
  for (let i = 0; i < 3; i += 1) {
    const rightAnswer = func();
    console.log(rightAnswer[0]);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer[1]) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer[1]}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default everything;
