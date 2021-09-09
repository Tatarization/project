import readlineSync from 'readline-sync';

export const runGame = (runBraunGames, rule) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(rule);
    let repeatCount = 0;
    const repeatCountToWin = 3;
    while (repeatCount < repeatCountToWin){
        const object = runBraunGames();
        console.log(`Question: ${object.question}`);
        const answer = readlineSync.question('Your answer: ');
        if (answer === object.answer) {
            console.log('Correct!');
            repeatCount += 1;
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${object.answer}'`);
            console.log(`Let's try again, ${name}`);
            repeatCount = 0;
        }
        
    }
    console.log(`Congratulations, ${name}`);
};