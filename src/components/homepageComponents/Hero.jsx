import React from "react";
import AbsoluteComponent from "./AbsoluteComponent";
import Values from "../../pages/homepage/Values";
import Course from "./Course";
import { Header, Detail, Value } from "./styles";
import str from "./structur_icon.png";
import prof from "./profe_icon.png";
import skill from "./skill_icon.png";

import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <Header>
        <div className="txt">
          <h2 className="txt__big">
            Unlock Your Potential, Expand Your Horizons, and Excel in Tech
          </h2>
          <div className="txt__small">
            <p className="small">
              Decode LMS is a learning management system that gives you all the
              tools required in
            </p>
            <p className="small">
              your tech journey. It is comprised of the most resourceful
              materials one
            </p>
            <p className="small">
              would ever think of. Have the best experience from us.
            </p>
          </div>
        </div>
        <div className="txt__button">
          <Link to="/" className="Btn Btn__free">
            <p>Start for free &#x27F6;</p>
          </Link>
          <Link to="/" className="Btn Btn__creator">
            <p>Become a creator</p>
          </Link>
        </div>
      </Header>
      <Detail>
        <div className="container">
          <div className="box">
            <h4 className="head">12K</h4>
            <p className="txt">Total Enrolled</p>
          </div>
          <div className="box">
            <h4 className="head">20</h4>
            <p className="txt">Courses</p>
          </div>
          <div className="box">
            <h4 className="head">50</h4>
            <p className="txt">Instructor</p>
          </div>
          <div className="box">
            <h4 className="head">200K</h4>
            <p className="txt">Resources</p>
          </div>
        </div>
      </Detail>
      <Value>
        <div className="img"></div>
        <div className="box">
          <h5 className="head">OUR CORE LEARNING VALUES</h5>
          <div className="boxes">
            <div className="icons">
              <img src={str} />
            </div>
            <div className="txt">
              <p className="txt_head">Structured Learning Content</p>
              <p className="txt_p">
                Explore structured learning content on Decode Analytical's
                platform. Access organized courses, quizzes, and resources.
                Enjoy enhanced understanding, progress tracking, and flexible
                learning at your pace for meaningful knowledge acquisition.
              </p>
            </div>
          </div>
          <div className="boxes">
            <div className="icons">
              <img src={prof} />
            </div>
            <div className="txt">
              <p className="txt_head">Skills and Value Oriented</p>
              <p className="txt_p">
                Decode Analytical offers skills and value-oriented courses.
                Acquire practical expertise, align with industry demands, and
                enhance employability. Gain tangible skills for real-world
                success in a dynamic learning environment.
              </p>
            </div>
          </div>
          <div className="boxes">
            <div className="icons">
              <img src={skill} />
            </div>
            <div className="txt">
              <p className="txt_head">Professional And Quality Instructors</p>
              <p className="txt_p">
                Learn from professional instructors on Decode Analytical.
                Benefit from their expertise, industry insights, and quality
                teaching. Gain practical skills and knowledge for personal and
                professional growth.
              </p>
            </div>
          </div>
        </div>
      </Value>
    </>

    // <section className="bg-white">
    //   <div className="pt-14 pb-2  hero text-center text-white  relative ">
    //     <h2 className="font-bold text-[40px] bigText text-center text-white py-3 px-[10%]">
    //       Unlock Your Potential, Expand Your Horizons, and Excel in Tech (test)
    //     </h2>
    //     <p className="text-[20px] px-[20%] bigFont">
    //       Decode LMS is a learning management system that gives you all the
    //       tools required in your tech journey. It is comprised of the most
    //       resourceful materials one would ever think of. Have the best
    //       experience from us.
    //     </p>
    //     <div className="flex flex-wrap justify-center text-sm mt-12 mb-32 btnDiv">
    //       <Link to="/auth">
    //         <button className=" bg-yellow-400  p-3 rounded-sm me-3 mb-5 text-black hover:text-yellow-400  hover:bg-white">
    //           Start for free
    //         </button>
    //       </Link>
    //       <button className="border border-yellow-400 px-2  p-3 rounded-sm mb-5 text-yellow-400 hover:text-white hover:border-white bg-transparent">
    //         Become a creator
    //       </button>
    //     </div>
    //     <AbsoluteComponent />
    //   </div>

    //   <Values />
    // </section>
  );
}
