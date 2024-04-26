import readlineSync from "readline-sync";
import { hello } from "../functions/hello.js";
import { getAnswer } from "../functions/getAnswer.js";

export const victory = () => {
  const user = hello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let sum = 0;
  let inquiry;
  for (let i = 0; i < 3; i += 1) {
    let number = Math.round(Math.random() * 100);
    console.log("Question: " + number);
    if (number % 2 === 0) {
      inquiry = "yes";
    } else {
      inquiry = "no";
    }
    const result = getAnswer(inquiry);
    if (result === true) {
      sum += 1;
      console.log("Correct!");
    } else {
      console.log(
        "'" +
          result +
          "'" +
          " is a wrong answer;(. Correct answer was " +
          "'" +
          inquiry +
          "'" +
          ".\nLet's try again, " +
          user +
          "!"
      );
      break;
    }
  }
  if (sum === 3) {
    console.log("Congratulations, " + user + "!");
  }
};
