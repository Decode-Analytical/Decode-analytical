import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import instructor from "../../assets/homepageImages/Ellipse 160.png";

export default function 
() {
  return (
    <section className="px-[10%] bg-white py-16">
    <div className="grid sm:grid-cols-2 gap-10 lg:gap-32 items-center">
      <div>
        <h6 className="font-bold">Teach on Decode Alaytical</h6>
        <h5 className="font-bold text-[25px] py-5">
          BECOME AN INSTRUCTOR
        </h5>
        <p className="text-[16px] mb-10">
          To become an instructor on Decode Analytical, sign up on the
          platform, create a profile highlighting your expertise, and
          propose courses. Benefit from a wide learner base, advanced
          teaching tools, and revenue sharing opportunities. Share your
          knowledge, earn income, and contribute to learners' growth in a
          dynamic online community.
        </p>
        <button className="bg-amber-400 p-1 font-bold px-3 text-sm border rounded mb-12">
          Start teaching today{" "}
          <FaArrowRight className="inline-block ms-3" />
        </button>
      </div>
      <div >
      <img src={instructor} width={270} />
      </div>
    
    </div>
  </section>
  )
}
