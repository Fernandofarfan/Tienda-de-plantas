import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
    cartItems: [],
    totalItemsCount: 0,  // Se agrega estado para cantidad total
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const existingItem = state.cartItems.find(item => item.name === action.payload.name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
            state.totalItemsCount += 1;
        },
        removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.name !== action.payload.name);
            state.totalItemsCount -= action.payload.quantity;
        },
        clearCart(state) {
            state.cartItems = [];
            state.totalItemsCount = 0;
        }
    },
});

const persistConfig = {
    key: 'cart',
    storage,
};

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
export default persistReducer(persistConfig, cartSlice.reducer);
