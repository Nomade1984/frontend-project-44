import readlineSync from "readline-sync";
import { hello } from "../functions/hello.js";
import { getAnswer } from "../functions/getAnswer.js";

export const divisor = () => {
  const user = hello();
  console.log("Find the greatest common divisor of given number.");
  let sum = 0;
  for (let z = 0; z < 3; z += 1) {
    const number1 = Math.round(Math.random() * 100);
    const number2 = Math.round(Math.random() * 100);
    console.log("Question: " + number1 + " " + number2);
    const arr1 = [];
    const arr2 = [];
    const arr3 = [];
    for (let i = 1; i <= number1; i += 1) {
      if (number1 % i === 0) {
        arr1.push(i);
      }
    }
    for (let j = 1; j <= number2; j += 1) {
      if (number2 % j === 0) {
        arr2.push(j);
      }
    }
    let y = 0;
    for (let x = 0; x < arr1.length; ) {
      if (arr1[x] === arr2[y]) {
        arr3.push(arr1[x]);
        x += 1;
        y += 1;
      } else if (arr1[x] > arr2[y]) {
        y += 1;
      } else {
        x += 1;
      }
    }
    let max = arr3[0];
    for (let k = 0; k < arr3.length; k += 1) {
      if (max < arr3[k]) {
        max = arr3[k];
      }
    }
    const inquiry = String(max);
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
