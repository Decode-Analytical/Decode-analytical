import React from "react";
import { MdOutlineStarBorder, MdOutlineStar } from "react-icons/md";

const StarRating = ({ rating, totalStars = 5, verified }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < totalStars; i++) {
      if (i < rating) {
        stars.push(<MdOutlineStar className="text-[#E6D805]" key={i} />); // Full star
      } else {
        stars.push(<MdOutlineStarBorder className="text-gray-400" key={i} />); // Empty star
      }
    }
    return stars;
  };

  return (
    <div className="flex gap-3 items-center">
      <div className="flex gap-2 items-center">
        <span className="flex">{renderStars()}</span>
        <span>
          {rating}/{totalStars}
        </span>
      </div>
      <span>({verified} ratings)</span>
    </div>
  );
};

export default StarRating;
