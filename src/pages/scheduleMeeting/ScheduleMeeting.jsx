import React, { useState } from "react";

import FormMeeting from "../../components/meeting/FormMeeting";
const ScheduleMeeting = () => {
  
  return (
    <section className="bg-zinc-100 py-10 min-h-screen">
      <div className="bg-white p-10 rounded-3xl w-[80%] lg:w-[50%] center ">
        <h2 className="text-center text-2xl font-extrabold">
          Appointment to Schedule a Live class.
        </h2>
        <p className="ms-3 my-5 text-xs text-center text-gray-500">
          Please fill out the form below to make an appointment
        </p>
        <div className="flex justify-center">
          <FormMeeting/>
        </div>
      </div>
    </section>
  );
};

export default ScheduleMeeting;
