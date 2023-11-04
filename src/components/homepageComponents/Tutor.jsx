import React from "react";
import picOne from "../../assets/homepageImages/pics1.png";
import Star from "../../components/homepageComponents/Star";
import { Link } from "react-router-dom";

<<<<<<< HEAD

export default function Tutor({ firstName, lastName, id, comments, picture, email}) {
 
  return (
    <>
     <Link to={`/tutor/${id}`}>
      <div className="border border-amber-500 text-center rounded-lg p-2 pt-6">
          <img src={picture ? picture.path : picOne} width={70} className="center" />
=======
export default function Tutor({
  firstName,
  lastName,
  id,
  comments,
  picture,
  email,
}) {
  return (
    <>
      <Link to={`/tutor/${id}`}>
        <div className="border border-amber-500 text-center rounded-lg p-2 pt-6">
          <img
            src={picture ? picture.path : picOne}
            width={70}
            className="center"
          />
>>>>>>> AdminHomePage
          <h6 className="font-extrabold py-2 text-purple-800">
            {firstName} {lastName}
          </h6>
          <Star />
          <p className="text-sm mb-10">
<<<<<<< HEAD
          {comments ? comments : "comments here"}
          </p>
      </div></Link>
     
=======
            {comments ? comments : "comments here"}
          </p>
        </div>
      </Link>
>>>>>>> AdminHomePage
    </>
  );
}
