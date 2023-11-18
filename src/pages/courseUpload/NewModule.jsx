import React, { useEffect, useState } from "react";
import Header from "../../components/courseUploadComponents/Header";
import Progress from "../../components/courseUploadComponents/Progress";
import Footer from "../../components/courseUploadComponents/Footer";
import ModuleForm from "../../components/courseUploadComponents/AddModules/ModuleForm";
import { useParams } from "react-router-dom";


function NewModules() {
  const { courseId } = useParams();
  return (
    <main className="px-10">
      <Header />
      <Progress />
   
      <ModuleForm courseId={courseId} />
      <Footer />
    </main>
  );
}

export default NewModules;
