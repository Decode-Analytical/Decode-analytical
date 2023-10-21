import React from 'react'

import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";


import instrucPic from '../../assets/profileIMGs/instrucPic.png'

export default function InstructorHero() {
  return (
    <>
      <section className="">
        <div className=" pt-10">
          <div className=" flex items-center space-x-4">
            <img src={instrucPic} alt="" className=' w-32'/>

            <div className="">
              <p className=" text-[#5F5F5F] text-sm">
                Instructor
              </p>

              <p className=" text-[#303030] text-2xl font-bold">
                Victoria Olayode
              </p>

              <p className=" text-[#303030] text-sm">
                Senior lecturer at Lagos state university
              </p>

              <a href='' className=" text-blue-700 text-[.7em]">
                victoriaolayode@gmail.com
              </a>

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
          </div>
        </div>
      </section>
    </>
  )
}
