import readlineSync from "readline-sync";

export const progress = () => {
  console.log("Welcome to the Brain Games!");

  const userName = readlineSync.question("May I have your name? ");

  console.log("Hello, " + userName + "!");

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

    let element = stack[index];

    stack[index] = "..";

    console.log("Question: " + stack.join(" "));

    sum += 1;

    let answer = readlineSync.question("Your answer: ");

    if (element === +answer) {
      console.log("Correct!");
    } else {
      console.log(
        "'" +
          answer +
          "'" +
          " is a wrong answer;(. Correct answer was " +
          "'" +
          element +
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
