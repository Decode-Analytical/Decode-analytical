import React from "react";
import { useParams } from "react-router-dom";
import picOne from "../../assets/homepageImages/pics1.png";
import {
    FaAngleRight,
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import CompletedCourses from "../../components/homepageComponents/CompletedCourses";
import TextTruncate from "../../components/homepageComponents/TextTruncate";

export default function InstructorProfile() {
  const { id } = useParams();

  return (
    <main className="bg-zinc-300 text-[#5F5F5F] text-sm ">
      <div className="bg-zinc-200 w-[96%] center">
        <div className="flex flex-wrap items-center p-7 shadow-inner">
          <img src={picOne} width={100} />
          <div className=" ms-5">
            <p>Instructor</p>
            <p className="text-[#303030] text-lg">Victoria Olayode</p>
            <p className="text-[#040E53]">victoriaolayode@gmail.com</p>
            <p>Senior lecturer at Lagos state university</p>
            <p>Lagos state, Nigeria</p>
            <div className="flex flex-wrap text-black">
              <FaLinkedin className="mx-1" size={16} />
              <FaTwitterSquare className="mx-1" size={16} />
              <FaInstagramSquare className="mx-1" size={16} />
              <FaFacebook className="mx-1" size={16} />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between shadow-inner mb-3 py-5  px-7">
          <div>
            <p>Total Students</p>
            <p className="text-[#303030] text-base font-bold text-center">
              1,002,004
            </p>
          </div>
          <div>
            <p>Total Courses Created</p>
            <p className="text-[#303030] text-base font-bold text-center">
              2,004
            </p>
          </div>
          <div>
            <p>Total Reviews</p>
            <p className="text-[#303030] text-base font-bold text-center">
              1004
            </p>
          </div>
        </div>
        <div className="px-7 py-5 borde shadow-inner  my-4">
          <p className="font-bold text-[#303030 text-base">About Victoria</p>
          <TextTruncate
            text=" Lorem ipsum dolor sit amet consectetur. Mauris facilisis aliquam
            fringilla malesuada commodo nulla adipiscing vel. Et lacus eget
            pretium tristique porta suspendisse id. Viverra lectus egestas donec
            sed condimentum proin etiam at est. Tellus morbi pellentesque
            ullamcorper ac eu nisl habitant. Nunc velit libero sed iaculis sed
            tincidunt. Sit nec convallis neque consequat. Blandit etiam
            elementum hendrerit ut. Ipsum suscipit ipsum enim sed in eros
            tristique proin. Ultrices maecenas faucibus viverra commodo molestie
            elit. Lorem ipsum dolor sit amet consectetur. Mauris facilisis
            aliquam fringilla malesuada commodo nulla adipiscing vel. Et lacus
            eget pretium tristique porta suspendisse id. Viverra lectus egestas
            donec sed condimentum proin etiam at est. Tellus morbi pellentesque
            ullamcorper ac eu nisl habitant. Nunc velit libero sed iaculis sed
            tincidunt. Sit nec convallis neque consequat. Blandit etiam
            elementum hendrerit ut. Ipsum suscipit ipsum enim sed in eros"
            maxLength={500}
          />
        </div>
        <div className=" shadow-inner">
          <div>
            <div className="flex flex-wrap items-center p-5 justify-between shadow-sm my-2 ">
              <h3 className="font-bold text-xl text-grey">Courses Created</h3>
              <div className="flex flex-wrap items-center">
                <p>See all</p>
                <FaAngleRight className="ms-3" />
              </div>
            </div>
            <section className="grid sm:grid-cols-4 gap-4 m-10 pb-7">
              <CompletedCourses />
              <CompletedCourses />
              <CompletedCourses />
              <CompletedCourses />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
