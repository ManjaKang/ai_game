import React from 'react';
import {createSlice} from '@reduxjs/toolkit';

export const isCameraSlice = createSlice({
  name: 'isCamera',
  initialState: {
    value: false,
  },
  reducers: {
    setcameraValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setcameraValue} = isCameraSlice.actions;

export default isCameraSlice.reducer;
