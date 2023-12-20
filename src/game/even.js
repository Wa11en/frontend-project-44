import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (num) => num % 2 === 0;

const startBrainEven = () => {
  const gameGreet = 'Answer "yes" if the number is even, otherwise answer "no".';
  const generateGame = () => {
    const questionNumber = getRandomNumber(0, 100);
    const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';

    return {
      question: `Question: ${questionNumber}`,
      correctAnswer,
    };
  };

  playGame(generateGame, gameGreet);
};
export default startBrainEven;
