import React, {useState} from 'react'

import Ellipse2 from '../../assets/forum imgs/Ellipse2.png'
import {BsArrowLeftCircle} from "react-icons/bs"
import {BsHandThumbsUpFill} from "react-icons/bs"
import {BsReplyFill} from "react-icons/bs"
import {BsHandThumbsUp} from "react-icons/bs"


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

export default function ReplyComponent() {
  return (
    <>
      <section>
        <div className=" mx-[5%] my-10">
          <div className=" inline-flex items-center">
            <BsArrowLeftCircle className=' cursor-pointer mr-2'/>
            <p className=" text-sm">
              Early Design and its Principles (Week 1) <span className="">&gt;</span> Post Description <span className="">&gt;</span> Replies
            </p>
          </div>


          <div className="">
            <div className=" inline-flex items-center mt-20">
              <img src={Ellipse2} alt="" className=' w-10'/>    {/* THE PERSONS PROFILE UPLOADED IMAGE/AVATAR WILL BE HERE */}

              <p className=" ml-5">
                Sarah Smith 
              </p>

              <p className=" text-[#040E53] ml-10 ">
                student
              </p>
            </div>

            {/* TIMESTAMP */}
            <p className=" text-sm">
              Posted 30 minutes ago
            </p>
          </div>


                      {/* POST DESCRIPTION */}
          <div className="">
            <p className=" text-sm mt-5">
              {/* THE DESCRIPTION FROM THE FORM FILLED FROM RHE DECRIPTION OVERLAY */}
              Lorem ipsum dolor sit amet consectetur. At volutpat quisque etiam eget aliquet turpis velit. Quam aenean nisi pellentesque imperdiet egestas. Consectetur maecenas nulla ullamcorper fames est ut sed maecenas. Bibendum enim gravida risus bibendum morbi aliquet lorem ipsum dolor sit amet consectetur. At volutpat quisque etiam eget aliquet turpis velit. Quam aenean nisi pellentesque imperdiet egestas. Consectetur maecenas nulla ullamcorper fames est ut sed maecenas. Bibendum enim gravida risus bibendum morbi aliquet. Lorem ipsum dolor sit amet consectetur. At volutpat quisque etiam eget aliquet turpis velit. Quam aenean nisi pellentesque imperdiet egestas. Consectetur maecenas nulla ullamcorper fames est ut sed maecenas. Bibendum enim gravida risus bibendum morbi aliquet lorem ipsum dolor sit amet consectetur. At volutpat quisque etiam eget aliquet turpis velit. Quam aenean nisi pellentesque imperdiet egestas. Consectetur maecenas nulla ullamcorper fames est ut sed maecenas. Bibendum enim gravida risus bibendum morbi aliquet. Lorem ipsum dolor sit amet consectetur. At volutpat quisque etiam eget aliquet turpis velit. Quam aenean nisi pellentesque imperdiet egestas. Consectetur maecenas nulla ullamcorper fames est ut sed maecenas. Bibendum enim gravida risus bibendum morbi aliquet lorem ipsum dolor sit amet consectetur. At volutpat quisque etiam eget aliquet turpis velit. Quam aenean nisi pellentesque imperdiet egestas. Consectetur maecenas nulla ullamcorper fames est ut sed maecenas. Bibendum enim gravida risus bibendum morbi aliquet..
            </p>

            <div className=" text-[#040E53] inline-flex items-center mt-3">
              <LikeButton />
              <a className=' ml-2'>Like 126</a>
              <BsReplyFill className=' text-2xl ml-20'/>
              <a className=" ml-2">reply 42</a>
            </div>
          </div>


                {/* THE REPLY INPUT DIV WHERE THERE WILL BE A REPLY TO THE MAIN COMMENT*/}
          <div className=" md:w-1/2">
            <p className="">
              Reply 
            </p>

            <textarea type="text" placeholder='REPLY' className=' w-full border border-gray-500 min-h-[200px] p-2'/>

            <div className=" flex justify-between">
              <p className=" text-gray-400 text-[10px]">
                Your reply can’t be more than 9999 characters
              </p>

              <div className="">
                <button className=" border border-[#040E53] px-2 rounded-md hover:bg-red-600">
                  Cancel
                </button>

                <button className=" bg-[#040E53] border border-[#040E53] text-white mx-2 px-4 rounded-md hover:bg-white hover:text-[#040E53]">
                  Reply
                </button>
              </div>
            </div>
          </div>


              {/*  REPLY TO MAIN COMMENTS*/}
          <div className="mt-10">
            <div className=" flex justify-between">
              <p className="">
                replies 42
              </p>

              <form action="" className="">
                <label htmlFor="">
                  Filter :
                </label>
                <select name="" id="">
                  <option value="newest">Newest</option>
                  <option value="A-Z">A-Z</option>
                </select>
              </form>
            </div>
          </div>



            {/* THE REPLY SHOWING DIV */}
          <div className=" mt-5 shadow-2xl py-5 px-10">
            <div className=" sm:flex  justify-between items-center">
              <div className=" inline-flex items-center space-x-3">
                <img src={Ellipse2} alt="" className=' w-10'/>
                
                <a className="">
                  Sarah smith 
                </a>

                <a className=" text-blue-900">
                  student
                </a>
              </div>

                    {/* TIME STAMP */}
              <p className=" text-sm my-3 sm:my-0">
                12 minutes ago
              </p>
            </div>

            <div className="">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur. At volutpat quisque etiam eget aliquet turpis velit. Quam aenean.
              </p>
            </div>


                  {/* ============THE REPLY INPUT  TO EACH COMMENT============= */}
            <div className=" ">
              <p className="">
                Reply 
              </p>

              <textarea type="text" placeholder='REPLY' className=' w-full border border-gray-500 p-2'/>

              <div className=" flex justify-between">
                <p className=" text-gray-400 text-[10px]">
                  not more than 100 words
                </p>

                <div className="">
                  <button className=" border border-[#040E53] px-2 rounded-md hover:bg-red-600">
                  Cancel
                  </button>

                  <button className=" bg-[#040E53] border border-[#040E53] text-white ml-2 md:mx-2 px-4 rounded-md hover:bg-white hover:text-[#040E53]">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>



                {/* THIS WILL BE CLEARED WHEN WE HAVE ACCESS  */}
          <div className=" mt-5 shadow-2xl py-5 px-10">
            <div className=" sm:flex justify-between items-center">
              <div className=" inline-flex items-center space-x-3">
                <img src={Ellipse2} alt="" className=' w-10'/>
                
                <a className="">
                  Sarah smith 
                </a>

                <a className=" text-blue-900">
                  student
                </a>
              </div>

                    {/* TIME STAMP */}
              <p className=" text-sm my-3 sm:my-0">
                12 minutes ago
              </p>
            </div>

            <div className="">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur. At volutpat quisque etiam eget aliquet turpis velit. Quam aenean.
              </p>
            </div>


                  {/* ============THE REPLY INPUT  TO EACH COMMENT============= */}
            <div className="">
              <p className="">
                Reply 
              </p>

              <textarea type="text" placeholder='REPLY' className=' w-full border border-gray-500 p-2'/>

              <div className=" flex justify-between">
                <p className=" text-gray-400 text-[10px]">
                  not more than 100 words
                </p>

                <div className="">
                  <button className=" border border-[#040E53] px-2 rounded-md hover:bg-red-600">
                  Cancel
                  </button>

                  <button className=" bg-[#040E53] border border-[#040E53] text-white md:mx-2 px-4 rounded-md hover:bg-white hover:text-[#040E53]">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-5 shadow-2xl py-5 px-10">
            <div className=" sm:flex justify-between items-center">
              <div className=" inline-flex items-center space-x-3">
                <img src={Ellipse2} alt="" className=' w-10'/>
                
                <a className="">
                  Sarah smith 
                </a>

                <a className=" text-blue-900">
                  student
                </a>
              </div>

                    {/* TIME STAMP */}
              <p className=" text-sm vmy-3 sm:my-0">
                12 minutes ago
              </p>
            </div>

            <div className="">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur. At volutpat quisque etiam eget aliquet turpis velit. Quam aenean. Lorem ipsum dolor sit amet consectetur. At volutpat quisque etiam eget aliquet turpis velit. Quam aenean. Lorem ipsum dolor sit amet consectetur. At volutpat quisque etiam eget aliquet turpis velit. Quam aenean.
              </p>
            </div>
          </div>


          <div className=" mt-5 shadow-2xl py-5 px-10">
            <div className=" sm:flex justify-between items-center">
              <div className=" inline-flex items-center space-x-3">
                <img src={Ellipse2} alt="" className=' w-10'/>
                
                <a className="">
                  Sarah smith 
                </a>

                <a className=" text-blue-900">
                  student
                </a>
              </div>

                    {/* TIME STAMP */}
              <p className=" text-sm my-3 sm:my-0">
                12 minutes ago
              </p>
            </div>

            <div className="">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur. At volutpat quisque etiam eget aliquet turpis velit. Quam aenean.               Lorem ipsum dolor sit amet consectetur. At volutpat quisque etiam eget aliquet turpis velit. Quam aenean nisi pellentesque imperdiet egestas. Consectetur maecenas nulla ullamcorper fames est ut sed maecenas. Bibendum enim gravida risus bibendum morbi aliquet lorem ipsum dolor sit amet consectetur. At volutpat quisque etiam eget aliquet turpis velit. Quam aenean nisi pellentesque imperdiet egestas. Consectetur maecenas nulla ullamcorper fames est ut sed maecenas. Bibendum enim gravida risus bibendum morbi aliquet. Lorem ipsum dolor sit amet consectetur. At volutpat quisque etiam eget aliquet turpis velit. Quam aenean nisi pellentesque imperdiet egestas. Consectetur maecenas nulla ullamcorper fames est ut sed maecenas. Bibendum enim gravida risus bibendum morbi aliquet lorem ipsum dolor sit amet consectetur. At volutpat quisque etiam eget aliquet turpis velit. Quam aenean nisi pellentesque imperdiet egestas. Consectetur maecenas nulla ullamcorper fames est ut sed maecenas. Bibendum enim gravida risus bibendum morbi aliquet. Lorem ipsum dolor sit amet consectetur. At volutpat quisque etiam eget aliquet turpis velit. Quam aenean nisi pellentesque imperdiet egestas. Consectetur maecenas nulla ullamcorper fames est ut sed maecenas. Bibendum enim gravida risus bibendum morbi aliquet lorem ipsum dolor sit amet consectetur. At volutpat quisque etiam eget aliquet turpis velit. Quam aenean nisi pellentesque imperdiet egestas. Consectetur maecenas nulla ullamcorper fames est ut sed maecenas. Bibendum enim gravida risus bibendum morbi aliquet..

              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}