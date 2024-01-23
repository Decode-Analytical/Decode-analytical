import React, { useEffect, useState } from "react";
import { GiCheckMark, GiCrossMark } from "react-icons/gi";
import Footer from "./Footer";

const Body = ({ question, NextQuestion, BackQuestion, TotalQuiz, CurrentQuiz, End }) => {
  // const [quiz, setQuiz] = useState(null);
  // const [checkedAnswer, setCheckedAnswer] = useState({
  //   ans: "",
  //   id: null
  // });
  const [CorrectAns, setCorrectAns] = useState(null);
  const [Answer, setAnswer] = useState();
  function HandleNextQuestion() {
    NextQuestion()
    setAnswer()
    setCorrectAns(null)
  }

  function GobackToPrevious() {
    BackQuestion()
  }

  // function HandleAnswer() {
  //   console.log(Answer);
  //   if (Answer === question.correctAnswerIndexes) {
  //     setCorrectAns(true);
  //     // console.log(CorrectAns)
  //   } else {
  //     setCorrectAns(false);
  //   }
  // }  
  
  let check = TotalQuiz == CurrentQuiz ? true : false
  // check && End()

  // console.log(question);

  return (
    // <div className={` ${Correct == null && "my-5"}  md:h-[81vh] h-full`}>
    <section className={`md:h-[80vh] bg-[#F5F5F5] mb-3`}>
      <div
        className="w-full h-full flex flex-col justify-center items-center"
        key={Math.random()}
      >
        <ul
          key={question._id}
          className="w-full md:w-[60%] flex flex-col gap-3"
        >
          <h3 className="text-lg my-6 font-bold">
            {question.question_description}
          </h3>

          <h5 className="text-[#B1B4CA]">Select the answer</h5>
            {question.answers.map((option, index) => (
              <li
                key={index}
                className={`flex gap-3 p-5 my-3 shadow-lg cursor-pointer ${
                  CorrectAns === index ? "bg-green-200" : ""
                }`}
                onClick={() => setAnswer(index)}
              >
                <input
                  type="radio"
                  name="Option"
                  checked={Answer === index}
                  onChange={() => setAnswer(index)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  className="w-full ml-2 text-sm font-medium"
                  htmlFor={`radio-item-${CorrectAns}`}
                >
                  {option}
                </label>
              </li>
            ))}
        </ul>
      </div>
      <Footer
        // handleCLick={HandleAnswer}
        Correct={CorrectAns}
        disabled={check}
        handleNext={HandleNextQuestion}
        BackQuestion={GobackToPrevious}
      />
    </section>
  );
};

export default Body;
