import React, { useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Options from "./Option";

const CourseUpload = () => {
  const [form, setForm] = useState({
    Title: "",
    Description: "",
    Category: "",
  });
  const onChange = (e) => {
    let { name, value } = e.target;
    console.log("This is the name", name);
    setForm({ ...form, [name]: value });
  };
  let skill = ["Basic", "Intermediate", "Advanced", "Professional"];
  let Category = ["" ,"Programming", "Design", "Marketing", "Other"];
  return (
    <section>
      <form className="container mx-6">
        <h2 className="text-xl font-semibold">Course Information</h2>
        <Input
          name="Title"
          label="Title"
          placeholder="Enter Title"
          type="text"
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
      </form>
    </section>
  );
};

export default CourseUpload;
