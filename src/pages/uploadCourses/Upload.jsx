import React, { useCallback, useState } from "react";
import Header from "./Header";
import CourseUpload from "./CourseUpload";
import Footer from "./Footer";
import Tracker from "./Tracker";
import ModuleUpload from "./ModuleUpload";
import ALert from "./ALert";
import WarningAlert from "./WarningAlert";

const Upload = () => {
  // let quickbook = "657214fae8826654aafa56ed"
  const [selectedCourse, setSelectedCourse] = useState({
    select: true,
    id: "",
    err: false,
    mess: "",
  });
  const [courseSuccess, setCourseSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [moduleSuccess, setModuleSuccess] = useState({
    show: false,
    mess: "",
    err: false,
    mess: "",
  });
  function updateCourse() {
    setSelectedCourse({ ...selectedCourse, select: false });
    setIsOpen(false);
    setCourseSuccess(false);
  }
  function showAlert(id, mess) {
    setSelectedCourse({ ...selectedCourse, id, err: false, mess });
    setIsOpen(true);
    setCourseSuccess(true);
  }
  function showModuleAlert(message) {
    setIsOpen(true);
    setModuleSuccess({ show: true, mess: message });
  }
  function onCLickModule() {
    setIsOpen(false);
    setModuleSuccess({ show: false, mess: "" });
  }
  
  const ModuleAlertError =useCallback((message) => {
    setModuleSuccess({ mess: message, err: true });
  },[moduleSuccess])
  
  const CloseModuleAlertError =useCallback(() => {
    setModuleSuccess({ mess: "", err: false });
  },[moduleSuccess])

  const AlertCourseError = useCallback(
    (message) => {
      console.log(message, "This the error of course ");
      setCourseSuccess({ err: true, mess: message });
    },
    [selectedCourse]
  );

  const CloseAlertCourseError = useCallback(
    () => {
      console.log("CLose the alert");
      setCourseSuccess({ show: false, mess: "", err: false, mess: "" });
    },
    [selectedCourse]
  );

  // function AlertCourseError(message) {
  //   console.log(message, "This the error of course ")
  //   setModuleSuccess({ show: true, id: "", err: true, mess: message });
  // }
  return (
    <main className="flex flex-col justify-center mx-7 gap-6">
      <Header />
      <Tracker selectedCourse={selectedCourse.select} />
      {courseSuccess.err && (
        <WarningAlert
          heading="Upload Failed"
          // isOpen={true}
          paragrapgh={courseSuccess.mess}
          CLick={CloseAlertCourseError}
        />
      )}
      {moduleSuccess.err  && (
        <WarningAlert
          heading="Upload Failed"
          paragrapgh={moduleSuccess.mess}
          CLick={CloseModuleAlertError}
        />
      )}
      {selectedCourse.select ? (
        <CourseUpload update={showAlert} ErrorC={AlertCourseError} />
      ) : (
        <ModuleUpload id={selectedCourse.id} Alert={showModuleAlert} ErrorM={ModuleAlertError} />
      )}
      <Footer />
      {courseSuccess && (
        <ALert
          isOpen={isOpen}
          heading="SuccessFull"
          paragrapgh="Course is created successfully"
          CLick={updateCourse}
        />
      )}
      {moduleSuccess.show && (
        <ALert
          isOpen={isOpen}
          heading={moduleSuccess.err ? "Error" : "SuccessFull"}
          paragrapgh={
            moduleSuccess.err
              ? "Module has an error to upload"
              : "Module is created successfully"
          }
          CLick={onCLickModule}
        />
      )}
    </main>
  );
};

export default Upload;
