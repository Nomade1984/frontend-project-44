import readlineSync from 'readline-sync';

const getAnswer = (inquiry) => {
  const answer = readlineSync.question('Your answer: ');
  let check;
  if (answer === inquiry) {
    check = true;
  } else {
    check = answer;
  }
  return check;
};
export default getAnswer;
