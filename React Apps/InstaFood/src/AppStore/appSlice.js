import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isLoggedIn: false,
        auth: null,
        location: {
            lat: 30.32750,
            lng: 78.03250
        }
    },
    reducers: {
        setAuth: (state,action) => {
            state.auth = action.payload;
            action.payload ? state.isLoggedIn = true : state.isLoggedIn = false;
        },
        setLocation : (state,action) => {
            state.location = action.payload;
        }
    }
});

export const { setLocation,setAuth } = appSlice.actions;
export default appSlice.reducer;

