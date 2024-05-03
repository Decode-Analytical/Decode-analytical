import React from "react";
import ModalContainer from "../modal/ModalContainer";
import { Input, TextArea } from "../InputField";
import LoadingSpinner from "../LoadingSpinner";
import { IoCloseSharp } from "react-icons/io5";

const UpdateAdminProfile = ({ onSubmit, register, loading, onClose }) => {
  return (
    <ModalContainer w={"w-[700px]"} h={"h-[700px]"} overlayClose={onClose}>
      <div className="flex justify-between w-full items-center mb-5">
        <h1 className="text-2xl font-bold text-center">Update Profile</h1>
        <div className="cursor-pointer" onClick={onClose}>
          <IoCloseSharp className="text-2xl" />
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <Input
          type={"text"}
          label={"First Name"}
          placeholder={"First Name"}
          register={register("firstName")}
          customClass={"text-gray-500"}
          disabled={loading}
        />
        <Input
          type={"text"}
          label={"Last Name"}
          placeholder={"Last Name"}
          register={register("lastName")}
          customClass={"text-gray-500"}
          disabled={loading}
        />
        <Input
          type={"text"}
          label={"LinkedIn Profile"}
          placeholder={"LinkedIn Profile"}
          register={register("linkedinUrl")}
          customClass={"text-gray-500"}
          disabled={loading}
        />
        <Input
          type={"text"}
          label={"Facebook Profile"}
          placeholder={"Facebook Profile"}
          register={register("facebook")}
          customClass={"text-gray-500"}
          disabled={loading}
        />
        <Input
          type={"text"}
          label={"Twitter Profile"}
          placeholder={"Twitter Profile"}
          register={register("twitter")}
          customClass={"text-gray-500"}
          disabled={loading}
        />
        <Input
          type={"text"}
          label={"YouTube Profile"}
          placeholder={"YouTube Profile"}
          register={register("youtubeUrl")}
          customClass={"text-gray-500"}
          disabled={loading}
        />
        <Input
          type={"text"}
          label={"Github Profile"}
          placeholder={"Github Profile"}
          register={register("githubUrl")}
          customClass={"text-gray-500"}
          disabled={loading}
        />
        <TextArea
          type={"text"}
          label={"About Me"}
          placeholder={"About Me"}
          register={register("aboutMe")}
          customClass={"text-gray-500"}
          disabled={loading}
        />

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue1 p text-white py-3 w-full rounded-md mt-10"
          >
            {loading ? <LoadingSpinner color={"white"} /> : "Save"}
          </button>
        </div>
      </form>
    </ModalContainer>
  );
};

export default UpdateAdminProfile;
