import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Progress from '../../components/courseUploadComponents/Progress';
import Footer from '../../components/courseUploadComponents/Footer';
import Header from '../../components/courseUploadComponents/Header';
import CourseForm from '../../components/courseUploadComponents/createCourse/CourseForm';


function NewCourse() {
  const navigate = useNavigate();

  return (
    <main className="px-10">
      <Header />
      <Progress />
      <CourseForm navigate={navigate} />
      <Footer />
    </main>
  );
}

export default NewCourse;
