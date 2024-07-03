import React from 'react';
import QuizApp from '../components/QuizApp'; // Update the path as per your file structure
import quizData from '../components/quizData'; // Import your quiz data

const Playground = () => {
  return (
    <div>
      <QuizApp quizData={quizData} />
    </div>
  );
};

export default Playground;
