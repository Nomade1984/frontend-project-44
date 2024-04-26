import readlineSync from "readline-sync";
export const hello = () => {
var userName = readlineSync.question('May I have your name? ');
console.log('Hello, ' + userName + '!');
return userName;
};
