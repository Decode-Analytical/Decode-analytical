import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import amazonpay from "../../../assets/adminDashboardImages/amazonpay.svg";
import mastercard from "../../../assets/adminDashboardImages/mastercard1.svg";
import paypal from "../../../assets/adminDashboardImages/paypal1.svg";
import skrill from "../../../assets/adminDashboardImages/skrill1.svg";
import visa from "../../../assets/adminDashboardImages/visa.svg";
import wallet from "../../../assets/adminDashboardImages/wallet.webp";
import { BankSelectInput, Input } from "../../../components/InputField";
import LoadingSpinner from "../../../components/LoadingSpinner";
import ProfileHeader2 from "../../../components/ProfileHeader2";
import { withdrawalSchema } from "../../../schema/wallet";
import urls from "../../../utils/Url";
import { banks } from "../../../utils/bankCodes";
import { validate } from "../../../utils/functn";

const AdminWithdraw = () => {
  const [loading, setLoading] = useState(false);

  const [accountName, setAccountName] = useState("");

  const formHook = useForm({
    resolver: (data) => validate(withdrawalSchema, data),
    defaultValues: {
      bankName: "",
      accountNumber: "",
    },
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = formHook;

  const fetchAccountName = async (data) => {
    const token = JSON.parse(localStorage.getItem("user")).token;
    console.log("fired");
    setLoading(true);

    try {
      const response = await axios.get(urls.adminValidateAccount, {
        data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response, "response");
      if (response.status === 200 || response.status === 201) {
        console.log(response?.data?.account_name, "accountName");
        setAccountName(response?.data?.account_name);
        // setError("");
      }
    } catch (error) {
      console.log(error);
      // console.log(error, "error");
      // setError("Failed to fetch account name. Please try again.");
      setAccountName("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ProfileHeader2 to={"/admin-dashboard/wallet"} />
      <div className="flex justify-between items-center w-[97%] md:w-[90%] mx-auto max-w-[1280px] my-[60px] ">
        <div className="w-[90%] mx-auto lg:mx-0 lg:w-[45%]">
          <h2 className="font-bold text-2xl w-full md:w-[70%] mb-[25px]">
            Withdraw to Bank or an Online Payment.
          </h2>
          <div className="flex justify-between w-[100%]">
            <img className="-mr-5 max-w-[74px]" src={paypal} alt="paypal" />
            <img
              className="-mx-3 max-w-[74px]"
              src={mastercard}
              alt="mastercard"
            />
            <img className="-mx-10 -mb-5 max-w-[111px]" src={visa} alt="visa" />
            <img className="-mx-3 max-w-[74px]" src={skrill} alt="skrill" />
            <img
              className="-ml-5 max-w-[74px]"
              src={amazonpay}
              alt="amazonpay"
            />
          </div>
          <div>
            <form onSubmit={handleSubmit(fetchAccountName)}>
              <BankSelectInput
                label={"Bank Name"}
                placeholder={"Enter your bank name"}
                register={register("bankName")}
                errorMessage={errors?.bankName?.message}
                disabled={loading}
                options={banks}
                // onChange={() => fetchAccountName(formHook.getValues())}
                important
              />
              <Input
                type={"text"}
                label={"Account Number"}
                placeholder={"Enter your account number"}
                register={register("accountNumber")}
                errorMessage={errors?.accountNumber?.message}
                disabled={loading}
                // onChange={() => fetchAccountName(formHook.getValues())}
                important
              />

              <div>
                <p>Name</p>
                <div className="border border-gray-400 rounded-md px-4 py-2 sm:py-4 mb-5">
                  <p>{accountName}</p>
                </div>
              </div>
              {/* <button type="button" onClick={() => fetchAccountName()}>
                Validate
              </button> */}

              <button
                type="submit"
                className="bg-blue1 p text-white py-3 w-full rounded-md mt-10"
              >
                {loading ? <LoadingSpinner color={"white"} /> : "Continue"}
              </button>
            </form>
          </div>
        </div>
        <div className="w-[45%] hidden lg:block">
          <img src={wallet} alt="wallet" />
        </div>
      </div>
    </>
  );
};

export default AdminWithdraw;
