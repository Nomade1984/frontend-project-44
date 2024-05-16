import readlineSync from "readline-sync";
import { hello } from "../functions/hello.js";
import { getAnswer } from "../functions/getAnswer.js";
import { getRandomNumber } from "../functions/randomNumber.js";

export const victory = () => {
  const user = hello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    let number = getRandomNumber();
    console.log("Question: " + number);
    let inquiry = number % 2 === 0 ? "yes" : "no";
    const result = getAnswer(inquiry);
    if (result === true) {
      console.log("Correct!");
    } else {
      console.log(
        "'" +
          result +
          "'" +
          " is wrong answer ;(. Correct answer was " +
          "'" +
          inquiry +
          "'" +
          "."
      );
      console.log("Let's try again, " + user + "!");
      return;
    }
  }
  console.log("Congratulations, " + user + "!");
};
