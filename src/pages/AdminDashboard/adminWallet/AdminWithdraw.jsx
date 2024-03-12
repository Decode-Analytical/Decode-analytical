import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import amazonpay from "../../../assets/adminDashboardImages/amazonpay.svg";
import logo from "../../../assets/adminDashboardImages/logo.png";
import mastercard from "../../../assets/adminDashboardImages/mastercard1.svg";
import paypal from "../../../assets/adminDashboardImages/paypal1.svg";
import skrill from "../../../assets/adminDashboardImages/skrill1.svg";
import visa from "../../../assets/adminDashboardImages/visa.svg";
import wallet from "../../../assets/adminDashboardImages/wallet.webp";
import urls from "../../../utils/Url";
import Input from "../../../components/Input";
import { withdrawalSchema } from "../../../schema/wallet";

const AdminWithdraw = () => {
  const authUser = JSON.parse(localStorage.getItem("user")).user;
  const [loading, setLoading] = useState(false);

  const formHook = useForm({
    resolver: (data) => {
      return withdrawalSchema.validate(data, { abortEarly: false }).then(
        () => {
          return { values: data, errors: {} };
        },
        (validationErrors) => {
          return {
            values: {},
            errors: validationErrors.inner.reduce((acc, error) => {
              acc[error.path] = {
                message: error.message,
                type: error.type,
              };
              return acc;
            }, {}),
          };
        }
      );
    },
    defaultValues: {
      bankName: "",
      accountNumber: "",
      amount: "",
      verificationCode: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formHook;

  const onSubmit = async (data) => {
    console.log(data);
    //   try {
    //     // Make your POST request here with the form data
    //     const response = await fetch(urls.adminWithdraw, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(data),
    //     });

    //     // Handle the response accordingly
    //     if (response.ok) {
    //       console.log("Post request successful");
    //       console.log(response);
    //     } else {
    //       console.error("Post request failed");
    //     }
    //   } catch (error) {
    //     console.error("Error making POST request", error);
    //   }
    // };
  };

  return (
    <>
      <div className="bg-shadow py-2">
        <div className="w-[90%] mx-auto max-w-[1280px] ">
          <div className="flex justify-between items-center  ">
            <div>
              {authUser?.picture[0]?.path ? (
                <img
                  className="max-w-[40px] mt-1 rounded-full"
                  src={authUser?.picture[0]?.path}
                />
              ) : (
                <div className="flex justify-center items-center min-w-[50px] h-[50px] bg-gray-400 mt-1 rounded-full">
                  <IoPerson className="text-[30px] text-white1" />
                </div>
              )}
            </div>
            <Link to="/">
              <img src={logo} alt="logo" className="w-[50px]" />
            </Link>
            <Link
              className="border border-blue1 px-4 py-1 rounded-md text-blue1"
              to="/admin-dashboard/wallet"
            >
              Exit
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-[97%] md:w-[90%] mx-auto max-w-[1280px] my-[60px] ">
        <div className="w-[90%] mx-auto lg:mx-0 lg:w-[45%]">
          <h2 className="font-bold text-2xl w-[70%] mb-[25px]">
            Withdraw to Bank or an Online Payment.
          </h2>
          <div className="flex justify-between w-[100%]">
            <img className="-mx-3 max-w-[74px]" src={paypal} alt="paypal" />
            <img
              className="-mx-3 max-w-[74px]"
              src={mastercard}
              alt="mastercard"
            />
            <img className="-mx-10 -mb-5 max-w-[104px]" src={visa} alt="visa" />
            <img className="-mx-3 max-w-[74px]" src={skrill} alt="skrill" />
            <img
              className="-mx-3 max-w-[74px]"
              src={amazonpay}
              alt="amazonpay"
            />
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                title={"Bank Name"}
                placeholder={"Enter your bank name"}
                register={register("bankName")}
                errorMessage={errors?.bankName?.message}
                required
              />
              <Input
                title={"Account Number"}
                placeholder={"Enter your account number"}
                register={register("accountNumber")}
                errorMessage={errors?.accountNumber?.message}
                required
              />
              <Input
                title={"Amount"}
                placeholder={"min. $15"}
                register={register("amount")}
                errorMessage={errors?.amount?.message}
                required
              />
              <Input
                title={"Verification code"}
                placeholder={"Enter verification code"}
                register={register("verificationCode")}
                errorMessage={errors?.verificationCode?.message}
                required
              />

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
