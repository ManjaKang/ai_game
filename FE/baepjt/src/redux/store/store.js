import React from "react";
import { configureStore } from '@reduxjs/toolkit';
import soundSlice from "../audio";
import loginSlice from "../login";

export default configureStore({
    reducer:{
        sound: soundSlice,
        id: loginSlice
    }
})