import { playGame } from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const gameGreet = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startBrainPrime = () => {
  const questionNumber = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isPrime(questionNumber) ? 'yes' : 'no';

  return {
    gameGreet,
    question: `Question: ${questionNumber}`,
    correctAnswer,
  };
};
export default () => playGame(startBrainPrime, gameGreet);
