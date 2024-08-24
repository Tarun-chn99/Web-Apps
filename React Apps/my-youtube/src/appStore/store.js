import { configureStore } from '@reduxjs/toolkit'
import appSlice from './slices.js/appSlice';
import cacheSlice from './slices.js/cacheSlice';
import chatSlice from './slices.js/chatSlice';

const appStore = configureStore({
    reducer:{
        app: appSlice,
        cache: cacheSlice,
        chat: chatSlice
    }
});

export default appStore;