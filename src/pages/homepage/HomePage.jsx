import "../../App.css"
import instructor from "../../assets/homepageImages/Ellipse 160.png";
import picOne from "../../assets/homepageImages/pics1.png";
import picTwo from "../../assets/homepageImages/pics2.png";
import picThree from "../../assets/homepageImages/pics3.png";
import picFour from "../../assets/homepageImages/pics4.png";
import track from "../../assets/homepageImages/track.jpg";
import logo from "../../assets/homepageImages/star 1.png";
import {FaArrowRight} from 'react-icons/fa'

export default function Homepage() {
  return (
    <>
      <main >
        <section className=" bg-white">
          <div className="py-14 bg-black text-center text-white relative">
            <h2 className="font-bold text-[50px] text-white py-3 center ">
              Unlock Your Potential, Expand Your Horizons, and Excel in Tech
            </h2>
            <p className="text-[20px] w-3/5 center">
              Decode LMS is a learning management system that gives you all the
              tools required in your tech journey. It is comprised of the most
              resourceful materials one would ever think of. Have the best
              experience from us.
            </p>
            <div className="flex center text-sm mt-12 mb-32">
              <button className=" bg-yellow-400 px-3 p-1 rounded-sm text-black hover:text-yellow-400 hover:bg-black">
                Start for free
              </button>
              <button className="text-yellow-400 p-1 ms-3 bg-transparent px-3 border hover:text-white hover:border-white border-yellow-400">
                Become a creator
              </button>
            </div>
          </div>
          <div className="">
            <div className="bg-slate-200 grid sm:grid-cols-4 gap-4 p-10 px-32 text-center rounded-lg  text-purple-1000">
              <div className="bg-white p-6 rounded-md mx-5">
                <h2 className="text-xl font-bold">12k</h2>
                <p className="text-sm">Total Enrolled</p>
              </div>
              <div className="bg-white p-6 rounded-md mx-5">
                <h2 className="text-xl font-bold">12k</h2>
                <p className="text-sm">Total Enrolled</p>
              </div>
              <div className="bg-white p-6 rounded-md mx-5">
                <h2 className="text-xl font-bold">12k</h2>
                <p className="text-sm">Total Enrolled</p>
              </div>
              <div className="bg-white p-6 rounded-md mx-5">
                <h2 className="text-xl font-bold">12k</h2>
                <p className="text-sm">Total Enrolled</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2  py-28 px-16">
            <div className="w-[50%]">
              <h5 className="font-bold text-[31px] py-4 ">
                OUR CORE LEARNING VALUES
              </h5>
              <div className="flex items-start">
                <div className="mt-3 me-3 bg-zinc-200 p-2">
                  <img width={30} src={logo} className="w-2/2" />
                </div>

                <div>
                  <h6 className="font-bold text-[20px] py-2">
                    Structured Learning Content
                  </h6>
                  <p className="text-sm mb-10 w-5/6">
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
                  <img width={30} src={logo} />
                </div>
                <div>
                  <h6 className="font-bold text-[20px] py-2">
                    Skills and Value Oriented
                  </h6>
                  <p className="text-sm mb-10 w-4/5">
                    Decode Analytical offers skills and value-oriented courses.
                    Acquire practical expertise, align with industry demands,
                    and enhance employability. Gain tangible skills for
                    real-world success in a dynamic learning environment.
                  </p>
                </div>
              </div>
              <div className="flex items-start mt-3">
                <div className="mt-3 me-3 bg-zinc-200 p-2">
                  <img width={30} src={logo} />
                </div>
                <div>
                  <h6 className="font-bold text-[20px] py-2">
                    Professional And Quality Instructors
                  </h6>
                  <p className="text-sm mb-10 w-4/5">
                    Learn from professional instructors on Decode Analytical.
                    Benefit from their expertise, industry insights, and quality
                    teaching. Gain practical skills and knowledge for personal
                    and professional growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <img src={picFour} width={400} className="self-center" />
            </div>
          </div>
        </section>
        <section className="py-28 bg-slate-500 px-16 text-[20px] text-center">
          <h5 className="font-bold text-[31px] text-white py-4">
            EXPLORE COURSES
          </h5>
          <p className="text-amber-400">
            Empower Your Journey: Invest in Knowledge Today!
          </p>
          <p className="mb-10 text-white w-2/3 center py-4">
            We promise to embark you on a transformative career journey in tech
            with our comprehensive courses. Acquire cutting-edge skills, open
            doors to innovation, and shape a thriving future in the tech
            industry.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="bg-white rounded-lg p-3 text-left my-5">
              <img src={track} className="center w-[100%]" />
              <p className="font-bold py-4">Data Analysis</p>
              <div className="flex flex-wrap items-center">
                <img src={picOne} width={30} />
                <p className="ms-2 text-sm text-zinc-500">by Mac Kingsley</p>
              </div>
              <div className="flex justify-between py-4 text-zinc-500 text-base">
                <div>
                  <p>2hrs 30mins</p>
                </div>
                <div>
                  <p>Beginner</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-between py-4">
                <button className="text-purple-900 text-sm font-bold">
                  View Course
                </button>
                <p className="text-purple-400 text-sm">Free</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 text-left my-5">
              <img src={track} className="center w-[100%]" />
              <p className="font-bold py-4">Data Analysis</p>
              <div className="flex flex-wrap items-center">
                <img src={picOne} width={30} />
                <p className="ms-2 text-sm text-zinc-500">by Mac Kingsley</p>
              </div>
              <div className="flex justify-between py-4 text-zinc-500 text-base">
                <div>
                  <p>2hrs 30mins</p>
                </div>
                <div>
                  <p>Beginner</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-between py-4">
                <button className="text-purple-900 text-sm font-bold">
                  View Course
                </button>
                <p className="text-purple-400 text-sm">Free</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 text-left my-5">
              <img src={track} className="center w-[100%]" />
              <p className="font-bold py-4">Data Analysis</p>
              <div className="flex flex-wrap items-center">
                <img src={picOne} width={30} />
                <p className="ms-2 text-sm text-zinc-500">by Mac Kingsley</p>
              </div>
              <div className="flex justify-between py-4 text-zinc-500 text-base">
                <div>
                  <p>2hrs 30mins</p>
                </div>
                <div>
                  <p>Beginner</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-between py-4">
                <button className="text-purple-900 text-sm font-bold">
                  View Course
                </button>
                <p className="text-purple-400 text-sm">Free</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 text-left my-5">
              <img src={track} className="center w-[100%]" />
              <p className="font-bold py-4">Data Analysis</p>
              <div className="flex flex-wrap items-center">
                <img src={picOne} width={30} />
                <p className="ms-2 text-sm text-zinc-500">by Mac Kingsley</p>
              </div>
              <div className="flex justify-between py-4 text-zinc-500 text-base">
                <div>
                  <p>2hrs 30mins</p>
                </div>
                <div>
                  <p>Beginner</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-between py-4">
                <button className="text-purple-900 text-sm font-bold">
                  View Course
                </button>
                <p className="text-purple-400 text-sm">Free</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 text-left my-5">
              <img src={track} className="center w-[100%]" />
              <p className="font-bold py-4">Data Analysis</p>
              <div className="flex flex-wrap items-center">
                <img src={picOne} width={30} />
                <p className="ms-2 text-sm text-zinc-500">by Mac Kingsley</p>
              </div>
              <div className="flex justify-between py-4 text-zinc-500 text-base">
                <div>
                  <p>2hrs 30mins</p>
                </div>
                <div>
                  <p>Beginner</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-between py-4">
                <button className="text-purple-900 text-sm font-bold">
                  View Course
                </button>
                <p className="text-purple-400 text-sm">Free</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 text-left my-5">
              <img src={track} className="center w-[100%]" />
              <p className="font-bold py-4">Data Analysis</p>
              <div className="flex flex-wrap items-center">
                <img src={picOne} width={30} />
                <p className="ms-2 text-sm text-zinc-500">by Mac Kingsley</p>
              </div>
              <div className="flex justify-between py-4 text-zinc-500 text-base">
                <div>
                  <p>2hrs 30mins</p>
                </div>
                <div>
                  <p>Beginner</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-between py-4">
                <button className="text-purple-900 text-sm font-bold">
                  View Course
                </button>
                <p className="text-purple-400 text-sm">Free</p>
              </div>
            </div>
          </div>
          <button className="text-sm bg-white border border-purple-950 mt-9 p-1">
            View all courses
          </button>
        </section>
        <section className=" text-center bg-slate-100 py-28 text-[20px]  px-16">
          <h6 className="font-bold">Amazing Stories</h6>
          <h5 className="font-bold text-[31px">FEEDBACKS FROM LEARNERS</h5>
          <p className="mb-10">
            Join Decode Analytical now to unlock a world of knowledge and
            skill-building. Become part of our community, learn from experts,
            and later share your inspiring success story!
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="border border-amber-500 text-center rounded-lg p-2 pt-6">
              <img src={picOne} width={70} className="center" />
              <h6 className="font-bold py-2 text-purple-800">
                Trevor Mitchell
              </h6>
              <p className="text-sm mb-10">
                “Ut tristique viverra sed porttitor senectus. A facilisis metus
                pretium ut habitant lorem. Velit vel bibendum eget aliquet sem
                nec, id sed. Tincidunt.”
              </p>
            </div>
            <div className="border border-amber-500 text-center rounded-lg p-2 pt-6">
              <img src={picTwo} width={70} className="center" />
              <h6 className="font-bold py-2 text-purple-800">
                Trevor Mitchell
              </h6>
              <p className="text-sm mb-10">
                “Ut tristique viverra sed porttitor senectus. A facilisis metus
                pretium ut habitant lorem. Velit vel bibendum eget aliquet sem
                nec, id sed. Tincidunt.”
              </p>
            </div>
            <div className="border border-amber-500 text-center rounded-lg p-2 pt-6">
              <img src={picThree} width={70} className="center" />
              <h6 className="font-bold py-2 text-purple-800">
                Trevor Mitchell
              </h6>
              <p className="text-sm mb-10">
                “Ut tristique viverra sed porttitor senectus. A facilisis metus
                pretium ut habitant lorem. Velit vel bibendum eget aliquet sem
                nec, id sed. Tincidunt.”
              </p>
            </div>
          </div>
        </section>
        <section className="px-10 bg-white py-16 md:px-32 gap-36">
          <div className="grid sm:grid-cols-2">
            <div>
              <h6 className="font-bold text-[20px]">Teach on Decode Alaytical</h6>
              <h5 className="font-bold text-[31px] py-5">
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
              <button className="bg-amber-400 p-1 px-3 text-sm border rounded mb-12 flex items-center justify-center">
                <p>  Start teaching today </p>
              <FaArrowRight className="ms-3 mt-1" />
              </button>
            </div>
            <img src={instructor} width={230} className="self-center" />
          </div>
        </section>
      </main>
    </>
  );
}
