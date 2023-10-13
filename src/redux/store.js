import { configureStore } from "@reduxjs/toolkit";
import { courseData } from "./FetchApi/GetCourseData";

export const store = configureStore({
    reducer:{
        [courseData.reducerPath] : courseData.reducer
    },
    middleware : (mid) => [...mid(), courseData.middleware]
})
