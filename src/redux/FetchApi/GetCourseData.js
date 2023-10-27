import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTJmMTZmNWNhMTUzYTY0YWU4OTFkM2UiLCJpYXQiOjE2OTgzODExNjEsImV4cCI6MTY5ODQ2NzU2MX0.8Vb8s0NC_ziEd68gfuD5rOEVenKK7vCXdEDdMNKgwTM"

export const courseData = createApi({
  reducerPath: "courseData",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://decode-mnjh.onrender.com/api",
    headers: {
      Authorization:
        `Bearer ${token}`,
    },
  }),
  tagTypes: ["StreamVideo", "Quiz"],
  endpoints: (builder) => ({
    getCourseData: builder.query({
      query: (id) => `/student/studentViewCourse/${id}`,
      providesTags: ["StreamVideo"],
    }),
    viewCourseQuiz: builder.query({
      query: (id) => `/quizes/${id}`,
      providesTags: ["Quiz"],
    }),
    postCorrectQuiz: builder.mutation({
      query: (data, id) => ({
        url: `/quizs/${id}/submit`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Quiz"],
    }),
    addComment: builder.mutation({
      query: ({courseId, comment}) => ({
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
