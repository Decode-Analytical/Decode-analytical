import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseurl = import.meta.env.VITE_BASE_URL;
console.log(baseurl)

// Retrieve the token from localStorage or provide a default value
const tokenL = localStorage.getItem("token") || { token: null };
// const tokenL = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQyMDc3NjhlMTJjZDQ0MjYyNGU5YWIiLCJpYXQiOjE3MDMyNjgzNzgsImV4cCI6MTcwMzM1NDc3OH0.UVQR-4Am5p0sylPwDFKRAPVNciQUhl73vO8K1mxDM8I"
// console.log(tokenL)

export const courseData = createApi({
  reducerPath: "courseData",
  baseQuery: fetchBaseQuery({
    baseUrl: baseurl,
    headers: {
      Authorization: `Bearer ${tokenL}`,
    },
  }),
  tagTypes: ["StreamVideo", "Quiz"],
  endpoints: (builder) => ({
    getCourseData: builder.query({
      query: (id) => `/student/studentViewCourse/${id}`,
      providesTags: ["StreamVideo"],
    }),
    viewCourseQuiz: builder.query({
      query: (id) => `/quizes/getQuiz/${id}`,
      providesTags: ["Quiz"],
    }),
    postCorrectQuiz: builder.mutation({
      query: ({ data, id }) => ({
        url: `/quizes/submitAnswers/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Quiz"],
    }),
    addComment: builder.mutation({
      query: ({ courseId, comment }) => ({
        url: `/course/review/${courseId}`,
        method: "POST",
        body: comment,
      }),
      invalidatesTags: ["StreamVideo"],
    }),
  }),
});

export const {
  useGetCourseDataQuery,
  useViewCourseQuizQuery,
  usePostCorrectQuizMutation,
  useAddCommentMutation,
} = courseData;
