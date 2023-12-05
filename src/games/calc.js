const calculateExpression = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

const generateGame = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);

  const question = `Question: ${number1} ${operator} ${number2}`;
  const correctAnswer = calculateExpression(number1, operator, number2).toString();

  return {
    question,
    correctAnswer,
  };
};

export default generateGame;
