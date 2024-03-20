import React from "react";
import { MdOutlineArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";

const ViewDetailsLink = ({ to, viewDetails }) => {
  return (
    <Link
      className={`font-semibold items-center gap-2 mt-10 link-container w-fit ${
        viewDetails ? "flex" : "hidden"
      }`}
      to={to}
    >
      <p>VIEW DETAILS</p>
      <MdOutlineArrowForward className="text-xl arrow-icon " />
    </Link>
  );
};

export default ViewDetailsLink;
