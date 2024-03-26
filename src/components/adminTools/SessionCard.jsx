import React from "react";
import CourseLoader from "./CourseLoader";
import ViewDetailsLink from "../ViewDetails";
import courseImg from "../../assets/adminDashboardImages/courseimg1.svg";

const SessionCard = ({
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
        <h2 className="font-bold text-lg md:text-xl mb-1">{heading}</h2>
        <select className="w-[110px] rounded-lg bg-white text-sm" name="" id="">
          <option value="weekly">This Week</option>
          <option value="monthly">This Month</option>
        </select>
      </div>
      <p className="">{sub}</p>
      <div className="h-[250px] overflow-scroll my-4">
        <div className="flex flex-col gap-3">
          <p className="mb-5 font-semibold text-sm">{courseData?.createdAt}</p>
          {isLoading ? (
            <CourseLoader />
          ) : error ? (
            <p className="mb-5 font-semibold text-sm">Error fetching data</p>
          ) : courseData?.length === 0 ? (
            <p className="mb-5 font-semibold text-sm">No courses available</p>
          ) : (
            courseData?.map((item, index) => (
              <div key={index} className="flex items-start gap-x-3">
                <div>
                  <img
                    src={courseImg}
                    className="w-[83px] h-[63px] bg-gray1 rounded-lg object-cover"
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-lg">{item?.courseName}</h2>
                  <p className="text-sm font-light">
                    {item?.totalRegisteredByStudent || 0} Students joined
                  </p>
                </div>
              </div>
              // />
            ))
          )}
        </div>
      </div>
      <ViewDetailsLink to={to} viewDetails={viewDetails} />
    </div>
  );
};

export default SessionCard;
