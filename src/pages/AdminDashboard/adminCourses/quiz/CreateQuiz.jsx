import React, { useState } from "react";
import { Heading } from "../../../../components/Heading";
import logo from "../../../../assets/adminDashboardImages/logo.svg";
// import vector1 from "../../../../assets/adminDashboardImages/vector1.svg";
// import vector2 from "../../../../assets/adminDashboardImages/vector2.svg";
import createquiz from "../../../../assets/adminDashboardImages/createquiz.svg";
import { Link } from "react-router-dom";
import {
  Input,
  Radio,
  SelectInput,
  TextArea,
} from "../../../../components/InputField";
import { Button } from "../../../../components/Button";
import { useForm } from "react-hook-form";

const CreateQuiz = () => {
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

  const quizNumber = [
    {
      label: "0",
      value: "0",
    },
    {
      label: "1",
      value: "1",
    },
    {
      label: "2",
      value: "2",
    },
    {
      label: "3",
      value: "3",
    },
    {
      label: "4",
      value: "4",
    },
    {
      label: "5",
      value: "5",
    },
    {
      label: "6",
      value: "6",
    },
    {
      label: "7",
      value: "7",
    },
    {
      label: "8",
      value: "8",
    },
    {
      label: "9",
      value: "9",
    },
  ];

  const questionType = [
    {
      label: "Choice1",
      value: "Choice1",
    },
    {
      label: "Choice2",
      value: "Choice2",
    },
    {
      label: "Choice3",
      value: "Choice3",
    },
    {
      label: "Choice4",
      value: "Choice4",
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
        {/* <div className="mb-6">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[90px]" />
          </Link>
        </div> */}
        <Heading title={"Create a Quiz."} />
        <form>
          <div className="w-full mb-7">
            <Input
              title={"Quiz Title"}
              placeholder={"Enter your quiz title"}
              type={"text"}
            />

            <SelectInput
              title={"Question Type"}
              options={questionType}
              valueKey={"value"}
              labelKey={"label"}
              // customClass={"flex-1"}
            />
            <SelectInput
              title={"Number of Questions"}
              options={quizNumber}
              valueKey={"value"}
              labelKey={"label"}
              // customClass={"flex-1"}
            />

            <SelectInput
              title={"Duration"}
              options={durationOptions}
              valueKey={"value"}
              labelKey={"label"}
              // customClass={"flex-1"}
            />
          </div>
          <Button className={"w-full text-lg"} py={"py-5"}>
            Continue
          </Button>
        </form>
      </div>
      <div className="hidden md:flex w-[40%] pt-5">
        <img src={createquiz} alt="" />
      </div>
    </div>
  );
};

export default CreateQuiz;
