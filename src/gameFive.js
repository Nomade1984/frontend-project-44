import readlineSync from 'readline-sync';

export const checkSimple = () => {

    console.log('Welcome to the Brain Games!');

    const userName = readlineSync.question('May I have your name? ');

    console.log('Hello, ' + userName + '!');

    console.log('Answer "yes" if the given number is prime. Otherwise answer "no".');

    let sum = 0;

    let answer;

    for (let z = 0; z < 3; z += 1) {

        let number = Math.round(Math.random() * 100);

        number = number + 2;

        if (number === 2) {

            answer = 'yes';

        } else {

            for (let i = 2; i < number; i += 1) {

                if (number % i === 0) {

                    answer = 'no';

                    break;

                }

                answer = 'yes';

            }

        }

        console.log('Question: ' + number);

        sum += 1;

        let respond = readlineSync.question('Your answer: ');

            if (answer === respond) {

                console.log('Correct!');

            } else {

                console.log("'" + respond + "'" + ' is a wrong answer;(. Correct answer was ' + "'" + answer + "'" + '.\nLet\'s try again, ' + userName + "!");

                break;
            }

    }

    if (sum === 3) {

        console.log('Congratulations!');

    }

};
