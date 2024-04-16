import readlineSync from "readline-sync";
export const victory = () => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log("Hello, " + userName + "!");
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let sum = 0;
  let inquiry;
  for (let i = 0; i < 3; i += 1) {
    let number = Math.round(Math.random() * 100);
    console.log("Question: " + number);
    sum += 1;
    if (number % 2 === 0) {
      inquiry = "yes";
    } else {
      inquiry = "no";
    }
    let respond = readlineSync.question("Your answer: ");
    if (inquiry === respond) {
      console.log("Correct!");
    } else {
      console.log(
        "'" +
          respond +
          "'" +
          " is a wrong answer;(. Correct answer was " +
          "'" +
          inquiry +
          "'" +
          ".\nLet's try again, " +
          userName +
          "!"
      );
      break;
    }
  }
  if (sum === 3) {
    console.log("Congratulations, " + userName + "!");
  }
};
