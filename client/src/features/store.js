import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogs/blogSlice.js"
// import { blogReducer } from "./blogs/blogSlice";


const store = configureStore({
    reducer:{
        blogs:blogReducer,
    },
});

export default store;