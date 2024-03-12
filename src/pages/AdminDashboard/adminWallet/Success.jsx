import React from "react";
import success from "../../../assets/adminDashboardImages/success.webp";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex flex-col items-center h-[90vh] justify-center mx-auto max-w-[400px] w-[90%]">
      <img src={success} alt="success" className="w-[100%] max-w-[300px]" />
      <h1 className="font-bold text-3xl sm:text-4xl mb-5">Congratulations</h1>
      <p className="font-light text-center text-xl">
        Your transaction is being processed, you will receive an alert shortly
      </p>
      <Link
        to="/admin-dashboard/wallet"
        className="bg-blue1 flex justify-center p text-white py-3 w-full rounded-md mt-10"
      >
        Continue
      </Link>
    </div>
  );
};

export default Success;
