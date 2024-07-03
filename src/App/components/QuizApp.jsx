import React, { useState } from 'react';

const QuizApp = ({ quizData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {showResult ? (
        <div className="p-4 bg-white shadow-lg rounded-lg text-center">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">Quiz Completed!</h2>
          <p className="text-lg mb-4">Your score: <span className="font-bold">{score}</span> out of <span className="font-bold">{quizData.length}</span></p>
          <button onClick={restartQuiz} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md focus:outline-none">
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">Question {currentQuestion + 1}</h2>
          <p className="text-lg mb-4">{quizData[currentQuestion].question}</p>
          <div className="space-y-4">
            {quizData[currentQuestion].answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(answer.isCorrect)}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md focus:outline-none w-full text-left"
              >
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
