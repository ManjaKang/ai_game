import React from 'react';
import {createSlice} from '@reduxjs/toolkit';

export const bgSlice = createSlice({
  name: 'backGround',
  initialState: {
    value: {bg: -1},
  },
  reducers: {
    setbgValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setbgValue} = bgSlice.actions;

export default bgSlice.reducer;
