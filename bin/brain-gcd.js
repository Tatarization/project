import readlineSync from 'readline-sync';

const getCorrectAnswer = (num1, num2) => {
    while (num1 !== 0 && num2 !== 0) {
        if (num1 > num2) {
            num1 = num1 % num2;
        } else {
            num2 = num2 % num1;
        }
    }
    return(num1 + num2);
};

const question = (correctCount) => {
    let number1 = Math.floor(Math.random() * 101);
    let number2 = Math.floor(Math.random() * 101);
    console.log(`Question: ${number1} ${number2}`);
    const answer = Number(readlineSync.question('Your answer: '));
    const correctAnswer = getCorrectAnswer(number1, number2);
    if (answer === correctAnswer) {
        console.log('Correct!');
        correctCount += 1;
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
        correctCount = 0;
    }
    
    return correctCount;
};

const brainGcd = (correctCount = 0) => {
    console.log('Find the greatest common divisor of given numbers.');
    while (correctCount < 3){
        correctCount = question(correctCount);
    }
    //console.log(`Congratulations, Bill! ${name}`);
};
brainGcd();
export default brainGcd;