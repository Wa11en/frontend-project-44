export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const currentNumber = start + step * i;
    progression.push(currentNumber);
  }

  return progression;
};
