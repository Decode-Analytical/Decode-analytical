import React, { useEffect, useState } from "react";
import { GiCheckMark, GiCrossMark } from "react-icons/gi";

const Body = ({ SendARequestAnser, Correct }) => {
  const [quiz, setQuiz] = useState(null);
  const [checkedAnswer, setCheckedAnswer] = useState("");
  //   let updateKey;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/quiz");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setQuiz(data);
      } catch (error) {
        console.error(error);
      }
    }
    // updateKey =  Math.random(0 * 1000)
    fetchData();
  }, []);

  const handleAnswerChange = (ans) => {
    setCheckedAnswer(ans);
    SendARequestAnser(ans);
  };

  return (
    <div className={` ${Correct == null && "my-5"}  md:h-[81vh] h-full`}>
      <ul
        className="w-full h-full flex flex-col justify-center items-center"
        key={Math.random()}
      >
        {quiz === null ? (
          <h1>Loading ...</h1>
        ) : (
          quiz.map((data, index) => (
            <li key={data.id} className="w-full md:w-[60%] flex flex-col gap-3">
              <h3 className="text-lg">{data.question}</h3>

              <h5 className="text-[#B1B4CA]">Select the answer</h5>
              <ul>
                {data.answer.map((ans, index) => (
                  <li
                    className="flex gap-3 p-5 bg-[#FFFF] my-3 shadow-lg cursor-pointer"
                    key={index}
                    onClick={() => handleAnswerChange(ans)}
                  >
                    <div className="flex items-center p-2">
                      <input
                        type="radio"
                        name="answerGroup"
                        id={`radio-item-${ans}`}
                        onChange={() => handleAnswerChange(ans)}
                        checked={checkedAnswer === ans}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor={`radio-item-${ans}`}
                        className="w-full ml-2 text-sm font-medium"
                      >
                        {ans}
                      </label>
                    </div>
                  </li>
                ))}
                {Correct != null && (
                  <li className="flex shadow-lg h-[7rem] justify-center items-center bg-white animate-ping-short">
                    <h5
                      className={`${
                        Correct ? "text-green-600" : "text-red-600"
                      } text-4xl font-bold flex`}
                    >
                      {Correct ? (
                        <>
                          <GiCheckMark />
                          Correct!
                        </>
                      ) : (
                        <>
                          <GiCrossMark />
                          "Incorrect, Try Again"
                        </>
                      )}
                    </h5>
                  </li>
                )}
              </ul>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Body;
