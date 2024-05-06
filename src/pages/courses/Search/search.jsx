import React, {useEffect, useState} from 'react'
import { Wrapper } from './styles'
import heroImage from '../../../assets/Images/courseHero.JPG'
import { CiSearch } from "react-icons/ci";
import Spinner from '../../../components/Spinner';
import Ellipse from "../../../assets/courses Images/Ellipse.png";
import { MdStarRate, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMdTime , IoIosStarOutline } from "react-icons/io"
import level from "../../../assets/courses Images/level.png"
import Footer from '../../../components/footer/index';
import { useLocation } from 'react-router-dom';
const API_URL = 'https://decode-mnjh.onrender.com/api/course/viewAllCourses';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGI1NmVmMzUxZTgzNGM1NmI4ZTg1MDkiLCJpYXQiOjE3MTQ5Mjc2NjcsImV4cCI6MTcxNTAxNDA2N30.BHwAOR-HaV64ghCE6db2FGTBOnPmVoi2Rk5lyX8Sgis';
const API_SEARCH = 'https://decode-mnjh.onrender.com/api/course/search/'


const search = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextPage, setNextPage] = useState(null);
    const [courseTitle, setCouseTitle] = useState([])
    const [skilLevel, setSkillLevel] = useState([])
    const [searched, setSearched] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    
    // useEffect(() => {
    //   const fetchCourses = async () => {
    //     try {
    //       const response = await fetch(API_URL, {
    //         headers: {
    //           Authorization: `Bearer ${TOKEN}`
    //         }
    //       });
    //       if (response.ok) {
    //         const data = await response.json();
    //         setCourses(data.courses);
    //         const uniqueCourseTitles = [...new Set(data.courses.map(course => course.course_title
    //         ))];
    //         // const uniqueSkillsLevel = [...new Set(data.courses.map(course => course.course_title
    //         // ))];
            
    //         setCouseTitle(uniqueCourseTitles);
    //         setLoading(false);
           
    //       } else {
    //         console.error('Failed to fetch courses:', response.statusText);
    //       }
    //     } catch (error) {
    //       console.error('Error fetching courses:', error);
    //     }
    //   };
  
    //   fetchCourses();
    // }, []);
  
    
    // useEffect(() => {
      const searchBtn = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          const response = await fetch(`${API_SEARCH}${searchTerm}`, {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          });
          if (response.ok) {
            const data = await response.json();
            setCourses(data.course);
            // console.log(setCourse);
            // console.log(data);
          } else {
            console.error('Failed to fetch courses:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching courses:', error);
        }
        setLoading(false);
      };
      
       searchBtn();
    // }, [searchTerm]);
    
    useEffect(() => {
      // Retrieve the stored input value from local storage
      const storedValue = localStorage.getItem('searchValue');
      if (storedValue) {
        setSearchTerm(storedValue);
      }

    },);
  
  return (
    <>
    <Wrapper>
      <main className='main-search' >
        <img src={heroImage} className='courseImage'/>
        <div className='box'>
          <h1 className='box__head'>Courses</h1>
          <p className='box__txt'>Empower Your Digital Journey with Us</p>
          <div className='box__search'>
            <select name="course" id="cars">
              <option value="all">All</option>
              <option value="ui-ux">UI&UX</option>
              <option value="python">Pyton</option>
              <option value="backenk">Backend</option>
              <option value="python">Business Analyst</option>
              <option value="backenk">Frontend</option>
            </select>

          <input type='text' className='box__search-input' value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
               placeholder='Search all categories'></input>
          <button className='box__search-btn' type="submit"
              onClick={searchBtn}><CiSearch className='icon' />
              </button>
           
          </div>
          <section className='buttons'>
            <button>Free</button>
            <button>Paid</button>
            <button>All Levels</button>
          </section>
        </div>
      </main>
      <section className='container'>
        <div className='container__filter'>
            <h3 className='container__filter--heading' >Filter by</h3>
            <p className='txt'>Subject</p>
           
            <div className='check_box'>
                   <input type='checkbox' className='check'></input>    
                <label>
                    Artificial Intelligence
                </label>
                </div> 
                <div className='check_box'>
                   <input type='checkbox' className='check'></input>    
                <label>
                    Artificial Intelligence
                </label>
                </div> 
                <div className='check_box'>
                   <input type='checkbox' className='check'></input>    
                <label>
                    Artificial Intelligence
                </label>
                </div> 
                <div className='check_box'>
                   <input type='checkbox' className='check'></input>    
                <label>
                    Artificial Intelligence
                </label>
                </div> 
                <div className='check_box'>
                   <input type='checkbox' className='check'></input>    
                <label>
                    Artificial Intelligence
                </label>
                </div>   
              
        {/* <button className='btn_showMore'>show more</button> */}
        </div>
        <div className='container__result'>
       
        {courses.length === 0? (
        <div className="text-center font-montserrat font-bold mt-[25vh] text-3xl h-[50vh]">
          <h3>No Results Found</h3>
        </div>
      ): (courses.map((details, index) => { 
        const {course_title, 
          course_description, 
          course_image: {0:{path
          }}, 
          isPrice_course, 
          isPaid_course, 
          _id, 
          modules } = details

           return (
            
          
            <div className='card' key={index}>
               {loading && <Spinner />}
              <img src={path || heroImage} className='card__image' />
              <h1 className='card__heading'>{course_title || "Early Design and its Principles"}</h1>
              <figcaption className='card__figure' >
                <img src={Ellipse} className='card__figure--img' />
                <h3 className='card__figure--name'><span>By:</span> James Cameroon</h3>
              </figcaption>
              <div className='card__star'>
                <div className='stars'>
                  <MdStarRate className='star'/>
                  <MdStarRate className='star'/>
                  <MdStarRate className='star'/>
                  <MdStarRate className='star'/>
                  <IoIosStarOutline  className='empty-star'/>
                </div>
                <p>rating----</p>
              </div>
              <section className='card__date'>
              <div className='card__date--time'>
                <IoMdTime/> 
                <p>2h 3m</p>
              </div>
              <div className='card__date--time'>
               
                <img src={level}></img>
                <p>Intermidiate</p>
              </div>
              </section>
              <section className='card__btns'>
                <p>{isPrice_course  || "500"} NGN</p>
                <button className='enroll-btn'> Enroll</button>
              </section>
             
              
            </div>
            
           )
         }))}
        
        

        </div>
     
      </section>



    </Wrapper>
    <Footer/>
    </>
  )
}

export default search





