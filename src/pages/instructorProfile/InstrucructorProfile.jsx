import React from "react";
import InstructorHero from "../../components/instructorProfileComponents/InstructorHero";
import MainSideBar from "../../components/mainSideBar";
import AboutInstructor from "../../components/instructorProfileComponents/AboutInstructor";
import CoursesCreated from "../../components/instructorProfileComponents/CoursesCreated";
import ProfileLayout from "../../components/ProfileLayout";

export default function InstrucructorProfile() {
  return (
    <>
      <ProfileLayout>
        <div className="sm:ml-[12%]  bg-[#eeeeee]">
          <InstructorHero />
          <AboutInstructor />
          <CoursesCreated />
        </div>
      </ProfileLayout>
    </>
  );
}
