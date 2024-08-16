import { configureStore } from '@reduxjs/toolkit'
import appSlice from './slices.js/appSlice';
import videoSlice from './slices.js/videoSlice';

const appStore = configureStore({
    reducer:{
        app: appSlice,
        videos: videoSlice
    }
});

export default appStore;