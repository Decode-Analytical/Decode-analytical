import React, { useEffect, useState } from "react";
import Header from "../../components/Quiz/Header";
import Body from "../../components/Quiz/Body";
import Footer from "../../components/Quiz/Footer";
import {
  usePostCorrectQuizMutation,
  useViewCourseQuizQuery,
} from "../../redux/FetchApi/GetCourseData";
import { TailSpin } from "react-loader-spinner";

const Quiz = (props) => {
  const { id, closeQuiz, TrackModule, Result, Comment } = props
  const [quizIndex, setQuizIndex] = useState(0);
  const [storeQuiz, setStoreQuiz] = useState([]);
  console.log(id)
  const { data, isLoading, isError, error } = useViewCourseQuizQuery(id);
  // console.log("IsLoading QUiz", isLoading);
  // console.log(data?.quiz.questions)
  // console.log("This is the error", error)

  let question = data?.quiz.questions;
  console.log("This is the quiz", question)
  // useEffect(() => {
  //   if (question == null) {
  //     closeQuiz()
  //   }
  // }, [question])
  

  // console.log("Show the question", question);

  async function NextQuiz() {
    if (quizIndex <= question.length) {
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
      // closeQuiz();

      // Now, you can make your API request 