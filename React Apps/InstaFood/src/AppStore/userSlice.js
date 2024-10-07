import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: null,
        location: null,
        authToken: null
    },
    reducers: {
        addUser: (state,action) => {
            state.userInfo = action.payload;
        },
        setUserLocation: (state,action) => {
            state.location = action.payload;
        },
        setAuthToken: (state,action) => {
            state.authToken = action.payload;
        },
        removeUser: (state) => {
            state.userInfo = state.location = state.authToken = null;
        }
    }
});

export const { addUser, setUserLocation, setAuthToken,removeUser } = userSlice.actions;
export default userSlice.reducer;