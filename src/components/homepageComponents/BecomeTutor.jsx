import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../pages/tutorImg.png";
import { Tutor } from "./styles";
import { Link } from "react-router-dom";

export default function BecomeTutor() {
  return (
    <Tutor>
      <div className="box__txt">
        <h6 className="head_txt">Teach on Decode Alaytical</h6>
        <h5 className="sub_head">BECOME AN INSTRUCTOR</h5>
        <p className="sub_txt">
          To become an instructor on Decode Analytical, sign up on the platform,
          create a profile highlighting your expertise, and propose courses.
          Benefit from a wide learner base, advanced teaching tools, and revenue
          sharing opportunities. Share your knowledge, earn income, and
          contribute to learners' growth in a dynamic online community.
        </p>
        <div className="link">
          <Link to="#" className="btn_link">
            Start teaching today
            <FaArrowRight className="" />
          </Link>
        </div>
      </div>
      <div>
        <img src={Instructor} alt="tutorImage" />
      </div>
    </Tutor>
  );
}
