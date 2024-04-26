import readlineSync from "readline-sync";
import { hello } from "../functions/hello.js";
import { getAnswer } from "../functions/getAnswer.js";

export const progress = () => {
  const user = hello();
  console.log("What number is missing in the progression?");
  let sum = 0;
  for (let z = 0; z < 3; z += 1) {
    const number = Math.round(Math.random() * 10);
    const stack = [];
    stack[0] = number;
    for (let i = 1; i <= 9; i += 1) {
      stack[i] = stack[i - 1] + number;
    }
    const index = Math.round(Math.random() * (stack.length - 1));
    let inquiry = String(stack[index]);
    stack[index] = "..";
    console.log("Question: " + stack.join(" "));
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
