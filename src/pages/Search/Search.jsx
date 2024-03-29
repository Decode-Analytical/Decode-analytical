import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import CoursesCard from "../../components/CourseHero/CoursesCard";
import CourseHero from "../../components/CourseHero/Coursehero";

export default function Search() {
    let { term } = useParams();
    let location = useLocation()
    let query = new URLSearchParams(location.search)
    let q = query.get('q')
    console.log(term)
    const [courses, setCourse] = useState([])
    useEffect(() => {
        const res = async () => {
        try {
            const response = await fetch(`https://decode-mnjh.onrender.com/api/course/search/${q}`, {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
                }
            })
            let data = await response.json()
            console.log("Courses: ", data)
            if(data.course) {
                setCourse(data.course)
            }
        } catch(e) {
            console.error(e)
        }
    }
    res()
    }, []);
    return (
        <>
       <CourseHero/>
      {courses.length <= 0 ? (
        <div className="text-center font-montserrat font-bold mt-[25vh] text-3xl h-[50vh]">
          <h3>No Results Found</h3>
        </div>
      ):(
        <div>
      <h5 className="p-[2rem] text-right">
          Showing results for: <span className="font-bold">{q}</span>
        </h5>
        <h3 className="px-5 font-bold text-2xl">{`${courses.length} Course(s) Found`}</h3>
        <div className="mx-auto items-center grid grid-cols-1 pt-20 pb-14 overflow-hidden md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-center">
      {courses.map((details, index) => { // Use the 'courses' state here
            return <CoursesCard key={index + 1} {...details} />;
          })}
          <br />
          <br />
        </div>
        </div>
      )}
        </>
        
    )
        }