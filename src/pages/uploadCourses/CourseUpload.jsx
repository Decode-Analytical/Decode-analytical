import React, { useState, useCallback } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Options from "./Option";
import FileUpload from "./FileUpload";
import { useAuthContext } from "../../hooks/authContext";
import { useNavigate } from "react-router-dom";

const CourseUpload = ({update}) => {
  let navigate = useNavigate()
  const { user } = useAuthContext();
  const baseURL = import.meta.env.VITE_BASE_URL;
  // console.log(user)
  const [isLoading, setIsLoading] = useState(false);
  const [isPaid, setIsPaid] = useState(false)

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
  const onDrop = useCallback((acceptedFiles, rejectedFile) => {
    // Do something with the files
    if (rejectedFile) {
      setImageError({ err: true, mess: "Please upload a Image" });
    } else {
      setForm({ ...from, course_image: acceptedFiles[0] });
    }
    // console.log(acceptedFiles[0]);
    // console.log(rejectedFile)
  }, []);
  const onChange = (e) => {
    let { name, value } = e.target;
    // console.log("This is the value", value);
    // console.log("this is the name", name)
    setForm({ ...form, [name]: value });
    if (name == "ispaid") {
      if (value == "paid") {
        setIsPaid(true)
      } else {
        setIsPaid(false)
      }
    }
  };
  let skill = ["Basic", "Intermediate", "Advanced", "Professional"];
  let Category = ["Programming", "Design", "Marketing", "Other"];
  let paidorNot = ["free", "paid"]
  async function Submit(e) {
    e.preventDefault();
    setIsLoading(true)
    const formData = new FormData();
    formData.set("course_title", form.Title);
    formData.set("course_description", form.Description);
    formData.set("skill", form.skill_level);
    formData.set("course_language", form.course_language);
    formData.set("category", form.Category);
    formData.set("isPaid_course", form.ispaid)
    formData.set("isPrice_course", form.price)
    if (form.course_image) {
      formData.set("course_image", form.course_image);
    }

    try {
      const response = await fetch(`${baseURL}course/registeredCourse`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const res = data.newCourse;
        const id = res._id;
        setIsLoading(false);
        setError(null); // Clear any previous error
        let mess = "Course is created successfully"
        // navigate(`/newmodule/${id}`);
        update(id, mess)
      } else {
        const errorData = await response.json();
        setError(errorData.message);
        setIsLoading(false);
        let id = ""
        update(id, Error)
      }
    } catch (error) {
      setError("Network error occurred.");
      setIsLoading(false);
      console.error("Network error:", error);
    }
  }
  return (
    <section className="w-full p-9 max-sm:p-0 shadow-xl border">
      <h2 className="text-2xl font-semibold text-left">Course Information</h2>
      <form className="flex flex-col gap-6" onSubmit={Submit}>
        <Input
          name="Title"
          label="Title"
          placeholder="Enter Title"
          type="text"
          value={form.Title}
          onChange={onChange}
        />
        <Textarea
          name="Description"
          onChange={onChange}
          value={form.Description}
          label="Description"
          placeholder="Enter Description"
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
            disable={isPaid}
            placeholder="Enter a price"
            type="number"
            value={form.price}
            onChange={onChange}
          />
        )}
        <FileUpload
          onDrop={onDrop}
          value={form.course_image}
          error={imageError}
          image="image/*"
          className="w-full h-72 border border-dotted border-black my-2 flex justify-center items-center"
        />
        <div className="flex w-full justify-center gap-5">
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
        </div>
      </form>
    </section>
  );
};

export default CourseUpload;
