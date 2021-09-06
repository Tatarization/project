import readlineSync from 'readline-sync';
//import {name} from '../src/cli.js';
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

const  question = (correctCount) => {
    let number = Math.floor(Math.random() * 151);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isPrime(number);
    if (answer === correctAnswer) {
        console.log('Correct!');
        correctCount += 1;
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
        correctCount = 0;
    }
    
    return correctCount;
};

const brainPrime = (correctCount = 0) => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    while (correctCount < 3){
        correctCount = question(correctCount);
    }
    //console.log(`Congratulations, Bill! ${name}`);
};
brainPrime();
export default brainPrime;