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
import Axios from "axios";
import {
  ModalButton,
  ModalInput,
  ModalPrompt,
} from "../../../components/modal/ModalPrompt";
import { validate } from "../../../utils/functn";

const AdminWithdraw = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [forgot, setForgot] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const toggleForgot = () => {
    toggleModal();
    setForgot(!forgot);
  };

  const overlayClose = () => {
    setIsOpen(false);
    setForgot(false);
  };

  const formHook = useForm({
    resolver: (data) => validate(withdrawalSchema, data),
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
      const response = await Axios.post(urls.adminTransfer, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200 || response.status === 201) {
        SuccessToast(response.data.message);
        navigate("/admin-dashboard/wallet/withdraw/success");
      }
    } catch (error) {
      ErrorToast(error.response.data.message);
      if (error.response.data.message === "Invalid Pin") {
        toggleModal();
      }
      // if (error.response.data.message === "Insufficient funds") {
      //   toggleModal();
      // }
    } finally {
      setLoading(false);
    }
  };

  const onSubmitForgot = async (e, data) => {
    e.preventDefault();
    setLoading(true);
    const token = JSON.parse(localStorage.getItem("user")).token;
    try {
      const response = await Axios.post(urls.adminForgotPin, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      console.log(response, "response");

      if (response.status === 200 || response.status === 201) {
        SuccessToast(response.data.message);
        navigate("/admin-dashboard/wallet/reset-pin");
        overlayClose();
      }
    } catch (error) {
      ErrorToast(error.response.data.message);
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <BankSelectInput
                title={"Bank Name"}
                placeholder={"Enter your bank name"}
                register={register("bankName")}
                errorMessage={errors?.bankName?.message}
                disabled={loading}
                options={banks}
              />
              <Input
                type={"text"}
                title={"Account Number"}
                placeholder={"Enter your account number"}
                register={register("accountNumber")}
                errorMessage={errors?.accountNumber?.message}
                disabled={loading}
              />
              <Input
                type={"text"}
                title={"Amount"}
                placeholder={"min. ₦5000"}
                register={register("amount")}
                errorMessage={errors?.amount?.message}
                disabled={loading}
              />
              <Input
                type={"password"}
                title={"Pin"}
                placeholder={"Enter pin"}
                register={register("pin")}
                errorMessage={errors?.pin?.message}
                href={"/admin-dashboard/wallet/create-pin"}
                disabled={loading}
              />
              <Input
                type={"text"}
                title={"Remark"}
                placeholder={"Enter remark"}
                register={register("reason")}
                errorMessage={errors?.reason?.message}
                disabled={loading}
                notImportant
              />

              <button
                type="submit"
                className="bg-blue1 p text-white py-3 w-full rounded-md mt-10"
              >
                {loading ? <LoadingSpinner color={"white"} /> : "Continue"}
              </button>
            </form>
            {/* <button onClick={toggleModal}>Toggle</button> */}
            {isOpen && (
              <ModalPrompt
                title={"You entered a wrong pin"}
                text={
                  'Select “Forgot Pin” to reset your pin or "Retry" to try again'
                }
                overlayClose={overlayClose}
                danger
                customClass={"flex-col sm2:flex-row mt-10"}
              >
                <ModalButton onClick={toggleForgot} color>
                  Forgot Pin
                </ModalButton>
                <ModalButton onClick={toggleModal} bg>
                  Retry
                </ModalButton>
              </ModalPrompt>
            )}
            {forgot && (
              <ModalPrompt
                title={"Reset with Email"}
                text={"Please enter your email to reset your pin"}
                danger
                overlayClose={overlayClose}
                customClass={""}
              >
                <form
                  onSubmit={(e) => onSubmitForgot(e, { email: resetEmail })}
                  className="flex flex-col sm:flex-row w-full gap-5"
                >
                  <ModalInput
                    placeholder={"Enter your email here"}
                    notImportant
                    onChange={(e) => {
                      setResetEmail(e.target.value);
                    }}
                  />
                  <ModalButton onClick={toggleModal} bg>
                    Reset Pin
                  </ModalButton>
                </form>
              </ModalPrompt>
            )}
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
