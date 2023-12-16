import playGame from '../index.js';
import { generateProgression } from '../utils.js';

const gameGreet = 'What number is missing in the progression?';

const startBrainProgression = () => {
  const progressionLength = Math.floor(Math.random() * 6) + 5;
  const start = Math.floor(Math.random() * 20);
  const step = Math.floor(Math.random() * 5) + 1;
  const hiddenElement = Math.floor(Math.random() * progressionLength);

  const progression = generateProgression(start, step, progressionLength);

  const correctAnswer = progression[hiddenElement].toString();
  progression[hiddenElement] = '..';

  return {
    question: `Question: ${progression.join(' ')}`,
    correctAnswer,
  };
};

export default () => playGame(startBrainProgression, gameGreet);
