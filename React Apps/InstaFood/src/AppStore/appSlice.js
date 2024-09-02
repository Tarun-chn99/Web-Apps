import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        auth: null,
        location: {
            lat: 30.32750,
            lng: 78.03250
        }
    },
    reducers: {
        setAuth: (state,action) => {
            state.auth = action.payload;
        },
        setLocation : (state,action) => {
            state.location = action.payload;
        }
    }
});

export const { setLocation,setAuth } = appSlice.actions;
export default appSlice.reducer;

