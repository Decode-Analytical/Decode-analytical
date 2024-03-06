import React from "react";
import ProfileLayout from "../../../components/ProfileLayout";
import Button from "../../../utils/Button";
import { IoIosAdd } from "react-icons/io";
import StatsCard from "../../../components/AdminDashboard/StatsCard";
import CourseBanner from "../../../components/adminCourses/CourseBanner";
import { CompletedCourses, OngoingCourses } from "../../../utils/Constants";

const AdminCourses = () => {
  return (
    <ProfileLayout title={"Courses"}>
      <div className="flex justify-end">
        <Button leftIcon={<IoIosAdd className="font-extrabold text-xl" />}>
          New Course
        </Button>
      </div>
      <div className="flex gap-20 mt-[65px] ">
        <StatsCard title={"Courses Created"} count={3} />
        <StatsCard title={"Daily Course Visit"} count={1002} />
      </div>
      <div className="my-[45px]">
        <h2 className="font-bold text-2xl">Ongoing</h2>
        {OngoingCourses.map(({ id, courseImg, title, progress, level }) => (
          <CourseBanner
            title={title}
            key={id}
            img={courseImg}
            progress={progress}
            level={level}
            ongoing
          />
        ))}
      </div>
      <div>
        <h2 className="font-bold text-2xl">Completed</h2>
        {CompletedCourses.map(({ id, courseImg, title, progress, level }) => (
          <CourseBanner
            title={title}
            key={id}
            img={courseImg}
            progress={progress}
            level={level}
            completed
          />
        ))}
      </div>
    </ProfileLayout>
  );
};

export default AdminCourses;
