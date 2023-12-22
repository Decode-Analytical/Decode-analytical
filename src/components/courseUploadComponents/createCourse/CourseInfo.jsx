import React from "react";

function CourseInfo({ courseData, handleInputChange }) {
  return (
    <div>
      <p className="text-sm font-extrabold py-3">Course Information</p>
    
      <label className="font-bold text-sm">
        Course Title:
        <input
          className="p-2"
          type="text"
          name="course_title"
          value={courseData.course_title}
          onChange={handleInputChange}
        />

        {/* e.traget.name = "course_title"  */}
      </label>
      <div className="flex flex-wrap justify-between">
        <div className="w-[50%]">
          <label className="font-bold text-sm">Skill Level: </label>
          <select
            name="skill"
            value={courseData.skill}
            onChange={handleInputChange}
            className="p-1"
          >
            <option value="Basic">Basic</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Professional">Professional</option>
          </select>
        </div>
        <div className="w-[40%]">
          <label className="font-bold text-sm ">Price: </label>
          <input
            className="p-1"
            type="number"
            name="isPrice_course"
            value={courseData.isPrice_course}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <label className="font-bold text-sm inline-block">
        Course Description:{" "}
      </label>
      <textarea
        name="course_description"
        value={courseData.course_description}
        onChange={handleInputChange}
        className="w-[100%] h-32 bg-zinc-100"
      />

      <label className="font-bold text-sm">Launguage: </label>
      <input
        className="p-2"
        type="text"
        name="course_language"
        value={courseData.course_language}
        onChange={handleInputChange}
      />

      <label className="font-bold text-sm">Category: </label>
      <select
        name="category"
        value={courseData.category}
        onChange={handleInputChange}
      >
        <option value="Programming">Programming</option>
        <option value="Design">Design</option>
        <option value="Marketing">Marketing</option>
        <option value="Other">Other</option>
      </select>
      <label className="font-bold text-sm">
        Paid or Free:
        <input
          className="p-2"
          type="text"
          name="isPaid_course"
          value={courseData.isPaid_course}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
}

export default CourseInfo;
