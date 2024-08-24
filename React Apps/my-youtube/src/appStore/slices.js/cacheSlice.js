import { createSlice } from '@reduxjs/toolkit';

const cacheSlice = createSlice({
    name: 'cache',
    initialState: {
        suggestions: {}
    },
    reducers: {
        cacheSuggestions: (state,action) => {
            const data = action.payload;
            state.suggestions = {...state?.suggestions,...data} ;
        }
    }
});

export const { cacheSuggestions,getCachedSuggestions } = cacheSlice.actions;
export default cacheSlice.reducer;


// LRU implement