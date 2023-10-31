import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTJmMTZmNWNhMTUzYTY0YWU4OTFkM2UiLCJpYXQiOjE2OTg3NDkzODMsImV4cCI6MTY5ODgzNTc4M30.veebe9BhYpa6FtyeMM07X_hwxYHzqdnRVcOv0wcbZlw"

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
      query: (id) => `/quizes/questionId/653fbaac3853d8d93f4973ae`,
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
