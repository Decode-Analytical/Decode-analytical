import React from "react";
import Tab from "../Tab";
import WalletChart from "./WalletChart";

const EarningsCharts = ({ walletData }) => {
  return (
    <div className="px-7">
      <Tab
        mt={"mt-0"}
        border={"border-b-0"}
        title1={"Weekly"}
        child1={
          walletData?.weeklyEarnings && walletData.weeklyEarnings.length > 0 ? (
            <WalletChart
              data={walletData.weeklyEarnings}
              x={Object.keys(walletData.weeklyEarnings[0])[0]}
              y={Object.keys(walletData.weeklyEarnings[0])[2]}
              xTitle={"Week"}
              yTitle={"Earnings(₦)"}
              position={"insideTop"}
              // name={Object.keys(walletData.weeklyEarnings[0])[2]}
            />
          ) : null
        }
        title2={"Monthly"}
        child2={
          walletData?.monthlyEarnings &&
          walletData.monthlyEarnings.length > 0 ? (
            <WalletChart
              data={walletData.monthlyEarnings}
              x={Object.keys(walletData.monthlyEarnings[0])[0]}
              y={Object.keys(walletData.monthlyEarnings[0])[1]}
              xTitle={"Month"}
              yTitle={"Earnings(₦)"}
              position={"insideTop"}
            />
          ) : null
        }
        title3={"Yearly"}
        child3={
          walletData?.yearlyEarnings && walletData.yearlyEarnings.length > 0 ? (
            <WalletChart
              data={walletData.yearlyEarnings}
              x={Object.keys(walletData.yearlyEarnings[0])[0]}
              y={Object.keys(walletData.yearlyEarnings[0])[1]}
              xTitle={"Year"}
              yTitle={"Earnings(₦)"}
              position={"insideTop"}
            />
          ) : null
        }
      />
    </div>
  );
};

export default EarningsCharts;
