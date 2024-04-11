import readlineSync from 'readline-sync';

export const divisor = () => {

    console.log('Welcome to the Brain Games!');

    const userName = readlineSync.question('May I have your name? ');

    console.log('Hello, ' + userName + '!');

    console.log('Find the greatest common divisor of given number.');

    let sum = 0;

    for (let z = 0; z < 3; z += 1) {

        const number1 = Math.round(Math.random() * 100);

        const number2 = Math.round(Math.random() * 100);

        console.log('Question: ' + number1 + ' ' + number2);

        sum += 1;

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

        for (let x = 0; x < arr1.length;) {

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

        let answer = readlineSync.question('Your answer: ');

            if (max === +answer) {

                console.log('Correct!');

            } else {

                console.log("'" + answer + "'" + ' is a wrong answer;(. Correct answer was ' + "'" + max + "'" + '.\nLet\'s try again, ' + userName + "!");

                break;

            }

    }
    
    if (sum === 3) {

        console.log('Congratulations, ' + userName + '!');

    }

};
