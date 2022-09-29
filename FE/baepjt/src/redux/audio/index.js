import React from 'react';
import {createSlice} from '@reduxjs/toolkit'

export const soundSlice = createSlice({
    name: 'sound',
    initialState: { value: {bgm: 50, sfx: 50, voice: 50}},
    reducers: {
        setValue : (
            state,
            action
        ) => {
            state.value = action.payload
        }
    }
})

export const {setValue} = soundSlice.actions;

export default soundSlice.reducer;