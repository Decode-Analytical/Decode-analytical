// import React, { useEffect, useState, useContext } from 'react';
// import Axios from 'axios';

// import CourseHero from '../../components/CourseHero/Coursehero';
// import CoursesCard from '../../components/CourseHero/CoursesCard';

// const courseURL = 'https://server-eight-beige.vercel.app/api/course/viewAllCourses';

// import { AuthContext } from '../../context/AuthContext';


// export default function Courses() {
//   const { user } = useContext(AuthContext);

//   const [courses, setCourses] = useState([]); 

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await Axios.get(courseURL, {
//           headers: {
//             'Authorization': `Bearer ${user.accessToken}`
//           },
//         });

//         if (response.data && response.data.courses) {
//           setCourses(response.data.courses);
//           console.log('response:',response.data);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchCourses();
//   }, [user.accessToken]);

//   return (
//     <>
//       <section className='mx-auto font-montserrat z-10'>
//         <CourseHero />
//         <div className="mx-auto items-center grid grid-cols-1 pt-20 pb-14 overflow-hidden md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-center ml-11">
//           {courses.map((details, index) => { // Use the 'courses' state here
//             return <CoursesCard key={index + 1} {...details} />;
//           })}
//           <br />
//           <br />
//         </div>
//         <div className='text-center items-center p-3'>
//           <button className='p-[1rem] rounded-md border-[2px] font-bold'>View More Courses</button>
//         </div>

        
//         <section className='cart-bg px-[5%] pt-20 h-64 my-20 font-montserrat'>
//           <p className="text-white text-4xl md:text-6xl">Try Free Courses</p>
//           {/* Add code for free courses here */}
//         </section>
//       </section>
//     </>
//   );
// }

import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../../assets/Images/courseHero.JPG'
import { CiSearch } from "react-icons/ci";
import Ellipse from "../../assets/courses Images/Ellipse.png";
import { Wrapper, Content } from './styles';
import { MdStarRate, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMdTime , IoIosStarOutline } from "react-icons/io";
import level from "../../assets/courses Images/level.png"
import freeCourseImgBanner from '../../assets/courses Images/freecourse.png'
import Spinner from '../../components/Spinner/index'
import Footer from '../../components/footer/index'
import { Link } from 'react-router-dom';

import CoursesCard from '../../components/CourseHero/CoursesCard';
const API_URL = 'https://decode-mnjh.onrender.com/api/course/viewAllCourses';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGI1NmVmMzUxZTgzNGM1NmI4ZTg1MDkiLCJpYXQiOjE3MTQ5Mjc2NjcsImV4cCI6MTcxNTAxNDA2N30.BHwAOR-HaV64ghCE6db2FGTBOnPmVoi2Rk5lyX8Sgis';



const Courses =() =>{
  
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(null);
  const [freeCourses, setFreeCouses] = useState([])
  const [inputValue, setInputValue] = useState('');
  

  // let history = useNavigate();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('searchValue', inputValue);

    
  };



  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: {
            Authorization: `Bearer ${TOKEN}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setCourses(data.courses);
          setFreeCouses(data.courses.filter(course => course.isPaid_course === 'free'));
          setLoading(false);
          // console.log(data)
        } else {
          console.error('Failed to fetch courses:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const loadMore = async () => {
    // const response = await fetch(
    //   `https://decode-mnjh.onrender.com/api/course/viewAllCourses&currentPage=${nextPage}`
    // );
    // const data = await response.json();
    // setCourses([...data.Courses, ...data.courses]);
    // setNextPage(data.currentPage + 1);
    // setLoading(false);
  };

  return (
    <>
    <Wrapper>
      <main>
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
          <input type='text' 
          className='box__search-input' 
          value={inputValue} 
          onChange={handleChange}  
          placeholder='Search all categories'/>
         
          <button className='box__search-btn' onClick={handleSubmit}>
          <Link to='/Courses/Search' >
            <CiSearch className='icon' /></Link>
            </button>
          
          </div>
          <section className='buttons'>
            <button>Free</button>
            <button>Paid</button>
            <button>All Levels</button>
          </section>
        </div>
      </main>
      <section className='linear'></section>
      <Content>
        <div className='Heading'>
        <h1 className='head'>Find trending courses </h1>
        <p className='txt'>Break into tech with any of the courses we have specially created for you</p>
        </div>
        
        {loading && <Spinner />}
       
        <div className='container'>
       {courses.map((details, index) => { 
          const {course_title, 
            course_description, 
            course_image: {0:{path
            }}, 
            isPrice_course, 
            isPaid_course, 
            _id, 
            modules } = details

          
          // Use the 'courses' state here
             return (
            
              <div className='card' key={index}>
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
           })} 

        </div>
      <div className='show-more'>
      <button onClick={loadMore} className='bn--show-more'>
          <p>View more courses</p>
          <MdOutlineKeyboardArrowDown className='arrow-down'/>

        </button>
      </div>

      </Content>
{/* section free courses  */}
      <section className='freeCourse'>
        <div className='freeCourse__img'>
          <img src={freeCourseImgBanner} className='img'/>
          </div>
          <div className='freeCourse__txt'>
            <h3 className='head'>Try Free Courses</h3>
            <p className='txt'>Break into tech with any of the courses we have specially created for you</p>
          </div>
          </section>
          <section className='freeBox'>
          {loading && <Spinner />}

          <div className='container'>
       {freeCourses.map((details, index) => { 
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
                  {/* <p>{isPrice_course  || "500"} NGN</p> */}
                  <Link
              to={`/premiumCourses/${_id}`}
              state={{
                course_title,
                course_description,
                course_image: {0:{path
                }},
                isPrice_course,
                isPaid_course,
                modules,
                // Include other properties as needed
              }}
              className='enroll-btn'>
              {isPrice_course === 0 ? 'Free' : `Price: ${isPrice_course} NGN`}
            </Link>
                  {/* <button className='enroll-btn'> Enroll for free</button> */}
                </section>
               
                
              </div>
              
             )
           })} 

        </div>
        
      </section>
     
    </Wrapper>
    <Footer/>
    </>
  );
}
export default Courses









