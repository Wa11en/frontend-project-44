import getRandomNumber from '../utils.js';
import { playGame } from '../index.js';

const calculateGCD = (a, b) => {
  let num1 = a;
  let num2 = b;

  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return Math.abs(num1);
};

const gameGreet = 'Find the greatest common divisor of given numbers.';

const startBrainGcd = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);

  const question = `Question: ${number1} ${number2}`;
  const correctAnswer = calculateGCD(number1, number2).toString();

  return { question, correctAnswer, gameGreet };
};

export default () => playGame(startBrainGcd, gameGreet);
