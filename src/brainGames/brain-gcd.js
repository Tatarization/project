import {getRandomInt} from '../randomInt.js';

const getCorrectAnswer = (num1, num2) => {
    while (num1 !== 0 && num2 !== 0) {
        if (num1 > num2) {
            num1 = num1 % num2;
        } else {
            num2 = num2 % num1;
        }
    }
    return num1 + num2;
};

export const runBrainGcd = () => {
    const number1 = getRandomInt(1, 100);
    const number2 = getRandomInt(1, 100);
    const question = `${number1} ${number2}`;
    const answer = getCorrectAnswer(number1, number2).toString();
    return {question, answer};
};

export const rule = 'Find the greatest common divisor of given numbers.';