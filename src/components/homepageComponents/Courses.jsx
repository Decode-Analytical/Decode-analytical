import React, { useState, useEffect } from "react";
import Coursecomponent from "./Coursecomponent";
import { Course } from "./styles";
import Ellipse from "../../assets/courses Images/Ellipse.png";
import { MdStarRate, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMdTime, IoIosStarOutline } from "react-icons/io";
import level from "../../assets/courses Images/level.png";
import { Link } from "react-router-dom";
const API_URL = "https://decode-mnjh.onrender.com/api/course/getCoursesDisplay";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [paidCourses, setPaidCourses] = useState([]);
  const [freeCourses, setFreeCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const data = await response.json();
          setCourses(data.courses);
        } else {
          console.error("Failed to fetch courses:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    // Filter paid courses
    const paid = courses.filter((course) => course.isPrice_course > 0);
    setPaidCourses(paid);

    // Filter free courses
    const free = courses.filter((course) => course.isPrice_course === 0);
    setFreeCourses(free);
  }, [courses]);

  return (
    <Course>
      <div className="container">
        {freeCourses.slice(0, 3).map((course) => {
          const {
            course_title,
            course_description,
            course_image: {
              0: { path },
            },
            isPrice_course,
            isPaid_course,
            _id,
            modules,
          } = course;
          return (
            <div className="card" key={_id}>
              <img src={path || heroImage} className="card__image" />
              <h1 className="card__heading">
                {course_title || "Early Design and its Principles"}
              </h1>
              <figcaption className="card__figure">
                <img src={Ellipse} className="card__figure--img" />
                <h3 className="card__figure--name">
                  <span>By:</span> James Cameroon
                </h3>
              </figcaption>
              <div className="card__star">
                <div className="stars">
                  <MdStarRate className="star" />
                  <MdStarRate className="star" />
                  <MdStarRate className="star" />
                  <MdStarRate className="star" />
                  <IoIosStarOutline className="empty-star" />
                </div>
                <p>rating----</p>
              </div>
              <section className="card__date">
                <div className="card__date--time">
                  <IoMdTime />
                  <p>2h 3m</p>
                </div>
                <div className="card__date--time">
                  <img src={level}></img>
                  <p>Intermidiate</p>
                </div>
              </section>
              <section className="card__btns">
                <Link
                  to={`/courseDetailPage/PremiumCourses/${_id}`}
                  className="enroll-btn"
                >
                  view Courses &rarr;
                </Link>
                <p>Free</p>
                {/* <button className="enroll-btn">View Course</button> */}
              </section>
            </div>
          );
        })}
        {paidCourses.slice(0, 3).map((course) => {
          const {
            course_title,
            course_description,
            course_image: {
              0: { path },
            },
            isPrice_course,
            isPaid_course,
            _id,
            modules,
          } = course;
          return (
            <div className="card" key={_id}>
              <img src={path || heroImage} className="card__image" />
              <h1 className="card__heading">
                {course_title || "Early Design and its Principles"}
              </h1>
              <figcaption className="card__figure">
                <img src={Ellipse} className="card__figure--img" />
                <h3 className="card__figure--name">
                  <span>By:</span> James Cameroon
                </h3>
              </figcaption>
              <div className="card__star">
                <div className="stars">
                  <MdStarRate className="star" />
                  <MdStarRate className="star" />
                  <MdStarRate className="star" />
                  <MdStarRate className="star" />
                  <IoIosStarOutline className="empty-star" />
                </div>
                <p>rating----</p>
              </div>
              <section className="card__date">
                <div className="card__date--time">
                  <IoMdTime />
                  <p>2h 3m</p>
                </div>
                <div className="card__date--time">
                  <img src={level}></img>
                  <p>Intermidiate</p>
                </div>
              </section>
              <section className="card__btns">
                {/* <p>{isPrice_course  || "500"} NGN</p> */}
                <Link
                  to={`/courseDetailPage/PremiumCourses/${_id}`}
                  className="enroll-btn-2"
                >
                  {isPrice_course === 0 ? "Free" : ` ${isPrice_course} NGN`}
                </Link>
                <strike>
                  <p>45000 NGN</p>
                </strike>

                {/* <button className='enroll-btn'> Enroll for free</button> */}
              </section>
            </div>
          );
        })}
      </div>
      <div className="LinkToCoursePage">
        <Link className="link" to="/courses">
          View more courses
        </Link>
      </div>
    </Course>
  );
}
