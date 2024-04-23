import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    },
});

export type AppDispatch = typeof store.dispatch;

// test for type
// const name = "Max";
// type N = typeof name;
