import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { showCart: true, cartItem: [] },
    reducers: {
        show(state) {
            state.showCart = !state.showCart
        },
        addCartItem(state,action) {
            state.cartItem.push(action.payload)
        },
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;