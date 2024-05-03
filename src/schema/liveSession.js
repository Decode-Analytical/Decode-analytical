import * as yup from "yup";

export const liveSessionSchema = yup.object().shape({
  courseName: yup.string().required("Course title is required"),
  description: yup.string().required("Course description is required"),
  date: yup.string().required("Start date is required"),
  time: yup.string().required("Course duration is required"),
  amount: yup.number().required("Amount is required"),
  // .positive("Amount must be a positive number"),
});
