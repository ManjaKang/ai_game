import React from "react";
import { configureStore } from '@reduxjs/toolkit';
import soundSlice from "../audio";

export default configureStore({
    reducer:{
        sound: soundSlice
    }
})