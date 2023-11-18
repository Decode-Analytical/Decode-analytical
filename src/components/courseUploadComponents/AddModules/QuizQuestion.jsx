import React from 'react';

function QuizQuestion({ question, index, handleQuestionChange }) {
  return (
    <div className="bg-zinc-200 p-7">
      <input
        className="p-2"
        type="text"
        value={question.question}
        onChange={(e) => handleQuestionChange(index, 'question', e.target.value)}
        placeholder="Question"
      />
      <div>
        {question.options.map((option, optionIndex) => (
          <div key={optionIndex}>
            <input
              className="p-2"
              type="text"
              value={option}
              onChange={(e) =>
                handleQuestionChange(index, 'options', [
                  ...question.options.slice(0, optionIndex),
                  e.target.value,
                  ...question.options.slice(optionIndex + 1),
                ])
              }
              placeholder={`Option ${optionIndex + 1}`}
            />
            <input
              className="p-2"
              type="radio"
              name={`correctAnswer${index}`}
              checked={optionIndex === question.correctAnswer}
              onChange={() => handleQuestionChange(index, 'correctAnswer', optionIndex)}
            />{' '}
            Correct Answer
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizQuestion;
