import readlineSync from 'readline-sync';

export const calculator = () => {

    console.log('Welcome to the Brain Games!');

    const userName = readlineSync.question('May I have your name? ');

    console.log('Hello, ' + userName + '!');

    console.log('What is the result of the expression? ');

    const origin = [ `${Math.floor(Math.random() * 100)} + ${Math.floor(Math.random() * 100)}`,

                    `${Math.floor(Math.random() * 100)} - ${Math.floor(Math.random() * 100)}`,

                    `${Math.floor(Math.random() * 100)} * ${Math.floor(Math.random() * 100)}`];

    let sum = 0;

    let answer;

    for (let i = 1; i < 4; i += 1) {

        const randomIndex = Math.floor(Math.random() * origin.length);

        const result = origin[randomIndex];

        console.log('Question: ' + result);

        sum += 1;

        let arr = result.split(' ');

            if (arr[1] === '+') {

                answer = +arr[0] + +arr[2];

            } else if (arr[1] === '-') {

                answer = +arr[0] - +arr[2];

            } else {

                answer = +arr[0] * +arr[2];
            }

            let respond = readlineSync.question('Your answer: ');

            if (answer === +respond) {

                console.log('Correct!');

            } else {

                console.log("'" + respond + "'" + ' is a wrong answer;(. Correct answer was ' + "'" + answer + "'" + '.\nLet\'s try again, ' + userName + "!");

                break;
            }

    }

    if (sum === 3) {

        console.log('Congratulations, ' + userName + '!');

    }

};
