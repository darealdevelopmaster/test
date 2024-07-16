import Question from "./Question";

const question1 = new Question(
    'questionContainer1',
    'What is the capital of France?',
    ['Berlin', 'Madrid', 'Paris', 'Rome'],
    'Paris',
    'The capital of France is Paris.',
    500, // Front height
    200 // Back height
);

const question2 = new Question(
    'questionContainer2',
    'What is the largest planet in our solar system?',
    ['Earth', 'Jupiter', 'Mars', 'Saturn'],
    'Jupiter',
    'Jupiter is the largest planet in our solar system by both mass and volume.',
    650, // Front height
    250 // Back height
);

const question3 = new Question(
    'questionContainer3',
    'Who developed the theory of relativity?',
    ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Stephen Hawking'],
    'Albert Einstein',
    'Albert Einstein developed the theory of relativity.',
    600, // Front height
    300 // Back height
);