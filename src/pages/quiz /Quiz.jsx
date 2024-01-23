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
  const { id, closeQuiz, TrackModule, Result, Comment } = props;
  const [quizIndex, setQuizIndex] = useState(0);
  const [storeQuiz, setStoreQuiz] = useState([]);
  console.log(id);
  const { data, isLoading, isError, error } = useViewCourseQuizQuery(id);
  const [
    postCorrectQuiz,
    {
      isSuccess: QuizSuccess,
      isError: QuizErrorCheck,
      error: QuizError,
      data: QuizData,
    },
  ] = usePostCorrectQuizMutation();

  let question = data?.quiz.questions;
  
  async function NextQuiz() {
    if (quizIndex +1 === question.length) {
      // If quizIndex is already equal to the question length, it means the quiz is complete
      console.log("Complete of Quiz");
      closeQuiz();
    } else {
      setStoreQuiz([
        ...storeQuiz,
        {
          questionId: question[quizIndex]._id,
          selected_answer_index: quizIndex, // Use the selected answer, not quizIndex
        },
      ]);
      console.log("Next Quiz");
      setQuizIndex(quizIndex + 1);
    }
  }
  
  useEffect(() => {
    console.log(storeQuiz)
  }, [storeQuiz])

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (question && question.le