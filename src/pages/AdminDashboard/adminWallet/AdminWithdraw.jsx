import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import amazonpay from "../../../assets/adminDashboardImages/amazonpay.svg";
import mastercard from "../../../assets/adminDashboardImages/mastercard1.svg";
import paypal from "../../../assets/adminDashboardImages/paypal1.svg";
import skrill from "../../../assets/adminDashboardImages/skrill1.svg";
import visa from "../../../assets/adminDashboardImages/visa.svg";
import wallet from "../../../assets/adminDashboardImages/wallet.webp";
import { BankSelectInput, Input } from "../../../components/InputField";
import { withdrawalSchema } from "../../../schema/wallet";
import { banks } from "../../../utils/bankCodes";
import urls from "../../../utils/Url";
import LoadingSpinner from "../../../components/LoadingSpinner";

import ProfileHeader2 from "../../../components/ProfileHeader2";
import { ErrorToast, SuccessToast } from "../../../utils/toast";

const AdminWithdraw = () => {
  const navigate = useNavigate();

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
      reason: "",
      pin: null,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formHook;

  const onSubmit = async (data) => {
    setLoading(true);
    const token = JSON.parse(localStorage.getItem("user")).token;
    try {
      const response = await fetch(urls.adminTransfer, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        SuccessToast(response.message);
        navigate("/admin-dashboard/wallet/withdraw/success");
      }
    } catch (error) {
      ErrorToast(response.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ProfileHeader2 to={"/admin-dashboard/wallet"} />

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
              <BankSelectInput
                title={"Bank Name"}
                placeholder={"Enter your bank name"}
                register={register("bankName")}
                errorMessage={errors?.bankName?.message}
                required
                options={banks}
              />
              <Input
                type={"text"}
                title={"Account Number"}
                placeholder={"Enter your account number"}
                register={register("accountNumber")}
                errorMessage={errors?.accountNumber?.message}
                required
              />
              <Input
                type={"text"}
                title={"Amount"}
                placeholder={"Amount"}
                register={register("amount")}
                errorMessage={errors?.amount?.message}
                required
              />
              <Input
                type={"text"}
                title={"Remark"}
                placeholder={"Enter remark"}
                register={register("reason")}
                errorMessage={errors?.reason?.message}
                required
              />
              <Input
                type={"password"}
                title={"Pin"}
                placeholder={"Enter pin"}
                register={register("pin")}
                errorMessage={errors?.pin?.message}
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
