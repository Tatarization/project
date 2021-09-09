import {getRandomInt} from '../randomInt.js';

const isPrime = (number) =>  {
    if (number < 3) {
        return 'yes';
    }
    let flag = true;
    for (let i = 2; i < number / 2; i++) {
        if (number % i === 0 ) {
            flag = false;
            break;
        }
    }
    return flag? 'yes' : 'no';
}; 

export const  runBrainPrime = () => {
    const question = getRandomInt(0, 150);
    const answer = isPrime(question);
    return {question, answer};
};
export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
