import React, {useState} from 'react'

import Ellipse2 from '../../assets/forum imgs/Ellipse2.png'

import {BsSearch} from "react-icons/bs"
import {BsSortDown} from "react-icons/bs"
import {BsHandThumbsUp} from "react-icons/bs"
import {BsHandThumbsUpFill} from "react-icons/bs"
import {BsReplyFill} from "react-icons/bs"
import {BsXCircle} from "react-icons/bs"



//  THE LIKE BUTTON FUNCTION TO TOGGLE BETWEEN THE LIKE ICONS
function LikeButton() {
    const [isLiked, setIsLiked] = useState(true);
  
    const toggleLike = () => {
      setIsLiked(!isLiked);
    };
  
    return (
      <>
        {isLiked ? (
          <BsHandThumbsUp onClick={toggleLike} className='text-2xl cursor-pointer'/>
        ) : (
          <BsHandThumbsUpFill onClick={toggleLike} className='text-2xl cursor-pointer'/>
        )}
      </>
    );
}


export default function WeeklyForumPost() {

    

        // THE FUNTION THAT CONTROLS THE CREATE POST DROP DOWN

    const [isPostVisible, setPostVisible] = useState(false);

            // THE CONTENT OF THE DROPDOWN IS GOING TO BE HERE AND DISPLAYED  IF TOGGLED
    let createPost 
    if (isPostVisible) {
        createPost = 
        <div className=" bg-[#e0e0e0] px-3 md:px-10 md:mx-[5%] py-10  origin-top animate-open-menu">  {/* THE ANIMATION CLASS IS IN THE TAILWIND.CONFIG.JS */}
            <div className=" flex justify-between items-center ">
                <p className=" text-2xl md:text-3xl font-bold">
                    Create a new post
                </p>

                <BsXCircle className=' hover:cursor-pointer'/>
            </div>

            <div className=" mt-5">
               <form action="" method="post">
                    <label htmlFor="">
                        Post description <span className=" text-red-700">*</span>
                    </label> <br />
                    <input required type="text" placeholder='Write a descriptive title' className=' w-full p-2 rounded-md'/> <br /> <br /> <br />

                    <label htmlFor="">
                        body text <span className=" text-red-700">*</span>
                    </label> <br />
                    <textarea required name="body-text" id="" placeholder='Body Text' className=' w-full p-3 h-[100px]'/>
               </form>
            </div>

            <div className=" flex justify-between mt-2">
                <p className=" text-gray-400 text-sm">
                    1000 characters max
                </p>

                <div className=" space-x-3">
                    <button className=" border border-[#040E53] bg-white px-1 rounded-md">
                        Cancel
                    </button>

                    <button className=" border border-[#040E53] bg-[#040E53] text-white px-3 rounded-md hover:bg-white hover:text-[#040E53]">
                        Post
                    </button>
                </div>
            </div>
        </div>
    }


        //   <================================================================>
  return (
    <>
        <section className=" md:max-w-[67%] md:border md:p-5 relative">
            <div className="">
                <div className="">
                    <p className=" text-[#040E53] text-xl md:text-2xl font-bold">
                        Early Design and its Principles (Week 1)
                    </p>

                    <a className=" text-gray-500 text-[13px]">
                        Course weekly topics are being discussed here.
                    </a>
                </div>


                        {/* THE SEARCH AND CREATE POST DIV */}
                <div className=" flex mt-10">
                    <div className="  rounded-md  border border-gray-400 inline-flex items-center w-[80%] m-auto">
                        <input type="search" placeholder='search forum' className=' p-1 text-[#040E53] focus:outline-none w-full'/> 
                        <span className="">
                            |
                        </span>
                        <BsSearch className=' cursor-pointer mx-3'/>
                    </div>

                    <button onClick={()=>setPostVisible(!isPostVisible)} className=" text-[10px] mx-5 rounded-md px-3 py-2 font-extrabold border border-[#040E53]">
                        create a post 
                    </button>
                </div>



                    {/* THE  WEEKS DROPDOWN AND THE SORT ICON */}
                <div className=" flex justify-between mt-5">
                    <form action="" method="post">
                        <select name="" id="">
                            <option value="week">week 1</option>
                            <option value="week">week 2</option>
                            <option value="week">week 3</option>
                        </select>
                    </form>

                    <div className=" inline-flex items-center">
                        <BsSortDown />
                        <a className=' text-[10px]'>15002 posts</a>
                    </div>
                </div>



                    {/* THE POSTER IMAGE AN THE TIME STAMP DIV */}
                <div className=" md:flex justify-between mt-10">
                    <div className=" inline-flex items-center space-x-4 text-sm">
                        <img src={Ellipse2} alt="profile Image/ Avatar" className=' w-10'/>
                        <a className="">Sarah Smith</a>
                        <a className=" text-[#040E53] font-extrabold">Student</a>
                    </div>

                    {/* time stamp */}
                    <p className=" text-gray-400 text-sm">
                        Posted 30 minutes ago
                    </p>
                </div>


                <div className=" mt-10">
                    <p className=" text-gray-500">
                        Post description
                    </p>

                    <p className=" mt-3">
                        Lorem ipsum dolor sit amet consectetur. At volutpat quisque etiam eget aliquet turpis velit. Quam aenean nisi pellentesque imperdiet egestas. Consectetur maecenas nulla ullamcorper fames est ut sed maecenas. Bibendum enim gravida risus bibendum morbi aliquet lorem ipsum dolor sit amet consectetur. At volutpat quisque etiam eget aliquet turpis velit. Quam aenean nisi pellentesque imperdiet egestas. Consectetur maecenas nulla ullamcorper fames est ut sed maecenas. Bibendum enim gravida risus bibendum morbi aliquet..
                    </p>



                        {/* THE TOGGLE BETWEEN THE LIKE BUTTON */}
                    <div className="">
                        <div className=" text-[#040E53] inline-flex items-center mt-3">
                            <LikeButton />
                            <a className=' ml-2'>like 126</a>
                            <BsReplyFill className=' text-2xl ml-20'/>
                            <a className=" ml-2">reply 42</a>
                        </div>
                    </div>


                        {/* THE PARAGRAPH WHERE ANY REPLY TO EACH POST DESCRIPTION WILL BE */}
                    <div className=" max-w-[80%] m-auto">
                        <div className=" mt-10">
                            <div className=" inline-flex space-x-2 items-center">
                                <img src={Ellipse2} alt="" className='w-10'/>

                                <a className="">
                                    De Bruyne
                                </a>

                                <a className=" text-[#040E53] font-extrabold">
                                    student/teacher 
                                </a>
                            </div>

                            {/* TIME STAMP */}
                            <p className=" text-gray-500 text-[10px]">
                                20 minutes ago
                            </p>
                        </div>


                        <p className=" text-[13px]">
                            THIS IS A REPLY TO EACH POST DESCRIPTION <br />
                            Lorem ipsum dolor sit amet consectetur. At volutpat quisque etiam eget aliquet turpis velit. Quam 
                        </p>
                    </div>


                        {/* THE REPLY TEXT AREA */}
                    <div className="">
                        <p className="">
                            Reply
                        </p>

                        <form action="" method="post">
                            <textarea type="text" placeholder='REPLY TO POST' className=' w-full border border-gray-500 p-2' />
                        </form>

                        <div className=" flex justify-between">
                            <p className=" text-stone-500">
                                max 100 words
                            </p>

                            <div className="">
                                <button className=" border border-[#040E53] px-2 rounded-md">
                                    Cancel
                                </button>
                                <button className=" mx-3 bg-[#040E53] text-white px-2 rounded-md hover:bg-white hover:text-[#040E53] border border-[#040E53]">
                                    Reply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            

                        {/* THE DROPDOWN FOR CREATING POST */} 
            <div className=" absolute top-44 w-full -left-1">
                {createPost}
            </div>
        </section>
    </>
  )
}
