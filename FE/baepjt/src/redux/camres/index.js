import React from 'react';
import {createSlice} from '@reduxjs/toolkit';

export const camresSlice = createSlice({
  name: 'cameraResult',
  initialState: {
    value: [
      {name: '', percentage: 0},
      {name: '', percentage: 0},
      {name: '', percentage: 0},
      {name: '', percentage: 0},
      {name: '', percentage: 0},
      {name: '', percentage: 0},
    ],
  },
  reducers: {
    setresValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setresValue} = camresSlice.actions;

export default camresSlice.reducer;
