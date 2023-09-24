import React from "react";
import illustration1 from "../../assets/studentDashboard/illustration.png";
import illustration2 from "../../assets/studentDashboard/illustrations.png";
import illustration3 from "../../assets/studentDashboard/illustration 3.png";
import chart from "../../assets/studentDashboard/chart.png";
import Course from "../../components/studentDashboard/Course";
import { FaArrowAltCircleRight, FaChartBar } from "react-icons/fa";
import Certificate from "../../components/studentDashboard/Certificate";
import CompletedCourses from "../../components/studentDashboard/completedCourses";

export default function Dashboard() {
  return (
    <div className="shawdow">
        <div className="bg-white shawdow p-5">hghgjh</div>
    <main className="px-10 bg-zinc-100 pt-2">
      <div className="border border-lightGrey ">
        <section className="border-b border-b-gray border-t border-t-gray mb-2 shawdow ">
          <div className="flex flex-wrap items-center p-5 justify-between border-b border-b-gray">
            <h3 className="font-extrabold text-3xl text-grey">My Dashboard</h3>

            <img src={chart} className="ms-3" />
          </div>
        </section>
        <section className="grid sm:grid-cols-4 gap-6">
          <a href="/">
            <div className="flex flex-wrap items-center p-5 border border-lightGrey">
              <div className="w-32">
                <p className="me-5 font-sm text-deepGray">Ongoing Courses</p>
                <h3 className="text-xl font-bold mt-3">3</h3>
              </div>
              <img src={illustration3} className="w-20" />
            </div>
          </a>
          <a href="/">
            <div className="flex flex-wrap items-center p-5 border border-lightGrey">
              <div className="w-32">
                <p className="me-5 font-sm text-deepGray">Completed Courses</p>
                <h3 className="text-xl font-bold mt-3">9</h3>
              </div>
              <img src={illustration3} className="w-20" />
            </div>
          </a>
          <a href="/">
            <div className="flex flex-wrap items-center p-5 border border-lightGrey">
              <div className="w-32">
                <p className="me-5 font-sm text-deepGray">Total Time Learning</p>
                <h3 className="text-xl font-bold mt-3">4h 30mins</h3>
              </div>
              <img src={illustration3} className="w-20" />
            </div>
          </a>
          <a href="/">
            <div className="flex flex-wrap items-center p-5 border border-lightGrey">
              <div className="w-32">
                <p className="me-5 font-sm text-deepGray">Claimed Certificates</p>
                <h3 className="text-xl font-bold mt-3">5</h3>
              </div>
              <img src={illustration3} className="w-20" />
            </div>
          </a>
        </section>
        <section className="border-b border-b-gray border-t border-t-gray my-2 ">
          <div className="flex flex-wrap items-center p-5 justify-between border-b border-b-gray">
            <h3 className="font-bold text-[24px] text-grey">
              Ongoing courses (3)
            </h3>
            <div className="flex flex-wrap items-center">
              <p>See all</p>
              <FaArrowAltCircleRight className="ms-3" />
            </div>
          </div>
        </section>
        <div className="border-b border-b-gray border-t border-t-gray my-2 ">
          <div>
            <div className="flex flex-wrap items-center p-5 justify-between border-b border-b-gray">
              <h3 className="font-bold text-[24px] text-grey">
                Completed courses (9)
              </h3>
              <div className="flex flex-wrap items-center">
                <p>See all</p>
                <FaArrowAltCircleRight className="ms-3" />
              </div>
            </div>
            <section className="grid sm:grid-cols-4 gap-4 m-10">
              <CompletedCourses />
              <CompletedCourses />
              <CompletedCourses />
              <CompletedCourses />
            </section>
          </div>
        </div>
        <div className="border-b border-b-gray border-t border-t-gray my-2">
          <div>
            <div className="flex flex-wrap items-center p-5 justify-between border-b border-b-gray">
              <h3 className="font-bold text-[24px] text-grey">
                Recommended courses
              </h3>
              <div className="flex flex-wrap items-center">
                <p>See all</p>
                <FaArrowAltCircleRight className="ms-3" />
              </div>
            </div>
            <section className="grid sm:grid-cols-4 gap-4 m-10">
              <Course />
              <Course />
              <Course />
              <Course />
              <Course />
            </section>
          </div>
        </div>
        <section className="border-b border-b-gray border-t border-t-gray my-2 ">
          <div>
            <div className="flex flex-wrap items-center p-5 justify-between border-b border-b-gray">
              <h3 className="font-bold text-[24px] text-grey">
                Claimed certificates (5)
              </h3>
              <div className="flex flex-wrap items-center">
                <p>See all</p>
                <FaArrowAltCircleRight className="ms-3" />
              </div>
            </div>
          </div>
          <div className="px-20 grid sm:grid-cols-2 gap-2">
            <Certificate />
            <Certificate />
          </div>
        </section>
        <div className="border-b border-b-gray border-t border-t-gray ">
          <div>
            <div className="flex flex-wrap items-center p-5 justify-between border-b border-b-gray">
              <h3 className="font-bold text-[24px] text-grey">
                Similar courses
              </h3>
              <div className="flex flex-wrap items-center">
                <p>See all</p>
                <FaArrowAltCircleRight className="ms-3" />
              </div>
            </div>
            <section className="grid sm:grid-cols-4 gap-4 m-10">
              <Course />
              <Course />
              <Course />
              <Course />
              <Course />
            </section>
          </div>
        </div>
        <div className="border-b border-b-gray border-t border-t-gray my-2">
          <div>
            <div className="flex flex-wrap items-center p-5 justify-between border-b border-b-gray">
              <h3 className="font-bold text-[24px] text-grey">
                Recommended courses
              </h3>
              <div className="flex flex-wrap items-center">
                <p>See all</p>
                <FaArrowAltCircleRight className="ms-3" />
              </div>
            </div>
            <section className="grid sm:grid-cols-4 gap-4 m-10">
              <Course />
              <Course />
              <Course />
              <Course />
              <Course />
            </section>
          </div>
        </div>
        <div className="border-b border-b-gray border-t border-t-gray my-2">
          <div>
            <div className="flex flex-wrap items-center p-5 justify-between border-b border-b-gray">
              <h3 className="font-bold text-[24px] text-grey">
                Recently viewed courses
              </h3>
              <div className="flex flex-wrap items-center">
                <p>See all</p>
                <FaArrowAltCircleRight className="ms-3" />
              </div>
            </div>
            <section className="grid sm:grid-cols-4 gap-4 m-10">
              <Course />
              <Course />
              <Course />
              <Course />
              <Course />
            </section>
          </div>
        </div>

        <section className="grid sm:grid-cols-3 font-bold text-xl mb-7">
          <a href="/">
            <div className="flex flex-wrap items-center p-5 border border-lightGrey border-b">
              <p className="me-5 text-grey font-sm">Go to Homepage</p>
              <img src={illustration1} className="w-20" />
            </div>
          </a>
          <a href="/">
            <div className="flex flex-wrap items-center p-5 border border-lightGrey">
              <p className="me-5 text-grey font-sm">Go to courses</p>
              <img src={illustration2} className="w-20" />
            </div>
          </a>
          <a href="/">
            <div className="flex flex-wrap items-center p-5 border border-lightGrey">
              <p className="me-5 text-grey font-sm">Go to forum</p>
              <img src={illustration3} className="w-20" />
            </div>
          </a>
        </section>
      </div>
    </main>
    </div>
  );
}
