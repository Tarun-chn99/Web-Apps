import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import appSlice from './appSlice';
import userSlice from "./userSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        app: appSlice,
        user: userSlice,
    }
});

export default appStore;


