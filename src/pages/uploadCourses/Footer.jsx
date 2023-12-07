import React from "react";
// import forum from "../../assets/courseUploadImages/illustrations.png";
import forum from "../../assets/courseUploadImages/Illustrations.png"
// import forum1 from "../../assets/courseUploadImages/illustrations1.png";
import forum1 from "../../assets/courseUploadImages/Illustrations1.png";
import forum2 from "../../assets/courseUploadImages/Illustrations2.png"
// import forum2 from "../../assets/courseUploadImages/Illustrations2.png";
import { Link } from "react-router-dom";

export default function () {
  return (
    <footer className="grid sm:grid-cols-3 gap-4 my-5">
     <Link to="#"> <div className="flex flex-wrap justify-center items-center h-48 p-5 rounded-md shadow-2xl">
        <p className="text-2xl me-3 font-bold">Go to forum</p>
        <img src={forum} alt="forumImage" width={150} />
      </div></Link> 
     <Link to="#"> <div className="flex flex-wrap justify-center items-center h-48 p-5 rounded-md shadow-2xl">
        <p className="text-2xl me-3 font-bold ">Go to courses</p>
        <img src={forum1} alt="forumImage" width={150} />
      </div></Link> 
     <Link to="#"> <div className="flex flex-wrap justify-center items-center h-48 p-5 rounded-md shadow-2xl">
        <p className="text-2xl me-3 font-bold">Go to tools</p>
        <img src={forum2} alt="forumImage" width={150} />
      </div></Link> 
    </footer>
  );
}
