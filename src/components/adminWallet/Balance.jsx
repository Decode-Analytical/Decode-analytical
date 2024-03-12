import React from "react";
import paypal from "../../assets/adminDashboardImages/paypal.svg";
import mastercard from "../../assets/adminDashboardImages/mastercard.svg";
import skrill from "../../assets/adminDashboardImages/skrill.svg";
import zelle from "../../assets/adminDashboardImages/zelle.svg";
import addmore from "../../assets/adminDashboardImages/addmore.svg";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { currencyFormatter } from "../../utils/functn";

const Skeleton = () => (
  <div className="flex items-start gap-x-3 my-2 animate-pulse">
    <div>
      <h2 className="font-bold w-[300px] h-14 bg-gray-300 rounded mb-2"></h2>
    </div>
  </div>
);

const Balance = ({ amount, rate, isLoading }) => {
  return (
    <div className="bg-shadow">
      <div className="flex mx-auto max-w-[400px] p-7 mt-11 flex-col items-center ">
        <p className="text-2xl font-light mb-10">Total Balance</p>
        {isLoading ? (
          <Skeleton />
        ) : (
          <h1 className="font-semibold text-[50px]">
            {currencyFormatter(amount)}
          </h1>
        )}
        <div className="flex gap-2 mt-2 font-light items-center">
          <span className="bg-[#96FEBE59] p-1 rounded-full">
            <GoArrowUpRight className="text-green1" />
          </span>
          <p className="text-lg">{rate}%</p>
        </div>
        <Link
          to={"/admin-dashboard/wallet/withdraw"}
          className={
            "flex items-center py-3 px-4 rounded-lg gap-2 bg-blue1 text-white w-full justify-center font-light mt-5"
          }
        >
          Withdraw
        </Link>
      </div>
      <div className="mt-[70px] px-7 pb-7 ">
        <p>Quick Withdraw</p>
        <div className="flex flex-wrap">
          <img src={paypal} alt="paypal" />
          <img src={mastercard} alt="mastercard" />
          <img src={zelle} alt="zelle" />
          <img src={skrill} alt="skrill" />
          <img className="mx-5" src={addmore} alt="addmore" />
        </div>
      </div>
    </div>
  );
};

export default Balance;
