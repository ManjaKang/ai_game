import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "id",
    initialState: {value: ''},
    reducers: {
        setId : (
            state,
            action
        ) => {
            state.value = action.payload
        }
    }
})

export const {setId} = loginSlice.actions;

export default loginSlice.reducer;