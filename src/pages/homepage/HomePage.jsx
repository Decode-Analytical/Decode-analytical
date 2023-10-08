import "../../App.css";
import instructor from "../../assets/homepageImages/Ellipse 160.png";
import picFour from "../../assets/homepageImages/pics4.png";
import logo from "../../assets/homepageImages/Star 1.png";
import {
  FaArrowRight,
 
  FaFile,
  FaFolder,
  FaPeopleCarry,
} from "react-icons/fa";

import Coursecomponent from "../../components/homepageComponents/Coursecomponent";
import Tutor from "../../components/homepageComponents/Tutor";
import AbsoluteComponent from "../../components/homepageComponents/AbsoluteComponent";

export default function Homepage() {
  return (
    <>
      <main>
        <section className="bg-white">
          <div className="pt-14 pb-2  hero text-center text-white relative">
            <h2 className="font-bold text-[61px] bigText text-center text-white py-3 px-[10%]">
              Unlock Your Potential, Expand Your Horizons, and Excel in Tech
            </h2>
            <p className="text-[20px] px-[20%] bigFont">
              Decode LMS is a learning management system that gives you all the
              tools required in your tech journey. It is comprised of the most
              resourceful materials one would ever think of. Have the best
              experience from us.
            </p>
            <div className="flex center text-sm mt-12 mb-32 px-[5%]">
              <button className=" bg-yellow-400 p-1 px-2 rounded-sm mb-5 text-black hover:text-yellow-400 hover:bg-black">
                Start for free
              </button>
              <button className="text-yellow-400 p-1 btnCreator  bg-transparent px-3 border hover:text-white hover:border-white border-yellow-400">
                Become a creator
              </button>
            </div>
            <div>
              <AbsoluteComponent />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 items-center gap-6 py-28 px-[10%] lg:mt-20">
            <div>
              <h5 className="font-bold text-[31px] py-4 bigText text-center midFont">
                OUR CORE LEARNING VALUES
              </h5>
              <div className="flex items-start">
                <div className="mt-3 me-3 bg-zinc-200 p-2">
                  <FaFolder className="text-purple-900" />
                </div>

                <div>
                  <h6 className="font-bold text-[20px] py-2">
                    Structured Learning Content
                  </h6>
                  <p className="text-sm mb-10">
                    Explore structured learning content on Decode Analytical's
                    platform. Access organized courses, quizzes, and resources.
                    Enjoy enhanced understanding, progress tracking, and
                    flexible learning at your pace for meaningful knowledge
                    acquisition.
                  </p>
                </div>
              </div>
              <div className="flex items-start mt-3">
                <div className="mt-3 me-3 bg-zinc-200 p-2">
                  <FaFile className="text-purple-900" />
                </div>
                <div>
                  <h6 className="font-bold text-[20px] py-2">
                    Skills and Value Oriented
                  </h6>
                  <p className="text-sm mb-10">
                    Decode Analytical offers skills and value-oriented courses.
                    Acquire practical expertise, align with industry demands,
                    and enhance employability. Gain tangible skills for
                    real-world success in a dynamic learning environment.
                  </p>
                </div>
              </div>
              <div className="flex items-start mt-3">
                <div className="mt-3 me-3 bg-zinc-200 p-2">
                  <FaPeopleCarry className="text-purple-900" />
                </div>
                <div>
                  <h6 className="font-bold text-[20px] py-2">
                    Professional And Quality Instructors
                  </h6>
                  <p className="text-sm mb-10">
                    Learn from professional instructors on Decode Analytical.
                    Benefit from their expertise, industry insights, and quality
                    teaching. Gain practical skills and knowledge for personal
                    and professional growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <img src={picFour} width={400} className="self-end" />
            </div>
          </div>
        </section>
        <section className="py-28 bg px-[10%] text-[20px] text-center">
          <h5 className="font-bold text-[31px] text-white py-4 midFont">
            EXPLORE COURSES
          </h5>
          <p className="text-amber-400 bigFont">
            Empower Your Journey: Invest in Knowledge Today!
          </p>
          <p className="mb-10 text-white bigFont center py-4">
            We promise to embark you on a transformative career journey in tech
            with our comprehensive courses. Acquire cutting-edge skills, open
            doors to innovation, and shape a thriving future in the tech
            industry.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            <Coursecomponent />
            <Coursecomponent />
            <Coursecomponent />
            <Coursecomponent />
            <Coursecomponent />
            <Coursecomponent />
          </div>
          <button className="text-sm hover:text-purple-600 hover:bg-zinc-200 bg-white border border-purple-950 mt-9 p-1">
            View all courses
          </button>
        </section>
        <section className=" text-center bg-slate-100 py-28 text-[20px]  px-[10%]">
          <h6 className="font-bold">Amazing Stories</h6>
          <h5 className="font-bold text-[31px] midFont">
            FEEDBACKS FROM LEARNERS
          </h5>
          <p className="mb-10 bigFont">
            Join Decode Analytical now to unlock a world of knowledge and
            skill-building. Become part of our community, learn from experts,
            and later share your inspiring success story!
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Tutor />
          </div>
        </section>
        <section className="px-[10%] bg-white py-16">
          <div className="grid sm:grid-cols-2 justify-items-end items-center">
            <div>
              <h6 className="font-bold">Teach on Decode Alaytical</h6>
              <h5 className="font-bold text-[31px] py-5 midFont">
                BECOME AN INSTRUCTOR
              </h5>
              <p className="text-[16px] mb-10 bigFont">
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
            <img src={instructor} width={270} />
          </div>
        </section>
      </main>
    </>
  );
}
