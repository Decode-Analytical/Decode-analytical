import React, { useState } from "react";
import Header from "./Header";
import CourseUpload from "./CourseUpload";
import Footer from "./Footer";
import Tracker from "./Tracker";
import ModuleUpload from "./ModuleUpload";
import ALert from "./ALert";

const Upload = () => {
  // let quickbook = "657214fae8826654aafa56ed"
  const [selectedCourse, setSelectedCourse] = useState({
    select: false,
    id: "657577c92a0a359ae46baeb0",
    err: false,
    mess: ""
  });
  const [courseSuccess, setCourseSuccess] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [moduleSuccess, setModuleSuccess] = useState({show: false, mess: "", err: false})
  function updateCourse() {
    setSelectedCourse({...selectedCourse, select: false});
    setIsOpen(false)
    setCourseSuccess(false)
  }
  function showAlert(id, mess) {
    setSelectedCourse({...selectedCourse, id, err: false, mess})
    setIsOpen(true)
    setCourseSuccess(true)
  }
  function showModuleAlert(message) {
    setIsOpen(true)
    setModuleSuccess({show: true, mess: message})
  }
  function onCLickModule() {
    setIsOpen(false)
    setModuleSuccess({show: false, mess: ""})
  }

  function AlertError(message) {
    setModuleSuccess({ show: true, mess: message, err: true})
  }
  function AlertCourseError(message) {
    setModuleSuccess({ show: true, id: "", err: true, mess: message})
  }
  return (
    <main className="flex flex-col justify-center mx-7 gap-6">
      <Header />
      <Tracker selectedCourse={selectedCourse.select} />
      {selectedCourse.select ? (
        <CourseUpload update={showAlert} />
      ) : (
        <ModuleUpload id={selectedCourse.id} Alert={showModuleAlert} />
      )}
      <Footer />
      {courseSuccess &&  <ALert isOpen={isOpen} heading={courseSuccess.err ? "Error" : "SuccessFull"} paragrapgh={courseSuccess.err ? "Course has an error to upload" : "Course is created successfully"} CLick={updateCourse} /> }
      {moduleSuccess.show && <ALert isOpen={isOpen} heading={moduleSuccess.err ? "Error" : "SuccessFull"} paragrapgh={moduleSuccess.err ? "Module has an error to upload" : "Module is created successfully"} CLick={onCLickModule} />}
    </main>
  );
};

export default Upload;
