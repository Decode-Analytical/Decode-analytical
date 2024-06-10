import React from "react";
import Courses from "./Courses";
import { Link } from "react-router-dom";
import { Explore } from "./styles";

export default function Course() {
  return (
    <>
      <Explore>
        <div className="explore">
          <div className="explore__head">
            <h5 className="heading">EXPLORE COURSES</h5>
            <p className="txt">
              Empower Your Journey: Invest in Knowledge Today!
            </p>
            <p className="sub_txt">
              we promise to embark you on a transformative career journey in
              tech with our comprehensive courses. Acquire cutting-edge skills,
              open doors to innovation, and shape a thriving future in the tech
              industry.
            </p>
          </div>
        </div>

        {/* // This button links to coursepage */}
      </Explore>
      <Courses />
    </>
  );
}
