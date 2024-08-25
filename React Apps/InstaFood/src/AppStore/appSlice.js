import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        location: {
            lat: 30.32750,
            lng: 78.03250
        }
    },
    reducers: {
        setLocation : (state,action) => {
            state.location = action.payload;
        }
    }
});

export const { setLocation } = appSlice.actions;
export default appSlice.reducer;

