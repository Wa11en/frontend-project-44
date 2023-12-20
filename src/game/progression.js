import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameGreet = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const currentNumber = start + step * i;
    progression.push(currentNumber);
  }
  return progression;
};

const startBrainProgression = () => {
  const progressionLength = getRandomNumber(5, 10);
  const start = getRandomNumber(0, 20);
  const step = getRandomNumber(0, 5) + 1;
  const hiddenElement = getRandomNumber(0, progressionLength - 1);

  const progression = generateProgression(start, step, progressionLength);
  const correctAnswer = progression[hiddenElement].toString();
  progression[hiddenElement] = '..';
  const question = `Question: ${progression.join(' ')}`;

  return {
    question,
    correctAnswer,
  };
};

export default () => playGame(startBrainProgression, gameGreet);
