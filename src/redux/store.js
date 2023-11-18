import { configureStore } from "@reduxjs/toolkit";
import { Meeting } from "./Meeting/Meeting";

export const store = configureStore({
    reducer: {
       [ Meeting.reducerPath ]: Meeting.reducer
    },
    middleware : (mid) => [...mid(), Meeting.middleware]
})
