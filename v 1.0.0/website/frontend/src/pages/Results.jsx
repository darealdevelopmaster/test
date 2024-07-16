// Hooks
import { useState } from "react";
import { useLocation } from "react-router-dom";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faFlag,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
// Framer Motion
import { AnimatePresence } from "framer-motion";
import { Modal } from "../components/";
// Utils
import {
  calculateExamScore,
  handleDecrement,
  handleIncrement,
} from "../utils/exams";
// Styles
import "../styles/pages/exams.css";

const Exam = () => {
  // React Router DOM
  const {
    state: { answers, choices, questions },
  } = useLocation();

  // States
  const [activeQuestionIndex, setQuestionIndex] = useState(0);
  const [showModal, setShowModal] = useState(true);

  // Values
  const questionArr = Object.values(questions[activeQuestionIndex]);
  const questionsNumber = questions.length - 1;

  // Local State
  let userChoices = [];
  for (const key in choices) {
    if (Object.hasOwnProperty.call(choices, key)) {
      userChoices.push(choices[key]);
    }
  }

  // Calculate the score
  const [score, totalQuestions, correctAnswers, incorrectAnswers] =
    calculateExamScore(userChoices, answers);

  return (
    <>
      {/* Report Card */}
      <AnimatePresence>
        {showModal && (
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            variant={"success"}
            title="Exam Results"
            desc={
              "Great job! You've done great at this exam. keep up the good work. Now, Go check how you did in the exam"
            }
            content={
              <ul className="text-2xl flex flex-col justify-center mx-auto font-bold gap-3 w-max">
                <li className="text-center">
                  Score: {score} / {totalQuestions}
                </li>
                <li className="text-lightGreen text-center">
                  Correct Answers: {correctAnswers} / {totalQuestions}
                </li>
                <li className="text-red text-center">
                  Wrong Answers: {incorrectAnswers} / {totalQuestions}
                </li>
              </ul>
            }
          />
        )}
      </AnimatePresence>
      <div className="container">
        <section className="exam">
          {/* Questions List */}
          <div className="questions">
            <ul className="questions-list">
              {questions.map((question, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => setQuestionIndex(index)}
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
              <h2 className="flex items-center gap-8">
                Question {activeQuestionIndex + 1}{" "}
                <div className="flex gap-4">
                  <FontAwesomeIcon
                    color="#FFA930"
                    icon={faFlag}
                    size="xs"
                    className="cursor-pointer"
                    title="report"
                  />
                  <FontAwesomeIcon
                    className="cursor-pointer"
                    title="Save into notes"
                    color="#FFA930"
                    icon={faStar}
                    size="xs"
                  />
                </div>
              </h2>
              <div className="timer">00:00</div>
            </div>
            <p>{questionArr[0]}</p>
            <ul>
              {questionArr[1].map((option, index) => {
                return (
                  <li
                    style={{
                      userSelect: "none",
                      pointerEvents: "none",
                    }}
                    key={index}
                    className={
                      answers[activeQuestionIndex] == option
                        ? "correct"
                        : userChoices[activeQuestionIndex] == option
                          ? "wrong"
                          : ""
                    }
                  >
                    <input type="radio" name="radioGroup" readOnly disabled />
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
