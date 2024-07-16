export function handleIncrement(index, number, setQuestionIndex) {
  if (index === number) return;
  setQuestionIndex(index + 1);
}

export function handleDecrement(index, setQuestionIndex) {
  if (index === 0) return;
  setQuestionIndex(index - 1);
}

export function calculateExamScore(userChoices, answers) {
  let score = 0;
  let totalQuestions = 0;
  let correctAnswers = 0;
  let incorrectAnswers = 0;

  // Calculate the score
  userChoices.forEach((choice, index) => {
    if (choice === answers[index]) {
      score += 1;
      correctAnswers += 1;
    } else {
      incorrectAnswers += 1;
    }
  });
  totalQuestions = userChoices.length;
  return [score, totalQuestions, correctAnswers, incorrectAnswers];
}
