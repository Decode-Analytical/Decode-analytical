import * as yup from "yup";

// export const withdrawalSchema = yup.object().shape({
//   bankName: yup.string().trim().required("Name of bank is required!"),
//   accountNumber: yup
//     .string()
//     .trim()
//     .required("Enter account number of the bank!"),
//   amount: yup.string().trim().required("Enter amount you want to withdraw!"),
//   verificationCode: yup.string().trim().required("Enter verification code!"),
// });

export const withdrawalSchema = yup.object().shape({
  bankName: yup.string().required("Bank Name is required"),
  accountNumber: yup
    .string()
    .matches(/^\d+$/, "Account Number must be a number")
    .required("Account Number is required"),
  amount: yup
    .number()
    .typeError("Amount must be a number")
    .positive("Amount must be a positive number")
    .required("Amount is required"),
  verificationCode: yup.string().required("Verification Code is required"),
});
