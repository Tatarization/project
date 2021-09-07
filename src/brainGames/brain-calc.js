import {randomInt} from '../randomInt.js';


const randomSymbol = () => {
    const symbols = ['+', '*'];
    const randomElement = symbols[randomInt(0, 1)]; 
    return randomElement;
};

const getAnswer = (num1, num2, symbol) => {
    if (symbol === '+') {
        return num1 + num2;
    } else {
        return num1 * num2;
    }
};

export const brainCalc = () => {
    const number1 = randomInt(0, 100);
    const number2 = randomInt(0, 100);
    const currentSymbol = randomSymbol();
    const answer = getAnswer(number1, number2, currentSymbol).toString();
    let question = `${number1} ${currentSymbol} ${number2}`
    return {question, answer};
};

export const rule = 'What is the result of the expression?';