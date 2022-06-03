import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0 },
    reducers: {
        increment(state) {
            state.counter = state.counter + 1
        },
        decrement(state) {
            state.counter = state.counter - 1
        },
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;