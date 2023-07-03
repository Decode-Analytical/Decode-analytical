import clsx from "clsx";
import React from "react";
import { RxStarFilled } from "react-icons/rx";


const Rating = ({rate}) => {
  return (
    <div className="grid grid-cols-[repeat(5,_auto)] gap-3 mt-3 w-max">
      {[...Array(5)].map((_, i) => (
        <RxStarFilled
          key={i}
          className={clsx(
            "text-sm",
            i + 1 <= rate ? "text-[#F8CC28]" : "text-neutral-700"
          )}
        />
      ))}
    </div>
  );
};

export default Rating;
