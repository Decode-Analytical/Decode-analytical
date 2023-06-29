import React from "react";
import Frame1 from "../heroSection/Frame1.png";
import Hero from "../../../assets/Images/Hero.jpg";
import arrowDown from "../../../assets/SVG/arrow_down.svg";
import mouse from "../../../assets/SVG/mouse.svg";

export default function HeroSection() {
  return (
    <>
        <div className="relative grid grid-cols-[0.95fr_auto] gap-10 items-center pb-20 max-h-[100vh]">
          <div className="grid grid-rows-[1fr_auto_auto] gap-6">
            <p className="text-[58px] leading-[74px] font-bold">
              Welcome to Decode Learning Management System
            </p>

            <p className="text-[25px] leading-[39px] text-justify">
              Decode LMS is a learning management system that gives you all the
              tools required in your tech journey. It is comprised of the most
              resourceful materials one would ever think of. Have the best
              experience from us.
            </p>

            <div>
              <button className="bg-[#040E53] text-white py-4 px-14 border text-lg rounded-md">
                Get Started
              </button>

              {/* mouse icon */}
              <div className="absolute left-[48%] bottom-1 flex">
                <div class="animate-bounce p-2 w-10 h-10 rounded-full flex items-center justify-center">
                  <svg
                    class="w-6 h-6 text-black"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </div>

                <div>
                  <img src={mouse} width={25} height={25} alt="mouse icon" />
                  <p>Scroll bar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <img
            src={Hero}
            width={700}
            height={700}
            alt="hero background"
            className="place-self-end"
          />

          {/* Arrow Icon */}
        </div>
    </>
  );
}
