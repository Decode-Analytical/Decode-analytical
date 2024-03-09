import React from "react";
import DetailsCard from "../components/adminTools/DetailsCard";

const StatsCard = ({ title, sub, count, earning, to }) => {
  return (
    <DetailsCard title={title} sub={sub} to={to} minW={"315"}>
      <h1 className="font-bold text-3xl mt-6 mb-4">{count}</h1>
      <p className="text-green-500">{earning}</p>
    </DetailsCard>
  );
};

export default StatsCard;
