import React from "react";
import ViewDetailsLink from "../../utils/ViewDetails";

const DetailsCard = ({ title, sub, to, minW, children }) => {
  return (
    <div
      className={`bg-shadow rounded-md p-5 flex-1 min-w-[${minW || "315"}px]`}
    >
      <div className="flex justify-between gap-4">
        <h2 className="font-bold text-xl mb-1">{title}</h2>
        <select className="w-[110px] rounded-lg bg-white text-sm" name="" id="">
          <option value="weekly">This Week</option>
          <option value="monthly">This Month</option>
        </select>
      </div>
      <p className="">{sub}</p>
      <div>{children}</div>
      <ViewDetailsLink to={to} />
    </div>
  );
};

export default DetailsCard;
