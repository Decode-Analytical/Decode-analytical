import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
// To install uuid, use the following terminal command:
// npm install uuid


const Test = () => {  

    const listQuestion = [
        {
            id: "testId1",
            content: "Who eat the last chocolate",
            answers: [
                {
                    id: "answerId test1",
                    text: "Not me",
                    nextQuestionId: "",
                }
            ],
        }
    ]
    
  const [answerType, setAnswerType] = React.useState('multiple choice');
  const handleAnswerTypeChange = (event) => {
    setAnswerType(event.target.value);
  }

  const [listChoices, updateListChoice] = useState([
    {
        id: uuidv4(),
        text: "",
        nextQuestionId: "",
    }
  ])

  const addChoice = () => {
    updateListChoice(prevChoices => [
      ...prevChoices,
      {
        id: uuidv4(),
        text: "",
        nextQuestionId: "",
      }
    ]);
  };

  const [errorMessage, setErrorMessage] = useState("");
  

  const removeChoice = (id) => {
    if (listChoices.length > 1) {
      updateListChoice(prevChoices => prevChoices.filter(choice => choice.id !== id));
    } else {
      setErrorMessage("Cannot remove. At least one answer is required.");
    }
  };

  
  return (
    <>
        <div className='w-full question-sections'>
            <h1 className='font-bold text-3xl mx-4'>New Question</h1>
            <form action="" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <label htmlFor='question-content' className="block text-gray-700 text-sm font-bold mb-2">Question:</label>
                <input id="question-content" type="text" name='content' placeholder='question text' required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                <div className='flex flex-col sm:flex-row mt-2 gap-4 answer-type'>
                    <div className='flex items-center gap-1'>
                        <input id="multiple-choice-answer-type" type="radio" name='text-answer' value='multiple choice' defaultChecked onClick={handleAnswerTypeChange}/>
                        <label htmlFor="multiple-choice-answer-type" className="block text-gray-700 text-sm font-bold">Answer type multiple choice</label>
                    </div>
                    <div className='flex items-center gap-1'>
                        <input id="text-answer-type" type="radio" name='text-answer' value='text'  onClick={handleAnswerTypeChange}/>
                        <label htmlFor="text-answer-type" className="block text-gray-700 text-sm font-bold">Answer type text</label>
                    </div>
                        
                </div>
                {answerType === 'text' ? (
                    <input id="text-answer" type="text" name='answer' placeholder='correct answer text' required className="shadow appearance-none border rounded w-full py-2 px-3 mt-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                ) : (
                    <div className='list-answers mt-4'>
                        <p className="block text-gray-700 text-sm font-bold mb-2">List Answers</p>
                        {listChoices.map((choice, index) => (
                            <React.Fragment key={choice.id}>
                                <div className="flex flex-col md:flex-row gap-2 mt-2">
                                    <input id={choice.id} type="text" name='answer' placeholder={`Answer text ${index + 1}`} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                                    <div className='flex gap-2'>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded min-w-[220px]">Link to question</button>
                                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => removeChoice(choice.id)}>Remove</button>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                        <button type="button "className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={addChoice}>Add choice</button>
                    </div>
                )}
                <div className='dropdown'>
                    <label htmlFor='dynamic-list-options' className="block text-gray-700 text-sm font-bold mb-2 mt-4">Which question should be asked after this one:</label>
                    <select id='dynamic-list-options' name='dynamic-list-options' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option value="">Choose a next question</option>
                        {listQuestion.map((question, index) => (
                            <option key={index} value={question.content}>{question.content}</option>
                        ))}
                    </select>
                </div>
                <div className='error-message'>
                    <p id="error-message" className="block text-red-500 text-sm font-bold mb-2">{errorMessage}</p>
                </div>
                <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Submit</button>
            </form>

        </div>
    </>
  )
}

export default Test
