import React, { useEffect, useMemo, useState } from "react";
import { Heading } from "../../../components/Heading";
import logo from "../../../assets/adminDashboardImages/logo.svg";
import vector1 from "../../../assets/adminDashboardImages/vector1.svg";
import vector2 from "../../../assets/adminDashboardImages/vector2.svg";
import { Link, useNavigate } from "react-router-dom";
import {
  Input,
  Radio,
  SelectInput,
  TextArea,
} from "../../../components/InputField";
import { Button } from "../../../components/Button";
import { useForm } from "react-hook-form";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { ErrorToast, SuccessToast } from "../../../utils/toast";
import urls from "../../../utils/Url";
import axios from "axios";
import { liveSessionSchema } from "../../../schema/liveSession";
import { durationOptions } from "../../../utils/Constants";
import { useFetchAdminCourses } from "../../../hooks/useFetchAdmin";
import Image from "../../../components/adminCourses/Image";

const CreateLive = () => {
  const authUser = useMemo(() => {
    return JSON.parse(localStorage.getItem("user")).user;
  }, []);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { fetchData: fetchCourses, data: courses } = useFetchAdminCourses();

  useEffect(() => {
    fetchCourses();
  }, []);

  const courseData = courses?.courses || [];
  const courseList = Array.isArray(courseData)
    ? courseData.map((item) => item.course_title)
    : [];
  const [selectedCourse, setSelectedCourse] = useState("");
  // const courseData = courses?.courses;

  // const courseList = courseData?.map((item) => item.course_title);

  const formHook = useForm({
    resolver: (data) => {
      return liveSessionSchema.validate(data, { abortEarly: false }).then(
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
      email: authUser.email,
      courseName: "",
      description: "",
      date: "",
      time: "",
      isPaid: "",
      amount: 0,
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
      const response = await axios.post(urls.adminCreateLiveSession, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200 || response.status === 201) {
        // console.log(response, "response");
        SuccessToast(response?.data?.message);
        navigate("/admin-dashboard/courses");
      }
    } catch (error) {
      ErrorToast(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const [showAmount, setShowAmount] = useState(false);

  const handleSelectChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  return (
    <div className="max-w-[1280px] gap-8 w-[90%] flex items-center mx-auto ">
      <div className="mx-auto w-full md:w-[45%]">
        <div className="mb-6">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[90px]" />
          </Link>
        </div>
        <Heading title={"Create your Live Lesson here."} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full mb-7">
            <SelectInput
              label={"Course Name"}
              name={"courseName"}
              options={[...courseList, "others"]}
              onChange={handleSelectChange}
              value={selectedCourse}
              register={register("courseName")}
              errorMessage={errors?.courseName?.message}
              required
            />
            {selectedCourse === "others" && (
              <div className="mt-2">
                <label className="font-light">
                  Please specify:
                  <input
                    type="text"
                    name="otherCourseName"
                    {...register("otherCourseName", { required: true })}
                    className="border rounded-md py-2 px-4 bg-white1 border-gray-400"
                  />
                </label>
                <div className="h-5">
                  {/* {errors?.otherCourseName && (
                    <p className="text-red-500 text-xs italic">
                      {errors.otherCourseName.message}
                    </p>
                  )} */}
                </div>
              </div>
            )}
            <TextArea
              label={"Description"}
              placeholder={"Enter your course description"}
              register={register("description")}
              errorMessage={errors?.description?.message}
              important
            />
            <div className="flex flex-col md:flex-row gap-x-12 w-full">
              <Input
                label={"Start Date"}
                type={"date"}
                register={register("date")}
                important
                errorMessage={errors?.date?.message}
              />
              <SelectInput
                label={"Duration"}
                options={durationOptions}
                valueKey={"value"}
                labelKey={"label"}
                register={register("time")}
                important
                errorMessage={errors?.time?.message}
              />
            </div>
            <div className="mt-9">
              <legend className="font-light">Pricing</legend>
              <div className="flex gap-4">
                <Radio
                  label={"Free"}
                  name={"isPaid"}
                  value={"free"}
                  defaultChecked
                  register={register("isPaid")}
                  errorMessage={errors?.isPaid?.message}
                  onClick={() => setShowAmount(false)}
                />
                <Radio
                  label={"Paid"}
                  name={"isPaid"}
                  value={"paid"}
                  register={register("isPaid")}
                  errorMessage={errors?.isPaid?.message}
                  onClick={() => setShowAmount(true)}
                />
              </div>
            </div>
            {showAmount && (
              <Input
                label={"Amount"}
                type={"text"}
                placeholder={"Enter amount"}
                register={register("amount")}
                errorMessage={errors?.amount?.message}
                required
              />
            )}
          </div>
          <Button type={"submit"} className={"w-full text-lg"} py={"py-5"}>
            {loading ? (
              <LoadingSpinner color={"white"} />
            ) : (
              "Proceed to create lesson"
            )}
          </Button>
        </form>
      </div>
      <div className=" hidden md:flex w-[45%]">
        <div className="hidden md:flex gap-2">
          <Image src={vector1} alt="vector1" />
          <Image src={vector2} alt="vector2" />
        </div>
      </div>
    </div>
  );
};

export default CreateLive;
