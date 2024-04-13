import * as yup from "yup";

export const withdrawalSchema = yup.object().shape({
  bankName: yup.string().required("Bank name is required"),
  accountNumber: yup
    .string()
    .required("Account number is required")
    .matches(/^\d+$/, "Account number must be a valid number"),
  amount: yup
    .number()
    .required("Amount is required")
    .typeError("Amount must be a number")
    .positive("Amount must be a positive number"),
  // .min(5000, "Amount must be at least ₦5000"),
  reason: yup.string(),
  pin: yup
    .number()
    .typeError("PIN must be a number")
    .required("PIN is required")
    .test("is-four-digits", "PIN must be a 4-digit number", (value) =>
      /^\d{4}$/.test(value)
    ),
});

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

export const resetPinSchema = yup.object().shape({
  otp: yup
    .string()
    .nullable()
    .required("OTP is required")
    .matches(/^\d{6}$/, { message: "OTP must be a 6-digit number" }),
  pin: yup
    .string()
    .nullable()
    .required("PIN is required")
    .matches(/^\d{4}$/, { message: "PIN must be a 4-digit number" }),
  confirmPin: yup
    .string()
    .nullable()
    .required("Confirm PIN is required")
    .oneOf([yup.ref("pin"), null], "PINs must match"),
});
