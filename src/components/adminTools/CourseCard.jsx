import React from "react";
import CourseTile from "./CourseTile";
import CourseLoader from "./CourseLoader";
import ViewDetailsLink from "../ViewDetails";

const CourseCard = ({
  heading,
  sub,
  to,
  courseData,
  isLoading,
  error,
  viewDetails,
  customClass,
}) => {
  return (
    <div className={`bg-shadow rounded-md sm:w-fit flex-1 p-5  ${customClass}`}>
      <div className="flex justify-between gap-4">
        <h2 className="font-bold text-xl mb-1">{heading}</h2>
        <select className="w-[110px] rounded-lg bg-white text-sm" name="" id="">
          <option value="weekly">This Week</option>
          <option value="monthly">This Month</option>
        </select>
      </div>
      <p className="">{sub}</p>
      <div className="h-[250px] overflow-scroll my-4">
        <div className="flex flex-col gap-3">
          <p className="mb-5 font-semibold text-sm">{courseData.createdAt}</p>
          {isLoading ? (
            <CourseLoader />
          ) : error ? (
            <p className="mb-5 font-semibold text-sm">Error fetching data</p>
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
      <ViewDetailsLink to={to} viewDetails={viewDetails} />
    </div>
  );
};

export default CourseCard;
