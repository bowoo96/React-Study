import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counter';
import cartReducer from './cart';

const store = configureStore({
    reducer: {
        cart : cartReducer,
        counter : counterReducer,
    }
});

export default store;