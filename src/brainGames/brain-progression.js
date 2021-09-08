import {randomInt} from '../randomInt.js';

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
    const firstNumber = randomInt(0, 30);
    const difference = randomInt(1, 12);
    const lengthOfProgression = randomInt(5, 12);
    const progression = getcorrectAnswer(firstNumber, difference, lengthOfProgression);
    const missingIndex = randomInt(1,lengthOfProgression-2);
    let answer = progression[missingIndex].toString();
    progression[missingIndex] = '..';
    let question = progression;
    return {question, answer};
};

export const rule = 'What number is missing in the progression?';