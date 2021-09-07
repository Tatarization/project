import readlineSync from 'readline-sync';
import {cli} from './cli.js'
export const game = (getRound, rule) => {
    let correctCount = 0;
    const name = cli();
    console.log(rule);
    while (correctCount < 3){
        const object = getRound();
        console.log(`Question: ${object.question}`);
        const answer = readlineSync.question('Your answer: ');
        if (answer === object.answer) {
            console.log('Correct!');
            correctCount += 1;
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${object.answer}'`);
            console.log(`Let's try again, ${name}`);
            correctCount = 0;
        }
        
    }
    console.log(`Congratulations, ${name}`);
};