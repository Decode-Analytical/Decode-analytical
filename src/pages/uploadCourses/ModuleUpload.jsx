import React, { useState, useCallback } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import FileUpload from "./FileUpload";
import { useAuthContext } from "../../hooks/authContext";
import VideoUpload from "./VideoUpload";
import axios from "axios";
import Loading from "./Loading";
import Loader from "../../components/Loader";

const ModuleUpload = ({ id }) => {
  const [form, setForm] = useState({
    Topic: "",
    Description: "",
    upload_video: null,
    upload_image: null,
    module_duration: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthContext();
  const baseURL = import.meta.env.VITE_BASE_URL
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(null);
  const [imageError, setImageError] = useState({ err: false, mes: "" });
  const [videoError, setVideoError] = useState({ err: false, mes: "" });
  const onDrop = useCallback((acceptedFiles, rejectedFile) => {
    // Do something with the files
    if (rejectedFile) {
      setImageError({ err: true, mess: "Please upload a Image" });
    } else {
      setForm({ ...from, upload_video: acceptedFiles[0] });
    }
    // console.log(acceptedFiles[0]);
    // console.log(rejectedFile)
  }, []);
  const onDropImage = useCallback((acceptedFiles, rejectedFile) => {
    // Do something with the files
    if (rejectedFile) {
      setVideoError({ err: true, mess: "Please upload a Image" });
    } else {
      setForm({ ...from, upload_image: acceptedFiles[0] });
    }
    // console.log(acceptedFiles[0]);
    // console.log(rejectedFile)
  }, []);
  const onChange = (e) => {
    let { name, value } = e.target;
    console.log("This is the value", name);
    setForm({ ...form, [name]: value });
  };

  async function ModuleSubmit(e) {
    e.preventDefault();
    const formdata = new FormData();
    formdata.set("module_title", form.Topic);
    formdata.set("module_description", form.Description);
    formdata.set("video", form.upload_video);
    if (form.upload_image) {
        formdata.set("image", form.upload_image);
    }
    if (form.upload_video) {
        formdata.set("video", form.upload_video);
      }
      formdata.set("module_duration", form.module_duration)

      const headers = {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "multipart/form-data", // Use 'multipart/form-data' for form data
      };
  
      try {
        const response = await axios.post(
          `${baseURL}course/createSubject/${id}`,
          formdata,
          { headers: headers }
        );

        console.log(response)
  
        if (response.status == 201 || 204) {
          setIsLoading(false);
          setMessage(response.data.message);
        } else {
          setIsLoading(false);
          setError(response.data.message);
        }
      } catch (error) {
        setIsLoading(false);
        console.error(error);
        setError("An error occurred.");
      }
  }
  return (
    <section className="w-full p-9 shadow-xl border">
      <h2 className="text-2xl font-semibold text-left my-3">
        Course Module Information
      </h2>
      <form className="flex flex-col gap-6" onSubmit={ModuleSubmit}>
        <Input
          name="Topic"
          label="Topic"
          placeholder="Enter Title"
          type="text"
          value={form.Topic}
          onChange={onChange}
        />
        <Textarea
          name="Description"
          onChange={onChange}
          label="Description"
          placeholder="Enter Description"
        />
        <Input
          name="module_duration"
          label="Module Duration"
          placeholder="Enter Module duration"
          type="text"
          value={form.module_duration}
          onChange={onChange}
        />
        <div className="flex md:gap-11 max-md:flex-col">
          <VideoUpload
            onDrop={onDrop}
            value={form.upload_video}
            error={videoError}
            className="w-full h-72 border border-dotted border-black my-2 flex justify-center items-center rounded-lg"
          />
          <FileUpload
            onDrop={onDropImage}
            value={form.upload_image}
            error={imageError}
            className="w-full h-72 border border-dotted border-black my-2 flex justify-center items-center rounded-lg"
          />
        </div>
        {isLoading !== false && <Loader />}
        <div className="flex w-full justify-center gap-5">
          <button
            type="button"
            className="w-64 h-20 border text-center text-[#040E53] border-[#040E53] hover:bg-blue-900 hover:text-white text-2xl"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-64 h-20 border text-center text-[#040E53] border-[#040E53] hover:bg-blue-900 hover:text-white text-2xl"
          >
            Save & continue
          </button>
        </div>
      </form>
    </section>
  );
};

export default ModuleUpload;