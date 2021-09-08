import {randomInt} from '../randomInt.js';

const isPrime = (number) =>  {
    let flag = true;
    if (number < 3 && number > 0) {
        return 'yes';
    }
    for (let i = 2; i < number / 2; i++) {
        if (number % i === 0 ) {
            flag = false;
            break;
        }
    }
    return flag? 'yes' : 'no';
}; 

export const  runBrainPrime = () => {
    let question = randomInt(0, 150);
    const answer = isPrime(question);
    return {question, answer};
};
export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
