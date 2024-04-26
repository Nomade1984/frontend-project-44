import readlineSync from "readline-sync";
import { hello } from "../functions/hello.js";
import { getAnswer } from "../functions/getAnswer.js";

export const checkSimple = () => {
  const user = hello();
  console.log(
    'Answer "yes" if the given number is prime. Otherwise answer "no".'
  );
  let sum = 0;
  let inquiry;
  for (let z = 0; z < 3; z += 1) {
    let number = Math.round(Math.random() * 100);
    number = number + 2;
    if (number === 2) {
      inquiry = "yes";
    } else {
      for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
          inquiry = "no";
          break;
        }
        inquiry = "yes";
      }
    }
    console.log("Question: " + number);
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
