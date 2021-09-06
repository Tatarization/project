import readlineSync from 'readline-sync';
const symbols = ['+', '*'];

const randomSymbol = (symbols) => {
    const randomElement = symbols[Math.floor(Math.random() * symbols.length)];
    return randomElement;
};

const getAnswer = (num1, num2, symbol) => {
    if (symbol === '+') {
        return num1 + num2;
    } else {
        return num1 * num2;
    }
};

const question = (correctCount) => {
    let number1 = Math.floor(Math.random() * 101);
    let number2 = Math.floor(Math.random() * 101);
    const currentSymbol = randomSymbol(symbols);
    console.log(`Question: ${number1} ${currentSymbol} ${number2}`);
    const answer = Number(readlineSync.question('Your answer: '));
    const correctAnswer = getAnswer(number1, number2, currentSymbol);
    if (answer === correctAnswer) {
        console.log('Correct!');
        correctCount += 1;
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
        correctCount = 0;
    }
    
    return correctCount;
};

const brainCalc = (correctCount = 0) => {
    console.log('What is the result of the expression?');
    while (correctCount < 3){
        correctCount = question(correctCount);
    }
    //console.log(`Congratulations, Bill! ${name}`);
};
brainCalc();
export default brainCalc;