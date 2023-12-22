import React, { useState, useCallback } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import FileUpload from "./FileUpload";
import { useAuthContext } from "../../hooks/authContext";
import VideoUpload from "./VideoUpload";
import axios from "axios";
import Loading from "./Loading";
import Loader from "../../components/Loader";

const ModuleUpload = ({ id, Alert, ErrorM }) => {
  const [form, setForm] = useState({
    Topic: "",
    Description: "",
    upload_video: null,
    upload_image: null,
    module_duration: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthContext();
  const baseURL = import.meta.env.VITE_BASE_URL;
  const [message, setMessage] = useState(false);
  const [imageError, setImageError] = useState({ err: false, mes: "" });
  const [videoError, setVideoError] = useState({ err: false, mes: "" });
  const onDrop = useCallback(
    (acceptedFiles, rejectedFile) => {
      // Do something with the files
      if (rejectedFile == null) {
        setVideoError({ err: true, mess: "Please upload an image" });
      } else {
        setForm({ ...form, upload_video: acceptedFiles[0] });
        // Clear video error if a file is accepted
        setVideoError({ err: false, mess: "" });
      }
      // console.log(acceptedFiles[0]);
      // console.log(rejectedFile)
    },
    [form, setForm, setVideoError]
  );

  const onDropImage = useCallback(
    (acceptedFiles, rejectedFile) => {
      // Do something with the files
      if (rejectedFile == null) {
        setImageError({ err: true, mess: "Please upload an image" });
      } else {
        setForm({ ...form, upload_image: acceptedFiles[0] });
        // Clear image error if a file is accepted
        setImageError({ err: false, mess: "" });
      }
      // console.log(acceptedFiles[0]);
      // console.log(rejectedFile)
    },
    [form, setForm, setImageError]
  );

  const onChange = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  async function ModuleSubmit(e) {
    e.preventDefault();
    const formdata = new FormData();
    setIsLoading(true);
    formdata.set("module_title", form.Topic);
    formdata.set("module_description", form.Description);
    formdata.set("video", form.upload_video);
    if (form.upload_image) {
      formdata.set("image", form.upload_image);
      formdata.set("audio", form.upload_video);
    }
    if (form.upload_video) {
      formdata.set("video", form.upload_video);
    }
    formdata.set("module_duration", form.module_duration);

    const headers = {
      Authorization: `Bearer ${user.token}`,
    };

    try {
      const response = await fetch(`${baseURL}course/createSubject/${id}`, {
        headers: headers,
        method: "POST",
        body: formdata,
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
        setIsLoading(false);
        Alert(data.message);
        setForm({
          Topic: "",
          Description: "",
          upload_video: null,
          upload_image: null,
          module_duration: "",
        });
      } else {
        // Handle non-JSON response here
        const errorData = await response.text();
        setIsLoading(false);
        console.log(errorData.error)
        const errorMessage = errorData.error || "Please fill the form";
        ErrorM(errorMessage)
      }
    } catch (error) {
      setIsLoading(false);
      ErrorM(error || "An error occurred.");
    }
  }
  return (
    <section className="w-full p-9 shadow-xl border animate-fade-in">
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
          value={form.Description}
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
        {isLoading == true && <Loader />}
        {imageError.err && (
          <p className="text-sm text-red-400 font-semibold">{imageError.mes}</p>
        )}
        {videoError.err && (
          <p className="text-sm text-red-400 font-semibold">{videoError.mes}</p>
        )}
        <div className="flex w-full justify-center gap-5">
          <button
            type="button"
            onClick={() => "/AdminDashboard"}
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
