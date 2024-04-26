import readlineSync from "readline-sync";
import { hello } from "../functions/hello.js";
import { getAnswer } from "../functions/getAnswer.js";

export const calculator = () => {
  const user = hello();
  console.log("What is the result of the expression? ");
  const origin = [
    `${Math.round(Math.random() * 100)} + ${Math.round(Math.random() * 100)}`,
    `${Math.round(Math.random() * 100)} - ${Math.round(Math.random() * 100)}`,
    `${Math.round(Math.random() * 100)} * ${Math.round(Math.random() * 100)}`,
  ];
  let sum = 0;
  let inquiry;
  for (let i = 0; i < 3; i += 1) {
    const randomIndex = Math.floor(Math.random() * origin.length);
    const result1 = origin[randomIndex];
    console.log("Question: " + result1);
    let arr = result1.split(" ");
    if (arr[1] === "+") {
      inquiry = +arr[0] + +arr[2];
    } else if (arr[1] === "-") {
      inquiry = +arr[0] - +arr[2];
    } else {
      inquiry = +arr[0] * +arr[2];
    }
    inquiry = String(inquiry);
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
