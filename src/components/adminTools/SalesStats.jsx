import React from "react";
import DetailsCard from "./DetailsCard";

const SalesStats = ({ heading, sub, count, to, title, customClass }) => {
  return (
    <DetailsCard customClass={customClass} heading={heading} sub={sub} to={to}>
      <div className="flex flex-col justify-between gap-4">
        <p className="text-lg">{title}</p>
        <h1 className="font-bold text-3xl">{count}</h1>
      </div>
    </DetailsCard>
  );
};

export default SalesStats;
