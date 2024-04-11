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
    .positive("Amount must be a positive number"),
  reason: yup.string().required("Remark is required"),
  pin: yup
    .number()
    .typeError("PIN must be a number")
    .required("PIN is required")
    .test("is-four-digits", "PIN must be a 4-digit number", (value) =>
      /^\d{4}$/.test(value)
    ),
});
