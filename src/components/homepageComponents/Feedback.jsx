import React from "react";
import { FeedBack } from "./styles";

import img1 from "../../pages/image1.png";
import img2 from "../../pages/image2.png";
import img3 from "../../pages/image3.png";
import { MdStarRate } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";

const Feeback = () => {
  return (
    <FeedBack>
      <div className="explore">
        <div className="explore__head">
          <p className="txt">Amazing Stories</p>
          <h5 className="heading">FEEDBACKS FROM LEARNERS</h5>
          <p className="sub_txt">
            Join Decode Analytical now to unlock a world of knowledge and
            skill-building. Become part of our community, learn from experts,
            and later share your inspiring success story!
          </p>
        </div>
        <div className="explore__box">
          <div className="box">
            <img src={img1} className="box__img" alt="image" />
            <div className="box__txt">
              <p className="head">Trevor Mitchell</p>
              <div className="stars">
                <MdStarRate className="star" />
                <MdStarRate className="star" />
                <MdStarRate className="star" />
                <IoIosStarOutline className="empty-star" />
                <IoIosStarOutline className="empty-star" />
              </div>
              <p className="sub_txt">
                “Ut tristique viverra sed porttitor senectus. A facilisis metus
                pretium ut habitant lorem. Velit vel bibendum eget aliquet sem
                nec, id sed. Tincidunt.”
              </p>
            </div>
          </div>
          <div className="box">
            <img src={img2} className="box__img" alt="image" />
            <div className="box__txt">
              <p className="head">Trevor Mitchell</p>
              <div className="stars">
                <MdStarRate className="star" />
                <MdStarRate className="star" />
                <MdStarRate className="star" />
                <IoIosStarOutline className="empty-star" />
                <IoIosStarOutline className="empty-star" />
              </div>
              <p className="sub_txt">
                “Ut tristique viverra sed porttitor senectus. A facilisis metus
                pretium ut habitant lorem. Velit vel bibendum eget aliquet sem
                nec, id sed. Tincidunt.”
              </p>
            </div>
          </div>
          <div className="box">
            <img src={img3} className="box__img" alt="image" />
            <div className="box__txt">
              <p className="head">Trevor Mitchell</p>
              <div className="stars">
                <MdStarRate className="star" />
                <MdStarRate className="star" />
                <MdStarRate className="star" />
                <IoIosStarOutline className="empty-star" />
                <IoIosStarOutline className="empty-star" />
              </div>
              <p className="sub_txt">
                “Ut tristique viverra sed porttitor senectus. A facilisis metus
                pretium ut habitant lorem. Velit vel bibendum eget aliquet sem
                nec, id sed. Tincidunt.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </FeedBack>
  );
};

export default Feeback;
