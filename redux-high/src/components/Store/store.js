import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'Cart',
    initialState: { showCart: true },
    reducers: {
        show(state) {
            state.showCart = !state.showCart
        },
    }
});

const store = configureStore({
    reducer: cartSlice.reducer
});

export const cartActions = cartSlice.actions;
export default store;