import React, { useState } from "react";
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
  });
  const onChange = (e) => {
    let { name, value } = e.target;
    console.log("This is the value", value);
    setForm({ ...form, [name]: value });
  };
  let skill = ["Basic", "Intermediate", "Advanced", "Professional"];
  let Category = ["Programming", "Design", "Marketing", "Other"];
  return (
    <section>
      <form className="container mx-6">
        <h2 className="text-xl font-semibold">Course Information</h2>
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
        <FileUpload />
      </form>
    </section>
  );
};

export default CourseUpload;
