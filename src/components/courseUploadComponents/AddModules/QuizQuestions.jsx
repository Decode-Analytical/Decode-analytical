import React from 'react';
import QuizQuestion from './QuizQuestion';

function QuizQuestions({ moduleData, handleAddQuestion, handleQuestionChange }) {
  return (
    <div className='bg-zinc-200 p-7 shadow-md my-12'>
      <h3 className='text-sm font-bold'>Quiz Questions</h3>
      {moduleData.questions.map((question, index) => (
        <QuizQuestion
          key={index}
          question={question}
          index={index}
          handleQuestionChange={handleQuestionChange}
        />
      ))}
      <button
        onClick={handleAddQuestion}
        className="bg-[#040E53] p-2 rounded-md text-xs text-white my-3"
      >
        Add Question
      </button>
    </div>
  );
}

export default QuizQuestions;
