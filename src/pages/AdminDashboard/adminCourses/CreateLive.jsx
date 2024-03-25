import React, { useState } from "react";
import { Heading } from "../../../components/Heading";
import logo from "../../../assets/adminDashboardImages/logo.svg";
import vector1 from "../../../assets/adminDashboardImages/vector1.svg";
import vector2 from "../../../assets/adminDashboardImages/vector2.svg";
import { Link } from "react-router-dom";
import {
  Input,
  Radio,
  SelectInput,
  TextArea,
} from "../../../components/InputField";
import Button from "../../../components/Button";
import { useForm } from "react-hook-form";

const CreateLive = () => {
  const timeZoneOptions = [
    {
      label: "West African Time",
      value: "wat",
    },
    {
      label: "Central European Time",
      value: "cet",
    },
    {
      label: "Eastern Standard Time",
      value: "est",
    },
    {
      label: "Pacific Standard Time",
      value: "pst",
    },
    {
      label: "Indian Standard Time",
      value: "ist",
    },

    {
      label: "Brasília Time",
      value: "brt",
    },
    {
      label: "Japan Standard Time",
      value: "jst",
    },
    {
      label: "Greenwich Mean Time",
      value: "gmt",
    },
    {
      label: "Mountain Standard Time",
      value: "mst",
    },
  ];

  const durationOptions = [
    {
      label: "0 hour",
      value: "0",
    },
    {
      label: "1 hour",
      value: "1",
    },
    {
      label: "2 hours",
      value: "2",
    },
    {
      label: "3 hours",
      value: "3",
    },
    {
      label: "4 hours",
      value: "4",
    },
    {
      label: "5 hours",
      value: "5",
    },
    {
      label: "6 hours",
      value: "6",
    },
    {
      label: "7 hours",
      value: "7",
    },
    {
      label: "8 hours",
      value: "8",
    },
    {
      label: "9 hours",
      value: "9",
    },
  ];

  const [loading, setLoading] = useState(false);

  const formHook = useForm({
    // resolver: (data) => {
    //   return withdrawalSchema.validate(data, { abortEarly: false }).then(
    //     () => {
    //       return { values: data, errors: {} };
    //     },
    //     (validationErrors) => {
    //       return {
    //         values: {},
    //         errors: validationErrors.inner.reduce((acc, error) => {
    //           acc[error.path] = {
    //             message: error.message,
    //             type: error.type,
    //           };
    //           return acc;
    //         }, {}),
    //       };
    //     }
    //   );
    // },
    defaultValues: {
      title: "",
      description: "",
      startDate: "",
      startTime: "",
      duration: null,
      timeZone: "",
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

  const [selected, setSelected] = useState("Free");

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  console.log(selected);

  return (
    <div className="max-w-[1280px] gap-8 w-full flex items-center mx-auto">
      <div className="mx-auto w-[50%]">
        <div className="mb-6">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[90px]" />
          </Link>
        </div>
        <Heading title={"Create your Live Lesson here."} />
        <form>
          <div className="w-full mb-7">
            <Input
              title={"Title"}
              placeholder={"Enter your course title"}
              type={"text"}
            />
            <TextArea
              title={"Description"}
              placeholder={"Enter your course description"}
            />
            <div className="flex gap-12 w-full">
              <Input
                title={"Start Date"}
                type={"date"}
                onChange={handleSelect}
              />
              <Input
                title={"Start Time"}
                type={"time"}
                onChange={handleSelect}
              />
            </div>
            <div className="flex gap-12">
              <SelectInput
                title={"Duration"}
                options={durationOptions}
                valueKey={"value"}
                labelKey={"label"}
                // customClass={"flex-1"}
              />
              <SelectInput
                title={"Time zone"}
                options={timeZoneOptions}
                valueKey={"value"}
                labelKey={"label"}
                // customClass={"flex-1"}
              />
            </div>
            <div className="mt-9">
              <legend className="font-light">Pricing</legend>
              <div className="flex gap-4">
                <Radio
                  title={"Free"}
                  name={"price"}
                  value={"free"}
                  defaultChecked
                  // checked={selected === "free"}
                  onChange={handleSelect}
                />
                <Radio
                  title={"Paid"}
                  name={"price"}
                  value={"paid"}
                  // checked={selected === "paid"}
                  onChange={handleSelect}
                />
              </div>
            </div>
          </div>
          <Button className={"w-full text-lg"} py={"py-5"}>
            Proceed to create lesson
          </Button>
        </form>
      </div>
      <div className="hidden md:flex w-[40%]">
        <img src={vector1} className="w-[250px]" alt="vector1" />
        <img src={vector2} className="w-[250px]" alt="vector2" />
      </div>
    </div>
  );
};

export default CreateLive;
