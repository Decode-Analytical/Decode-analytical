import React, { useState } from "react";
import ModuleInfo from "./ModuleInfo";
import ContentInfo from "./ContentInfo";
import QuizQuestions from "./QuizQuestions";
import { FaArrowRight, FaInstagram, FaInstagramSquare } from "react-icons/fa";

function ModuleForm({ courseId }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [moduleData, setModuleData] = useState({
    module_title: "",
    module_duration: "",
    module_description: "",
    price: "",
    paid: "paid",
    contentType: "video",
    mediaFile: null,
    questions: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModuleData({ ...moduleData, [name]: value });
  };


  const handleMediaFileChange = (e) => {
    const file = e.target.files[0];
    setModuleData({ ...moduleData, mediaFile: file });
  };

  const handleModuleAdd = async () => {
    setIsLoading(true);
    {
      const formData = new FormData();
      formData.set("module_title", moduleData.module_title);
      formData.set("module_duration", moduleData.module_duration);
      formData.set("module_description", moduleData.module_description);
      formData.set("paid", moduleData.paid);
      formData.set("price", moduleData.price);
      formData.set("contentType", moduleData.contentType);

      if (
        moduleData.contentType === "video" ||
        moduleData.contentType === "audio"
      ) {
        if (moduleData.mediaFile) {
          formData.set("mediaFile", moduleData.mediaFile);
        }
      }

      // Handle quiz data, e.g., serialize quizQuestions and add to formData
      formData.set("questions", JSON.stringify(moduleData.questions));

      try {
        const response = await fetch(
          `https://decode-mnjh.onrender.com/api/courses/createSubject/${courseId}`,
          {
            method: "POST",
            body: formData,
          }
        );
        const json = await response.json();
        if (response.ok) {
          // Module added to the course successfully. You can handle the response or update the component state.
          console.log("Fetched");
        } else {
          if (!response.ok) {
            setIsLoading(false);
            setError(json.message);
          }

        }
      } catch (error) {
        setError("An error occured");
      }
    }
  };

  const handleAddQuestion = () => {
    const updatedQuestions = [...moduleData.questions];
    updatedQuestions.push({
      question: "",
      options: ["", "", "", ""],
      correctOption: 0,
    });
    setModuleData({ ...moduleData, questions: updatedQuestions });
  };

  const handleQuestionChange = (questionIndex, field, value) => {
    const updatedQuestions = [...moduleData.questions];
    updatedQuestions[questionIndex][field] = value;
    setModuleData({ ...moduleData, questions: updatedQuestions });
  };

  console.log(courseId);
  console.log(moduleData);

  return (
    <section>
      <div className="grid sm:grid-cols-2 gap-10 bg-zinc-200 p-7 shadow-md my-10">
        <div>
          <ModuleInfo
            moduleData={moduleData}
            handleInputChange={handleInputChange}
            handleMediaFileChange={handleMediaFileChange}
          />
        </div>

        <div className="ms-5">
          <div className="text-sm">
            <p className="font-bold ">
              Module 1: Foundation of user experience
            </p>
            <div className="flex flex-wrap items-center ms-5 my-3 text-[#5F5F5F]">
              <p>Introduction to product designs</p>
              <p className="bg-[#040E53] ms-3 p-1 rounded-full">
                <FaInstagram color="white" />
              </p>
            </div>
            <div className="flex flex-wrap items-center ms-5 my-3 text-[#5F5F5F]">
              <p>Introduction to product designs</p>
              <p className="bg-[#040E53] ms-3 p-1 rounded-full">
                <FaInstagram color="white" />
              </p>
            </div>
            <div className="flex flex-wrap items-center ms-5 my-3 text-[#5F5F5F]">
              <p>Introduction to product designs</p>
              <p className="bg-[#040E53] ms-3 p-1 rounded-full">
                <FaInstagram color="white" />
              </p>
            </div>

            <div className="text-sm">
              <p className="font-bold float-left">Quiz</p>
              <br />
              <div className="flex flex-wrap items-center ms-5 my-3  text-[#5F5F5F]">
                <p className="w-[70%]">
                  Assess Your Understanding: Take the Quiz
                </p>
                <p className="bg-[#040E53] ms-3 p-1 rounded-full">
                  <FaArrowRight color="white" size={10} />
                </p>
              </div>
            </div>
          </div>
          <div onClick={handleModuleAdd} className="mt-56 float-right">
            <button className="bg-[#040E53] p-3 px-5 rounded-md text-xs text-white my-3 ">
              {isLoading ? "loading..." : "Save & Continue "}
            </button>

            {error && <p className="text-xs text-red-700 font-bold">{error}</p>}
          </div>
        </div>
      </div>
      <QuizQuestions
        moduleData={moduleData}
        handleAddQuestion={handleAddQuestion}
        handleQuestionChange={handleQuestionChange}
      />
    </section>
  );
}

export default ModuleForm;
