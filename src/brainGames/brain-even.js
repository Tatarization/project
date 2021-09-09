import {getRandomInt} from '../randomInt.js';

const isEven = (number) =>  {
    if (number % 2 === 0) {
        return 'yes';
    } else {
        return 'no';
    }
}; 

export const  RunBrainEven = () => {
    const question = getRandomInt(0, 100);
    const answer = isEven(question);
    return {question, answer};
};

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';