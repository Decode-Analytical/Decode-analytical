import React from "react";
import forum from "../../assets/courseUploadImages/illustrations.png";
import forum1 from "../../assets/courseUploadImages/illustrations1.png";
import forum2 from "../../assets/courseUploadImages/illustrations2.png";
import { Link } from "react-router-dom";

export default function () {
  return (
    <footer className="grid sm:grid-cols-3 gap-4 my-5">
     <Link to="#"> <div className="flex flex-wrap justify-center bg-zinc-200 items-center p-5 rounded-md shadow-md">
        <p className="font-bold text-sm me-3">Go to forum</p>
        <img src={forum} alt="forumImage" width={100} />
      </div></Link> 
     <Link to="#"> <div className="flex flex-wrap justify-center bg-zinc-200 items-center p-5 rounded-md shadow-md">
        <p className="font-bold text-sm me-3 ">Go to courses</p>
        <img src={forum1} alt="forumImage" width={100} />
      </div></Link> 
     <Link to="#"> <div className="flex flex-wrap justify-center bg-zinc-200 items-center p-5 rounded-md shadow-md">
        <p className="font-bold text-sm me-3">Go to tools</p>
        <img src={forum2} alt="forumImage" width={100} />
      </div></Link> 
    </footer>
  );
}
