import readlineSync from 'readline-sync';
//import {name} from '../src/cli.js';
const isEven = (number) =>  {
    if (number % 2 === 0) {
        return 'yes';
    } else {
        return 'no';
    }
}; 

const  question = (correctCount) => {
    let number = Math.floor(Math.random() * 101);
    console.log(`Question: ${number}`)
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(number);
    if (answer === correctAnswer) {
        console.log('Correct!');
        correctCount += 1;
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
        correctCount = 0;
    }
    
    return correctCount;
};

const brainEven = (correctCount = 0) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    while (correctCount < 3){
        correctCount = question(correctCount);
    }
    //console.log(`Congratulations, Bill! ${name}`);
};
brainEven();
export default brainEven;