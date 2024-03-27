import React, { useEffect } from "react";
import WalletChart from "../../../components/adminWallet/WalletChart";
import WalletTab from "../../../components/adminWallet/WalletTab";
import ProfileLayout from "../../../components/layout/AdminProfileLayout";
import { walletData } from "../../../utils/Constants";

import CountUp from "react-countup";
import Balance from "../../../components/adminWallet/Balance";
import {
  useFetchBalance,
  useFetchEarnings,
  useFetchTransfers,
} from "../../../hooks/useFetchAdmin";
import { currencyFormatter } from "../../../utils/functn";

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
      {/* <div className="flex gap-2 items-center">
        <span
          className={`${
            title === "Earnings" ? "bg-[#96FEBE59]" : "bg-[#FE969659]"
          }  p-1 rounded-full`}
        >
          <GoArrowUpRight
            className={`${title === "Earnings" ? "text-green1" : "text-red1"}`}
          />
        </span>
        <p>{percentage}%</p>
      </div> */}
    </div>
  );
};

const AdminWallet = () => {
  const authUser = JSON.parse(localStorage.getItem("user")).user;
  const { fetchBalance, balance, isLoading, error } = useFetchBalance();
  const {
    fetchTransfers,
    transfers,
    // isLoading: transfersIsLoading,
    // error: transfersError,
  } = useFetchTransfers();

  const {
    fetchEarnings,
    earnings,
    // isLoading: earningsIsLoading,
    // error: earningsError,
  } = useFetchEarnings();

  useEffect(() => {
    fetchBalance();
    fetchTransfers();
    fetchEarnings();
  }, []);

  return (
    <ProfileLayout title={"Wallet"}>
      <div className="px-0 md:px-4 lg:px-14">
        <h2 className="font-bold mb-10 text-2xl">
          Welcome back, {authUser?.firstName}
        </h2>
        <div className="flex flex-col md:flex-row flex-1 gap-8 md:gap-12">
          <WalletStats
            title={"Earnings"}
            amount={earnings}
            // percentage={"12"}
            // isLoading={earningsIsLoading}
          />
          <WalletStats
            title={"Withdrawals"}
            amount={transfers}
            // percentage={"8"}
            // isLoading={transfersIsLoading}
          />
        </div>
        <div className="flex justify-between w-full mt-14">
          <WalletTab
            title1={"Earnings"}
            child1={
              <div className="overflow-x-auto">
                <div className="w-[700px] md:w-full">
                  <WalletChart data={walletData} />
                </div>
              </div>
            }
            title2={"Withdrawals"}
            child2={
              <div className="overflow-x-auto">
                <div className="w-[700px] md:w-full">
                  <WalletChart data={walletData} />
                </div>
              </div>
            }
          />
        </div>
        <Balance amount={balance} rate={"34"} />
      </div>
    </ProfileLayout>
  );
};

// AdminWallet.getLayout = (page) => <ProtectedLayout>{page}</ProtectedLayout>;

// AdminWallet.requireAuth = true;
export default AdminWallet;
