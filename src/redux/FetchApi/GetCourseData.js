import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const courseData = createApi({
  reducerPath: "courseData",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://decode-mnjh.onrender.com/api",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTFkMWMwMDQ1Y2NmNjEyMzY4NzRmNjEiLCJpYXQiOjE2OTc1NjA1NDcsImV4cCI6MTY5NzY0Njk0N30.O4HWr0OGNVZnUWwdiFiGWqBwlqbSGdQtx3feP6MM0S0",
      
    },
  }),
  endpoints: (builder) => ({
    getCourseData: builder.query({ query: (id) => `/student/studentViewCourse/${id}` }),
    viewCourseQuiz: builder.query({query: (id) => `/quizes/${id}`}),
    postCorrectQuiz: builder.mutation({
      query: (data, id) => ({
        url: `/quizs/${id}/submit`,
        method: "POST",
        body: data
      })
    })
  }),
});

export const { useGetCourseDataQuery, useViewCourseQuizQuery, usePostCorrectQuizMutation } = courseData
