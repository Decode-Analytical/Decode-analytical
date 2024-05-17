// import React from 'react'

// import PremiumHero from '../../components/coursesComponents/premium/PremiumHero'
// import CourseOverview from '../../components/coursesComponents/premium/CourseOverview'
// import WhatToLearn from '../../components/coursesComponents/premium/WhatToLearn'
// import AlsoLike from '../../components/coursesComponents/premium/AlsoLike'

// import { useLocation } from 'react-router-dom';

// export default function premiumCourses() {
//   const location = useLocation();
//   // const { course_title, course_description, course_image } = location.state;
//   const courseData = location.state;
//   return (
//     <>
//         <PremiumHero
//          course_title={courseData.course_title}
//          course_image={courseData.course_image}
//          isPaid_course={courseData.isPaid_course}
//          isPrice_course={courseData.isPrice_course}
//          />

//         <CourseOverview
//           course_description={courseData.course_description}
//           modules= {courseData.modules || []}
//         />

//         <WhatToLearn />
//         <AlsoLike />
//     </>
//   )
// }

// CourseDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Content, Header, Wrapper } from "./styles";
import icon1 from "./icon1.png";
import moduleImg from "./icon1_black.png";
import icon2 from "./icon2.png";
import icon5 from "./icon5.png";

import { BsFillPeopleFill, BsPerson } from "react-icons/bs";
import { IoMdTime, IoIosStar } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import image from "./cardImg.png";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Course } from "../../components/homepageComponents/styles";
import { AiFillPlayCircle } from "react-icons/ai";

import Footer from "../../components/footer/index";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGI1NmVmMzUxZTgzNGM1NmI4ZTg1MDkiLCJpYXQiOjE3MTU2MDk0ODUsImV4cCI6MTcxNTY5NTg4NX0.h_QWfMvfjZ8Gn8J98Z7ggiH_zkl6PNmIIftcdo0bvUs";
const API_URL = "https://decode-mnjh.onrender.com/api/course/getCoursesById/";

