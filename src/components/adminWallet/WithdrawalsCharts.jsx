import React from "react";
import Tab from "../Tab";
import WalletChart from "./WalletChart";

const WithdrawalsCharts = ({ walletData }) => {
  return (
    <div className="px-7">
      <Tab
        mt={"mt-0"}
        border={"border-b-0"}
        title1={"Weekly"}
        child1={
          walletData?.weeklyWithdrawal &&
          walletData.weeklyWithdrawal.length > 0 ? (
            <WalletChart
              data={walletData.weeklyWithdrawal}
              x={Object.keys(walletData.weeklyWithdrawal[0])[0]}
              y={Object.keys(walletData.weeklyWithdrawal[0])[2]}
              xTitle={"Week"}
              yTitle={"Withdrawals(₦)"}
              position={"insideTopRight"}
            />
          ) : null
        }
        title2={"Monthly"}
        child2={
          walletData?.monthlyWithdrawal &&
          walletData.monthlyWithdrawal.length > 0 ? (
            <WalletChart
              data={walletData.monthlyWithdrawal}
              x={Object.keys(walletData.monthlyWithdrawal[0])[0]}
              y={Object.keys(walletData.monthlyWithdrawal[0])[1]}
              xTitle={"Month"}
              yTitle={"Withdrawals(₦)"}
              position={"insideTopRight"}
            />
          ) : null
        }
        title3={"Yearly"}
        child3={
          walletData?.yearlyWithdrawal &&
          walletData.yearlyWithdrawal.length > 0 ? (
            <WalletChart
              data={walletData.yearlyWithdrawal}
              x={Object.keys(walletData.yearlyWithdrawal[0])[0]}
              y={Object.keys(walletData.yearlyWithdrawal[0])[1]}
              xTitle={"Year"}
              yTitle={"Withdrawals(₦)"}
              position={"insideTopRight"}
            />
          ) : null
        }
      />
    </div>
  );
};

export default WithdrawalsCharts;
