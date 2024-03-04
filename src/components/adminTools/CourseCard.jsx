import React from "react";
import DetailsCard from "./DetailsCard";
import CourseTile from "./CourseTile";
import CourseLoader from "./CourseLoader";

const CourseCard = ({ heading, sub, to, courseData, isLoading }) => {
  return (
    <DetailsCard heading={heading} sub={sub} to={to} minW={"419"}>
      <div className="h-[250px] overflow-scroll my-4">
        <div className="flex flex-col gap-3">
          <p className="mb-5 font-semibold text-sm">{courseData.createdAt}</p>
          {isLoading ? (
            <CourseLoader />
          ) : courseData?.length === 0 ? (
            <p className="mb-5 font-semibold text-sm">No courses available</p>
          ) : (
            courseData?.map((item, index) => (
              <CourseTile
                key={index}
                courseImg={item.course_image[0].path}
                title={item.course_title}
                text={item.totalRegisteredByStudent}
              />
            ))
          )}
        </div>
      </div>
    </DetailsCard>
  );
};

export default CourseCard;
