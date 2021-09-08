import readlineSync from 'readline-sync';

export const runGame = (getRound, rule) => {
    let correctCount = 0;
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
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