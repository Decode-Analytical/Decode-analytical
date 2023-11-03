import React, { useState } from "react";
import statistic from "../../assets/courseUploadImages/statistic.png";
import Progress from "../../components/courseUploadComponents/Progress";
import Footer from "../../components/courseUploadComponents/Footer";

function AddModules({ courseId }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [moduleData, setModuleData] = useState({
    title: "hh",
    duration: "",
    description: "",
    price: "",
    contentType: "video",
    mediaFile: null,
    coverImage: null,
    questions: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModuleData({ ...moduleData, [name]: value });
  };

  const handleModuleAdd = async () => {
    if (
      moduleData.title &&
      moduleData.duration &&
      moduleData.description &&
      moduleData.price
    ) {
      const formData = new FormData();
      formData.set("title", moduleData.title);
      formData.set("duration", moduleData.duration);
      formData.set("description", moduleData.description);
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
        const response = await fetch(`/api/courses/${courseId}/modules`, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          // Module added to the course successfully. You can handle the response or update the component state.
          console.log("Fetched");
        } else {
          // Handle errors or show an error message to the user.
        }
      } catch (error) {
        console.log(error);
        // Handle network errors or other exceptions.
      }
    }
  };

  const handleMediaFileChange = (e) => {
    const file = e.target.files[0];
    setModuleData({ ...moduleData, mediaFile: file });
  };

  const handleAddQuestion = () => {
    const updatedQuestions = [...moduleData.questions];
    updatedQuestions.push({ question: '', options: ['', '', '', ''], correctOption: 0 });
    setModuleData({ ...moduleData, questions: updatedQuestions });
  };

  const handleQuestionChange = (questionIndex, field, value) => {
    const updatedQuestions = [...moduleData.questions];
    updatedQuestions[questionIndex][field] = value;
    setModuleData({...moduleData, questions: updatedQuestions});
  };
console.log(moduleData);
  return (
    <main className="px-10">
      <div className="flex flex-wrap justify-between items-center bg-zinc-200 px-5 py-2 shadow-md">
        <h2 className="text-xl font-extrabold">My Course</h2>
        <img src={statistic} alt="statistic" width={50} />
      </div>
      <div className=" bg-zinc-200 p-5 my-5 shadow-md">
        <Progress />
    
      </div>
      <div className="grid sm:grid-cols-2 gap-10 bg-zinc-200 p-7 shadow-md my-10">
        <div>
          <h2>Add Modules to Course</h2>
          <label className="font-bold text-sm">
            Module Title:
            <input
              className="p-2"
              type="text"
              name="title"
              value={moduleData.title}
              onChange={handleInputChange}
              placeholder="Module Title"
            />
          </label>
          <label className="font-bold text-sm">
            Module Duration (in hours):
            <input
              className="p-2"
              type="number"
              name="duration"
              value={moduleData.duration}
              onChange={handleInputChange}
              placeholder="Module Duration"
            />
          </label>
          <label className="font-bold text-sm">
            Module Description:
            <textarea
                  name="description"
               value={moduleData.description}
               onChange={handleInputChange}
              placeholder="Module Description"
              className="w-[100%] h-40  bg-zinc-100"
            />
          </label>
          <label className="font-bold text-sm">
            Module Price:
            <input
              className="p-2"
              name="price"
              type="number"
              value={moduleData.price}
              onChange={handleInputChange}
              placeholder="Module Price"
            />
          </label>
        </div>
        <div>
          <label className="font-bold text-sm">
            Content Type:
            <select
              name="contentType"
              value={moduleData.contentType}
              onChange={handleInputChange}
            >
              <option value="video">Video</option>
              <option value="audio">Audio</option>
            </select>
          </label>
          {moduleData.contentType === "video" || moduleData.contentType === "audio" ? (
            <div className="mt-4">
              <label className="font-bold text-sm">
                Upload {moduleData.contentType === "video" ? "Video" : "Audio"}:{" "}
              </label>
              <div className="border-2 border-zinc-500 border-dashed h-52 items-center flex">
                <input
                  className="p-2 center w-1/2"
                  type="file"
                  accept={`${moduleData.contentType}/*`}
                  onChange={handleMediaFileChange}
                />
              </div>
              <button
                onClick={handleModuleAdd}
                className="bg-blue-700 p-2 rounded-md text-xs text-white my-3 float-right mt-16"
              >
                Add Module
              </button>
            </div>
          ) : null}
        </div>
      </div>

      <h3>Quiz Questions</h3>
      {moduleData.questions.map((question, index) => (
        <div key={index} className="bg-zinc-200 p-7">
          <input
            className="p-2"
            type="text"
            value={question.question}
            onChange={(e) =>
              handleQuestionChange(index, "question", e.target.value)
            }
            placeholder="Question"
          />
          <div>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <input
                  className="p-2"
                  type="text"
                  value={option}
                  onChange={(e) =>
                    handleQuestionChange(index, "options", [
                      ...question.options.slice(0, optionIndex),
                      e.target.value,
                      ...question.options.slice(optionIndex + 1),
                    ])
                  }
                  placeholder={`Option ${optionIndex + 1}`}
                />
                <input
                  className="p-2"
                  type="radio"
                  name={`correctAnswer${index}`}
                  checked={optionIndex === question.correctAnswer}
                  onChange={() =>
                    handleQuestionChange(index, "correctAnswer", optionIndex)
                  }
                />{" "}
                Correct Answer
              </div>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={handleAddQuestion}
        className="bg-blue-700 p-2 rounded-md text-xs text-white my-3"
      >
        Add Question
      </button>

      <Footer />
    </main>
  );
}

export default AddModules;
