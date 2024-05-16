import readlineSync from "readline-sync";
import { hello } from "../functions/hello.js";
import { getAnswer } from "../functions/getAnswer.js";
import { getRandomNumber } from "../functions/randomNumber.js";

export const calculator = () => {
  const user = hello();
  console.log("What is the result of the expression? ");
  const mathSymbol = ["+", "-", "*"];
  let inquiry;
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const randomIndex = Math.floor(Math.random() * mathSymbol.length);
    const getSymbol = mathSymbol[randomIndex];
    if (getSymbol === "+") {
      inquiry = number1 + number2;
      console.log("Question: " + number1 + " + " + number2);
    } else if (getSymbol === "-") {
      inquiry = number1 - number2;
      console.log("Question: " + number1 + " - " + number2);
    } else {
      inquiry = number1 * number2;
      console.log("Question: " + number1 + " * " + number2);
    }
    inquiry = String(inquiry);
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
