import React from 'react';
import {createSlice} from '@reduxjs/toolkit'
import SoundPlayer from 'react-native-sound-player';

export const soundSlice = createSlice({
    name: 'sound',
    initialState: { value: {bgm: 50, sfx: 50, voice: 50}},
    reducers: {
        setValue : (
            state,
            action
        ) => {
            if(state.value.bgm != action.payload.bgm){
                SoundPlayer.setVolume(action.payload.bgm/100);
                if(state.value.bgm == 0){
                    SoundPlayer.playSoundFile('main','mp3');
                }
            }
            
            state.value = action.payload
        }
    }
})

export const {setValue} = soundSlice.actions;

export default soundSlice.reducer;