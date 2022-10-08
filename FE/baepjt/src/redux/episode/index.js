import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const episodeSlice = createSlice({
    name: "episode",
    initialState: {value: {episode: 0, chapter: 0}},
    reducers: {
        setEpisode : (
            state,
            action
        ) => {
            state.value = action.payload
        }
    }
})

export const {setEpisode} = episodeSlice.actions;

export default episodeSlice.reducer;