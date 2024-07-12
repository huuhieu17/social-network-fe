import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/counterSlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
    reducer: {
        counter: CounterSlice,
        product: productSlice
    }
})

export default store;