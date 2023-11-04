import React from "react";
import AbsoluteComponent from "./AbsoluteComponent";
import Values from "../../pages/homepage/Values";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="pt-14 pb-2  hero text-center text-white  relative ">
        <h2 className="font-bold text-[40px] bigText text-center text-white py-3 px-[10%]">
<<<<<<< HEAD
          Unlock Your Potential, Expand Your Horizons, and Excel in Tech
=======
          Unlock Your Potential, Expand Your Horizons, and Excel in Tech (test)
>>>>>>> AdminHomePage
        </h2>
        <p className="text-[20px] px-[20%] bigFont">
          Decode LMS is a learning management system that gives you all the
          tools required in your tech journey. It is comprised of the most
          resourceful materials one would ever think of. Have the best
          experience from us.
        </p>
        <div className="flex flex-wrap justify-center text-sm mt-12 mb-32 btnDiv">
          <Link to="/auth">
            <button className=" bg-yellow-400  p-3 rounded-sm me-3 mb-5 text-black hover:text-yellow-400  hover:bg-white">
              Start for free
            </button>
          </Link>
          <button className="border border-yellow-400 px-2  p-3 rounded-sm mb-5 text-yellow-400 hover:text-white hover:border-white bg-transparent">
            Become a creator
          </button>
        </div>
        <AbsoluteComponent />
      </div>

      <Values />
    </section>
  );
}
