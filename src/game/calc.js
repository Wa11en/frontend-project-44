import { playGame } from '../index.js';
import getRandomNumber from '../utils.js';

const calculateExpression = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Invalid operator: ${operator}`);
  }
};

const gameGreet = 'What is the result of the expression?';

const startBrainCalc = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);

  const question = `Question: ${number1} ${operator} ${number2}`;
  const correctAnswer = calculateExpression(number1, operator, number2).toString();

  return {
    question,
    correctAnswer,
    gameGreet,
  };
};

export default () => playGame(startBrainCalc, gameGreet);
