import {createSlice} from "@reduxjs/toolkit";
const bagitemSlice=createSlice({
    name:"bagitem",
    initialState:[],
    reducers: {
        addToBag: (state, action) => {
          state.push(action.payload);
        },
        removeFromBag: (state, action) => {
          return state.filter(itemId => itemId !== action.payload);
        },
      }
})
export const bagitemAction= bagitemSlice.actions;
export default  bagitemSlice;


