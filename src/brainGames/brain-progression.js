import {getRandomInt} from '../randomInt.js';

const getcorrectAnswer = (firstNumber, difference, lengthOfProgression) => {
    let progression = [firstNumber];
    let cur = firstNumber;
    while (lengthOfProgression !== 1) {
        cur += difference;
        progression.push(cur);
        lengthOfProgression -= 1;
    }
    return progression;
};

export const runBrainProgression = () => {
    const firstNumber = getRandomInt(0, 30);
    const difference = getRandomInt(1, 12);
    const lengthOfProgression = getRandomInt(5, 12);
    const progression = getcorrectAnswer(firstNumber, difference, lengthOfProgression);
    const missingIndex = getRandomInt(1,lengthOfProgression-2);
    let answer = progression[missingIndex].toString();
    progression[missingIndex] = '..';
    const question = progression;
    return {question, answer};
};

export const rule = 'What number is missing in the progression?';