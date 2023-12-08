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
    select: true,
    id: "",
  });
  const [courseSuccess, setCourseSuccess] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [moduleSuccess, setModuleSuccess] = useState({show: false, mess: ""})
  function updateCourse() {
    setSelectedCourse({...selectedCourse, select: false});
    setIsOpen(false)
    setCourseSuccess(false)
  }
  function showAlert(id) {
    setSelectedCourse({...selectedCourse, id})
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
      {courseSuccess &&  <ALert isOpen={isOpen} heading="SuccessFull" paragrapgh="Course has been created" CLick={updateCourse} /> }
      {moduleSuccess.show && <ALert isOpen={isOpen} heading="SuccessFull" paragrapgh={moduleSuccess.mess} CLick={onCLickModule} />}
    </main>
  );
};

export default Upload;
