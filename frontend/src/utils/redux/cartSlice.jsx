import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: JSON.parse(localStorage.getItem("cart")) || []
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload);
            localStorage.setItem('cart',JSON.stringify(state.items));
        },
        removeItem: (state, action) => {
            const itemIdToRemove = action.payload;
            state.items = state.items.filter(item => item.id !== itemIdToRemove);
            localStorage.setItem('cart',JSON.stringify(state.items));
        },
        clearCart: (state) => {
            state.items = [];
            localStorage.setItem('cart',JSON.stringify(state.items));
        }
    }
});

export const { addItems, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
