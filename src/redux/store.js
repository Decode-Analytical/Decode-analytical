import { configureStore } from "@reduxjs/toolkit";
import { Meeting } from "./Meeting/Meeting";
// import { CreateCourse } from "./Meeting/CreateCourse";

export const store = configureStore({
  reducer: {
    [Meeting.reducerPath]: Meeting.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    Meeting.middleware,
  ],
});
