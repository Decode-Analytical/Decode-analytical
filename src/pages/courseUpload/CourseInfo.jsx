import React, { useState } from "react";
import "../authetication/auth.css";
import {
 
  FaAngleDown,
  FaBell,
  FaInbox,
  FaMoon,

} from "react-icons/fa";
import picOne from "../../assets/homepageImages/pics1.png";
import Form from "../../components/courseUploadComponents/Form";
import FileUpload from "../../components/courseUploadComponents/FileUpload";
import VideoUpload from "../../components/courseUploadComponents/VideoUpload";
import Progress from "../../components/courseUploadComponents/Progress";


export default function CourseInfo() {
 
  return (
    <main className="p-10 text-zinc-500">
      <div className="border-8 border-solid border-slate-950 rounded-xl">
        <div></div>
        <div className="p-7">
          <div className="flex flex-wrap items-center justify-between">
            <div className="text-xs">
              <a href="#" className=" text text-violet-600">
                My Courses
              </a>
              <a href="#">/create new course</a>
            </div>
            <div className="flex items-center">
              <FaInbox className="mx-2" />
              <FaBell className="mx-2" />
              <FaMoon className="mx-2" />
              <img src={picOne} alt="profile" width={30} className="mx-2" />
              <p className="ms-2">Aleander. O </p>
              <FaAngleDown className="mx-2" />
            </div>
          </div>
          <Progress />
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
             <Form />
            </div>
            <div>
                <FileUpload />
                <VideoUpload/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
