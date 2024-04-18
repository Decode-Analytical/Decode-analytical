import React, { useEffect, useMemo, useState } from "react";
import ProfileLayout from "../../../components/layout/AdminProfileLayout";
import { LiaPenSolid } from "react-icons/lia";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareXTwitter, FaSquareFacebook } from "react-icons/fa6";
import {
  useFetchAdminCourses,
  useFetchReviews,
} from "../../../hooks/useFetchAdmin";
import ProgressBar from "../../../components/ProgressBar";
import { TbCellSignal5 } from "react-icons/tb";
import { IoMdTime } from "react-icons/io";
import StarRating from "../../../components/StarRating";

const AdminProfile = () => {
  const authUser = useMemo(() => {
    return JSON.parse(localStorage.getItem("user")).user;
  }, []);
  const [showAllCourses, setShowAllCourses] = useState(false);

  const { fetchData: fetchReviews, data: reviews } = useFetchReviews();
  const {
    fetchData: fetchCourses,
    data: courses,
    isLoading: coursesLoading,
    error: coursesError,
  } = useFetchAdminCourses();

  useEffect(() => {
    fetchReviews();
    fetchCourses();
  }, []);

  const reviewsLength = reviews?.reviews?.length;
  const coursesData = courses?.courses;

  console.log(coursesData);

  const displayCourses = showAllCourses
    ? coursesData
    : coursesData?.slice(0, 3);

  return (
    <ProfileLayout noShadow>
      <div className="h-[300px] bg-blue1 w-full grid place-items-center relative">
        <h3 className="text-center text-white font-semibold text-xl">
          DECODE ANALYTICS
        </h3>
        <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full absolute md:left-[40px] -bottom-10 md:-bottom-[80px]">
          {authUser?.picture[0]?.path ? (
            <img
              className="w-full h-full rounded-full"
              src={authUser?.picture[0]?.path}
            />
          ) : (
            <div className="flex justify-center items-center w-full h-full bg-gray-400 rounded-full">
              <IoPerson className="text-[30px] text-white1" />
            </div>
          )}
        </div>
        <LiaPenSolid className="absolute right-5 top-5 text-white text-2xl cursor-pointer" />
      </div>
      <div className="ml-[50px]">
        <div className="mt-[130px]">
          <p>Instructor</p>
          <h2 className="text-4xl font-semibold">{`${authUser?.firstName} ${authUser?.lastName}`}</h2>
        </div>
        <div className="flex gap-5 items-center mt-8">
          {authUser?.linkedinUrl && (
            <a
              href={authUser?.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="text-gray3 text-[24px]" />
            </a>
          )}
          {authUser?.twitter && (
            <a
              href={authUser?.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter className="text-gray3 text-[27px]" />
            </a>
          )}
          {authUser?.facebook && (
            <a
              href={authUser?.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareFacebook className="text-gray3 text-[27px]" />
            </a>
          )}
        </div>
      </div>
      <div className="bg-[#E6E7EE] w-full flex flex-col md:flex-row justify-between gap-16 py-9 px-16 my-[76px] border-y-2 border-gray-300">
        <div className="flex flex-col gap-3 items-center">
          <h3 className="font-semibold text-2xl text-center">Total Students</h3>
          <h3 className="font-semibold text-3xl">67,000</h3>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <h3 className="font-semibold text-2xl text-center">Total Courses</h3>
          <h3 className="font-semibold text-3xl">
            {" "}
            {authUser?.courses?.length || 0}
          </h3>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <h3 className="font-semibold text-2xl text-center">Total Reviews</h3>
          <h3 className="font-semibold text-3xl">{reviewsLength || 0}</h3>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-2xl">About me</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Mauris facilisis aliquam
          fringilla malesuada commodo nulla adipiscing vel. Et lacus eget
          pretium tristique porta suspendisse id. Viverra lectus egestas donec
          sed condimentum proin etiam at est. Tellus morbi pellentesque
          ullamcorper ac eu nisl habitant. Nunc velit libero sed iaculis sed
          tincidunt. Sit nec convallis neque consequat. Blandit etiam elementum
          hendrerit ut. Ipsum suscipit ipsum enim sed in eros tristique proin.
          Ultrices maecenas faucibus viverra commodo molestie elit. Lorem ipsum
          dolor sit amet consectetur. Mauris facilisis aliquam fringilla
          malesuada commodo nulla adipiscing vel. Et lacus eget pretium
          tristique porta suspendisse id. Viverra lectus egestas donec sed
          condimentum proin etiam at est. Tellus morbi pellentesque ullamcorper
          ac eu nisl habitant. Nunc velit libero sed iaculis sed tincidunt. Sit
          nec convallis neque consequat. Blandit etiam elementum hendrerit ut.
          Ipsum suscipit ipsum enim sed in eros tristique proin. Ultrices
          maecenas faucibus viverra commodo molestie elit. Lorem ipsum dolor sit
          amet consectetur. Mauris facilisis aliquam fringilla malesuada commodo
          nulla adipiscing vel. Et lacus eget pretium tristique porta
          suspendisse id. Viverra lectus egestas donec sed condimentum proin
          etiam at est. Tellus morbi pellentesque elit.
        </p>
      </div>
      <div className="bg-shadow mt-[80px] h-full">
        <div className="flex flex-col md:flex-row gap-y-4 justify-between w-[95%] items-center mx-auto py-6 border-b-2 mb-10">
          <h2 className="font-semibold text-3xl">
            My Courses ({coursesData?.length})
          </h2>
          <button
            type="button"
            className="text-xl"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            {showAllCourses ? "Hide all" : "See all"}
          </button>
        </div>
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 justify-items-center w-full mx-auto mb-16">
            {displayCourses?.map((course, index) => (
              <div
                key={index}
                className="max-w-[300px] bg-white1 shadow-lg p-4 rounded-lg"
              >
                <img
                  src={course?.course_image[0]?.path}
                  className="w-full rounded-xl h-[200px] object-cover"
                />
                <div>
                  <h2 className="font-semibold text-xl my-3">
                    {course?.course_title}
                  </h2>
                  <ProgressBar progress={100} completion />

                  <span className="flex items-center gap-2 mt-5 mb-5">
                    {" "}
                    <div className="w-9 h-9 rounded-full">
                      {authUser?.picture[0]?.path ? (
                        <img
                          className="w-full h-full rounded-full"
                          src={authUser?.picture[0]?.path}
                        />
                      ) : (
                        <div className="flex justify-center items-center w-full h-full bg-gray-400 rounded-full">
                          <IoPerson className="text-lg text-white1" />
                        </div>
                      )}
                    </div>
                    <p className="text-gray-500">
                      by {`${authUser?.firstName} ${authUser?.lastName}`}
                    </p>
                  </span>
                </div>
                <StarRating rating={4} verified={124} />
                <span className="flex gap-4 items-center mt-4">
                  <span className="flex gap-1 items-center ">
                    <IoMdTime />
                    <span>2h 32m</span>
                  </span>
                  <span className="flex gap-2 items-center">
                    <TbCellSignal5 />
                    <span>intermediate</span>
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default AdminProfile;
