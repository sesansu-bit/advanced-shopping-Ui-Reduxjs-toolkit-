import {configureStore} from "@reduxjs/toolkit";
import featureitemSlice from "./feature.js";
import bagitemSlice from "./bag.js";
import browsingitemSlice from "./browsing.js";
import uniqueitemSlice from "./unique.js";
import itemsSlice from "./items.js";
import houseitemSlice from "./house.js";
import menitemSlice from "./men.js";
import sportsitemSlice from "./sports.js";
import beautyitemSlice from "./beauty.js";
import womenitemSlice from "./women.js";
import wishlistitemSlice from "./wishlist.js";
import luggageitemSlice from "./luggage.js";
import electronicsitemSlice from "./electronics.js";
const sypreenstore= configureStore({
reducer:{
     items:itemsSlice.reducer,
       browsingitem:browsingitemSlice.reducer,
       featureitem:featureitemSlice.reducer,
       uniqueitem: uniqueitemSlice.reducer,
       menitem: menitemSlice.reducer,
       houseitem: houseitemSlice.reducer,
       womenitem: womenitemSlice.reducer,
       wishlistitem: wishlistitemSlice.reducer,
       sportsitem: sportsitemSlice.reducer,
       luggageitem: luggageitemSlice.reducer,
       electronicsitem: electronicsitemSlice.reducer,
       beautyitem: beautyitemSlice.reducer,
       bagitem: bagitemSlice.reducer,
    }
})
export default sypreenstore;