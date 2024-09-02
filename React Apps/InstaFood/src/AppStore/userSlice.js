import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: null,
        location: null,
        accessToken: null
    },
    reducers: {
        addUser: (state,action) => {
            state.userInfo = action.payload;
        },
        setUserLocation: (state,action) => {
            state.location = action.payload;
        },
        setAccessToken: (state,action) => {
            state.accessToken = action.payload;
        }
    }
});

export const { addUser, setUserLocation, setAccessToken } = userSlice.actions;
export default userSlice.reducer;