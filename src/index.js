import readlineSync from 'readline-sync';

export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const playRound = (question, correctAnswer, userName) => {
  console.log(question);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

export const playGame = (generateGame, gameGreet) => {
  const userName = greetUser();
  console.log(gameGreet);
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const { question, correctAnswer } = generateGame();

    if (playRound(question, correctAnswer, userName, correctAnswersCount === 0)) {
      correctAnswersCount += 1;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
