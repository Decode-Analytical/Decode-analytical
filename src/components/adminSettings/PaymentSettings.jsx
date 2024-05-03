import React, { useState } from "react";
import Button from "../Button";
import { Input } from "../InputField";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { ErrorToast, SuccessToast } from "../../utils/toast";
import { validate } from "../../utils/functn";
import { createPinSchema } from "../../schema/wallet";
import urls from "../../utils/Url";
import LoadingSpinner from "../LoadingSpinner";

const PaymentSettings = () => {
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
      const response = await Axios.post(urls.adminCreatePin, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      console.log(response, "response");

      if (response?.status === 200 || response?.status === 201) {
        SuccessToast(response?.data?.message);
      }
    } catch (error) {
      ErrorToast(error.response?.data?.message);
      console.log(error, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <h3 className="font-semibold">Create your transaction Pin</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col lg:flex-row gap-x-10 gap-y-5 mb-10 w-full"
        >
          <div className="flex flex-col sm:flex-row gap-x-12 w-full lg:w-[74%] mb-3">
            <Input
              type={"password"}
              label="New pin"
              placeholder="e.g. 1234"
              register={register("pin")}
              errorMessage={errors?.pin?.message}
              disabled={loading}
              isPassword={true}
            />
            <Input
              type={"password"}
              label="Confirm pin"
              placeholder="e.g. 1234"
              register={register("confirmPin")}
              errorMessage={errors?.confirmPin?.message}
              disabled={loading}
              isPassword={true}
            />
          </div>
          <span className="flex items-end">
            <Button
              type="submit"
              py={"py-3 sm:py-[17px]"}
              className={"mb-8 w-[250px]"}
            >
              {loading ? <LoadingSpinner color={"white"} /> : "Create my Pin"}
            </Button>
          </span>
        </form>
      </div>
      <div className="mt-20">
        <h3 className="font-semibold">Change Your transaction Pin </h3>
        <form>
          <div className="flex flex-col sm:flex-row gap-x-12 mb-6">
            <Input label="Current pin" placeholder="Current pin" />
            <Input label="New pin" placeholder="New pin" />
            <Input label="Retype pin" placeholder="Retype pin" />
          </div>
          <Button px={"px-16"} py={"py-3 sm:py-[17px]"}>
            Change Pin
          </Button>
        </form>
      </div>
    </>
  );
};

export default PaymentSettings;
