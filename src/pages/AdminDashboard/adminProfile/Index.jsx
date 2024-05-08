import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsLinkedin } from "react-icons/bs";
import {
  FaSquareFacebook,
  FaSquareGithub,
  FaSquareXTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { LiaPenSolid } from "react-icons/lia";
import { TbCameraPlus, TbCellSignal5 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Button } from "../../../components/Button";
import ProfileImageEditor from "../../../components/ProfileImageEditor";
import ProgressBar from "../../../components/ProgressBar";
import StarRating from "../../../components/StarRating";
import UpdateAdminProfile from "../../../components/adminProfile/UpdateAdminProfile";
import ProfileLayout from "../../../components/layout/AdminProfileLayout";
import {
  useFetchAdminCourses,
  useFetchAdminProfile,
  useFetchRegStudents,
  useFetchReviews,
} from "../../../hooks/useFetchAdmin";
import { profileUpdateSchema } from "../../../schema/profile";
import urls from "../../../utils/Url";
import { validate } from "../../../utils/functn";
import { ErrorToast, SuccessToast } from "../../../utils/toast";
// import Avatar from "../../../components/Avatar";

const AdminProfile = () => {
  const [showAllCourses, setShowAllCourses] = useState(false);

  const [profileImagePopup, setProfileImagePopup] = useState(false);
  // Profile update popup
  const [profileUpdatepopup, setProfileUpdatepopup] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // loading state for the profile update
  const [loading, setLoading] = useState(false);

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Image change handler
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

    // Preview the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedImage);
  };

  // profile update popup handler
  const handleProfileUpdatePopup = () => {
    setProfileUpdatepopup(!profileUpdatepopup);
  };
  // profile image popup handler
  const handleProfileImagePopup = () => {
    setProfileImagePopup(!profileImagePopup);
  };

  const { fetchData: fetchReviews, data: reviews } = useFetchReviews();
  const {
    fetchData: fetchRegStudents,
    data: regStudents,
    isLoading: regStudentsLoading,
    // error: regStudentsError,
  } = useFetchRegStudents();
  const {
    fetchData: fetchAdminProfile,
    data: adminProfile,
    isLoading,
  } = useFetchAdminProfile();
  const { fetchData: fetchCourses, data: courses } = useFetchAdminCourses();

  useEffect(() => {
    fetchReviews();
    fetchCourses();
    fetchRegStudents();
    fetchAdminProfile();
  }, []);

  const reviewsLength = reviews?.reviews?.length;
  const coursesData = courses?.courses;
  const totalStudentsCount = regStudents?.count;
  const adminProfileData = adminProfile?.user;

  const currentProfileImg = adminProfileData?.picture[0]?.path;

  const displayCourses = showAllCourses
    ? coursesData
    : coursesData?.slice(0, 3);

  useEffect(() => {
    if (adminProfileData) {
      setValue("firstName", adminProfileData?.firstName);
      setValue("lastName", adminProfileData?.lastName);
      setValue("linkedinUrl", adminProfileData?.linkedinUrl);
      setValue("facebook", adminProfileData?.facebook);
      setValue("twitter", adminProfileData?.twitter);
      setValue("youtubeUrl", adminProfileData?.youtubeUrl);
      setValue("githubUrl", adminProfileData?.githubUrl);
      setValue("aboutMe", adminProfileData?.aboutMe);
    }
  }, [adminProfileData]);

  const formHook = useForm({
    resolver: (data) => validate(profileUpdateSchema, data),
    defaultValues: {
      firstName: adminProfileData?.firstName || "",
      lastName: adminProfileData?.lastName || "",
      linkedinUrl: adminProfileData?.linkedinUrl || "",
      facebook: adminProfileData?.facebook || "",
      twitter: adminProfileData?.twitter || "",
      youtubeUrl: adminProfileData?.youtubeUrl || "",
      githubUrl: adminProfileData?.githubUrl || "",
      aboutMe: adminProfileData?.aboutMe || "",
    },
  });
  const { register, handleSubmit, setValue } = formHook;

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const token = JSON.parse(localStorage.getItem("user")).token;
      if (!token) {
        throw new Error("Token not found");
      }
      const response = await Axios.put(urls.adminProfileUpdate, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response?.status === 200 || response?.status === 201) {
        SuccessToast("Profile updated successfully");
        handleProfileUpdatePopup();
        fetchAdminProfile();
        window.location.reload();
      }
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async () => {
    setLoading(true);
    const token = JSON.parse(localStorage.getItem("user")).token;
    const formData = new FormData();
    formData.append("picture", image);

    try {
      // if (!token) {
      //   throw new Error("Token not found");
      // }
      const response = await Axios.put(urls.adminImageUpdate, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response?.status === 200 || response?.status === 201) {
        SuccessToast("Profile image updated successfully");
        fetchAdminProfile();
        window.location.reload();
      }
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  // if (!adminProfileData) {
  //   return null;
  // }

  return (
    <ProfileLayout noShadow isLoading={isLoading || regStudentsLoading}>
      {/* Profile Image Update Modal */}
      {profileImagePopup && (
        <ProfileImageEditor
          onClose={handleProfileImagePopup}
          profileImg={currentProfileImg}
          imagePreview={imagePreview}
          uploadBtn={handleImageUpload}
          onChange={handleImageChange}
        />
      )}
      {/* Profile Update Modal */}
      {profileUpdatepopup && (
        <UpdateAdminProfile
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          loading={loading}
          onClose={handleProfileUpdatePopup}
        />
      )}
      <div className="h-[300px] bg-blue1 w-full grid place-items-center relative rounded-xl">
        <h3 className="text-center text-white font-semibold text-xl">
          DECODE ANALYTICS
        </h3>
        <div
          className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full absolute md:left-[40px] -bottom-10 md:-bottom-[80px] cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {adminProfileData?.picture[0]?.path ? (
            <img
              className="w-full h-full rounded-full object-cover"
              src={adminProfileData?.picture[0]?.path}
            />
          ) : (
            // <Avatar
            //   name={`${adminProfileData?.firstName} ${adminProfileData?.lastName}`}
            // />
            <div className="flex justify-center items-center w-full h-full bg-gray-400 rounded-full">
              <IoPerson className="text-[200px] text-white1" />
            </div>
          )}
          {/* Overlay */}
          {isHovered && (
            <div
              className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-25 rounded-full"
              onClick={handleProfileImagePopup}
            >
              <TbCameraPlus className="text-white text-4xl" />
            </div>
          )}
        </div>
      </div>
      <div className="ml-[50px]">
        <div className="mt-[130px]">
          <p>Instructor</p>
          <div className="flex w-full justify-between">
            <h2 className="text-4xl font-semibold">{`${adminProfileData?.firstName} ${adminProfileData?.lastName}`}</h2>

            <Button
              onClick={handleProfileUpdatePopup}
              leftIcon={<LiaPenSolid />}
              className="bg-transparent border-[##BFBFBF] hover:bg-blue1 hover:text-white1 font-semibold border-2"
              textColor="black"
            >
              Edit Profile
            </Button>
          </div>
        </div>
        <div className="flex gap-5 items-center mt-8">
          {adminProfileData?.linkedinUrl && (
            <a
              href={`https://${adminProfileData?.linkedinUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="text-gray3 text-[24px]" />
            </a>
          )}
          {adminProfileData?.twitter && (
            <a
              href={`https://${adminProfileData?.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter className="text-gray3 text-[27px]" />
            </a>
          )}
          {adminProfileData?.facebook && (
            <a
              href={`https://${adminProfileData?.facebook}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareFacebook className="text-gray3 text-[27px]" />
            </a>
          )}
          {adminProfileData?.githubUrl && (
            <a
              href={`https://${adminProfileData?.githubUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareGithub className="text-gray3 text-[27px]" />
            </a>
          )}
          {adminProfileData?.youtubeUrl && (
            <a
              href={`https://${adminProfileData?.youtubeUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareYoutube className="text-gray3 text-[27px]" />
            </a>
          )}
        </div>
      </div>
      <div className="bg-[#E6E7EE] w-full flex flex-col md:flex-row justify-between gap-16 py-9 px-16 my-[76px] border-y-2 border-gray-300 rounded-xl">
        <div className="flex flex-col gap-3 items-center">
          <h3 className="font-semibold text-2xl text-center">Total Students</h3>
          <h3 className="font-semibold text-3xl">{totalStudentsCount || 0}</h3>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <h3 className="font-semibold text-2xl text-center">Total Courses</h3>
          <h3 className="font-semibold text-3xl">
            {" "}
            {coursesData?.length || 0}
          </h3>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <h3 className="font-semibold text-2xl text-center">Total Reviews</h3>
          <h3 className="font-semibold text-3xl">{reviewsLength || 0}</h3>
        </div>
      </div>
      <div className="bg-shadow p-5 rounded-xl">
        <div className="flex justify-between w-full mb-3">
          <h3 className="font-semibold text-2xl">About me</h3>
        </div>
        <p>{adminProfileData?.aboutMe || "Tell us about yourself"}</p>
      </div>
      <div className="bg-shadow mt-[80px] h-full rounded-xl">
        <div className="flex flex-col md:flex-row gap-y-4 justify-between w-[95%] items-center mx-auto py-6 border-b-2 mb-10">
          <h2 className="font-semibold text-3xl">
            My Courses ({coursesData?.length})
          </h2>
          <button
            type="button"
            className="text-xl flex gap-1 items-center"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            <p>{showAllCourses ? "Hide all" : "See all"}</p>
            {showAllCourses ? (
              <GoChevronDown className="text-2xl" />
            ) : (
              <GoChevronRight className="text-2xl" />
            )}
          </button>
        </div>
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-10 justify-items-center w-full mx-auto mb-16">
            {displayCourses?.map((course, index) => (
              <div
                key={index}
                className="bg-white1 shadow-lg p-4 rounded-lg flex-1"
              >
                <img
                  src={course?.course_image[0]?.path}
                  className="w-full rounded-xl h-[200px] object-cover"
                />

                <div>
                  <h2 className="font-semibold text-xl my-3">
                    {course?.course_title}
                  </h2>
                  <ProgressBar
                    progress={course?.isUploadedCompleted ? 100 : 50}
                    completion
                  />

                  <span className="flex items-center gap-2 mt-5 mb-5">
                    {" "}
                    <div className="w-9 h-9 rounded-full">
                      <Link to="/admin-dashboard/profile">
                        {adminProfileData?.picture[0]?.path ? (
                          <img
                            className="w-full h-full rounded-full object-cover"
                            src={adminProfileData?.picture[0]?.path}
                          />
                        ) : (
                          <div className="flex justify-center items-center w-full h-full bg-gray-400 rounded-full">
                            <IoPerson className="text-lg text-white1" />
                          </div>
                        )}
                      </Link>
                    </div>
                    <p className="text-gray-500">
                      by{" "}
                      {`${adminProfileData?.firstName} ${adminProfileData?.lastName}`}
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