function CourseDetail() {
  const [course, setCourse] = useState(null);
  const [module, setModule] = useState([]);
  const [paragraphVisibility, setParagraphVisibility] = useState([]);
  const { _id } = useParams();

  const [isVisible, setIsVisible] = useState(true);

  // Function to toggle visibility of a paragraph
  const toggleParagraphVisibility = (index) => {
    setParagraphVisibility((prevState) => {
      const updatedVisibility = [...prevState];
      updatedVisibility[index] = !updatedVisibility[index];
      return updatedVisibility;
    });
  };

  useEffect(() => {
    const fetchCourseById = async () => {
      try {
        const response = await fetch(`${API_URL}${_id}`);

        if (response.ok) {
          const data = await response.json();
          console.log(data.course);
          setCourse(data.course);
          setModule(data.course.modules);
        } else {
          console.error("Failed to fetch courses:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourseById();
  }, [_id]);

  if (!course) {
    return <div>Loading...</div>;
  }
  const {
    course_title,
    course_description,
    course_image: {
      0: { path },
    },
    skill_level,
    isPrice_course,
    isPaid_course,
    creator_name,
    totalRegisteredByStudent,
    skills_and_knowledge_you_will_gain,
    what_you_will_learn,
    tools_and_technologies_you_will_use,
    modules,
  } = course;

  return (
    <Wrapper>
      <Header>
        <div className="header">
          <div className="header_txt">
            <h1 className="heading">{course_title || "UI/UX Design"}</h1>
          </div>
          <div className="header_grid">
            <div className="box">
              <img src={icon1} className="box_icon" />
              {/* working on module maping */}
              <p className="txt"> {modules.length} Modules</p>
              {/* <p className="txt">{modules || "14 Modules"}</p> */}
            </div>
            <div className="box">
              <IoMdTime className="box_icon" />
              <p className="txt">12:50 hours to complete</p>
            </div>
            <div className="box">
              <img src={icon2} className="box_icon" />
              <p className="txt">Learn online at your own pace</p>
            </div>
            <div className="box">
              <img src={icon5} className="box_icon" />
              <p className="txt">Certificate of Completion</p>
            </div>
            <div className="box">
              <BsFillPeopleFill className="box_icon" />
              <p className="txt">
                {totalRegisteredByStudent || "248  "} Students enrolled
              </p>
            </div>
            <div className="box">
              <BsPerson className="box_icon" />
              <p className="txt">
                Created by {creator_name || " Mac Kingsley"}
              </p>
            </div>
          </div>
          <div className="stars">
            <IoIosStar className="star" />
            <IoIosStar className="star" />
            <IoIosStar className="star" />
            <IoIosStar className="star" />
            <IoStarOutline className="not-fill" />
            <p className="txt">4/5</p>
            <p className="txt">(124 verified ratings)</p>
          </div>
        </div>
        <div className="card">
          <img src={path || image} className="card__img" alt="image" />
          <h3 className="card__price">
            {isPrice_course === 0
              ? "Free"
              : ` #${isPrice_course} ` || "#35,000"}
          </h3>
          <p className="card__enroll">
            {totalRegisteredByStudent || "1,343,153  "}
            <span> already enrolled</span>
          </p>
          <button className="btn__enroll">Enroll Now</button>
          <div className="card_cart">
            <button className="cart">Add to Cart</button>
            <button className="like">
              <FaRegHeart className="icon" />
            </button>
          </div>
        </div>
      </Header>
      <Content>
        <div className="head">
          <h3 className="heading">Course Overview</h3>
          <p className="txt">
            {course_description ||
              "This course will teach you the fundamentals of UI design and how to create visually appealing user interfaces. You will study the fundamental tools, layouts, mockups, and techniques that product designers use to create remarkable interfaces."}
          </p>
        </div>
        <div className="requirement">
          <h4 className="head">Requirements</h4>
          <div className="listBox">
            {/* maping goes here...... */}
            <li className="list">
              A functional laptop with windows 8 OS and above.
            </li>
            <li className="list">A general design knowledge will be a plus.</li>
          </div>
        </div>
        <div className="whatToLearn">
          <h4 className="heading">What you'll learn</h4>
          <p>{what_you_will_learn}</p>
          {/* grid goes here...... */}
        </div>
        <div className="whatToLearn">
          <h4 className="heading">Knowledge & Skills You’ll gain</h4>
          <p>{skills_and_knowledge_you_will_gain}</p>
          {/* flex goes here...... */}
        </div>
        <div className="whatToLearn">
          <h4 className="heading">Tools you'll Use</h4>
          <p>{tools_and_technologies_you_will_use}</p>
          {/* flex goes here...... */}
        </div>

        {/* .......modules list goes here....... */}
        <div className="Module">
          <div className="head">
            <h4 className="heading">What you will cover in this course</h4>
            <div className="box">
              <img src={moduleImg} className="box_icon" />
              <p className="txt"> {modules.length} Modules</p>
            </div>
          </div>

          <div className="module__maping">
            {module &&
              module.map((detail, index) => {
                const { module_title, module_description } = detail;
                return (
                  <li className="modules" key={index}>
                    <div className="toggle">
                      <div className="toggle__icon">
                        <AiFillPlayCircle />
                        <p className="module__title">{module_title}</p>
                      </div>
                      {/* <p
                        style={{ display: isVisible ? "none" : "block" }}
                        className="module__describe"
                      >
                        {module_description}
                      </p> */}
                      {paragraphVisibility[index] && (
                        <p className="module__describe">{module_description}</p>
                      )}
                    </div>
                    <button onClick={() => toggleParagraphVisibility(index)}>
                      {paragraphVisibility[index] ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </button>
                  </li>
                );
              })}
          </div>
          {/* flex goes here...... */}
        </div>
      </Content>
      {/* also bought */}

      <Footer />
    </Wrapper>
  );
}

export default CourseDetail;
