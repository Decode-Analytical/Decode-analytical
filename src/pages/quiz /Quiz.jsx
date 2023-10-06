import React, { useState } from "react";
import Header from "../../components/Quiz/Header";
import Body from "../../components/Quiz/Body";
import Footer from "../../components/Quiz/Footer";

const Quiz = () => {
  const [disable, setDisable] = useState(true);
  const [useranswer, setUserAnswer] = useState("");
  const [checkAnswer, setCheckedAnswer] = useState(null);

  const handleClick = async () => {
    // console.log("WOrkig")
    try {
      const resp = await fetch("http://localhost:3000/correctAnswer");
      if (!resp.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await resp.json();
      // Check if user's answer matches the correct answer
      const isCorrect = useranswer === data.answer;
      setCheckedAnswer(isCorrect);
    //   console.log(checkAnswer)
    } catch (error) {
      console.log(error);
    }
  };

  const getAnswerByuser = (value) => {
    setUserAnswer(value);
    setDisable(false);
  };

  // const checking = answer == useranswer
  return (
    <section className="my-6 bg-[#F5F5F5]">
      <Header />
      <Body SendARequestAnser={getAnswerByuser} Correct={checkAnswer} />
      <Footer disabled={disable} handleCLick={handleClick} Correct={checkAnswer} />
    </section>
  );
};

export default Quiz;
