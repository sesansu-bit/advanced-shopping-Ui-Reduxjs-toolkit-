import {createSlice} from "@reduxjs/toolkit";
const wishlistitemSlice=createSlice({
    name:"wishlistitem",
    initialState:[],
    reducers: {
        addToWishlist: (state, action) => {
          state.push(action.payload);
        },
        removeFromWishlist: (state, action) => {
          return state.filter(itemId => itemId !== action.payload);
        },
      }
})
export const wishlistitemAction= wishlistitemSlice.actions;
export default  wishlistitemSlice;