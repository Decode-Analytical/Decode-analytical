import React, { useState } from "react";
import Header from "./Header";
import CourseUpload from "./CourseUpload";
import Footer from "./Footer";
import Tracker from "./Tracker";
import ModuleUpload from "./ModuleUpload";

const Upload = () => {
  const [selectedCourse, setSelectedCourse] = useState({
    select: false,
    id: "657214fae8826654aafa56ed",
  });
  function updateCourse(id) {
    setSelectedCourse({ select: false, id });
  }
  return (
    <main className="flex flex-col justify-center mx-7 gap-6">
      <Header />
      <Tracker selectedCourse={selectedCourse.select} />
      {selectedCourse.select ? (
        <CourseUpload update={updateCourse} />
      ) : (
        <ModuleUpload id={selectedCourse.id} />
      )}
      <Footer />
    </main>
  );
};

export default Upload;
