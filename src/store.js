import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./features/carSlice"

export default configureStore({
    reducer:{
        car:carReducer
    }
})