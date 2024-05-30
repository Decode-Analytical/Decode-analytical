// import Axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import safe from "../../../assets/adminDashboardImages/safe.svg";
import { Input } from "../../../components/InputField";
import LoadingSpinner from "../../../components/LoadingSpinner";
import urls from "../../../utils/Url";
import { ErrorToast, SuccessToast } from "../../../utils/toast";
import { createPinSchema } from "../../../schema/wallet";
import { validate } from "../../../utils/functn";
import axios from "../../../services/axios";

const AdminCreatePin = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const formHook = useForm({
    resolver: (data) => validate(createPinSchema, data),
    defaultValues: {
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
      const response = await axios.post(urls.adminCreatePin, data, {
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
      <div className="flex justify-between items-center w-[97%] md:w-[90%] mx-auto max-w-[1280px] my-[60px] ">
        <div className="w-[90%] mx-auto lg:mx-0 lg:w-[45%]">
          <h2 className="font-bold text-2xl w-full md:w-[70%] mb-[25px]">
            Create your transaction pin here
          </h2>

          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                type={"password"}
                label={"New Pin"}
                placeholder={"e.g. 1234"}
                register={register("pin")}
                errorMessage={errors?.pin?.message}
                disabled={loading}
              />
              <Input
                type={"password"}
                label={"Confirm Pin"}
                placeholder={"e.g. 1234"}
                register={register("confirmPin")}
                errorMessage={errors?.confirmPin?.message}
                disabled={loading}
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
          <img src={safe} alt="safe" />
        </div>
      </div>
    </>
  );
};

export default AdminCreatePin;
