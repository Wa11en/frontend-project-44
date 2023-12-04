import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const playBrainEven = () => {
  const countToWin = 3;
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let correctAnswerCount = 0; correctAnswerCount < countToWin;) {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default playBrainEven;
