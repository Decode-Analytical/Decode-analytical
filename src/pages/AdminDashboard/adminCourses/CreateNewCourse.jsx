import React, { useState } from "react";
import ProfileHeader2 from "../../../components/ProfileHeader2";
import { FiBookOpen } from "react-icons/fi";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const CreateTile = ({ icon, title, description, onSelect, customClass }) => {
  return (
    <div
      className={`bg-shadow flex mx-auto py-[75px] md:py-[115px] ${customClass} rounded-md flex-1 justify-center w-full sm:w-[60%] cursor-pointer`}
      onClick={onSelect}
    >
      <div className="flex  gap-2 flex-col justify-center items-center  ">
        {icon}
        <h3 className="font-semibold">{title}</h3>
        <p className="text-center max-w-[350px] md:max-w-[200px]">
          {description}
        </p>
      </div>
    </div>
  );
};

const CreateNewCourse = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleProceed = () => {
    if (selectedOption === "Video Course") {
      navigate("/admin-dashboard/courses/create-new-course/create-video");
    } else if (selectedOption === "Live Lesson") {
      navigate("/admin-dashboard/courses/create-new-course/create-live");
    }
  };

  return (
    <div>
      <ProfileHeader2 to={"/admin-dashboard/courses"} />
      <div className="flex  flex-col  max-w-[1280px]  justify-center my-[70px] bg-shadow rounded-lg py-[50px] md:py-[60px] mx-auto ">
        <div className="w-[90%] max-w-none md:max-w-[750px] flex flex-col mx-auto justify-around gap-[70px]">
          <h1 className=" text-2xl md:text-4xl mx-auto font-bold text-center flex flex-col">
            <span>Welcome,</span>{" "}
            <span>What type of course are you creating?</span>
          </h1>
          <div className="flex gap-12 flex-col md:flex-row justify-between">
            <CreateTile
              icon={<FiBookOpen className="text-[30px]" />}
              title={"Video Course"}
              description={
                "Create rich learning experiences using video lectures, quizzes andexercises."
              }
              onSelect={() => setSelectedOption("Video Course")}
              customClass={
                selectedOption === "Video Course" ? "border border-black" : ""
              }
            />
            <CreateTile
              icon={<FiBookOpen className="text-[30px]" />}
              title={"Live Lesson"}
              description={
                "Create an online meeting and live classes with up to 100 participants."
              }
              onSelect={() => setSelectedOption("Live Lesson")}
              customClass={
                selectedOption === "Live Lesson" ? "border border-black" : ""
              }
            />
          </div>
          <div className="flex justify-center md:justify-end">
            <Button className={"w-fit px-12"} onClick={handleProceed}>
              Proceed
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewCourse;
