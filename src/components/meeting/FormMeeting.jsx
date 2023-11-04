import React, { useState } from "react";
import { useAuthContext } from "../../hooks/authContext";

const FormMeeting = () => {
  const { user } = useAuthContext();
  //   console.log(user.token);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [schedule, setSchedule] = useState({
    email: "",
    description: "",
    date: "",
    time: "",
    courseName: "",
  });
  const handleChange = (e) => {
    let { value, name } = e.target;
    console.log(name);
    setSchedule({ ...schedule, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(schedule);
    try {
      const response = await fetch(
        "https://decode-mnjh.onrender.com/api/admin/adminScheduleMeeting",
        {
          method: "POST",
          body: JSON.stringify(schedule),
        }
      );
      console.log(response);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setIsLoading(false);
        setError(null); // Clear any previous error
      } else {
        const errorData = await response.json();
        setError(errorData.message);
        setIsLoading(false);
      }

      // Reset the schedule state after handling the submit
      setSchedule({
        email: "",
        description: "",
        date: "",
        time: "",
        courseName: "",
      });
    } catch (error) {
      setError("Network error occurred.");
      setIsLoading(false);
      console.error("Network error:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <AiOutlineLoading3Quarters rotate={"90%"} size={50} />
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="w-4/5">
      <input
        placeholder="Email"
        type="email"
        name="email"
        id=""
        value={schedule.email}
        onChange={handleChange}
        className="text-lg p-2 my-2"
      />
      <input
        placeholder="Course Name"
        type="text"
        name="courseName"
        id=""
        value={schedule.courseName}
        onChange={handleChange}
        className="text-lg p-2 my-2"
      />
      <textarea
        onChange={handleChange}
        name="description"
        value={schedule.description}
        placeholder="Description"
        className="h-24 w-full bg-[#F3F5F7] border border-gray-300 rounded-md p-2 my-2"
      />
      <input
        placeholder="Date"
        type="date"
        name="date"
        id="date"
        value={schedule.date}
        onChange={handleChange}
        className="text-lg p-2 my-2"
      />
      <input
        placeholder="Time"
        type="time"
        name="time"
        id=""
        value={schedule.time}
        onChange={handleChange}
        className="text-lg p-2 my-2"
      />
      <p className="ms-3 my-5 text-xs text-center text-gray-400">
        By clicking Submit you agree on policy term and condition
      </p>
      {error && <p className="text-red-500 text-xs">{error}</p>}
      <button
        type="submit"
        className="bg-blue-400 w-full text-center h-12 hover:bg-blue-600 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default FormMeeting;
