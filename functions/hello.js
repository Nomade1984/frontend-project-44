import readlineSync from "readline-sync";
export const hello = () => {
  console.log("Welcome to the Brain Games!");
  var userName = readlineSync.question("May I have your name? ");
  console.log("Hello, " + userName + "!");
  return userName;
};