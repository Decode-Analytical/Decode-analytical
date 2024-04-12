import * as yup from "yup";

export const createPinSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  pin: yup
    .string()
    .required("PIN is required")
    .matches(/^\d{4}$/, { message: "PIN must be a 4-digit number" }),
  confirmPin: yup
    .string()
    .required("Confirm PIN is required")
    .oneOf([yup.ref("pin"), null], "PINs must match"),
});
