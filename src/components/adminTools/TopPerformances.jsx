import React from "react";
import CourseTile from "./CourseTile";
import CourseLoader from "./CourseLoader";
import DataErrMsg from "../DataErrMsg";

const TopPerformances = ({ isLoading, data, error }) => {
  return (
    <div className="bg-shadow mt-20 rounded-md p-5 flex-1">
      <h2 className="font-bold text-xl mb-1">Top Performances</h2>
      <p>See best selling courses performances</p>
      <div className="h-[550px] overflow-scroll my-4">
        <div className=" flex flex-col gap-4">
          {isLoading ? (
            <CourseLoader />
          ) : error ? (
            <DataErrMsg />
          ) : data?.length === 0 ? (
            <p className="mb-5 font-semibold text-sm">No courses available</p>
          ) : (
            data
              ?.map((item) => ({
                id: item?.id,
                courseImg: item?.course_image[0].path,
                title: item?.course_title,
                text: item?.totalRegisteredByStudent,
              }))
              .sort((a, b) => b.text - a.text)
              .map((i, index) => (
                <div key={index} className="bg-gray1 rounded-lg p-3">
                  <CourseTile
                    courseImg={i?.courseImg}
                    title={i?.title}
                    text={i?.text}
                    bg={"gray1"}
                  />
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TopPerformances;
