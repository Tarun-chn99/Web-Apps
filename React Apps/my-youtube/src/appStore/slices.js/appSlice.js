import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isSidePanelOpen: true,
        activeFilterButton: null
    },
    reducers: {
        toggleMenu: (state) => {
            state.isSidePanelOpen =  !(state.isSidePanelOpen);
        },
        setActiveFilterButton: (state,action) => {
            state.activeFilterButton = action.payload;
        },
        closeSidePanel: (state) => {
            state.isSidePanelOpen = false;
        }
    }
});

export const {toggleMenu,setActiveFilterButton,closeSidePanel} = appSlice.actions;
export default appSlice.reducer;