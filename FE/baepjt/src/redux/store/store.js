import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import soundSlice from '../audio';
import loginSlice from '../login';
import camresSlice from '../camres';
import isCameraSlice from '../iscamera';
import bgSlice from '../background';
import episodeSlice from '../episode';
export default configureStore({
  reducer: {
    sound: soundSlice,
    id: loginSlice,
    cameraResult: camresSlice,
    isCamera: isCameraSlice,
    backGround: bgSlice,
    episode: episodeSlice,
  },
});
