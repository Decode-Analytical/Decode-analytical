import React from 'react'
import InstructorHero from '../../components/instructorProfileComponents/InstructorHero'
import MainSideBar from '../../components/mainSideBar'
import AboutInstructor from '../../components/instructorProfileComponents/AboutInstructor'
import CoursesCreated from '../../components/instructorProfileComponents/CoursesCreated'
import profilePic from '../../assets/profileIMGs/instrucPic.png'

import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";


export default function LikesPage() {
  return (
    <>
        <div className=' bg-[#dddddd] min-h-screen'>
            <div>
                <MainSideBar />
            </div>
            <div className=" mx-[5%] sm:ml-[12%] px-[5%] bg-[#eeeeee]">
            <div className="  w-full bg-black sm:h-40 lg:h-52">
                    <p className=" text-white lg:text-3xl sm:text-2xl text-center sm:pt-20 lg:pt-20">
                      DECODE ANALYTICS</p>
                </div>
                <div className=" w-full h-auto shadow-md p-5">
                    <figure >
                        
                  <img src={profilePic} alt="" className=" lg:w-52 lg:h-52
                  sm:w-32 sm:h-32 bg-gray-400 border-2 rounded-full z-10 lg:-mt-40 sm:-mt-32
      " />
                        <figcaption className=' flex justify-between'>
                            
            <div className="">
              <p className=" text-[#5F5F5F] text-sm">
                Instructor 
              </p>

              <p className=" text-[#303030] text-2xl font-bold">
                Victoria Olayode . <span className=" font-extralight  text-[#5F5F5F] text-sm"> female</span>
              </p>
                  
              <a href='' className=" text-blue-700 text-[.7em]">
                victoriaolayode@gmail.com . 08069122739
              </a>
              <p className=" text-[#303030] text-sm">
                Regular student
              </p>

                 <p className="">A polite, easygoing Lady</p>
              <p className="">
                Lagos state, Nigeria
              </p>

              <div className=" flex space-x-2">
                <a href="">
                  <BsFacebook />
                </a>
                
                <a href="">
                  <BsLinkedin />
                </a>
                
                <a href="">
                  <BsInstagram />
                </a>
              </div>
            </div>
            
            <div className="">
                <form action="">
                    <input type="button" value='Edit profile' className=' w-32' />
                </form>
            </div>
                        </figcaption>



                    </figure>
                </div>
                <div className=" mb-24 border-x-8">
                    <div className=" lg:w-1/4 sm:w-full flex justify-between mt-3 text-gray-400 text-lg">
                        <p className=" text-black">Your Posts</p>
                        <p className="">Replies</p>
                        <p className="">Likes</p>
                    </div>
                
                    <div className=" lg:flex lg:justify-between sm:block ml-10 mt-10">
                <div className=" lg:flex sm:block lg:items-center">
                            <img src={profilePic} alt="" className=' lg:w-16 lg:mr-6 lg:h-16 sm:w-3/4 sm:mx-auto  rounded-full'/>
                            <p className="text-lg text-[#303030] sm:block sm:text-center lg:flex font-bold">
                                by Victoria Olayode 
                                  <span className="pl-3 pr-3 border bg-gray-200 rounded-lg text-blue-600">
                                   student</span>
                                 <span className=" text-gray-400 font-extralight">posted 30mins ago</span>
                            </p>
                        </div>
<div className=" lg:mr-10 sm:mr-0">
    <p className="">Graphic Designs <span className=""> (Week 2)</span> </p>
</div>

                        </div>
                <div className=" mt-10 border-x-2">
                    
                <p className="pl-10  text-2xl font-bold">Post Description</p>
                    <p className=" p-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus exercitationem ratione tempore fugiat cum et asperiores sunt laboriosam sapiente adipisci veritatis a, omnis, expedita porro pariatur. Iure repudiandae quam ipsam.
                    Similique, commodi doloribus doloremque placeat necessitatibus
                     delectus at distinctio ex in natus excepturi enim obcaecati 
                     quaerat rem beatae reiciendis. Accusamus aut, facilis voluptas
                      doloremque sed rem! Fuga quam nemo voluptatum?
                    Culpa reprehenderit, nostrum aliquam veritatis consequuntur
                     impedit iste provident vero. Voluptatum sunt
                      dolor totam atque illo corporis veritatis repudiandae
                       accusantium molestiae. Nostrum, quis? Ipsa consequatur
                        cupiditate reiciendis magni. Hic, ducimus.</p>
                        <div className=" flex justify-between lg:w-1/5 sm:h-1/2 mt-6">
                            <p className=" sm:pl:0 lg:pl-10">
                                Like 126
                            </p>
                            <p className="">
                                Reply 42
                            </p>
                        </div>
                </div>
                     


                <div className=" lg:flex lg:justify-between sm:block ml-10 mt-10">
                <div className=" lg:flex sm:block lg:items-center">
                            <img src={profilePic} alt="" className=' lg:w-16 lg:mr-6 lg:h-16 sm:w-3/4 sm:mx-auto  rounded-full'/>
                            <p className="text-lg text-[#303030] sm:block sm:text-center lg:flex font-bold">
                                by Victoria Olayode 
                                  <span className="pl-3 pr-3 border bg-gray-200 rounded-lg text-blue-600">
                                   student</span>
                                 <span className=" text-gray-400 font-extralight">posted 30mins ago</span>
                            </p>
                        </div>
<div className=" lg:mr-10 sm:mr-0">
    <p className="">Graphic Designs <span className=""> (Week 2)</span> </p>
</div>

                        </div>

                <div className=" mt-10 border-y-2">
                    <p className="pl-10  text-2xl font-bold">Post Description</p>
                    <p className=" p-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus exercitationem ratione tempore fugiat cum et asperiores sunt laboriosam sapiente adipisci veritatis a, omnis, expedita porro pariatur. Iure repudiandae quam ipsam.
                    Similique, commodi doloribus doloremque placeat necessitatibus
                     delectus at distinctio ex in natus excepturi enim obcaecati 
                     quaerat rem beatae reiciendis. Accusamus aut, facilis voluptas
                      doloremque sed rem! Fuga quam nemo voluptatum?
                    Culpa reprehenderit, nostrum aliquam veritatis consequuntur
                     impedit iste provident vero. Voluptatum sunt
                      dolor totam atque illo corporis veritatis repudiandae
                       accusantium molestiae. Nostrum, quis? Ipsa consequatur
                        cupiditate reiciendis magni. Hic, ducimus.</p>
                </div>
                
                </div>
                
            </div>

            


            
        </div>
    </>
  )
}
