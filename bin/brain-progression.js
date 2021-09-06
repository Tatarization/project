import readlineSync from 'readline-sync';

const randomInt = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

const getcorrectAnswer = (firstNumber, difference, lengthOfProgression) => {
    let progression = [firstNumber];
    let cur = firstNumber;
    while (lengthOfProgression !== 1) {
        cur += difference;
        progression.push(cur);
        lengthOfProgression -= 1;
    }
    return progression;
};

const question = (correctCount) => {
    let firstNumber = randomInt(0, 30);
    let difference = randomInt(1, 12);
    let lengthOfProgression = randomInt(5, 12);
    const progression = getcorrectAnswer(firstNumber, difference, lengthOfProgression);
    const missingElemIndex = randomInt(1,lengthOfProgression-2);
    const correctAnswer = progression[missingElemIndex];
    progression[missingElemIndex] = '..';
    console.log(`Question: ${progression}`);
    const answer = Number(readlineSync.question('Your answer: '));
    if (answer === correctAnswer) {
        console.log('Correct!');
        correctCount += 1;
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
        correctCount = 0;
    }
    
    return correctCount;
};

const brainProgression = (correctCount = 0) => {
    console.log('What number is missing in the progression?');
    while (correctCount < 3){
        correctCount = question(correctCount);
    }
    //console.log(`Congratulations, Bill! ${name}`);
};
brainProgression();
export default brainProgression;