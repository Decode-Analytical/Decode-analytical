import React from "react";
import { Heading } from "../../../components/Heading";
import logo from "../../../assets/adminDashboardImages/logo.png";
import { Link } from "react-router-dom";

const CreateLive = () => {
  return (
    <div className="max-w-[1280px] mx-auto w-full">
      <Link to="/">
        <img src={logo} alt="logo" className="w-[50px]" />
      </Link>
      <Heading title={"Create your Live Lesson here."} />
    </div>
  );
};

export default CreateLive;
