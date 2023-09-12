import React from "react";
import picOne from "../../assets/homepageImages/pics1.png";
import picTwo from "../../assets/homepageImages/pics2.png";
import picThree from "../../assets/homepageImages/pics3.png";
import Star from "../../components/homepageComponents/Star";

export default function Tutor() {
  return (
    <>
      <div className="border border-amber-500 text-center rounded-lg p-2 pt-6">
        <img src={picOne} width={70} className="center" />
        <h6 className="font-extrabold py-2 text-purple-800">Trevor Mitchell</h6>
        <Star />
        <p className="text-sm mb-10">
          “Ut tristique viverra sed porttitor senectus. A facilisis metus
          pretium ut habitant lorem. Velit vel bibendum eget aliquet sem nec, id
          sed. Tincidunt.”
        </p>
      </div>
      <div className="border border-amber-500 text-center rounded-lg p-2 pt-6">
        <img src={picTwo} width={70} className="center" />
        <h6 className="font-bold py-2 text-purple-800">Trevor Mitchell</h6>
        <Star />
        <p className="text-sm mb-10">
          “Ut tristique viverra sed porttitor senectus. A facilisis metus
          pretium ut habitant lorem. Velit vel bibendum eget aliquet sem nec, id
          sed. Tincidunt.”
        </p>
      </div>
      <div className="border border-amber-500 text-center rounded-lg p-2 pt-6">
        <img src={picThree} width={70} className="center" />
        <h6 className="font-bold py-2 text-purple-800">Trevor Mitchell</h6>
        <Star />
        <p className="text-sm mb-10">
          “Ut tristique viverra sed porttitor senectus. A facilisis metus
          pretium ut habitant lorem. Velit vel bibendum eget aliquet sem nec, id
          sed. Tincidunt.”
        </p>
      </div>
    </>
  );
}
