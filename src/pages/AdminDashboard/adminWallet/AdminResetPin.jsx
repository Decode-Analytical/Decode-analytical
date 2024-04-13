import Axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import security from "../../../assets/adminDashboardImages/security.svg";
import { Input } from "../../../components/InputField";
import LoadingSpinner from "../../../components/LoadingSpinner";
import ProfileHeader2 from "../../../components/ProfileHeader2";
import urls from "../../../utils/Url";
import { ErrorToast, SuccessToast } from "../../../utils/toast";
import { resetPinSchema } from "../../../schema/wallet";
import { validate } from "../../../utils/functn";

const AdminResetPin = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const formHook = useForm({
    resolver: (data) => validate(resetPinSchema, data),
    defaultValues: {
      otp: "",
      pin: "",
      confirmPin: "",
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
      const response = await Axios.put(urls.adminResetPin, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response?.status === 200 || response?.status === 201) {
        SuccessToast(response?.data?.message);
        navigate("/admin-dashboard/wallet/withdraw");
      }
    } catch (error) {
      ErrorToast(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ProfileHeader2 to={"/admin-dashboard/wallet"} />
      <div className="flex justify-around items-center w-[97%] md:w-[90%] mx-auto max-w-[1280px] my-[60px] mt-[120px]">
        <div className="w-[90%] mx-auto lg:mx-0 lg:w-[45%]">
          <h2 className="font-bold text-2xl w-[70%] mb-[25px]">
            Reset your transaction pin here
          </h2>

          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                type={"text"}
                title={"Enter OTP"}
                placeholder={"e.g. 1234"}
                register={register("otp")}
                errorMessage={errors?.otp?.message}
                // required
              />
              <Input
                type={"password"}
                title={"Enter New Pin"}
                placeholder={"e.g. 1234"}
                register={register("pin")}
                errorMessage={errors?.pin?.message}
                // required
                isPassword={true}
              />
              <Input
                type={"password"}
                title={"Confirm New Pin"}
                placeholder={"e.g. 1234"}
                register={register("confirmPin")}
                errorMessage={errors?.confirmPin?.message}
                // required
                isPassword={true}
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
        <div className="hidden lg:block">
          <img src={security} alt="security" />
        </div>
      </div>
    </>
  );
};

export default AdminResetPin;
