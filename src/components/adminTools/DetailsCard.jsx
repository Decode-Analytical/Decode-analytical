import React from "react";
import ViewDetailsLink from "../ViewDetails";

const DetailsCard = ({
  heading,
  sub,
  to,
  children,
  viewDetails,
  customClass,
}) => {
  return (
    <div className={`bg-shadow rounded-md sm:w-fit flex-1 p-5  ${customClass}`}>
      <div className="flex justify-between gap-4">
        <h2 className="font-bold text-xl mb-1">{heading}</h2>
        {/* <select className="w-[110px] rounded-lg bg-white text-sm" name="" id="">
          <option value="weekly">This Week</option>
          <option value="monthly">This Month</option>
        </select> */}
      </div>
      <p className="">{sub}</p>
      <div>{children}</div>
      <ViewDetailsLink to={to} viewDetails={viewDetails} />
    </div>
  );
};

export default DetailsCard;
