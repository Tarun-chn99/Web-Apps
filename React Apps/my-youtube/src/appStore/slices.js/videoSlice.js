import { createSlice } from '@reduxjs/toolkit';

const videoSlice = createSlice({
    name: 'videos',
    initialState: {
        videoList: null
    },
    reducers: {
        addVideos: (state,action) => {
            state.videoList = action.payload;
        }
    }
});

export const { addVideos } = videoSlice.actions;
export default videoSlice.reducer;