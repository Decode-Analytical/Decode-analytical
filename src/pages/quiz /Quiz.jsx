import React, { useState } from "react";
import Header from "../../components/Quiz/Header";
import Body from "../../components/Quiz/Body";
import {
  usePostCorrectQuizMutation,
  useViewCourseQuizQuery,
} from "../../redux/FetchApi/GetCourseData";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Quiz = ({ id, clossQuiz, TrackModule, Result, Comment }) => {
  const [quizIndex, setQuizIndex] = useState(0);
  const [storeQuiz, setStoreQuiz] = useState([]);
  console.log(id);
  const { data, isLoading } = useViewCourseQuizQuery(id);
  console.log("IsLoading QUiz", isLoading);
  console.log("data Quiz", data);
  // const courseID = localStorage.getItem("courseID")
  // if (data == undefined) {
  //   return navigation(`/CousrsePage/${courseID}`)
  // }
  const [postCorrectQuiz] = usePostCorrectQuizMutation();

  if (isLoading) {
    return (
      <h1 className="w-full h-full flex justify-center items-center">
        <AiOutlineLoading3Quarters rotate={90} className="animate-spin w-16" />{" "}
      </h1>
    );
  }

  let question = data.questions.questions;
  console.log("Show the question", question);
  // const getItem = localStorage.getItem("course")
  // let currentModule = localStorage.getItem("trackVideo")
  // console.log(getItem)

  async function NextQuiz() {
    if (quizIndex < question.length) {
      setStoreQuiz([
        ...storeQuiz,
        {
          questionId: question[quizIndex]._id,
          selected_answer_index: quizIndex, // Use the selected answer, not quizIndex
        },
      ]);
      setQuizIndex(quizIndex + 1);
    } else {
      const moduleId = question.moduleId;
      console.log("moduleID", moduleId);
      console.log(storeQuiz);
      Result(5, question.length);
      clossQuiz();

      // Now, you can make your API request or perform other actions here
      // Uncomment this section when you want to make the API request
      // let response = await postCorrectQuiz(storeQuiz, moduleId);

      // if (response.status === 200) {
      //   // Handle success here
      //   // navigation(`/CousrsePage/${courseID}`);
      //   console.log("Score:", response.score);
      // } else {
      //   // Handle any errors or non-success status codes here
      //   // console.error("Error:", response.error);
      // }
    }
  }

  function EndQuiz() {
    Result(5, question.length);
    clossQuiz();
  }

  function PreviousQuiz() {
    console.log("Main Back");
    if (quizIndex >= 0) {
      setQuizIndex(quizIndex - 1);
    }
  }

  console.log(storeQuiz);

  // console.log(data.quiz.questions.length)

  // const checking = answer == useranswer
  return (
    <section className="my-6 bg-[#F5F5F5] min-h-full h-screen">
      <Header
        TotalComment={Comment}
        clossQuiz={clossQuiz}
        TotalQuiz={question.length}
        currentQuiz={quizIndex}
        Currentmodule={TrackModule}
      />
      <Body
        question={question[quizIndex]}
        NextQuestion={NextQuiz}
        BackQuestion={PreviousQuiz}
        TotalQuiz={question.length}
        CurrentQuiz={quizIndex}
        End={EndQuiz}
      />
      {/* <Footer disabled={disable} handleCLick={handleClick} Correct={checkAnswer} /> */}
    </section>
  );
};

export default Quiz;
