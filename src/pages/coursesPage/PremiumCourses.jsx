import React from "react";
import PremiumComponents from "../../components/coursesComponents/premium/PremiumComponents";
import CourseDisplay from "../../components/coursesComponents/premium/courseDisplay";
import Freecourses from "../../components/coursesComponents/premium/Freecourses";

export default function premiumCourses() {
  return (
    <>
      <PremiumComponents />
      {/* <CourseDisplay /> */}
      <Freecourses/>
    </>
  );
}
