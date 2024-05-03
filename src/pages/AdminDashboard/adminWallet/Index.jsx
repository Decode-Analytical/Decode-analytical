import React, { useEffect, useMemo } from "react";
import WalletTab from "../../../components/adminWallet/WalletTab";
import ProfileLayout from "../../../components/layout/AdminProfileLayout";
import { walletData } from "../../../utils/Constants";

import CountUp from "react-countup";
import Balance from "../../../components/adminWallet/Balance";
import {
  useFetchBalance,
  useFetchEarnings,
  useFetchEarningsChart,
  useFetchTransfers,
  useFetchWithdrawalsChart,
} from "../../../hooks/useFetchAdmin";
import { currencyFormatter } from "../../../utils/functn";

import FilteredCharts from "../../../components/adminWallet/WithdrawalsCharts";
import EarningsCharts from "../../../components/adminWallet/EarningsCharts";
import WithdrawalsCharts from "../../../components/adminWallet/WithdrawalsCharts";

const Skeleton = () => (
  <div className="flex items-start gap-x-3 my-2 animate-pulse">
    <div>
      <h1 className="font-bold w-[180px] h-10 bg-gray-300 rounded mb-2"></h1>
    </div>
  </div>
);

const WalletStats = ({ title, amount, isLoading }) => {
  return (
    <div className="flex flex-col w-full justify-between p-6 bg-shadow gap-4 relative">
      <div
        className={`${
          title === "Earnings" ? "bg-green1" : "bg-red1"
        } w-[5px] h-[95px] absolute left-0 top-[50%] -translate-y-[50%] rounded-full`}
      />
      <p className="text-lg">{title}</p>
      {isLoading ? (
        <Skeleton />
      ) : (
        <h1 className="font-bold text-3xl">
          {
            <CountUp
              start={0}
              end={amount}
              duration={2}
              separator=","
              formattingFn={currencyFormatter}
            />
          }
        </h1>
      )}
    </div>
  );
};

const AdminWallet = () => {
  const authUser = useMemo(() => {
    return JSON.parse(localStorage.getItem("user")).user;
  }, []);

  const {
    fetchData: fetchEarnings,
    data: earnings,
    // isLoading: earningsLoading,
    // error: earningsError,
  } = useFetchEarnings();
  const {
    fetchData: fetchBalance,
    data: balance,
    // isLoading: balanceLoading,
    // error: balanceError,
  } = useFetchBalance();
  const {
    fetchData: fetchTransfers,
    data: transfers,
    // isLoading: transfersLoading,
    // error: transfersError,
  } = useFetchTransfers();
  const {
    fetchData: fetchEarningsChart,
    data: earningsChart,
    // isLoading: EarningsChartLoading,
    // error: EarningsChartError,
  } = useFetchEarningsChart();
  const {
    fetchData: fetchWithdrawalsChart,
    data: withdrawalsChart,
    // isLoading: WithdrawalsChartLoading,
    // error: WithdrawalsChartError,
  } = useFetchWithdrawalsChart();

  useEffect(() => {
    fetchBalance();
    fetchTransfers();
    fetchEarnings();
    fetchEarningsChart();
    fetchWithdrawalsChart();
  }, []);

  const earningData = earnings?.totalEarnings;
  const transfersData = transfers?.totalWithdrawal;
  const balanceData = balance?.wallet;
  const earningsChartData = earningsChart;
  const withdrawalsChartData = withdrawalsChart;

  return (
    <ProfileLayout title={"Wallet"}>
      <div className="px-0 md:px-4 lg:px-14">
        <h2 className="font-bold mb-10 text-2xl">
          Welcome back, {authUser?.firstName}
        </h2>
        <div className="flex flex-col md:flex-row flex-1 gap-8 md:gap-12">
          <WalletStats title={"Earnings"} amount={earningData} />
          <WalletStats title={"Withdrawals"} amount={transfersData} />
        </div>
        <div className="flex justify-between w-full mt-14 ">
          <WalletTab
            title1={"Earnings"}
            child1={
              <div className="overflow-x-auto">
                <div className="w-[700px] md:w-full ">
                  <EarningsCharts walletData={earningsChartData} />
                </div>
              </div>
            }
            title2={"Withdrawals"}
            child2={
              <div className="overflow-x-auto">
                <div className="w-[700px] md:w-full">
                  <WithdrawalsCharts walletData={withdrawalsChartData} />
                </div>
              </div>
            }
          />
        </div>
        <Balance amount={balanceData} rate={"34"} />
      </div>
    </ProfileLayout>
  );
};

// AdminWallet.getLayout = (page) => <ProtectedLayout>{page}</ProtectedLayout>;

// AdminWallet.requireAuth = true;
export default AdminWallet;
