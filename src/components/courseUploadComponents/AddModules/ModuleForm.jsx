import React, { useState } from "react";
import ModuleInfo from "./ModuleInfo";
import ContentInfo from "./ContentInfo";
import QuizQuestions from "./QuizQuestions";
import { useAuthContext } from "../../../hooks/authContext";
import { FaArrowRight, FaInstagram, FaInstagramSquare } from "react-icons/fa";
import axios from "axios";

function ModuleForm({ courseId }) {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthContext();
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(null);
  const [moduleData, setModuleData] = useState({
    module_title: "",
    module_duration: "",
    module_description: "",
    contentType: "video",
    mediaFile: null,
    video: [],
    audio: [],
    image: [],
    questions: [],
  });
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setModuleData({ ...moduleData, image: file });
    }
  };

  const handleAudio = (e) => {
    const file = e.target.files[0];

    if (file) {
      setModuleData({ ...moduleData, audio: file });
    }
  };

  const handleVideo = (e) => {
    const file = e.target.files[0];

    if (file) {
      setModuleData({ ...moduleData, video: file });
    }
  };
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

    const formData = new FormData();
    formData.set("module_title", moduleData.module_title);
    formData.set("module_duration", moduleData.module_duration);
    formData.set("module_description", moduleData.module_description);
    formData.set("audio", moduleData.audio);
    formData.set("image", moduleData.image);
    formData.set("video", moduleData.video);
    formData.set("contentType", moduleData.contentType);

    if (
      moduleData.contentType === "mediaFile" ||
      moduleData.contentType === "audio"
    ) {
      if (moduleData.mediaFile) {
        formData.append("mediaFile", moduleData.mediaFile);
      }
    }

    // Handle quiz data, e.g., serialize quizQuestions and add to formData
    formData.append("questions", JSON.stringify(moduleData.questions));
    const headers = {
      Authorization: `Bearer ${user.token}`,
      "Content-Type": "multipart/form-data", // Use 'multipart/form-data' for form data
    };

    try {
      const response = await axios.post(
        `https://decode-mnjh.onrender.com/api/course/createSubject/${courseId}`,
        formData,
        { headers: headers }
      );

      if (response.status == 201 || 204) {
        setIsLoading(false);
        setMessage(response.data.message);
      } else {
        setIsLoading(false);
        setError(response.data.message);
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      setError("An error occurred.");
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

  return (
    <section>
      <div className="grid sm:grid-cols-2 gap-10 bg-zinc-200 p-7 shadow-md my-10">
        <div>
          <ModuleInfo
            moduleData={moduleData}
            handleInputChange={handleInputChange}
            handleMediaFileChange={handleMediaFileChange}
            handleAudio={handleAudio}
            handleImage={handleImage}
            handleVideo={handleVideo}
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
            {message && (
              <p className="text-xs text-green-700 font-bold">{message}</p>
            )}
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
