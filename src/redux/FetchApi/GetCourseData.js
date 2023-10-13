import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const courseData = createApi({
  reducerPath: "courseData",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://decode-mnjh.onrender.com/api",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTFkMWMwMDQ1Y2NmNjEyMzY4NzRmNjEiLCJpYXQiOjE2OTcxMzc1NjgsImV4cCI6MTY5NzIyMzk2OH0.6YQtqx-ThsiTa8u8OF-4Ljl-0lrptN6XkN2nHVW7swQ",
    },
  }),
  endpoints: (builder) => ({
    getCourseData: builder.query({ query: () => "/student/studentViewCourse/65175354a420b21e3fa5cf75" })
  }),
});

export const { useGetCourseDataQuery } = courseData
