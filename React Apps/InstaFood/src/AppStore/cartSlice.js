import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        
        cartData: {

            cartMeta:{
                cartId: null,
                user:{},
                delivery: {},
            },
            restaurantData: {
                id: null,
                name: null,
                imgId: null,
                items: []
            },
            tempItemInfo: null
        },

        cartResetPopup: false,
    },
    reducers: {
        addItem: (state,action) => {

            if(state.cartData.restaurantData.id === null){
                state.cartData.restaurantData.id = action.payload.resInfo.id;
                state.cartData.restaurantData.name = action.payload.resInfo.name;
                state.cartData.restaurantData.imgId = action.payload.resInfo.cloudinaryImageId;
            }
            if(state.cartData.restaurantData.id === action.payload.resInfo.id)
            state.cartData.restaurantData.items.push(action.payload.itemInfo);       
            else{
                state.cartResetPopup = true;     
                state.cartData.tempItemInfo = action.payload;
            }
        },
        removeItem: (state) => {
            state.cartData.restaurantData.items.pop();
        },
        clearCart: (state) => {
            state.cartData.restaurantData.items.length = 0;     //  []
            state.cartData.restaurantData.id = null;
            state.cartData.restaurantData.name = null;
            state.cartData.restaurantData.imgId = null;
        },
        hideCartResetPopup: (state) => {
            state.cartResetPopup = false;
        },
        clearTempItemInfo: (state) => {
            state.cartData.tempItemInfo = null;
        }
    }
});


export const {addItem,removeItem,clearCart,hideCartResetPopup} = cartSlice.actions;
export default cartSlice.reducer;
