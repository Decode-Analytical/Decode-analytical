import React, { useState } from "react";
import { useNewMeetingMutation } from "../../redux/Meeting/Meeting";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const FormMeeting = () => {
  const [newMeeting, { isLoading, isError, error }] = useNewMeetingMutation();
  const [schedule, setSchedule] = useState({
    email: "",
    description: "",
    date: "",
    time: "",
    courseName: "",
  });
  const handleChange = (e) => {
    let { value, name } = e.target;
    setSchedule({ ...schedule, [name]: value });
  };
  const handleSubmit = () => {
    newMeeting(schedule);
  };

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <AiOutlineLoading3Quarters rotate={"90deg"} size={50} />
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
      {isError && <p className="text-red-500 text-xs my-2">{error.data.message}</p>}
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
