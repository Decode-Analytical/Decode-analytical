import React from "react";
import { MdOutlineArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";

const ViewDetailsLink = ({ to }) => {
  return (
    <Link
      className="font-semibold flex items-center gap-2 mt-10 link-container w-fit"
      to={to}
    >
      <p>VIEW DETAILS</p>
      <MdOutlineArrowForward className="text-xl arrow-icon " />
    </Link>
  );
};

export default ViewDetailsLink;
