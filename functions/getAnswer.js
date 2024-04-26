import readlineSync from "readline-sync";
export const getAnswer = (inquiry) => {
  var answer = readlineSync.question("Your answer: ");
  let check;
  if (answer === inquiry) {
    check = true;
  } else {
    check = answer;
  }
  return check;
};
