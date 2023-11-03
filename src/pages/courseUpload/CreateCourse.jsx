import React, { useState } from "react";
import { useAuthContext } from "../../hooks/authContext";
import statistic from "../../assets/courseUploadImages/statistic.png";
import Progress from "../../components/courseUploadComponents/Progress";
import Footer from "../../components/courseUploadComponents/Footer";
import { useNavigate } from "react-router-dom";

function CreateCourse() {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [courseData, setCourseData] = useState({
    name: "",
    course_title: "",
    course_description: "",
    price: "",
    course_language: "",
    instructor: "",
    coverImage: null,
    category: "Programming",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    setCourseData({ ...courseData, coverImage: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const formData = new FormData();
    formData.set("name", courseData.name);
    formData.set("course_title", courseData.course_title);
    formData.set("course_description", courseData.course_description);
    formData.set("price", courseData.price);
    formData.set("instructor", courseData.instructor);
    formData.set("course_language", courseData.course_language);
    formData.set("category", courseData.category);
    if (courseData.coverImage) {
      formData.set("coverImage", courseData.coverImage);
    }

    try {
      const response = await fetch(
        "https://decode-mnjh.onrender.com/api/course/registeredCourse",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setIsLoading(false);
        console.log("Fetched");
        navigate("/addmodule/:id");
        // Course created successfully. You can handle the response or redirect the user.
      } else {
        console.log("error");
        setIsLoading(false);
        setError(error);
      }
    } catch (error) {
      // Handle network errors or other exceptions.
    }
  };
  console.log(courseData);
  return (
    <main className="px-10">
      <div className="flex flex-wrap justify-between items-center bg-zinc-200 px-5 py-2 shadow-md">
        <h2 className="text-xl font-extrabold">My Course</h2>
        <img src={statistic} alt="statistic" width={50} />
      </div>
      <div className=" bg-zinc-200 p-5 my-5 shadow-md">
        <Progress />
    
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-200 p-7 shadow-md grid sm:grid-cols-2 gap-10"
      >
        <div>
          <label className="font-bold text-sm">
            Name:
            <input
              className="p-2"
              type="text"
              name="name"
              value={courseData.name}
              onChange={handleInputChange}
            />
          </label>
          <label className="font-bold text-sm">
            Course Title:
            <input
              className="p-2"
              type="text"
              name="course_title"
              value={courseData.course_title}
              onChange={handleInputChange}
            />
          </label>
          <label className="font-bold text-sm inline-block">
            Course Description:{" "}
          </label>
          <textarea
            name="course_description"
            value={courseData.course_description}
            onChange={handleInputChange}
            className="w-[100%] h-32 bg-zinc-100"
          />

          <label className="font-bold text-sm">Instructor: </label>
          <input
            className="p-2"
            type="text"
            name="instructor"
            value={courseData.instructor}
            onChange={handleInputChange}
          />

          <label className="font-bold text-sm">Launguage: </label>
          <input
            className="p-2"
            type="text"
            name="course_language"
            value={courseData.course_language}
            onChange={handleInputChange}
          />

          <label className="font-bold text-sm">Price: </label>
          <input
            className="p-2"
            type="number"
            name="price"
            value={courseData.price}
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
        </div>
        <div>
          <label className="font-bold text-sm">Cover Image: </label>
          <div className="border-2 border-zinc-500 border-dashed h-52 items-center flex">
            <input
              type="file"
              accept="image/*"
              onChange={handleCoverImageChange}
              className="center w-1/2"
            />
          </div>
          <button
            type="submit"
            className="bg-[#040E53] p-2 rounded-md text-xs text-white my-3 float-right mt-52"
          >
            {isLoading ? "Loading" : " Save & Continuje"}
          </button>
        </div>

        {error && <p>{error}</p>}
      </form>
      <Footer />
    </main>
  );
}

export default CreateCourse;
