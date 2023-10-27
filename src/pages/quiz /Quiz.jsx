import React, { useState } from "react";
import Header from "../../components/Quiz/Header";
import Body from "../../components/Quiz/Body";
import { useNavigate, useParams } from "react-router-dom";
import {
  usePostCorrectQuizMutation,
  useViewCourseQuizQuery,
} from "../../redux/FetchApi/GetCourseData";

const Quiz = () => {
  const [quizIndex, setQuizIndex] = useState(0);
  const [storeQuiz, setStoreQuiz] = useState([]);
  // let param = useParams();
  // const navigation = useNavigate()
  // let { id } = param;

  // const { data, isLoading } = useViewCourseQuizQuery(id);
  // const courseID = localStorage.getItem("courseID")
  // if (data == undefined) {
  //   return navigation(`/CousrsePage/${courseID}`)
  // }
  const [postCorrectQuiz] = usePostCorrectQuizMutation();

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  let question = data.quiz.questions;
  const getItem = localStorage.getItem("course")
  let currentModule = localStorage.getItem("trackVideo")
  console.log(getItem)

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

      let response = await postCorrectQuiz(storeQuiz, moduleId);

      if (response.status === 200) {
        // Handle success here
        navigation(`/CousrsePage/${courseID}`)
        console.log("Score:", response.score);
      } else {
        // Handle any errors or non-success status codes here
        console.error("Error:", response.error);
      }
    }
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
    <section className="my-6 bg-[#F5F5F5]">
      <Header TotalQuiz={question.length} currentQuiz={quizIndex} Currentmodule={currentModule} />
      <Body
        question={question[quizIndex]}
        NextQuestion={NextQuiz}
        BackQuestion={PreviousQuiz}
        TotalQuiz={question.length}
        CurrentQuiz={quizIndex}
      />
      {/* <Footer disabled={disable} handleCLick={handleClick} Correct={checkAnswer} /> */}
    </section>
  );
};

export default Quiz;
