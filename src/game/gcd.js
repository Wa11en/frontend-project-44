import getRandomNumber from '../utils.js';
import playGame from '../index.js';

const calculateGCD = (a, b) => (b === 0 ? a : calculateGCD(b, a % b));

const gameGreet = 'Find the greatest common divisor of given numbers.';

const startBrainGcd = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(1, 100);

  const question = `Question: ${number1} ${number2}`;
  const correctAnswer = calculateGCD(number1, number2).toString();

  return {
    question,
    correctAnswer,
  };
};

export default () => playGame(startBrainGcd, gameGreet);
