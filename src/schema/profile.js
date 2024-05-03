import * as yup from "yup";

export const profileUpdateSchema = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  linkedinUrl: yup.string(),
  facebook: yup.string(),
  twitter: yup.string(),
  about: yup.string(),
});

{
  /* {updateProfile && (
        <ModalContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type={"text"}
              label={"First Name"}
              placeholder={"First Name"}
              value={firstName}
              register={register("firstName")}
              customClass={"text-gray-500"}
              disabled={loading}
            />
            <Input
              type={"text"}
              label={"Last Name"}
              placeholder={"Last Name"}
              value={lastName}
              register={register("lastName")}
              customClass={"text-gray-500"}
              disabled={loading}
            />
            <Input
              type={"text"}
              label={"LinkedIn Profile"}
              placeholder={"LinkedIn Profile"}
              value={linkedinUrl}
              register={register("linkedinUrl")}
              customClass={"text-gray-500"}
              disabled={loading}
            />
            <Input
              type={"text"}
              label={"Facebook Profile"}
              placeholder={"Facebook Profile"}
              value={facebook}
              register={register("facebook")}
              customClass={"text-gray-500"}
              disabled={loading}
            />
            <Input
              type={"text"}
              label={"Twitter Profile"}
              placeholder={"Twitter Profile"}
              value={twitter}
              register={register("twitter")}
              customClass={"text-gray-500"}
              disabled={loading}
            />
            <TextArea
              type={"text"}
              label={"About"}
              placeholder={"About"}
              value={about}
              register={register("about")}
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
        </ModalContainer> */
}
{
  /* // <UpdateAdminProfile */
}
// // firstName={firstName}
// // lastName={lastName}
{
  /* //   linkedinUrl={linkedinUrl}
        //   facebook={facebook}
        //   twitter={twitter}
        //   about={about}
        //   onSubmit={onSubmit}
        //   register={register}
        //   handleSubmit={handleSubmit}
        //   errors={errors}
        //   loading={loading}
        // />
      // )} */
}

// const formHook = useForm({
//   resolver: (data) => validate(profileUpdateSchema, data),
//   defaultValues: {
//     firstName: user?.firstName || "",
//     lastName: user?.lastName || "",
//     linkedinUrl: user?.linkedinUrl || "",
//     facebook: user?.facebook || "",
//     twitter: user?.twitter || "",
//     about: user?.about || "",
//   },
// });

// const {
//   register,
//   handleSubmit,
//   // getValues,
//   formState: { errors },
// } = formHook;
// const onSubmit = async (data) => {
//   setLoading(true);
//   const token = JSON.parse(localStorage.getItem("user")).token;
//   try {
//     const response = await Axios.put(urls.adminProfileUpdate, data, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.status === 200 || response.status === 201) {
//       SuccessToast(response.data.message);
//       navigate("/admin-dashboard/wallet/withdraw/success");
//     }
//   } catch (error) {
//     ErrorToast(error.response.data.message);
//     if (error.response.data.message === "Invalid Pin") {
//       toggleModal();
//     }
//   } finally {
//     setLoading(false);
//   }
// };
