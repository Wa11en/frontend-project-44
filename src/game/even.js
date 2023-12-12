import { playGame } from '../index.js';

const isEven = (num) => num % 2 === 0;

const startBrainEven = () => {
  const gameGreet = 'Answer "yes" if the number is even, otherwise answer "no".';
  const generateGame = () => {
    const questionNumber = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';

    return {
      question: `Question: ${questionNumber}`,
      correctAnswer,
    };
  };

  playGame(generateGame, gameGreet);
};
export default startBrainEven;
