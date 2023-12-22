import { configureStore } from "@reduxjs/toolkit";
import { courseData } from "./FetchApi/GetCourseData";
import { Meeting } from "./Meeting/Meeting";

export const store = configureStore({
    reducer:{
        [courseData.reducerPath] : courseData.reducer,
        [ Meeting.reducerPath ]: Meeting.reducer
    },
    middleware : (mid) => [...mid(), courseData.middleware, Meeting.middleware]
})
