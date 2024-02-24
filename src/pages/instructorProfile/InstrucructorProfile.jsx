import React from "react";
import InstructorHero from "../../components/instructorProfileComponents/InstructorHero";
import MainSideBar from "../../components/mainSideBar";
import AboutInstructor from "../../components/instructorProfileComponents/AboutInstructor";
import CoursesCreated from "../../components/instructorProfileComponents/CoursesCreated";
import Layout from "../../components/Layout";

export default function InstrucructorProfile() {
  return (
    <>
      {/* <div className=" bg-[#dddddd] min-h-screen"> */}
      {/* <div>
          <MainSideBar />
        </div> */}
      <Layout>
        <div className="sm:ml-[12%]  bg-[#eeeeee]">
          <InstructorHero />
          <AboutInstructor />
          <CoursesCreated />
        </div>
      </Layout>
      {/* </div> */}
    </>
  );
}
