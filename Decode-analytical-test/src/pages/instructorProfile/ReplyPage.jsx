import React from 'react'
import InstructorHero from '../../components/instructorProfileComponents/InstructorHero'
import MainSideBar from '../../components/mainSideBar'
import AboutInstructor from '../../components/instructorProfileComponents/AboutInstructor'
import CoursesCreated from '../../components/instructorProfileComponents/CoursesCreated'
import profilePic from '../../assets/profileIMGs/instrucPic.png'

import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";


export default function Rep() {
  return (
    <>
        <div className=' bg-[#dddddd] min-h-screen'>
            <div>
                <MainSideBar />
            </div>
            <div className=" mx-[5%] sm:ml-[12%] px-[5%] bg-[#eeeeee]">
                <div className=" w-full bg-black h-52">
                    <p className=" text-white text-3xl text-center pt-20">DECODE ANALYTICS</p>
                </div>
                <div className=" w-full h-auto shadow-md p-5">
                    <figure >
                        
                  <img src={profilePic} alt="" className=" w-52 h-52 bg-gray-400 border-2 rounded-full z-10 -mt-40" />
                  
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
                <div className=" mb-24 border-y-8">
                
                <div className=" w-1/4 flex justify-between mt-3 text-gray-400 text-lg">
                        <p className="">Your Posts</p>
                        <p className=" text-black">Replies</p>
                        <p className="">Likes</p>
                    </div>
                  <div className=" flex justify-between ml-10 mt-10">
                <div className=" flex items-center">
                            <img src={profilePic} alt="" className=' w-16 mr-6 h-16 rounded-full'/>
                            <p className="text-lg text-[#303030] flex">
                                Golden Ellen
                                <span className=" pl-3 pr-3 border bg-gray-200 rounded-lg text-blue-600">
                                    student</span>
                                 <span className=" font-extralight">posted 30mins ago</span>
                            </p>
                        </div>
<div className=" mr-10">
    <p className="">Graphic Designs <span className=""> (Week 2)</span> </p>
</div>

                        </div>
                <div className=" mt-10 ">
                    
                    <p className=" pl-10">Post Description</p>
                    <p className=" pl-10 pr-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus exercitationem ratione tempore fugiat cum et asperiores sunt laboriosam sapiente adipisci veritatis a, omnis, expedita porro pariatur. Iure repudiandae quam ipsam.
                    Similique, commodi doloribus doloremque placeat necessitatibus
                     delectus at distinctio ex in natus excepturi enim obcaecati 
                     quaerat rem beatae reiciendis. Accusamus aut, facilis voluptas
                      doloremque sed rem! Fuga quam nemo voluptatum?
                    Culpa reprehenderit, nostrum aliquam veritatis consequuntur
                     impedit iste provident vero. Voluptatum sunt
                      dolor totam atque illo corporis veritatis repudiandae
                       accusantium molestiae. Nostrum, quis? Ipsa consequatur
                        cupiditate reiciendis magni. Hic, ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit repellendus possimus voluptatum iure quaerat magni mollitia optio amet asperiores odit fuga est accusamus cupiditate incidunt, dolores id itaque deleniti.
                        Cupiditate alias sapiente iusto, ipsa aut voluptas inventore pariatur non totam ullam minus autem perspiciatis est ut harum tempora? At repudiandae vitae laboriosam nobis vero odit ea deserunt rerum molestiae.
                        Doloremque, nihil ipsam. Alias corporis, vero consectetur, in nostrum accusamus eveniet mollitia placeat perferendis, quam corrupti repudiandae itaque. Voluptatem facilis nam possimus explicabo beatae eum inventore! Eaque impedit nemo architecto.</p>
                        <div className=" flex justify-between w-full border-y-4 mt-10 h-48 items-center mb-14">
                            <p className=" pl-10">
                                Replies 42
                            </p>
                            <p className="">
                                Newest
                            </p>
                        </div>
                </div>
                     


                </div>
                
            </div>

            


            
        </div>
    </>
  )
}
