import React, { useState } from "react";
import { Heading } from "../../../../components/Heading";
import logo from "../../../../assets/adminDashboardImages/logo.svg";

import clock from "../../../../assets/adminDashboardImages/clock.svg";
import { Link } from "react-router-dom";
import {
    AnswerInput,
  Input,
  Radio,
  SelectChoice,
  SelectInput,
  
  TextArea,
} from "../../../../components/InputField";
import Button from "../../../../components/Button";
import { useForm } from "react-hook-form";



const CreateQuestion = () => {
 
    const questionNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const choices = [
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
      ]

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
    <div className="max-w-[1280px] w-full items-center mx-auto">
      {/* <div className="mx-auto w-[50%]"> */}
        {/* <div className="mb-6">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[90px]" />
          </Link>
        </div> */}
        <Heading title={"Create a Question."} />
        <div className="flex justify-between text-blue1 text-[20px]">
            {
                questionNumbers.map(number => (
                    <h1 className="font-bold">{number}</h1>
                ))
            }
        </div>
        <div className="flex justify-between items-center mt-10">
            <div className="flex border-[2px] gap-5 p-2 rounded-lg">
                <img src={clock} alt="" />
                <p>{"20 mins"}</p>
            </div>
            <div className="w-[150px]">
                <SelectChoice
                    
                    options={choices}
                    valueKey={"value"}
                    labelKey={"label"}
                    // customClass={"flex-1"}
                />
            </div>
        </div>
        <form>
          <div className="w-full mb-7">
            <Input
              title={"Question"}
              placeholder={"Enter your Question"}
              
              type={"text"}
            />

            <h1 className="mt-5 mb-[-25px]">Answer</h1>

            <AnswerInput
                placeholder={"Add choice answer 1"}
                type={"text"}
            />

            <AnswerInput
                placeholder={"Add choice answer 2"}
                type={"text"}
            />
            <AnswerInput
                placeholder={"Add choice answer 3"}
                type={"text"}
            />
            <AnswerInput
                placeholder={"Add choice answer 4"}
                type={"text"}
            />
            

            
          </div>
          <Button className={"w-full text-lg"} py={"py-5"}>
            Proceed to create quiz
          </Button>
        </form>
      {/* </div> */}
      
    </div>
  );
};

export default CreateQuestion;
