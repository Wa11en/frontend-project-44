const generateProgression = () => {
  const progressionLength = Math.floor(Math.random() * 6) + 5;
  const start = Math.floor(Math.random() * 20);
  const step = Math.floor(Math.random() * 5) + 1;
  const hiddenElement = Math.floor(Math.random() * progressionLength);

  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    const currentNumber = start + step * i;
    progression.push(i === hiddenElement ? '..' : currentNumber);
  }

  return {
    question: `Question: ${progression.join(' ')}`,
    correctAnswer: (start + step * hiddenElement).toString(),
  };
};

export default generateProgression;
