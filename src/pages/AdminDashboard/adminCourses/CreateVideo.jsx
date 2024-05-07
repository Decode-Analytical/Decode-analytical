import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/adminDashboardImages/logo.svg";
import { Heading } from "../../../components/Heading";
// import {
//   Input,
//   Radio,
//   SelectInput,
//   TextArea,
//   ImageInput,
// } from "../../../components/InputField";
// import Button from "../../../components/Button";
import "./CreateVideo.css";
import { useNavigate } from "react-router-dom";
// import Warning from "./warning/Warning";
import FileUpload, { Input, Options, Textarea } from "./InputFile";
import { useAuthContext } from "../../../hooks/authContext";

const CreateVideo = ({ update }) => {
  // const token = JSON.parse(localStorage.getItem("user")).token;
  let navigate = useNavigate();
  const { user } = useAuthContext();
  const baseURL = import.meta.env.VITE_BASE_URL;
  console.log(user);
  const [isLoading, setIsLoading] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    Title: "",
    Description: "",
    Category: "",
    skill_level: "",
    price: 0,
    ispaid: "free",
    course_language: "",
    course_image: null,
  });
  const [imageError, setImageError] = useState({ err: false, mes: "" });
  const onDrop = useCallback(
    (acceptedFiles, rejectedFile) => {
      // Do something with the files
      if (rejectedFile == null) {
        setImageError({ err: true, mess: "Please upload an image" });
      } else {
        setForm({ ...form, course_image: acceptedFiles[0] });
      }
      // console.log(acceptedFiles[0]);
      // console.log(rejectedFile)
    },
    [form, setForm, setImageError]
  );

  const onChange = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (name == "ispaid") {
      if (value == "paid") {
        setIsPaid(true);
      } else {
        setIsPaid(false);
      }
    }
  };
  let skill = ["Basic", "Intermediate", "Advanced", "Professional"];
  let Category = ["Programming", "Design", "Marketing", "Other"];
  let paidorNot = ["free", "paid"];
  async function Submit(e) {
    e.preventDefault();
    console.log("first");
    setIsLoading(true);
    const formData = new FormData();
    formData.set("course_title", form.Title);
    formData.set("course_description", form.Description);
    formData.set("skill", form.skill_level);
    formData.set("course_language", form.course_language);
    formData.set("category", form.Category);
    formData.set("isPaid_course", form.ispaid);
    formData.set("isPrice_course", form.price);
    if (form.course_image) {
      formData.set("course_image", form.course_image);
    }

    console.log(form);

    try {
      const response = await fetch(
        "https://server-eight-beige.vercel.app/api/course/registeredCourse",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
          method: "POST",
          body: formData,
        }
      );
      console.log(form.price);
      console.log("hi");
      console.log(response);

      console.log(response.ok);
      if (response.ok) {
        const data = await response.json();
        const res = data.newCourse;
        const id = res._id;
        setIsLoading(false);
        setError(null); // Clear any previous error
        let mess = "Course is created successfully";
        navigate(
          `/admin-dashboard/courses/create-new-course/create-video-module/${id}`
        );
        console.log(mess);
        update(id, mess);
        console.log(update);
      } else {
        const errorData = await response.json();
        setError(errorData.message);
        // ErrorC(errorData.message);
        setIsLoading(false);
      }
    } catch (error) {
      setError("Network error occurred.");
      setIsLoading(false);
      // ErrorC(error);
    }
  }

  return (
    <div className=" w-full flex gap-10 mx-auto relative">
      <div className="flex-1 flex flex-col items-center px-10 ">
        <div className="mb-6">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[90px]" />
          </Link>
        </div>
        <Heading title={"Create your Video Lesson here."} />
        {/* <form className="w-full px-24">
          <div className="w-full mb-7">
           <Input
              title={"Title"}
              placeholder={"Enter your course title"}
              type={"text"}
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
            />

            <TextArea
              title={"Description"}
              placeholder={"Enter your course description"}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <SelectInput
              title={"Category"}
              options={durationOptions}
              valueKey={"value"}
              labelKey={"label"}
              value={catecory}
              onChange={(e) => setCatecory(e.target.value)}
              // customClass={"flex-1"}
            />

            <div className="flex gap-12">
              <SelectInput
                title={"Duration"}
                options={durationOptions}
                valueKey={"value"}
                labelKey={"label"}
                value={duration}
              onChange={(e) => setDuration(e.target.value)}
                // customClass={"flex-1"}
              />

              
              <Input
              title={"Price"}
              placeholder={"Enter Price"}
              type={"text"}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              
            />
            </div>

            <Options
              // label="isPaid"
              // options={paidorNot}
              // name="ispaid"
              // value={form.ispaid}
              // onChange={onChange}
              placeholder="Select is it paid or not"
            />

            <ImageInput 
              title={"Upload Cover Image"}
              placeholder={"Brouse"}
              
            />

            

            
          </div>

          <Button onClick={handleSubmit} className={"w-full text-lg"} py={"py-5"}>
            Proceed to create lesson
          </Button>
        </form> */}

        <form className="flex flex-col gap-6 w-full" onSubmit={Submit}>
          <Input
            name="Title"
            label="Title"
            placeholder="Enter your couse title"
            type="text"
            value={form.Title}
            onChange={onChange}
          />
          <Textarea
            name="Description"
            onChange={onChange}
            value={form.Description}
            label="Description"
            placeholder="Enter your couse description"
          />
          <div className="flex md:gap-28 max-md:flex-col">
            <Options
              label="Category"
              options={Category}
              name="Category"
              value={form.Category}
              onChange={onChange}
              placeholder="Select Category"
            />
            <Input
              name="course_language"
              label="Course Language"
              placeholder="Enter a Course Language"
              type="text"
              value={form.course_language}
              onChange={onChange}
            />
          </div>
          <div className="flex md:gap-28 max-md:flex-col">
            <Options
              label="Skill Level"
              options={skill}
              name="skill_level"
              value={form.skill_level}
              onChange={onChange}
              placeholder="Select Skill Level"
            />
            {/* <Input
            name="price"
            label="Price"
            placeholder="Enter a price"
            type="number"
            value={form.price}
            onChange={onChange}
          /> */}
            <Options
              label="isPaid"
              options={paidorNot}
              name="ispaid"
              value={form.ispaid}
              onChange={onChange}
              placeholder="Select is it paid or not"
            />
          </div>
          {isPaid && (
            <Input
              name="price"
              label="Price"
              placeholder="Enter a price"
              type="number"
              required={isPaid}
              value={form.price}
              onChange={onChange}
            />
          )}
          <FileUpload
            onDrop={onDrop}
            label="Upload Cover Image"
            value={form.course_image}
            error={imageError}
            image="image/*"
            className="w-full h-72 border border-dotted border-black my-2 flex justify-center items-center"
          />

          <button
            type="submit"
            className="w-full bg-blue1 mb-5 text-lg text-white py-5 rounded"
          >
            Proceed to create course
          </button>
          {/* <div className="flex w-full justify-center gap-5">
          <button
            type="button"
            onClick={() => navigate("/AdminDashboard")}
            className="w-64 h-20 border text-center text-[#040E53] border-[#040E53] hover:bg-blue-900 hover:text-white text-2xl"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-64 h-20 border text-center text-[#040E53] border-[#040E53] hover:bg-blue-900 hover:text-white text-2xl"
          >
            Save & continue
          </button>
        </div> */}
        </form>
      </div>
      <div className="w-[35%] bg-blue1 flex justify-center items-center">
        <div className="flex gap-5">
          <div className="flex flex-col justify-center items-center">
            <div className="first-circle">
              <div className="white-dot"></div>
            </div>
            <div className="single-line"></div>
            <div className="second-circle"></div>
          </div>
          <div className="text-white flex flex-col gap-20 mt-2">
            <div>
              <h1>STEP 1</h1>
              <p className="text-xs">Create your course details</p>
            </div>
            <div>
              <h1>STEP 2</h1>
              <p className="text-xs">Create your course module details</p>
            </div>
          </div>
        </div>
      </div>

      {/* {notSuccess ? (
        <>
        <div className="notification-wrapper"></div>

        <Warning id={id} title={"Warning"} description={"Your course will be uploaded without a quiz"} planeButton={"Add Quiz"} button={"Continue"} />
        </>
      ) : ("")
      } */}
    </div>
  );
};

export default CreateVideo;
