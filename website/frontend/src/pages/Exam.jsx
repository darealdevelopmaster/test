// Hooks
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// Components
import { Button } from "../components/";
// Utils
import { handleDecrement, handleIncrement } from "../utils/exams";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
// Styles
import "../styles/pages/exams.css";

// Questions
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    answer: "Mount Everest",
  },
  {
    question: "What is the largest river in the world by volume?",
    options: ["Nile", "Amazon", "Yangtze", "Mississippi-Missouri"],
    answer: "Amazon",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "NaCl", "NH3"],
    answer: "H2O",
  },
  {
    question: "In what year did the French Revolution begin?",
    options: ["1776", "1789", "1804", "1815"],
    answer: "1789",
  },
];

const Exam = () => {
  // React Router
  const navigate = useNavigate();
  const { id, examId } = useParams();

  // States
  const [activeQuestionIndex, setQuestionIndex] = useState(0);
  const [activeOption, setActiveOption] = useState(null);
  const [choices, setChoices] = useState({});

  // Values
  const questionArr = Object.values(questions[activeQuestionIndex]);
  const answers = questions.map((question) => question.answer);
  const questionsNumber = questions.length - 1;
  const choicesNumber = Object.values(choices).length;

  // Lifecycle to track changes
  useEffect(() => {
    setActiveOption(null);
  }, [activeQuestionIndex]);

  // Events
  function handleSubmitTest() {
    if (choicesNumber != questionsNumber + 1) {
      alert("Please answer all questions before submitting the test.");
    }
    alert("Test submitted");
    navigate(`/courses/${id}/exam/${examId}/results`, {
      state: {
        answers,
        choices,
        questions,
      },
      replace: true,
    });
  }

  return (
    <>
      <div className="container">
        <section className="exam">
          {/* Questions List */}
          <div className="questions">
            <ul className="questions-list">
              {questions.map((question, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setQuestionIndex(index);
                    }}
                    className={`question-tab ${activeQuestionIndex == index ? "active" : ""}`.trim()}
                  >
                    <h3>Question {index + 1}</h3>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Question */}
          <div className="question">
            <div className="question-title">
              <h2>Question {activeQuestionIndex + 1}</h2>
              <div className="timer">00:00</div>
            </div>
            <p>{questionArr[0]}</p>
            <ul>
              {questionArr[1].map((option, index) => {
                return (
                  <li
                    key={index}
                    className={
                      index == activeOption ||
                      choices[activeQuestionIndex + 1] == option
                        ? "active"
                        : ""
                    }
                    onClick={() => {
                      setChoices({
                        ...choices,
                        [activeQuestionIndex + 1]: option,
                      });
                      setActiveOption(index);
                    }}
                  >
                    <input
                      type="radio"
                      name="radioGroup"
                      readOnly
                      checked={
                        index == activeOption ||
                        choices[activeQuestionIndex + 1] == option
                      }
                    />
                    <p>{option}</p>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Options */}
          <div className="options">
            <button
              onClick={() =>
                handleDecrement(activeQuestionIndex, setQuestionIndex)
              }
              id="prev"
            >
              <FontAwesomeIcon icon={faAngleLeft} /> Prev
            </button>
            {activeQuestionIndex == questionsNumber ? (
              <Button
                label={"Submit"}
                onClick={() => handleSubmitTest()}
                color={"orange"}
              />
            ) : (
              ""
            )}
            <button
              onClick={() =>
                handleIncrement(
                  activeQuestionIndex,
                  questionsNumber,
                  setQuestionIndex
                )
              }
              id="next"
            >
              Next <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Exam;
