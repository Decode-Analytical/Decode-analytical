import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseURL = import.meta.env.VITE_BASE_URL
export const Meeting = createApi({
  reducerPath: "meeting",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  endpoints: (builder) => ({
    newMeeting: builder.mutation({
      query: (posts) => ({
        url: "/admin/adminScheduleMeeting",
        method: "POST", // Change the method to "POST"
        body: posts, // Set the request body to the posts parameter
      }),
    }),
  }),
});

export const { useNewMeetingMutation } = Meeting;
