import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import ProfileLayout from "../../../components/ProfileLayout";
import WalletChart from "../../../components/adminWallet/WalletChart";
import WalletTab from "../../../components/adminWallet/WalletTab";
import { walletData } from "../../../utils/Constants";
import paypal from "../../../assets/adminDashboardImages/paypal.svg";
import mastercard from "../../../assets/adminDashboardImages/mastercard.svg";
import skrill from "../../../assets/adminDashboardImages/skrill.svg";
import zelle from "../../../assets/adminDashboardImages/zelle.svg";
import addmore from "../../../assets/adminDashboardImages/addmore.svg";
import { Link } from "react-router-dom";

const WalletStats = ({ title, amount, percentage }) => {
  return (
    <div className="flex flex-col w-full justify-between p-6 bg-shadow gap-7 relative">
      <div
        className={`${
          title === "Earnings" ? "bg-green1" : "bg-red1"
        } w-[5px] h-[95px] absolute left-0 top-[50%] -translate-y-[50%] rounded-full`}
      />
      <p className="text-lg">{title}</p>
      <h1 className="font-bold text-3xl">{amount}</h1>
      <div className="flex gap-2 items-center">
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
      </div>
    </div>
  );
};

const AdminWallet = () => {
  const authUser = JSON.parse(localStorage.getItem("user")).user;
  return (
    <ProfileLayout title={"Wallet"}>
      <h2 className="font-bold mb-12 text-2xl">
        Welcome back, {authUser.firstName}
      </h2>
      <div className="flex flex-1 gap-[130px]">
        <WalletStats title={"Earnings"} amount={"$12,000"} percentage={"12"} />
        <WalletStats title={"Withdrawals"} amount={"$4,000"} percentage={"8"} />
      </div>
      <div className="flex justify-between w-full mt-14">
        <WalletTab
          title1={"Earnings"}
          child1={<WalletChart data={walletData} />}
          title2={"Withdrawals"}
          child2={<WalletChart data={walletData} />}
        />
      </div>
      <div className="bg-shadow">
        <div className="flex p-7 mt-11 flex-col items-center ">
          <p className="text-2xl font-light mb-10">Total Balance</p>
          <h1 className="font-semibold text-[50px]">$8,000</h1>
          <div className="flex gap-2 mt-2 font-light items-center">
            <span className="bg-[#96FEBE59] p-1 rounded-full">
              <GoArrowUpRight className="text-green1" />
            </span>
            <p className="text-lg">34%</p>
          </div>
          <Link
            to={"/admin-dashboard/wallet/withdraw"}
            className={
              "flex items-center py-3 px-4 rounded-lg gap-2 bg-blue1 text-white w-[400px] justify-center font-light mt-5"
            }
          >
            Withdraw
          </Link>
        </div>
        <div className="mt-[70px] px-7 pb-7 ">
          <p>Quick Withdraw</p>
          <div className="flex">
            <img src={paypal} alt="paypal" />
            <img src={mastercard} alt="mastercard" />
            <img src={zelle} alt="zelle" />
            <img src={skrill} alt="skrill" />
            <img className="mx-5" src={addmore} alt="addmore" />
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default AdminWallet;
