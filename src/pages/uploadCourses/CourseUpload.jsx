import React, { useState, useCallback } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Options from "./Option";
import FileUpload from "./FileUpload";

const CourseUpload = () => {
  const [form, setForm] = useState({
    Title: "",
    Description: "",
    Category: "",
    skill_level: "",
    price: "",
    course_image: null,
  });
  let image = new FormData();
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
    console.log("This is the value", value);
    setForm({ ...form, [name]: value });
  };
  let skill = ["Basic", "Intermediate", "Advanced", "Professional"];
  let Category = ["Programming", "Design", "Marketing", "Other"];
  return (
    <section>
      <h2 className="text-2xl font-semibold">Course Information</h2>
      <form className="container mx-6">
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
          label="Description"
          placeholder="Enter Description"
        />
        <Options
          label="Category"
          options={Category}
          name="Category"
          value={form.Category}
          onChange={onChange}
          placeholder="Select Category"
        />
        <Options
          label="Skill Level"
          options={skill}
          name="skill_level"
          value={form.skill_level}
          onChange={onChange}
          placeholder="Select Skill Level"
        />
        <Input
          name="price"
          label="Price"
          placeholder="Enter a price"
          type="number"
          value={form.price}
          onChange={onChange}
        />
        {/* <div>
          <label>Upload Cover Image</label>
          <input
            type="file"
            className="text-sm text-stone-500
   file:mr-5 file:py-1 file:px-3 file:border-[1px]
   file:border-dotted"
          />
        </div> */}
        <FileUpload
          onDrop={onDrop}
          value={form.course_image}
          error={imageError}
          className="w-full h-72 border border-dotted border-black my-2 flex justify-center items-center"
        />
        <div className="flex w-full justify-center gap-5">
          <button
            type="button"
            className="w-64 h-24 border text-center text-[#040E53] border-[#040E53] hover:bg-blue-900 hover:text-white text-xl"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-64 h-24 border text-center text-[#040E53] border-[#040E53] hover:bg-blue-900 hover:text-white text-2xl"
          >
            Save & continue
          </button>
        </div>
      </form>
    </section>
  );
};

export default CourseUpload;
