import React from "react";
import clsx from "clsx";

// import Rectangle17 from "../homeGridComponents/Rectangle17.png";
// import Rectangle18 from "../homeGridComponents/Rectangle18.png";

export default function HomeGrid({img, title, description, orderleft }) {
  return (
    <div className="bg-[#B1B4CA0F] py-20">
      <div className="container flex space-x-5 items-center mx-auto">
        <img
          src={img}
          width={1500}
          height={1500}
          alt="feature1"
          className={clsx("rounded-3xl", orderleft && "order-2")}
        />
        <div className="grid grid-rows-[auto_1fr] gap-2">
          <p className="text-3xl font-semibold text-[#040E53] leading-[44px] ">
            {title}
          </p>
          <p className="text-xl leading-[30px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
