import {randomInt} from '../randomInt.js';

const getRandomSymbol = () => {
    const symbols = ['+', '*', '-', '/'];
    const randomElement = symbols[randomInt(0, 3)]; 
    return randomElement;
};

const getAnswer = (num1, num2, symbol) => {
    if (symbol === '+') {
        return num1 + num2;
    } else if (symbol === '*') {
        return num1 * num2;
    } else if (symbol === '-') {
        return num1 - num2;
    } else {
        return ((num1 - (num1 % num2)) / num2);
    }
};

export const runBrainCalc = () => {
    const number1 = randomInt(50, 100);
    const number2 = randomInt(0, 60);
    const currentSymbol = getRandomSymbol();
    const answer = getAnswer(number1, number2, currentSymbol).toString();
    let question = `${number1} ${currentSymbol} ${number2}`;
    return {question, answer};
};

export const rule = 'What is the result of the expression?';