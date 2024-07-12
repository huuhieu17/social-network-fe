import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: "counter",
    initialState: {
        number: 1
    },
    reducers: {
        increase: (state) => {
            state.number += 1;
        }
    }
})

export const { increase } = CounterSlice.actions;
export default CounterSlice.reducer;