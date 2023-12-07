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

const generateGame = () => {
  const questionNumber = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isPrime(questionNumber) ? 'yes' : 'no';

  return {
    question: `Question: ${questionNumber}`,
    correctAnswer,
  };
};

export default generateGame;
