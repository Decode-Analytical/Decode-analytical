import React from "react";
import Tab from "../Tab";
import WalletChart from "./WalletChart";

const FilteredCharts = ({ walletData }) => {
  return (
    <div className="px-7">
      <Tab
        mt={"mt-0"}
        border={"border-b-0"}
        title1={"Weekly"}
        child1={<WalletChart data={walletData} />}
        title2={"Monthly"}
        child2={<WalletChart data={walletData} />}
        title3={"Yearly"}
        child3={<WalletChart data={walletData} />}
      />
    </div>
  );
};

export default FilteredCharts;
