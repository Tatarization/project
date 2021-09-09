import {getRandomInt} from '../randomInt.js';

const getRandomMathOperator = () => {
    const symbols = ['+', '*', '-', '/'];
    const randomElement = symbols[getRandomInt(0, 3)]; 
    return randomElement;
};

const getAnswer = (num1, num2, symbol) => {
    switch(symbol) {
        case '+':
            return num1 + num2;
        case '*':
            return num1 * num2;
        case '-':
            return num1 - num2;
        case '/':
            return ((num1 - (num1 % num2)) / num2);
    }
};

export const runBrainCalc = () => {
    const number1 = getRandomInt(50, 100);
    const number2 = getRandomInt(0, 60);
    const currentSymbol = getRandomMathOperator();
    const answer = getAnswer(number1, number2, currentSymbol).toString();
    const question = `${number1} ${currentSymbol} ${number2}`;
    return {question, answer};
};

export const rule = 'What is the result of the expression?';