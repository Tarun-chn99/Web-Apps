import { createSlice } from '@reduxjs/toolkit';
import { LIVE_COUNT } from '../../utils/constants';

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state,action) => {
            if(state.messages.length >= 5)    state.messages.splice(LIVE_COUNT,1);
            state.messages.unshift(action.payload);
        }
    }
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;